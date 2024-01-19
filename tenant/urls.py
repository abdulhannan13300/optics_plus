from django.urls import path
from django.contrib import admin
from .views import index
# from tenant.admin import tenant_admin_site



urlpatterns = [
    # path('', index ,name='client_index'),
    
    # path('admin/',admin.site.urls),
    # path('tenant/shared/', tenant_admin_site.urls, name='tenant_admin'),
    # path('createemp/<name>', create_employee, name = "create_employee")
]