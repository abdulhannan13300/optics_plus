from django.db import models
from django.conf import settings
from core.models import BaseEntity
from optics.models import Shop
from django_multitenant.fields import *
from django_multitenant.models import *
# Create your models here.
class ShopCustomer(TenantModel, BaseEntity):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=255)
    address = models.TextField()
    # city = models.ForeignKey(City, on_delete=models.CASCADE)
    # state = models.ForeignKey(State, on_delete=models.CASCADE)
    # country = models.ForeignKey(Country, on_delete=models.CASCADE)
    # pincode = models.CharField(max_length=6)
    # contact_number = models.CharField(max_length=15, unique=True)
    # alternate_number = models.CharField(max_length=15)
    # age = models.PositiveIntegerField()
    # gender = models.CharField(max_length=10)
    # dob = models.DateField()
    # ... rest of the fields remain the same ...

    # Specify the tenant_id
    objects = TenantManager()
    
    class TenantMeta:
        tenant_field_name = 'shop_id'
        
    class Meta:
        unique_together = ["id", "shop_id"]