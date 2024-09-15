from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Offer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        #fields = ['username', 'password']
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        #user = UserSerializer 
        #fields = ['poster', 'item', 'item_description', 'is_request', 'is_open', 'date_posted', 'location']
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        #post = PostSerializer
        #fields = ['post', 'message']
        fields = '__all__'