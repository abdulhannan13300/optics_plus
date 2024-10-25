from django.contrib import admin
from django.urls import path,include
from optics.views import index
from rest_framework import routers

from rest_framework.urlpatterns import format_suffix_patterns
from .views import ShopViewSet

router = routers.DefaultRouter()
router.register(r'shops', ShopViewSet, basename='shop')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include(router.urls)),
]

