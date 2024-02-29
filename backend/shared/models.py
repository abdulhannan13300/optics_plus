
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django_tenants.models import TenantMixin, DomainMixin

from accounts.models import User

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
    


class Client(TenantMixin):    
    name = models.CharField(max_length=255)
    # contact_person = models.CharField(max_length=255)
    # address = models.TextField()
    # country = models.CharField(max_length=255)
    # state = models.CharField(max_length=255)
    # city = models.CharField(max_length=255)
    # pincode = models.CharField(max_length=6)
    # contact_number = models.CharField(max_length=15)
    # alternate_number = models.CharField(max_length=15)
    # employee_limit = models.PositiveIntegerField()
    # is_active = models.BooleanField(default=False,blank=True)
    # expiry_date = models.DateField()
    # package = models.ForeignKey(Package, on_delete=models.CASCADE)
    # gst_id = models.CharField(max_length=20)
    # pan_id = models.CharField(max_length=20)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tenant_admin', null=True, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)


    # default true, schema will be automatically created and synced when it is saved
    auto_create_schema = True


    def __str__(self):
        return self.name
    
    REQUIRED_FIELDS = ['email'] 


class ClientDomain(DomainMixin):
    pass



   


