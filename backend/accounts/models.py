from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from tenant_users.tenants.models import UserProfile
# from tenant_users.tenants.models import TenantBase

class TenantUser(UserProfile):
    name = models.CharField(
        max_length = 100,
        blank = True,
    )


   
