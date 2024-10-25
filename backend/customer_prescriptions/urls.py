from django.contrib import admin
from django.urls import path,include
from optics.views import index
from rest_framework import routers

from rest_framework.urlpatterns import format_suffix_patterns
from .views import CustomerPrescriptionViewSet

router = routers.DefaultRouter()

# router.register(r'customers/(?P<customer_id>\d+)/prescriptions', CustomerPrescriptionViewSet, basename='customerprescription')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('customers/<int:customer_id>/prescriptions/', CustomerPrescriptionViewSet.as_view({'get': 'list', 'post': 'create'}), name='customer-prescriptions'),
    path('customers/<int:customer_id>/prescriptions/<int:pk>/', CustomerPrescriptionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='customer-prescription-detail'),
    
]


# urlpatterns = format_suffix_patterns(urlpatterns)