from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
# from shared.models import ShopEmployee,Shop,ShopDomain
from accounts.models import User
from .models import Client,ClientDomain

User = User()
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = { 'id', 'first_name', 'last_name','username','email','password', 'designation', 'shop'}
        fields =  '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class DomainSerializer(serializers.ModelSerializer):
    tenant = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())
    class Meta:
        model = ClientDomain
        fields = ("domain", "tenant", "is_primary")



    
    