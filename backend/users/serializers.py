from djoser.serializers import UserCreateSerializer
from .models import User

User = User();
class UserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = '__all__'