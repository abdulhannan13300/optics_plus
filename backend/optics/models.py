
import uuid
from django.db import models
from django.conf import settings
from django_multitenant.fields import *
from django_multitenant.models import *

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
    


class Shop(TenantModel):
    # id = models.BigIntegerField(primary_key=True, default=models.BigAutoField(), editable=False)  
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='shop_admin', null=True, blank=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    
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
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tenant_admin', null=True, blank=True)

    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now_add=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # modified_at = models.DateTimeField(auto_now=True)
    class TenantMeta:
        tenant_field_name = 'id'

    # default true, schema will be automatically created and synced when it is saved
    # auto_create_schema = True


    def __str__(self):
        return self.name
    
    # REQUIRED_FIELDS = ['email'] 



class ShopCustomer(TenantModel):
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
    class TenantMeta:
        tenant_field_name = 'shop_id'
        
    class Meta:
        unique_together = ["id", "shop_id"]

class CustomerPrescription(TenantModel):
    # tenant_id = 'shop_id'
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
    class TenantMeta:
        tenant_field_name = 'shop_id'
        
    class Meta:
        unique_together = ["id", "shop_id"]
        
class OrderDetails(TenantModel):
    # tenant_id = 'shop_id'
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    customer = TenantForeignKey(ShopCustomer, on_delete=models.CASCADE)
    prescription = TenantForeignKey(CustomerPrescription, on_delete=models.CASCADE)
    date = models.DateField()    
    frame_type = models.CharField(max_length=255)
    frame_details = models.TextField()
    frame_price = models.DecimalField(max_digits=10, decimal_places=2)
    glass_detail = models.TextField()
    glass_price = models.DecimalField(max_digits=10, decimal_places=2)
    contact_lens_detail = models.TextField()
    contact_lens_price = models.DecimalField(max_digits=10, decimal_places=2)
    remarks = models.TextField()
    extra_charges = models.DecimalField(max_digits=10, decimal_places=2)
    advance_amount = models.DecimalField(max_digits=10, decimal_places=2)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    pending_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=20)
    
    class TenantMeta:
        tenant_field_name = 'shop_id'  
    class Meta:
        unique_together = ["id", "shop_id"]

class ShopTaxDetails(TenantModel):
    # tenant_id = 'shop_id'
    tax_name = models.CharField(max_length=255)
    tax_rate = models.DecimalField(max_digits=5, decimal_places=2)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    
    class TenantMeta:
        tenant_field_name = 'shop_id'
    class Meta:
        unique_together = ["id", "shop_id"]

   


