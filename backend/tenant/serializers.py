from rest_framework import serializers
from .models import *

class ShopCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopCustomer
        # fields = ['id', 'name', 'description']
        fields = '__all__'

class CustomerPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerPrescription
        # fields = ['id', 'name', 'description']
        fields = '__all__'
    

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        # fields = ['id', 'name', 'description']
        fields = '__all__'