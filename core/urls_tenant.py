from django.contrib import admin
from django.urls import path,include
from tenant.views import index

from rest_framework.urlpatterns import format_suffix_patterns
from tenant.views import ShopCustomerList, ShopCustomerDetail,CustomerPrescriptionList,CustomerPrescriptionDetail,OrderDetailsList,OrderDetailsDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('customer/', ShopCustomerList.as_view()),
    path('customer/<int:pk>/', ShopCustomerDetail.as_view()),
    path('customer/<int:customer_id>/prescription/', CustomerPrescriptionList.as_view(), name='prescription-list'),
    path('prescription/<int:customer_id>/<int:pk>/', CustomerPrescriptionDetail.as_view(), name='prescription-detail'),
    path('customer/<int:customer_id>/order/', OrderDetailsList.as_view(), name='order-list'),
    path('order/<int:customer_id>/<int:pk>/', OrderDetailsDetail.as_view(), name='order-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)