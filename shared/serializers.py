from djoser.serializers import UserCreateSerializer
from shared.models import ShopEmployee
User = ShopEmployee()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = { 'id', 'first_name', 'last_name','username','email','password', 'designation', 'shop'}
        fields =  '__all__'
