# Create your models here.
# tenants/models.py

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django_tenants.models import TenantMixin, DomainMixin

from accounts.models import User, UserManager
from shared.models import  Shop



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




# tenants/models.py

class ShopCustomer(models.Model):
    customer_name = models.CharField(max_length=255)
    address = models.TextField()
    # city = models.ForeignKey(City, on_delete=models.CASCADE)
    # state = models.ForeignKey(State, on_delete=models.CASCADE)
    # country = models.ForeignKey(Country, on_delete=models.CASCADE)
    pincode = models.CharField(max_length=6)
    contact_number = models.CharField(max_length=15, unique=True)
    alternate_number = models.CharField(max_length=15)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    Employee_of = models.ForeignKey(Shop, on_delete=models.CASCADE)

class CustomerPrescription(models.Model):
    customer = models.ForeignKey(ShopCustomer, on_delete=models.CASCADE)
    date = models.DateField()
    reference_by = models.CharField(max_length=255)
    frame_type = models.CharField(max_length=255)
    frame_details = models.TextField()
    frame_price = models.DecimalField(max_digits=10, decimal_places=2)
    glass_detail = models.TextField()
    glass_price = models.DecimalField(max_digits=10, decimal_places=2)
    contact_lens_detail = models.TextField()
    contact_lens_price = models.DecimalField(max_digits=10, decimal_places=2)
    remarks = models.TextField()
    od_r_sph = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_axis = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_va = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_add = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_vn = models.DecimalField(max_digits=5, decimal_places=2)
    od_r_ipd = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_sph = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_axis = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_va = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_add = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_vn = models.DecimalField(max_digits=5, decimal_places=2)
    os_l_ipd = models.DecimalField(max_digits=5, decimal_places=2)

class OrderDetails(models.Model):
    # client = models.ForeignKey(Shop, on_delete=models.CASCADE)
    customer = models.ForeignKey(ShopCustomer, on_delete=models.CASCADE)
    date = models.DateField()
    prescription = models.ForeignKey(CustomerPrescription, on_delete=models.CASCADE)
    extra_charges = models.DecimalField(max_digits=10, decimal_places=2)
    advance_amount = models.DecimalField(max_digits=10, decimal_places=2)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    pending_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=20)

class ShopTaxDetails(models.Model):
    tax_name = models.CharField(max_length=255)
    tax_rate = models.DecimalField(max_digits=5, decimal_places=2)
    client = models.ForeignKey(Shop, on_delete=models.CASCADE)
