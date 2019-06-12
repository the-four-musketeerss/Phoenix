from pheonixapp.models import User
from pheonixapp.models import Blogs
from pheonixapp.models import Hotels
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from .serializers import BlogsSerializer
from .serializers import HotelsSerializer

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


class HotelsViewSet(viewsets.ModelViewSet):
    queryset = Hotels.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HotelsSerializer