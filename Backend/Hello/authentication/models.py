from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not password:
            raise ValueError("Password Required")
        if not email:
            raise ValueError("Email required")
        email = self.normalize_email(email)  
        user = self.model(email=email)
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = UserManager()
    def __str__(self):
	    return self.username
  
class Watch(models.Model):
    brand = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    more_description = models.TextField()
    rating = models.FloatField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.DateField()
    def __str__(self):
        return self.name
    
# {
#     "brand":"rolex",
#     "name":"submariner",
#     "description":"Hello world today is a beautiful day",
#     "rating":4.5,
#     "price":10000.00,
#     "year":"2019-01-01"
# }

class Cart(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    watch_id = models.ForeignKey(Watch, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.IntegerField()

    @property
    def item_total(self):
        return self.quantity * self.total_price
    def __str__(self):
        return self.user_id.username + " " + self.watch_id.name
    
class address(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField()
    def __str__(self):
        return self.user_id.username + " " + self.address

class Payment(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    address_id = models.ForeignKey(address, on_delete=models.CASCADE)
    total_price = models.IntegerField()
    def __str__(self):
        return self.user_id.username + " " + self.total_price
    
class Order(models.Model):
    payment_id = models.OneToOneField(Payment, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    order_id=models.AutoField(primary_key=True)
    total_price = models.IntegerField()
    def __str__(self):
        return self.user_id.username + " " + self.total_price

# {
#     "user_id":"1",
#     "address":"village"
# }