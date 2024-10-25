from rest_framework import status
from rest_framework.response import Response
from django.http import Http404,HttpResponse

from .models import CustomerPrescription
from .serializers import CustomerPrescriptionSerializer
from rest_framework import viewsets, status
from django_multitenant.views import TenantModelViewSet
# Create your views here.


class CustomerPrescriptionViewSet(TenantModelViewSet):
    queryset = CustomerPrescription.objects.all()
    serializer_class = CustomerPrescriptionSerializer
    # permission_classes = [permissions.IsAuthenticated] 
    def get_queryset(self):
        # Automatically filter customers by the current shop (tenant)
        return CustomerPrescription.objects.all()  
    
    def list(self, request, customer_id, *args, **kwargs):
        prescriptions = self.get_queryset().filter(customer_id=customer_id)
        # prescriptions = self.get_queryset()
        serializer = self.get_serializer(prescriptions, many=True)
        return Response(serializer.data)

    def create(self, request, customer_id, *args, **kwargs):
        request.data['shop'] = request.shop.id  # This should be set by the middleware
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
