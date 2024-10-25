from django.db import models
from django.conf import settings
from backend.core.models import BaseEntity
from optics.models import Shop
from customers.models import ShopCustomer
from django_multitenant.fields import *
from django_multitenant.models import TenantModel, TenantManager
# Create your models here.

class CustomerPrescription(TenantModel, BaseEntity):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    customer = TenantForeignKey(ShopCustomer, on_delete=models.CASCADE)
    
    date = models.DateField()
    reference_by = models.CharField(max_length=255)
    # od_r_sph = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_axis = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_va = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_add = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_vn = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_ipd = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_sph = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_axis = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_va = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_add = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_vn = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_ipd = models.DecimalField(max_digits=5, decimal_places=2)
    
    objects = TenantManager()
    
    class TenantMeta:
        tenant_field_name = 'shop_id'
        
    class Meta:
        unique_together = ["id", "shop_id"]