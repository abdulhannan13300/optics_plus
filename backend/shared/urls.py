from shared.views import index
from django.urls import path
from django.contrib import admin
# from .views import CreateShop
# from shared.admin import shared_admin_site
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    # path('create-tenant/', CreateShop.as_view(), name='create-tenant'),
]

# urlpatterns = format_suffix_patterns(urlpatterns)