
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
# from .serializers import CreateShopSerializer
from rest_framework import status
from rest_framework.response import Response 


# Create your views here.
# def index(request):
#     return HttpResponse("<h1> Public Index </h1>")

def index(request):
    response = HttpResponse("Hello, world!")
    # Print response headers to console
    for key, value in response.items():
        print(f"{key}: {value}")
    return response

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from .serializers import ShopSerializer

# class CreateTenantView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         serializer = ShopSerializer(data=request.data)
#         if serializer.is_valid():
#             tenant = serializer.save(owner=request.user)
#             domain = tenant.domain
#             # Optionally set is_superuser here or use a custom permission
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)


# class CreateTenant(APIView):
#     def post(self, request, *args, **kwargs):
        
    
