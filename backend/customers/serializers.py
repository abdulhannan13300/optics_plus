from rest_framework import serializers
from .models import *

class ShopCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopCustomer;
        fields = '__all__'