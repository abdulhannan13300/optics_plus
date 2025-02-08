
from django.db import models
from django.conf import settings
from django_multitenant.fields import *
from django_multitenant.models import *

from core.models import BaseEntity

# from django.contrib.auth.models import User


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
    


class Shop(TenantModel, BaseEntity):
    # id = models.BigIntegerField(primary_key=True, default=models.BigAutoField(), editable=False)  
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='shop_admin', null=True, blank=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    branch_identifier = models.CharField(max_length=50, blank=True, null=True)  # Optional for branches
    name = models.CharField(max_length=255)
    # contact_person = models.CharField(max_length=255)
    # address = models.TextField()
    # country = models.CharField(max_length=255)
    # state = models.CharField(max_length=255)
    # city = models.CharField(max_length=255)
    # pincode = models.CharField(max_length=6)
    contact_number = models.CharField(max_length=15)
    # alternate_number = models.CharField(max_length=15)
    # employee_limit = models.PositiveIntegerField()
    # expiry_date = models.DateField()
    # package = models.ForeignKey(Package, on_delete=models.CASCADE)
    # gst_id = models.CharField(max_length=20)
    # pan_id = models.CharField(max_length=20)

    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now_add=True)

    
    objects = TenantManager()
    
    class TenantMeta:
        tenant_field_name = 'id'

    # default true, schema will be automatically created and synced when it is saved
    # auto_create_schema = True


    def __str__(self):
        return self.name
    
    # REQUIRED_FIELDS = ['email'] 



class ShopTaxDetails(TenantModel, BaseEntity):
    # tenant_id = 'shop_id'
    tax_name = models.CharField(max_length=255)
    tax_rate = models.DecimalField(max_digits=5, decimal_places=2)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    
    class TenantMeta:
        tenant_field_name = 'shop_id'
    class Meta:
        unique_together = ["id", "shop_id"]

   


