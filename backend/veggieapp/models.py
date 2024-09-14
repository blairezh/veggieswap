from django.db import models
from django.utils import timezone
from django.utils import timezone

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

class Post(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.CharField(max_length=200)
    item_description = models.CharField(max_length=200)
    is_request = models.BooleanField
    is_open = models.BooleanField
    date_posted = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200) #change to be functional
