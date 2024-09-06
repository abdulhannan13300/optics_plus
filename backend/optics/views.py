# tenants/views.py
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404,HttpResponse

from .models import Shop,ShopCustomer, CustomerPrescription, OrderDetails
from .serializers import ShopCustomerSerializer, CustomerPrescriptionSerializer, OrderDetailsSerializer, ShopSerializer
from rest_framework import viewsets, status
from django_multitenant import views
from django_multitenant.views import TenantModelViewSet

def index(request):
    return HttpResponse(f'<h1> Index </h1>')

def tenant_func(request):
    return Shop.objects.filter(owner=request.user).first()

views.get_tenant = tenant_func 

class ShopViewSet(viewsets.ModelViewSet):
    serializer_class = ShopSerializer

    def get_queryset(self):
        # Filter shops to return only those owned by the logged-in user
        return Shop.objects.filter(owner=self.request.user)

    def list(self, request, *args, **kwargs):
        shops = self.get_queryset()
        serializer = self.get_serializer(shops, many=True)
        return Response(serializer.data)

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



class ShopCustomerViewSet(viewsets.ModelViewSet):
    serializer_class = ShopCustomerSerializer

    def get_queryset(self):
        # Automatically filter customers by the current shop (tenant)
        return ShopCustomer.objects.all()  # No need to filter by shop; it's done automatically

    def list(self, request, *args, **kwargs):
        customers = self.get_queryset()
        serializer = self.get_serializer(customers, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        # Ensure the user is authenticated
        if not request.user.is_authenticated:
            return Response({"error": "You must be logged in to create a customer."}, status=status.HTTP_403_FORBIDDEN)

        # Automatically associate the customer with the current shop
        request.data['shop'] = request.shop.id  # This should be set by the middleware
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None, *args, **kwargs):
        customer = self.get_object()
        serializer = self.get_serializer(customer)
        return Response(serializer.data)

    def update(self, request, pk=None, *args, **kwargs):
        customer = self.get_object()
        serializer = self.get_serializer(customer, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, pk=None, *args, **kwargs):
        customer = self.get_object()
        self.perform_destroy(customer)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CustomerPrescriptionViewSet(TenantModelViewSet):
    queryset = CustomerPrescription.objects.all()
    serializer_class = CustomerPrescriptionSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def list(self, request, customer_id, *args, **kwargs):
        prescriptions = self.get_queryset().filter(customer_id=customer_id)
        serializer = self.get_serializer(prescriptions, many=True)
        return Response(serializer.data)

    def create(self, request, customer_id, *args, **kwargs):
        request.data['customer'] = customer_id  # Associate prescription with the customer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, customer_id, pk=None, *args, **kwargs):
        prescription = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not prescription:
            raise Http404
        serializer = self.get_serializer(prescription)
        return Response(serializer.data)

    def update(self, request, customer_id, pk=None, *args, **kwargs):
        prescription = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not prescription:
            raise Http404
        serializer = self.get_serializer(prescription, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, customer_id, pk=None, *args, **kwargs):
        prescription = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not prescription:
            raise Http404
        self.perform_destroy(prescription)
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderDetailsViewSet(TenantModelViewSet):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def list(self, request, customer_id, *args, **kwargs):
        orders = self.get_queryset().filter(customer_id=customer_id)
        serializer = self.get_serializer(orders, many=True)
        return Response(serializer.data)

    def create(self, request, customer_id, *args, **kwargs):
        request.data['customer'] = customer_id  # Associate order detail with the customer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, customer_id, pk=None, *args, **kwargs):
        order_detail = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not order_detail:
            raise Http404
        serializer = self.get_serializer(order_detail)
        return Response(serializer.data)

    def update(self, request, customer_id, pk=None, *args, **kwargs):
        order_detail = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not order_detail:
            raise Http404
        serializer = self.get_serializer(order_detail, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, customer_id, pk=None, *args, **kwargs):
        order_detail = self.get_queryset().filter(customer_id=customer_id, pk=pk).first()
        if not order_detail:
            raise Http404
        self.perform_destroy(order_detail)
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