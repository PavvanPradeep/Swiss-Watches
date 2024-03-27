from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError
from .models import Watch
from .models import Cart
from .models import address
from .models import Payment
from .models import Order
UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')

class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watch
        fields = ['id', 'brand', 'name', 'description', 'more_description', 'rating', 'price', 'year']


class CartSerializer(serializers.ModelSerializer):
	# quantity = serializers.IntegerField(min_value=2)
	class Meta:
		model = Cart
		fields = '__all__'

class addressSerializer(serializers.ModelSerializer):
	class Meta:
		model = address
		fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Payment
		fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Order
		fields = '__all__'
class AddToCartSerializer(serializers.Serializer):
    watch_id = serializers.PrimaryKeyRelatedField(queryset=Watch.objects.all())
    quantity = serializers.IntegerField(min_value=1)