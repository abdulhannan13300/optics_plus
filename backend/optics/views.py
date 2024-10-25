# tenants/views.py
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404,HttpResponse

from .models import Shop
from .serializers import  ShopSerializer
from rest_framework import viewsets, status
from django_multitenant import views
from django_multitenant.views import TenantModelViewSet

def index(request):
    return HttpResponse(f'<h1> Index </h1>')

def tenant_func(request):
    return Shop.objects.filter(owner=request.user).first()

views.get_tenant = tenant_func 

class ShopViewSet(TenantModelViewSet):
    serializer_class = ShopSerializer

    def get_queryset(self):
        # Filter shops to return only those owned by the logged-in user
        return Shop.objects.filter(owner=self.request.user)

    def list(self, request, *args, **kwargs):
        # Get the first shop for the current user
        shop = self.get_queryset().first()
        if shop is not None:
            serializer = self.get_serializer(shop)
            return Response(serializer.data)
        else:
            return Response({"detail": "No shop found."}, status=status.HTTP_404_NOT_FOUND)

    def create(self, request, *args, **kwargs):
        # Set the owner of the shop to the logged-in user
        request.data['owner'] = request.user.id  # Associate the shop with the current user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None, *args, **kwargs):
        shop = self.get_object()
        serializer = self.get_serializer(shop)
        return Response(serializer.data)

    def update(self, request, pk=None, *args, **kwargs):
        shop = self.get_object()
        serializer = self.get_serializer(shop, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, pk=None, *args, **kwargs):
        shop = self.get_object()
        self.perform_destroy(shop)
        return Response(status=status.HTTP_204_NO_CONTENT)



from django.shortcuts import render, redirect
from django_multitenant.utils import set_current_tenant

def select_shop(request):
    if request.method == 'POST':
        # Get the selected shop ID from the form
        selected_shop_id = request.POST.get('shop')
        
        # Fetch the selected shop object
        selected_shop = request.user.shop_admin.get(id=selected_shop_id)
        
        # Set the selected shop as the current tenant
        set_current_tenant(selected_shop)
        
        # Store the selected shop ID in the session
        request.session['current_shop'] = selected_shop_id
        
        # Redirect to a desired page after selecting the shop
        return redirect('dashboard')
    else:
        # Get the list of shops associated with the user
        shops = request.user.shop_admin.all()
        
        # Render the template with the list of shops
        return render(request, 'select_shop.html', {'shops': shops})