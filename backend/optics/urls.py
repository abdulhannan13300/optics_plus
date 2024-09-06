from django.contrib import admin
from django.urls import path,include
from optics.views import index
from rest_framework import routers

from rest_framework.urlpatterns import format_suffix_patterns
from .views import CustomerPrescriptionViewSet, OrderDetailsViewSet,ShopCustomerViewSet, ShopViewSet

router = routers.DefaultRouter()
router.register(r'shops', ShopViewSet, basename='shop')
router.register(r'customers', ShopCustomerViewSet, basename='shopcustomer')
# router.register(r'customers/(?P<customer_id>\d+)/prescriptions', CustomerPrescriptionViewSet, basename='customerprescription')
# router.register(r'customers/(?P<customer_id>\d+)/orders', OrderDetailsViewSet, basename='orderdetails')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('customers/<int:customer_id>/prescriptions/', CustomerPrescriptionViewSet.as_view({'get': 'list', 'post': 'create'}), name='customer-prescriptions'),
    path('customers/<int:customer_id>/prescriptions/<int:pk>/', CustomerPrescriptionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='customer-prescription-detail'),
    path('customers/<int:customer_id>/orders/', OrderDetailsViewSet.as_view({'get': 'list', 'post': 'create'}), name='customer-orders'),
    path('customers/<int:customer_id>/orders/<int:pk>/', OrderDetailsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='customer-order-detail'),
]


# urlpatterns = format_suffix_patterns(urlpatterns)