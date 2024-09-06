from django.utils.functional import SimpleLazyObject
from users.authentication import CustomJWTAuthentication

from django_multitenant.utils import set_current_tenant, unset_current_tenant
from django.contrib.auth import logout

class CustomJWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.user = SimpleLazyObject(lambda: self.get_user(request))
        response = self.get_response(request)
        return response

    def get_user(self, request):
        user = None
        try:
            user, _ = CustomJWTAuthentication().authenticate(request)
        except:
            pass
        return user 
    
# middleware.py

from django_multitenant.utils import set_current_tenant, unset_current_tenant
from django.contrib.auth import logout
from .models import Shop  # Import the Shop model

class MultitenantMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the user is authenticated
        if request.user and not request.user.is_anonymous:
            # Check if the current shop is set in the session
            current_shop_id = request.session.get('current_shop')
            if current_shop_id:
                # Fetch the shop instance using the ID
                try:
                    current_shop = request.user.shop_admin.get(id=current_shop_id)
                    set_current_tenant(current_shop)  # Set the current tenant (shop) instance
                    request.shop = current_shop
                except Shop.DoesNotExist:  # Correctly reference Shop here
                    logout(request)  # Log out if the shop does not exist
            else:
                # Get the shops associated with the user
                shops = request.user.shop_admin.all()
                
                if shops.count() == 1:
                    # If the user is associated with only one shop, set it as the current tenant
                    set_current_tenant(shops.first())
                    request.session['current_shop'] = shops.first().id
                    request.shop = shops.first()
                elif shops.count() > 1:
                    # If the user is associated with multiple shops, redirect to a view to select the shop
                    # For example:
                    pass
                else:
                    logout(request)  # Log out if no shop is found

        response = self.get_response(request)
        unset_current_tenant()  # Ensure to unset the tenant after the response is processed
        return response

# from django_multitenant.utils import set_current_tenant, unset_current_tenant
# from django.contrib.auth import logout

# class MultitenantMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         # Check if the user is authenticated
#         if request.user and not request.user.is_anonymous:
#             # Check if the current shop is set in the session
#             current_shop = request.session.get('current_shop')
#             if current_shop:
#                 # Set the current tenant (shop) from the session
#                 set_current_tenant(current_shop)
#                 request.shop = current_shop
#             else:
#                 # Get the shops associated with the user
#                 shops = request.user.shop_admin.all()
                
#                 if shops.count() == 1:
#                     # If the user is associated with only one shop, set it as the current tenant
#                     print("Tenant Set")
#                     set_current_tenant(shops.first())
#                     request.session['current_shop'] = shops.first().id
#                     request.shop = shops.first()
#                 elif shops.count() > 1:
#                     set_current_tenant(shops.first())
#                     request.session['current_shop'] = shops.first().id
#                     request.shop = shops.first()
#                     # If the user is associated with multiple shops, redirect to a view to select the shop
#                     # This is where you would redirect the user to a view to select the shop
#                     # For example:
#                     # return redirect('select_shop')
#                     pass
#                 else:
#                     print("In else block");
#                     logout(request)  # Log out if no shop is found

#         response = self.get_response(request)
#         unset_current_tenant()  # Ensure to unset the tenant after the response is processed
#         return response