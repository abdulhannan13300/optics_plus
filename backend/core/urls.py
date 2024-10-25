from django.contrib import admin
from django.urls import path,include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('optics.urls')),
    path('api/v1/', include('customer_prescriptions.urls')),
    path('api/v1/', include('customers.urls')),
    path('api/v1/', include('orders.urls')),
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('users.urls')),  
     
]
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
