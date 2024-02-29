from shared.views import index
from django.urls import path
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from .views import RegisteringTenant

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('register-tenant/', RegisteringTenant.as_view(), name='register-tenant'),
]

# urlpatterns = format_suffix_patterns(urlpatterns)