from rest_framework import serializers
from .models import *
class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop;
        fields = '__all__'
class ShopCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopCustomer;
        fields = '__all__'
        
class CustomerPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerPrescription
        fields = '__all__'
        
class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = '__all__'