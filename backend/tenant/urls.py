from django.urls import path
from django.contrib import admin
from .views import index
# from tenant.admin import tenant_admin_site

from .views import ShopCustomerList



urlpatterns = [
    # path('', index ,name='client_index'),
    path('customer/', ShopCustomerList.as_view(), name='register-tenant'),
    
    # path('admin/',admin.site.urls),
    # path('tenant/shared/', tenant_admin_site.urls, name='tenant_admin'),
    # path('createemp/<name>', create_employee, name = "create_employee")
]