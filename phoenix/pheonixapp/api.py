from pheonixapp.models import User
from pheonixapp.models import Blogs
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from .serializers import BlogsSerializer
from django.http import HttpResponse

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
    # def create (self,request):
    #     #post_data = request.post_data
    #     return HttpResponse('this is post request')

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogsSerializer