from django.contrib import admin
from .models import *
# Register your models here.

# admin.site.register(ShopEmployee)
admin.site.register(ShopCustomer)
admin.site.register(CustomerPrescription)
admin.site.register(Transaction)

# @admin.register(TenantUser)
# class UserAdmin(admin.ModelAdmin):
#     pass

# class TenantAdminSite(admin.AdminSite):
#     site_header = 'Tenant Admin Panel'  # Customize the admin panel header

# tenant_admin_site = TenantAdminSite(name='sharedadmin')