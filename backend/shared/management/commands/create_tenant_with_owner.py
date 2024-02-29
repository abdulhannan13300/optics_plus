# # tenant_management/management/commands/create_tenant_with_owner.py

# from django.core.management.base import BaseCommand
# from django_tenants.utils import schema_context
# from shared.models import Shop, ShopDomain  # Import your Shop tenant model
# from accounts.models import User  # Import your User model

# class Command(BaseCommand):
#     help = 'Create a new tenant with an associated owner'

#     def add_arguments(self, parser):
#         # Add custom command arguments for owner and tenant details
#         parser.add_argument('--owner-first-name', type=str, help='Owner First Name')
#         parser.add_argument('--owner-last-name', type=str, help='Owner Last Name')
#         parser.add_argument('--owner-username', type=str, help='Owner Username')
#         parser.add_argument('--owner-email', type=str, help='Owner Email')
#         parser.add_argument('--owner-password', type=str, help='Owner Password')

#         parser.add_argument('--schema-name', type=str, help='Schema Name')
#         parser.add_argument('--tenant-name', type=str, help='Tenant Name')
#         parser.add_argument('--contact-person', type=str, help='Contact Person')
#         parser.add_argument('--tenant-address', type=str, help='Tenant Address')
#         parser.add_argument('--tenant-pincode', type=str, help='Tenant Pincode')
#         # Add other tenant-specific arguments as needed
#         # Add other tenant-specific fields as needed
#         parser.add_argument('--contact-number', type=str, help='Contact Number')
#         parser.add_argument('--alternate-number', type=str, help='Alternate Number')
#         parser.add_argument('--tenant-email', type=str, help='Tenant Email')
#         parser.add_argument('--is-active', type=bool, help='Is Active')
#         parser.add_argument('--expiry-date', type=str, help='Expiry Date')
#         parser.add_argument('--gst-id', type=str, help='GST ID')
#         parser.add_argument('--pan-id', type=str, help='PAN ID')
#         # Add the owner field as well
#         parser.add_argument('--owner', type=int, help='Owner ID')

#     def handle(self, *args, **options):
#         owner_data = {
#             'first_name': options['owner_first_name'] or input('Owner First Name: '),
#             'last_name': options['owner_last_name'] or input('Owner Last Name: '),
#             'username': options['owner_username'] or input('Owner Username: '),
#             'email': options['owner_email'] or input('Owner Email: '),
#             'password': options['owner_password'] or input('Owner Password: '),
#         }

#         # Create the owner user
#         owner = User.objects.create_user(**owner_data)
#         owner.is_superuser = True
#         owner.is_staff = True
#         owner.save()

#         tenant_data = {
#             'schema_name': options['schema_name'] or input('Schema Name: '),
#             'name': options['tenant_name'] or input('Tenant Name: '),
#             'contact_person': options['contact_person'] or input('Contact Person: '),
#             'address': options['tenant_address'] or input('Tenant Address: '),
#             'pincode': options['tenant_pincode'] or input('Tenant Pincode: '),
#             # Set other tenant-specific fields using similar patterns
#             'contact_number': options['contact_number']  or input('contact number: '),
#             'alternate_number': options['alternate_number'] or input('Alternate Number: '),
#             'email': options['tenant_email'] or input('Tenant Email: '),
#             'is_active': options['is_active'] or input('is-active'),
#             'expiry_date': options['expiry_date'] or input('expiry-date'),
#             'gst_id': options['gst_id'] or input('gst-id'),
#             'pan_id': options['pan_id'] or input('pan-id'),
#             'owner': owner,  # Assign the owner user
            
#         }

#         tenant = Shop(name=tenant_data['name'])
#         tenant.owner = owner
#         tenant.contact_person = tenant_data['contact_person']
#         tenant.address = tenant_data['address']
#         tenant.pincode = tenant_data['pincode']
#         tenant.contact_number = tenant_data['contact_number']
#         tenant.alternate_number = tenant_data['alternate_number']
#         tenant.email = tenant_data['email']
#         tenant.is_active = tenant_data['is_active']
#         tenant.expiry_date = tenant_data['expiry_date']
#         tenant.gst_id = tenant_data['gst_id']
#         tenant.pan_id = tenant_data['pan_id']
#         tenant.owner = tenant_data['owner']
#         # Set other tenant-specific fields as needed
#         tenant.save()

#         domain = options.get('domain') or 'your_tenant_domain_url'  # Set the domain URL or use the provided default
#         schema_name = options.get('schema_name') or 'your_tenant_schema_name'  # Set the schema name or use the provided default
#         with schema_context(schema_name='public'):
#             tenant.auto_create_schema = True  # Set this to True to create the schema
#             tenant.domain_url = domain
#             tenant.schema_name = schema_name
#             tenant.save()

#         domain_obj = ShopDomain()
#         domain_obj.domain = domain
#         domain_obj.tenant = tenant
#         domain_obj.is_primary = True
#         domain_obj.save()


# # class Command(BaseCommand):
# #     help = 'Create a tenant with an owner'

# #     def add_arguments(self, parser):
# #         # Your argument definitions here
# #         pass

# #     def handle(self, *args, **options):
# #         # Your implementation here
# #         owner_data = {
# #             'first_name': input('Owner First Name: '),
# #             'last_name': input('Owner Last Name: '),
# #             'username': input('Owner Username: '),
# #             'email': input('Owner Email: '),
# #             'password': input('Owner Password: '),
# #             # ... other owner-specific fields
# #         }

# #         # Prompt for tenant's details
# #         tenant_data = {
# #             'name': input('Tenant Name: '),
# #             'contact_person': input('Contact Person: '),
# #             'address': input('Tenant Address: '),
# #             'pincode': input('Tenant Pincode: '),
# #             'contact_number': input('Contact Number: '),
# #             'alternate_number': input('Alternate Number: '),
# #             'email': input('Tenant Email: '),
# #             'is_active': True,
# #             'expiry_date': input('Expiration Date: '),
# #             'gst_id': input('GST ID: '),
# #             'pan_id': input('PAN ID: '),
# #             # ... other tenant-specific fields
# #         }

# #         tenant = Shop.objects.create_tenant_with_owner(owner_data, **tenant_data)
# #         self.stdout.write(self.style.SUCCESS(f'Successfully created tenant: {tenant.name}'))
