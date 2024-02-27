from djoser.serializers import UserCreateSerializer
# from rest_framework import serializers
# from shared.models import ShopEmployee,Shop,ShopDomain
from accounts.models import User

User = User()
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = { 'id', 'first_name', 'last_name','username','email','password', 'designation', 'shop'}
        fields =  '__all__'


# class ShopSerializer(serializers.ModelSerializer):
#     user = serializers.PrimaryKeyRelatedField(read_only=True)

#     class Meta:
#         model = Shop
#         fields = ('schema', 'owner')  # Add 'user' field

#     def create(self, validated_data):
#         validated_data['owner'] = self.context['request'].user  
#         try:
#             tenant = Shop.objects.create(**validated_data)
#             tenant.create_schema()
#             return tenant
#         except Exception as e:
#             raise serializers.ValidationError(str(e))



# class ShopDomainSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShopDomain
#         fields = '__all__'

# class CreateShopSerializer(serializers.ModelSerializer):
#     domain = ShopDomainSerializer()

#     class Meta:
#         model = Shop
#         fields = '__all__'

#     def create(self, validated_data):
#         domain_data = validated_data.pop('domain')
#         domain = ShopDomain.objects.create(**domain_data)
#         shop = Shop.objects.create(domain=domain, **validated_data)
#         return shop
    
    