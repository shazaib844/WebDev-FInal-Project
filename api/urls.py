# urls.py
from django.urls import path
from api import views
from .views import ProductListCreate, ProductRetrieveUpdateDestroy, product_detail

urlpatterns = [
    path('api/products/', ProductListCreate.as_view(), name='product-list-create'),
    path('api/products/<int:pk>/', ProductRetrieveUpdateDestroy.as_view(), name='product-retrieve-update-destroy'),
    path('api/products/<int:pk>/detail/', product_detail, name='product-detail'),

]
