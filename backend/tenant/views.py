# tenants/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404,HttpResponse
from .models import ShopCustomer, CustomerPrescription, OrderDetails
from .serializers import ShopCustomerSerializer, CustomerPrescriptionSerializer, OrderDetailsSerializer


def index(request):
    return HttpResponse(f'<h1> {request.tenant} Index </h1>')
 
class ShopCustomerList(APIView):

    def get(self, request, format=None):
        customers = ShopCustomer.objects.all()
        serializer = ShopCustomerSerializer(customers, many=True)
        return Response(serializer.data)        

    def post(self, request, format=None):
        serializer = ShopCustomerSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ShopCustomerDetail(APIView):
    """
    Retrieve, update or delete a ShopCustomer instance.
    """

    def get_object(self, pk):
        try:
                return  ShopCustomer.objects.get(pk=pk)
        except ShopCustomer.DoesNotExist:
                raise Http404
    
    def get(self, request, pk, format=None):
        customer = self.get_object(pk)
        serializer = ShopCustomerSerializer(customer)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        customer = self.get_object(pk)
        serializer = ShopCustomerSerializer(customer, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        customer = self.get_object(pk)
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CustomerPrescriptionList(APIView):

    def get(self, request, customer_id, format=None):
        prescriptions = CustomerPrescription.objects.filter(customer_id=customer_id)
        serializer = CustomerPrescriptionSerializer(prescriptions, many=True)
        return Response(serializer.data)

    def post(self, request, customer_id, format=None):
        request.data['customer'] = customer_id  # Associate prescription with the customer
        serializer = CustomerPrescriptionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomerPrescriptionDetail(APIView):

    def get_object(self, pk):
        try:
            return CustomerPrescription.objects.get(pk=pk)
        except CustomerPrescription.DoesNotExist:
            raise Http404

    def get(self, request, customer_id, pk, format=None):
        prescription = self.get_object(pk)
        serializer = CustomerPrescriptionSerializer(prescription)
        return Response(serializer.data)

    def put(self, request, customer_id, pk, format=None):
        prescription = self.get_object(pk)
        serializer = CustomerPrescriptionSerializer(prescription, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, customer_id, pk, format=None):
        prescription = self.get_object(pk)
        prescription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderDetailsList(APIView):

    def get(self, request, customer_id, format=None):
        orders = OrderDetails.objects.filter(customer_id=customer_id)
        serializer = OrderDetailsSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request, customer_id, format=None):
        request.data['customer'] = customer_id  # Associate order detail with the customer
        serializer = OrderDetailsSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderDetailsDetail(APIView):

    def get_object(self, pk):
        try:
            return OrderDetails.objects.get(pk=pk)
        except OrderDetails.DoesNotExist:
            raise Http404

    def get(self, request, customer_id, pk, format=None):
        order_detail = self.get_object(pk)
        serializer = OrderDetailsSerializer(order_detail)
        return Response(serializer.data)

    def put(self, request, customer_id, pk, format=None):
        order_detail = self.get_object(pk)
        serializer = OrderDetailsSerializer(order_detail, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, customer_id, pk, format=None):
        order_detail = self.get_object(pk)
        order_detail.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




















# from django.shortcuts import render, redirect
# from tenant.forms import TenantSignupForm
# def signup_view(request):
#     if request.method == 'POST':
#         form = TenantSignupForm(request.POST)
#         if form.is_valid():
#             client = form.save()
#             # Redirect to success page or login page
#             return redirect('login')
#     else:
#         form = TenantSignupForm()

#     return render(request, 'signup.html', {'form': form})




