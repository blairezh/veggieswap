from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Post(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.CharField(max_length=200)
    item_description = models.CharField(max_length=200)
    is_request = models.BooleanField
    is_open = models.BooleanField
    date_posted = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200) #change to be functional
