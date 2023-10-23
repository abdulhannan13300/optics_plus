from django.contrib import admin
from django.urls import path,include
from tenant.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index)
]