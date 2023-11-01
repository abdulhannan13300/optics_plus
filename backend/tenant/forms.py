# tenants/forms.py
from django import forms
from tenant.models import Tenant

class TenantSignupForm(forms.ModelForm):
    class Meta:
        model = Tenant
        fields = ['name', 'subdomain', 'other_fields']