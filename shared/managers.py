# shared/managers.py

# from django.db import models
# from accounts.models import User
# from shared.models import Shop

# class ShopManager(models.Manager):
#     def create_tenant_with_owner(self, owner_data, **tenant_data):
#         owner = User.objects.create_user(
#             username=owner_data['owner_username'],
#             email=owner_data['owner_email'],
#             password=owner_data['owner_password'],
#             first_name=owner_data['owner_first_name'],
#             last_name=owner_data['owner_last_name']
#         )
#         tenant = Shop.objects.create(
#             name=tenant_data['tenant_name'],
#             contact_person=tenant_data['tenant_contact_person'],
#             address=tenant_data['tenant_address'],
#             pincode=tenant_data['tenant_pincode'],
#             contact_number=tenant_data['tenant_contact_number'],
#             alternate_number=tenant_data['tenant_alternate_number'],
#             email=tenant_data['tenant_email'],
#             owner=owner,
#             expiry_date=tenant_data['tenant_expiration_date'],
#             gst_id=tenant_data['tenant_gst_id'],
#             pan_id=tenant_data['tenant_pan_id']
#         )
#         return tenant
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