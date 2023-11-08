# from django.urls import path
# from django.contrib import admin

# urlpatterns = [
#     path('admin/', admin.site.urls)
# ]

from shared.views import index
from django.urls import path
from django.contrib import admin
# from shared.admin import shared_admin_site

urlpatterns = [
    path('admin/', admin.site.urls),
    # # path('admin/shared/', shared_admin_site.urls, name='shared_admin'),
    path('', index)
]