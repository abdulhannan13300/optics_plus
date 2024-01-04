
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django_tenants.models import TenantMixin, DomainMixin

from accounts.models import User
# from shared.managers import ShopManager

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
    # country = models.ForeignKey(Country,  on_delete=models.CASCADE)
    # state = models.ForeignKey(State, on_delete=models.CASCADE)
    # city = models.ForeignKey(City, on_delete=models.CASCADE)
    # pincode = models.CharField(max_length=6)
    # contact_number = models.CharField(max_length=15)
    # alternate_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)  # Primary Key
    # employee_limit = models.PositiveIntegerField()
    is_active = models.BooleanField(default=False,blank=True)
    expiry_date = models.DateField()
    # package = models.ForeignKey(Package, on_delete=models.CASCADE)
    # gst_id = models.CharField(max_length=20)
    # pan_id = models.CharField(max_length=20)
    # owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='tenant_admin', null=True, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    # objects = TenantManager()
    # objects = ShopManager()

    # default true, schema will be automatically created and synced when it is saved
    auto_create_schema = True
    
    # def create_tenant_with_owner(self, owner_data, **tenant_data):
    #     owner = User().objects.create_user(**owner_data)
    #     tenant = self.create(**tenant_data, owner=owner)
    #     return tenant


    def __str__(self):
        return self.name
    
    REQUIRED_FIELDS = ['name', 'email']



class ShopDomain(DomainMixin):
    pass



   

# class Tenant(TenantMixin):
#     name = models.CharField(max_length=100)
#     created_on = models.DateField(auto_now_add=True)

# class Domain(DomainMixin):
#     pass


# class TenantManager(TenantMixin, models.Manager):
#     def create_client_and_admin_user(self, client_name, contact_person, address, city, state, country, pincode,
#                                       contact_number, alternate_number, email_address, employee_limit, is_active,
#                                       expiry_date, package, gst_id, pan_id, admin_email, admin_password):
#         # from .models import User
#         # Create a new tenant (Tenant)
#         client = self.create(name=client_name)
        
#         # Get the User model dynamically
#         User = get_user_model()

#         # Create an admin user for the client
#         admin_user = User(email=admin_email, is_admin=True, is_staff=True)
#         admin_user.set_password(admin_password)
#         admin_user.save(using=self._db)

#         # Assign the admin user to the client
#         client.admin_user = admin_user
#         client.save(using=self._db)

#         # Add other client-specific details
#         client.contact_person = contact_person
#         client.address = address
#         client.city = city
#         client.state = state
#         client.country = country
#         client.pincode = pincode
#         client.contact_number = contact_number
#         client.alternate_number = alternate_number
#         client.email_address = email_address
#         # client.employee_limit = employee_limit
#         client.is_active = is_active
#         client.expiry_date = expiry_date
#         client.package = package
#         client.gst_id = gst_id
#         client.pan_id = pan_id
#         client.save(using=self._db)

#         return client
