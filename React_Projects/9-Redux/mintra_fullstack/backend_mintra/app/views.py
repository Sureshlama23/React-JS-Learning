from django.shortcuts import render
from .models import product
from .serializers import productSerializer
from rest_framework.generics import ListAPIView

# Create your views here.


class ProductList(ListAPIView):
    queryset = product.objects.all()
    serializer_class = productSerializer

