from rest_framework import status
from rest_framework.response import Response
from django.http import Http404,HttpResponse

from .models import OrderDetails
from .serializers import OrderDetailsSerializer
from rest_framework import viewsets, status
from django_multitenant.views import TenantModelViewSet

# Create your views here.
class OrderDetailsViewSet(TenantModelViewSet):
    # queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
    # permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        # Automatically filter customers by the current shop (tenant)
        return OrderDetails.objects.all() 
    
    def list(self, request, customer_id, *args, **kwargs):
        orders = self.get_queryset().filter(customer_id=customer_id)
        serializer = self.get_serializer(orders, many=True)
        return Response(serializer.data)

    def create(self, request, customer_id, *args, **kwargs):
        request.data['shop'] = request.shop.id  # This should be set by the middleware
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
