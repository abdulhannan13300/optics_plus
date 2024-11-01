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
    #    else:
    #        return Response({"detail": "No shop found."}, status=status.HTTP_404_NOT_FOUND)

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



