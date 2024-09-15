from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
import json
from django.core.serializers import serialize 

# Create your models here.
User = get_user_model()
# users = User.objects.all()
# serialized_data = serialize("json", users)
# serialized_data = json.loads(serialized_data)

#class User(models.Model):
#    username = models.CharField(max_length=200)
#    password = models.CharField(max_length=200)

class Post(models.Model):
    name = models.CharField(max_length=200)
    item = models.CharField(max_length=200)
    item_description = models.CharField(max_length=200)
    #is_request = models.BooleanField(default=False)
    #is_open = models.BooleanField(default=True)
    #date_posted = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200) #change to be functional

    def __str__(self):
        return self.item

class Offer(models.Model):
    #post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.CharField(max_length=200)

    def __str__(self):
        return self.message