# tenants/views.py

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
# from . models import Employee

def index(request):
    return HttpResponse(f'<h1> {request.tenant} index</h1>')

# from django.shortcuts import render, redirect
# from tenant.forms import TenantSignupForm
# def signup_view(request):
#     if request.method == 'POST':
#         form = TenantSignupForm(request.POST)
#         if form.is_valid():
#             client = form.save()
#             # Redirect to success page or login page
#             return redirect('login')
#     else:
#         form = TenantSignupForm()

#     return render(request, 'signup.html', {'form': form})


