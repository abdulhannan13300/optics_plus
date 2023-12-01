from django.contrib import admin
from django_tenants.admin import TenantAdminMixin
# from tenant.models import ShopEmployee
# from django.contrib.auth.admin import UserAdmin

from shared.models import Shop, ShopDomain
from .models import User
from tenant.models import ShopEmployee

# Register your models here.
# class DomainInline(admin.TabularInline):

#     model = ShopDomain
#     max_num = 1

# @admin.register(Shop)
# class TenantAdmin(TenantAdminMixin, admin.ModelAdmin):
#         list_display = (
#         "name",
#         "email",
#         "is_active"
#         )
#         inlines = [DomainInline]
admin.site.register(User)
# class CustomUserAdmin(UserAdmin):
#     list_display = ('email', 'full_name', 'username', 'is_active')
#     ordering = ('-date_joined',)
#     filter_horizontal = ()
#     list_filter = ()
#     fieldsets = ()
