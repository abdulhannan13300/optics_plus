# tenants/views.py

from django.shortcuts import render
from django.http import HttpResponse

from .models import ShopCustomer
from .serializers import ShopCustomerSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# from . models import Employee

def index(request):
    return HttpResponse(f'<h1> {request.tenant} index</h1>')



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




