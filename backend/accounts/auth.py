
# from django.contrib.auth.backends import ModelBackend
# from .models import CompanyEmployee

# class CompanyEmployeeBackend(ModelBackend):
#     def authenticate(self, request, username=None, password=None, **kwargs):
#         try:
#             user = CompanyEmployee.objects.get(username=username)

#             if user.check_password(password) and self.user_can_authenticate(user):
#                 return user
#         except CompanyEmployee.DoesNotExist:
#             return None

#     def get_user(self, user_id):
#         try:
#             return CompanyEmployee.objects.get(pk=user_id)
#         except CompanyEmployee.DoesNotExist:
#             return None
