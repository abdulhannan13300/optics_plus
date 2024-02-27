
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django_tenants.models import TenantMixin, DomainMixin

from accounts.models import User, UserManager

# shared/models.py

class Country(models.Model):
    country_name = models.CharField(max_length=255)

class State(models.Model):
    state_name = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

class City(models.Model):
    city_name = models.CharField(max_length=255)
    state = models.ForeignKey(State, on_delete=models.CASCADE)

class Currency(models.Model):
    currency_name = models.CharField(max_length=255)
    currency_code = models.CharField(max_length=10)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

class Package(models.Model):
    type = models.CharField(max_length=255)
    employee_limit = models.PositiveIntegerField()
    


class Shop(TenantMixin):    
    # name = models.CharField(max_length=255)
    # subdomain = models.CharField(max_length=50, unique=True)
    # contact_person = models.CharField(max_length=255)
    # address = models.TextField()
    # country = models.CharField(max_length=255)
    # state = models.CharField(max_length=255)
    # city = models.CharField(max_length=255)
    # pincode = models.CharField(max_length=6)
    # contact_number = models.CharField(max_length=15)
    # alternate_number = models.CharField(max_length=15)
    # email = models.EmailField(unique=True)  # Primary Key
    # employee_limit = models.PositiveIntegerField()
    # is_active = models.BooleanField(default=False,blank=True)
    # expiry_date = models.DateField()
    # package = models.ForeignKey(Package, on_delete=models.CASCADE)
    # gst_id = models.CharField(max_length=20)
    # pan_id = models.CharField(max_length=20)
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tenant_admin', null=True, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)


    # default true, schema will be automatically created and synced when it is saved
    auto_create_schema = True
    
    # def create_tenant_with_owner(self, owner_data, **tenant_data):
    #     owner = User().objects.create_user(**owner_data)
    #     tenant = self.create(**tenant_data, owner=owner)
    #     return tenant


    def __str__(self):
        return self.name
    
    REQUIRED_FIELDS = ['email']
    
    # def save(self, *args, **kwargs):
    #     if not self.domain:
    #         self.domain = self.name.lower().replace(" ", "-")
    #     super().save(*args, **kwargs)



class ShopDomain(DomainMixin):
    pass


class ShopEmployee(User):
    # first_name = models.CharField(max_length=150)
    # last_name = models.CharField(max_length=150)
    # email = models.EmailField(unique=True)
    # username = models.CharField(max_length=50, unique=True)
    # contact_number = models.CharField(max_length=12, blank=True)
    
    
    # is_admin = models.BooleanField(default=False)
    # is_superuser = models.BooleanField(default=False)
    # is_staff = models.BooleanField(default=False)
    # is_active = models.BooleanField(default=False)
    
    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now_add=True)
    # modified_at = models.DateTimeField(auto_now=True)
    # created_at = models.DateTimeField(auto_now_add=True)

    designation = models.CharField(max_length=20, blank=True)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, null=True, blank=True)
    
    # USERNAME_FIELD = ['email']


    objects = UserManager()

    # USERNAME_FIELD = 'email'

    # REQUIRED_FIELDS = [ 'designation']


    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        if not self.shop:
            raise ValueError('Shop must be set')
        super().save(*args, **kwargs)

   


