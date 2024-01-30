
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
# from .serializers import CreateShopSerializer
from rest_framework import status
from rest_framework.response import Response 
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

# Create your views here.
# def index(request):
#     return HttpResponse("<h1> Public Index </h1>")

def index(request):
    response = HttpResponse("Hello, world!")
    # Print response headers to console
    for key, value in response.items():
        print(f"{key}: {value}")
    return response



# @method_decorator(csrf_exempt, name='dispatch')
# class CreateShop(APIView):
#     def post(self, request, format=None):
#         serializer = CreateShopSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

