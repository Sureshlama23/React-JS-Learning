from django.contrib import admin
from .models import product
# Register your models here.

@admin.register(product)
class productAdmin(admin.ModelAdmin):
    list_display = ['id','name','company','discount_percentage','original_price','return_period','delivary_date','stars','count']
