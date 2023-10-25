from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# class CustomUserManager(BaseUserManager):
    # def create_user(self, full_name, username, email, password=None, **extra_fields):
    #     if not email:
    #         raise ValueError('The Email field must be set')
    #     if not username:
    #         raise ValueError('User must have an username')

    #     user = self.model(
    #         email = self.normalize_email(email),
    #         username = username,
    #         full_name = full_name,
    #         **extra_fields
    #     )
    #     user.set_password(password)
    #     user.save(using=self._db)
    #     return user

    # def create_superuser(self, full_name, username, email, password=None, **extra_fields):
    #     user = self.create_user(
    #         email = self.normalize_email(email),
    #         username = username,
    #         password = password,
    #          full_name = full_name,
    #         **extra_fields
    #     )
    #     user.is_superuser = True
    #     user.is_staff = True
    #     user.is_active = True
    #     user.save(using=self._db)

    #     return user


# class CustomUser(AbstractBaseUser,PermissionsMixin):
#     email = models.EmailField(unique=True)
#     full_name = models.CharField(max_length=150)
#     username = models.CharField(max_length=50, unique=True)
#     contact_number = models.CharField(max_length=12, blank=True)

#     is_active = models.BooleanField(default=False)
#     is_admin = models.BooleanField(default=False)
#     is_staff = models.BooleanField(default=False)

#     date_joined = models.DateTimeField(auto_now_add=True)
#     last_login = models.DateTimeField(auto_now_add=True)
#     modified_at = models.DateTimeField(auto_now=True)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['full_name', 'username']

#     # objects = CustomUserManager()
    
class CompanyEmployeeManager(BaseUserManager):
    def create_user(self,first_name, last_name, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        if not username:
            raise ValueError('User must have an username')

        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, username, email, password=None, **extra_fields):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            password = password,
            first_name = first_name,
            last_name = last_name,
            **extra_fields
        )
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)

        return user



class CompanyEmployee(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    contact_number = models.CharField(max_length=12, blank=True)
    
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    groups = models.ManyToManyField(
        "auth.Group",
        verbose_name="groups",
        blank=True,
        help_text="The groups this user belongs to.",
        related_name="admin_user_groups",  # Set a unique related_name
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        verbose_name="user permissions",
        blank=True,
        help_text="Specific permissions for this user.",
        related_name="admin_user_permissions",  # Set a unique related_name
    )

    objects = CompanyEmployeeManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return self.email

   
