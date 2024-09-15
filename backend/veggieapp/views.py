from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .models import Post#, Offer
from .serializers import PostSerializer, UserSerializer#, OfferSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.core.serializers import serialize 

class PostView(APIView):
    def get(self, request):
        output = [{"name": output.user.username,
                   "item": output.item, 
                   "item_description": output.item_description,
                   #"is_request": output.is_request, 
                   #"is_open": output.is_open,
                   #"date_posted": output.date_posted,
                   "location": output.location}
                   for output in Post.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)  # set user to currently authenticated user
            return Response(serializer.data)


##class OfferView(viewsets.ModelViewSet):
##        queryset = Post.objects.all#.order_by('-post')
##        serializer_class = OfferSerializer

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class HomeView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return Response(content)
    
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('username')
        password = request.data.get('password')
        
        # Authenticate the user
        user = authenticate(username=email, password=password)
        
        if user is not None:
            # Generate tokens
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)
