from rest_framework import serializers
from .models import *
        
class CustomerPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerPrescription
        fields = '__all__'
        
