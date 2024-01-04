from django.contrib import admin
from django.urls import path,include
from tenant.views import index

from rest_framework.urlpatterns import format_suffix_patterns
from tenant.views import ShopCustomerList, ShopCustomerDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('customer/', ShopCustomerList.as_view()),
    path('customer/<int:pk>/', ShopCustomerDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)