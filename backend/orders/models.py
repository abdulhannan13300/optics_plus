from django.db import models
from django.conf import settings
from backend.core.models import BaseEntity
from optics.models import Shop
from customers.models import ShopCustomer
from customer_prescriptions.models import CustomerPrescription
from django_multitenant.fields import *
from django_multitenant.models import *
# Create your models here.
class OrderDetails(TenantModel, BaseEntity):
    # tenant_id = 'shop_id'
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    customer = TenantForeignKey(ShopCustomer, on_delete=models.CASCADE)
    prescription = TenantForeignKey(CustomerPrescription, on_delete=models.CASCADE)
    date = models.DateField()    
    # frame_type = models.CharField(max_length=255)
    # frame_details = models.TextField()
    # frame_price = models.DecimalField(max_digits=10, decimal_places=2)
    # glass_detail = models.TextField()
    # glass_price = models.DecimalField(max_digits=10, decimal_places=2)
    # contact_lens_detail = models.TextField()
    # contact_lens_price = models.DecimalField(max_digits=10, decimal_places=2)
    # remarks = models.TextField()
    # extra_charges = models.DecimalField(max_digits=10, decimal_places=2)
    # advance_amount = models.DecimalField(max_digits=10, decimal_places=2)
    # total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    # pending_amount = models.DecimalField(max_digits=10, decimal_places=2)
    # delivery_status = models.CharField(max_length=20)
    
    objects = TenantManager()
    
    
    class TenantMeta:
        tenant_field_name = 'shop_id'  
    class Meta:
        unique_together = ["id", "shop_id"]