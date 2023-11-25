from django.urls import path
from . import views

urlpatterns = [
    path('hello', views.hello, name='hello'),
	path('register', views.UserRegister.as_view(), name='register'),
	path('auth/login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    path('watches/', views.WatchList.as_view(), name='watches'),
    path('cart/', views.CartList.as_view(), name='cart'),
    path('address/', views.Useraddress.as_view(), name='address'),
    path('payment/', views.UserPayment.as_view(), name='payment'),
    path('order/', views.UserOrder.as_view(), name='order-create'),
    path('cartdetails/<int:pk>/', views.CartDetail.as_view(), name='cart'),
]