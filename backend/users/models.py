from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django_multitenant.fields import *
from django_multitenant.models import *
from optics.models import Shop
    
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        user = self.model(
            email=self.normalize_email(email),
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        return self.create_user(email, password, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):
    # shop = models.ForeignKey('optics.Shop', on_delete=models.CASCADE, null=True, blank=True)
    # shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    # username = models.CharField(max_length=50, unique=True)
    # contact_number = models.CharField(max_length=12, blank=True)
    
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now=True)
    # modified_at = models.DateTimeField(auto_now=True)
    # created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()   
    # Use a CharField for tenant_id instead of a direct foreign key
    
    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['username', 'first_name','last_name']
    REQUIRED_FIELDS = ['first_name','last_name']
    
    # class TenantMeta:
    #     tenant_field_name = 'shop_id'
    # class Meta:
    #     unique_together = ["id", "shop_id"]
        
    def __str__(self):
        return self.email


    # def get_shop(self):
    #     from optics.models import Shop  # Import here to avoid circular import
    #     return Shop.objects.filter(id=self.tenant_id).first()
    
    
# class User(AbstractBaseUser, PermissionsMixin):
#     first_name = models.CharField(max_length=150)
#     last_name = models.CharField(max_length=150)
#     email = models.EmailField(unique=True)
 
#     is_admin = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)
#     is_staff = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)


#     objects = UserManager()   

    
#     USERNAME_FIELD = 'email'
#     # REQUIRED_FIELDS = ['username', 'first_name','last_name']
#     REQUIRED_FIELDS = ['first_name','last_name']
    
        
#     def __str__(self):
#         return self.email