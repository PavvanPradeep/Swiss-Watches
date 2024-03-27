from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import UserRegisterSerializer, UserLoginSerializer, UserSerializer, WatchSerializer, CartSerializer, addressSerializer, PaymentSerializer, OrderSerializer, AddToCartSerializer
from rest_framework import permissions, status
from .validation import custom_validation, validate_email, validate_password
from .models import Watch
from .models import Cart
from .models import Order
from .models import address
from .models import Payment
from django.db.models import Sum
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.db.models import Q



@method_decorator(csrf_exempt, name='dispatch')
class DeleteAllItemsInCart(APIView):
	authentication_classes = []  # Disable authentication for this view
	permission_classes = []

	def delete(self, request):
		print("Attempting to delete all items in cart")
		try:
			cart_items = Cart.objects.all()
			cart_items.delete()
			print("All items in cart deleted successfully.")
			
			return Response({'status': 'success'}, status=status.HTTP_200_OK)
		except Cart.DoesNotExist:
			print("No items in cart found.")
			return Response({'status': 'error', 'message': 'No items in cart found'}, status=status.HTTP_404_NOT_FOUND)

@method_decorator(csrf_exempt, name='dispatch')
class DeleteCartItem(APIView):
	authentication_classes = []  # Disable authentication for this view
	permission_classes = []

	def delete(self, request, watch_id):
		print(f"Attempting to delete item with ID {watch_id}")
		try:
			cart_item = Cart.objects.get(watch_id=watch_id)
			cart_item.delete()
			print(f"Item with ID {watch_id} deleted successfully.")
			
			return Response({'status': 'success'}, status=status.HTTP_200_OK)
		except Cart.DoesNotExist:
			print(f"Item with ID {watch_id} not found.")
			return Response({'status': 'error', 'message': 'Item not found'}, status=status.HTTP_404_NOT_FOUND)




def hello(request):
    return HttpResponse("Hello")

class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	@csrf_exempt
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)

from django.contrib.auth import authenticate, login

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    @csrf_exempt
    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            
            # Check if the user is authenticated (i.e., exists)
            if user is not None:
                login(request, user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)



class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	@csrf_exempt
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	@csrf_exempt
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)


# {
# 	"email": "hello@gmail.com",
# 	"username": "hello",
# 	"password": "hello1234"	
# }

class WatchList(APIView):
	permission_classes = (permissions.AllowAny,)
	def get(self, request):
		print("Incoming requests to WatchList APIView")
		print("Query parameters:",request.GET)
		query = request.GET.get('search','')
		watches = Watch.objects.all()

		if query:
			print(f"Applying search filter for query: {query}")
			watches = watches.filter(
				Q(name__icontains=query) | Q(brand__icontains=query)
			)
		serializer = WatchSerializer(watches, many=True)
		serialized_data = serializer.data
		# print("Serialized data: ", serializer.data)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
	@csrf_exempt
	def post(self, request):
		serializer = WatchSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CartList(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get(self, request):
# 		cart = Cart.objects.all()
# 		serializer = CartSerializer(cart, many=True)
# 		return Response(serializer.data, status=status.HTTP_200_OK)
	
# 	@csrf_exempt
# 	def post(self, request):
# 		serializer = CartSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CartList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        cart = Cart.objects.all()
        serializer = CartSerializer(cart, many=True)
        serialized_data = serializer.data
        total = 0
        for item in serialized_data:
            total += item['total_price']
        for item in serialized_data:
            item['final_price'] = total
        return Response(serialized_data, status=status.HTTP_200_OK)

    @csrf_exempt
    def post(self, request):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            user_id = serializer.validated_data['user_id']
            watch_id = serializer.validated_data['watch_id']
            quantity = serializer.validated_data['quantity']
            total_price = serializer.validated_data['total_price']

            print(total_price)

            if Cart.objects.filter(user_id=user_id, watch_id=watch_id).exists():
                return JsonResponse({"error": "Quantity must be 1"}, status=status.HTTP_400_BAD_REQUEST)

            cart_items_count = Cart.objects.filter(user_id=user_id).count()
            if cart_items_count < 3:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": "Cannot add more than 3 items to cart"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






    

class CartDetail(APIView):
	permission_classes = (permissions.AllowAny,)
	def get_object(self, pk):
		try:
			return Cart.objects.get(pk=pk)
		except Cart.DoesNotExist:
			return Response(status=status.HTTP_404_NOT_FOUND)
	
	def get(self, request, pk):
		cart = self.get_object(pk)
		serializer = CartSerializer(cart)
		return Response(serializer.data)
	
	def put(self, request, pk):
		cart = self.get_object(pk)
		serializer = CartSerializer(cart, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors)
	
	def delete(self, request, pk):
		cart = self.get_object(pk)
		cart.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)


