from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Offer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['username', 'password']
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        user = UserSerializer 
        fields = ['poster', 'item', 'item_description', 'is_request', 'is_open', 'date_posted', 'location']

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        post = PostSerializer
        fields = ['post', 'message']