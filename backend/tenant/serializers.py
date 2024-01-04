from rest_framework import serializers
from .models import ShopCustomer

class ShopCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopCustomer
        # fields = ['id', 'name', 'description']
        fields = '__all__'