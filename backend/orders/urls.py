from django.contrib import admin
from django.urls import path,include
from optics.views import index
from rest_framework import routers

from rest_framework.urlpatterns import format_suffix_patterns
from .views import  OrderDetailsViewSet

router = routers.DefaultRouter()
# router.register(r'customers/(?P<customer_id>\d+)/orders', OrderDetailsViewSet, basename='orderdetails')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('customers/<int:customer_id>/orders/', OrderDetailsViewSet.as_view({'get': 'list', 'post': 'create'}), name='customer-orders'),
    path('customers/<int:customer_id>/orders/<int:pk>/', OrderDetailsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='customer-order-detail'),
]