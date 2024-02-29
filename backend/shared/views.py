
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated

from .serializers import ClientSerializer, DomainSerializer


# Create your views here.
# def index(request):
#     return HttpResponse("<h1> Public Index </h1>")

def index(request):
    response = HttpResponse("Hello, world!")
    # Print response headers to console
    for key, value in response.items():
        print(f"{key}: {value}")
    return response


class RegisteringTenant(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        default_domain = '.localhost'  # Consider using settings or environment variables

        client_serializer = ClientSerializer(data=request.data)
        if client_serializer.is_valid():
            new_client = client_serializer.save(owner=request.user)

            domain_data = {
                "domain": request.data.get("schema_name") + default_domain,
                "tenant": new_client.pk,
                "is_primary": True,
            }
            domain_serializer = DomainSerializer(data=domain_data)
            if domain_serializer.is_valid():
                domain_serializer.save()
                return Response(client_serializer.data, status=status.HTTP_201_CREATED)
            else:
                # Handle domain serialization errors
                return Response(domain_serializer.errors, status=400)

        return Response(client_serializer.errors, status=400)



    
# from customers.models import Client, Domain

# class RegisteringTenants(APIView):
#     def post(self, request, format=None):

#         default_domain = '.example.com'
#         serializer = ClientSerializer(data=request.data)
#         if serializer.is_valid():
#             client = serializer.save(owner=request.user)
#             # client = serializer.save()  # Save the Client data first
#             domain = Domain()
#             domain.domain = request.data['schema_name'] + default_domain
#             domain.tenant = client  # Assign the actual Client object
#             domain.is_primary = True
#             domain.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=400)
