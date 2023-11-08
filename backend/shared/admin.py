from django.contrib import admin
# from .models import TenantUser, Tenant, Domain
# from tenant.models import Tenant
# # Register your models here.
from django_tenants.admin import TenantAdminMixin
from tenant.models import ShopEmployee
from shared.models import Shop,ShopDomain



class DomainInline(admin.TabularInline):

    model = ShopDomain
    max_num = 1

@admin.register(Shop)
class TenantAdmin(TenantAdminMixin, admin.ModelAdmin):
        list_display = (
        "name",
        "email",
        "is_active"
        )
        inlines = [DomainInline]

admin.site.register(ShopEmployee)




# # Tenant Admin
# class TenantAdmin(TenantAdminMixin, admin.ModelAdmin):
#     # Your custom admin settings for the tenant
#     pass

# admin.site.register(Tenant, TenantAdmin)
# admin.site.register(YourSharedModel)

# class DomainInline(admin.TabularInline):
#     model = Domain

# @admin.register(Tenant)
# class Tenant(admin.ModelAdmin):
#     # inlines = [DomainInline]
#     list_display = ('name', 'email', 'schema_name' )

# @admin.register(Domain)
# class Domain(admin.ModelAdmin):
#     # inlines = [DomainInline]
#     list_display = ('domain', 'is_primary' )    

# class SharedAdminSite(admin.AdminSite):
#     site_header = 'Shared Admin Panel'  # Customize the admin panel header
# shared_admin_site = SharedAdminSite(name='sharedadmin')
# shared_admin_site.register(Tenant)
# shared_admin_site.register(Domain)
# shared_admin_site.register(AdminUser)
# shared_admin_site.register(TenantUser)