class CartTotal(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user
        total_price = Cart.objects.filter(user_id=user.user_id).aggregate(total=Sum('total_price'))['total'] or 0
        return Response({'total_price': total_price}, status=status.HTTP_200_OK)

	
class CartItemDetail(APIView):
   permission_classes = (permissions.AllowAny,)

   def get_object(self, user_id, watch_id):
       try:
           return Cart.objects.get(user_id=user_id, watch_id=watch_id)
       except Cart.DoesNotExist:
           return Response(status=status.HTTP_404_NOT_FOUND)

   def delete(self, request, user_id, watch_id):
       cart_item = self.get_object(user_id, watch_id)
       cart_item.delete()
       return Response(status=status.HTTP_204_NO_CONTENT)


class Useraddress(APIView):
	permission_classes = (permissions.AllowAny,)
	def get(self, request):
		Address = address.objects.all()
		serializer = addressSerializer(Address, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
	@csrf_exempt
	def post(self, request):
		serializer = addressSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

class UserPayment(APIView):
	permission_classes = (permissions.AllowAny,)
	def get(self, request):
		payment = Payment.objects.all()
		serializer = PaymentSerializer(payment, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
	@csrf_exempt
	def post(self, request):
		serializer = PaymentSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
	
class UserOrder(APIView):
	permission_classes = (permissions.AllowAny,)
	def get(self, request):
		order = Order.objects.all()
		serializer = OrderSerializer(order, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
	@csrf_exempt
	def post(self, request):
		serializer = OrderSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)








# from django.shortcuts import render
# from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth import login, logout
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .serializer import UserRegisterSerializer, UserLoginSerializer, UserSerializer, WatchSerializer, CartSerializer, addressSerializer, PaymentSerializer, OrderSerializer, AddToCartSerializer
# from rest_framework import permissions, status
# from .validation import custom_validation, validate_email, validate_password
# from .models import Watch
# from .models import Cart

# def hello(request):
#     return HttpResponse("Hello")

# class UserRegister(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	@csrf_exempt
# 	def post(self, request):
# 		clean_data = custom_validation(request.data)
# 		serializer = UserRegisterSerializer(data=clean_data)
# 		if serializer.is_valid(raise_exception=True):
# 			user = serializer.create(clean_data)
# 			if user:
# 				return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserLogin(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	authentication_classes = (SessionAuthentication,)
# 	@csrf_exempt
# 	def post(self, request):
# 		data = request.data
# 		assert validate_email(data)
# 		assert validate_password(data)
# 		serializer = UserLoginSerializer(data=data)
# 		if serializer.is_valid(raise_exception=True):
# 			user = serializer.check_user(data)
# 			login(request, user)
# 			return Response(serializer.data, status=status.HTTP_200_OK)


# class UserLogout(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	authentication_classes = ()
# 	@csrf_exempt
# 	def post(self, request):
# 		logout(request)
# 		return Response(status=status.HTTP_200_OK)


# class UserView(APIView):
# 	permission_classes = (permissions.IsAuthenticated,)
# 	authentication_classes = (SessionAuthentication,)
# 	@csrf_exempt
# 	def get(self, request):
# 		serializer = UserSerializer(request.user)
# 		return Response({'user': serializer.data}, status=status.HTTP_200_OK)


# {
# 	    "email": "hello@gmail.com",
# 		"username": "hello",
# 		"password": "hello1234"	
# }

# class WatchList(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get(self, request):
# 		watches = Watch.objects.all()
# 		serializer = WatchSerializer(watches, many=True)
# 		return Response(serializer.data, status=status.HTTP_200_OK)
	
# 	@csrf_exempt
# 	def post(self, request):
# 		serializer = WatchSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CartList(APIView):
#     permission_classes = (permissions.AllowAny,)

#     @csrf_exempt
#     def post(self, request):
#         serializer = AddToCartSerializer(data=request.data)
#         if serializer.is_valid():
#             watch_id = serializer.validated_data['watch_id']
#             quantity = serializer.validated_data['quantity']

#             # Check if there is enough quantity available
#             if watch_id.quantity_available >= quantity:
#                 cart = Cart.objects.create(
#                     user_id=request.user,  # Assuming user is authenticated
#                     watch_id=watch_id,
#                     quantity=quantity,
#                     total_price=watch_id.price * quantity
#                 )

#                 # Update the quantity available in the Watch model
#                 watch_id.quantity_available -= quantity
#                 watch_id.save()

#                 cart_serializer = CartSerializer(cart)
#                 return Response(cart_serializer.data, status=status.HTTP_201_CREATED)
#             else:
#                 return Response({'error': 'Not enough quantity available'}, status=status.HTTP_400_BAD_REQUEST)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
# class CartDetail(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get_object(self, pk):
# 		try:
# 			return Cart.objects.get(pk=pk)
# 		except Cart.DoesNotExist:
# 			return Response(status=status.HTTP_404_NOT_FOUND)
	
# 	def get(self, request, pk):
# 		cart = self.get_object(pk)
# 		serializer = CartSerializer(cart)
# 		return Response(serializer.data)
	
# 	def put(self, request, pk):
# 		cart = self.get_object(pk)
# 		serializer = CartSerializer(cart, data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data)
# 		return Response(serializer.errors)
	
# 	def delete(self, request, pk):
# 		cart = self.get_object(pk)
# 		cart.delete()
# 		return Response(status=status.HTTP_204_NO_CONTENT)

# class address(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get(self, request):
# 		address = address.objects.all()
# 		serializer = addressSerializer(address, many=True)
# 		return Response(serializer.data, status=status.HTTP_200_OK)
	
# 	@csrf_exempt
# 	def post(self, request):
# 		serializer = addressSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

# class Payment(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get(self, request):
# 		payment = Payment.objects.all()
# 		serializer = PaymentSerializer(payment, many=True)
# 		return Response(serializer.data, status=status.HTTP_200_OK)
	
# 	@csrf_exempt
# 	def post(self, request):
# 		serializer = PaymentSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
	
# class Order(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	def get(self, request):
# 		order = Order.objects.all()
# 		serializer = OrderSerializer(order, many=True)
# 		return Response(serializer.data, status=status.HTTP_200_OK)
	
# 	@csrf_exempt
# 	def post(self, request):
# 		serializer = OrderSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)