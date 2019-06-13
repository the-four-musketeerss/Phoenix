from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet
from .api import SignupAPI
from .api import SigninAPI
# from .api import postViewSet
from knox import views as knoxviews
from django.urls import path, include
from .api import UserAPI
from .api import HotelsViewSet


router = routers.DefaultRouter()
# router.register('profile',UserViewSet,'profile')
router.register('blogs',BlogsViewSet,'blogs')
router.register('hotels',HotelsViewSet,'hotels')


urlpatterns = [
    path('auth' , include('knox.urls')),
    path('auth/signUp' , SignupAPI.as_view()),
    path('auth/signIn' , SigninAPI.as_view()),
    path('auth/user' , UserAPI.as_view()) ,
]   
urlpatterns += router.urls 

    