from pheonixapp.models import User
from pheonixapp.models import Blogs
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from .serializers import BlogsSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogsSerializer