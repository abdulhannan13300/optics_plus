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