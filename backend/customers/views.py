from rest_framework import status
from rest_framework.response import Response
from django.http import Http404,HttpResponse

from .models import ShopCustomer
from .serializers import ShopCustomerSerializer
from rest_framework import viewsets, status
from django_multitenant.views import TenantModelViewSet
# Create your views here.


class ShopCustomerViewSet(TenantModelViewSet):
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