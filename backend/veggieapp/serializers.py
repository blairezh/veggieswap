from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Offer

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['poster', 'item', 'item_description', 'is_request', 'is_open', 'date_posted', 'location']

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['post', 'message']