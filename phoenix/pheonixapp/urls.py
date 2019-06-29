from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet
from .api import SignupAPI
from .api import SigninAPI
from .api import SignIn
from knox import views as knoxviews
from django.urls import path, include
from .api import UserAPI
from .api import HotelsViewSet
from knox import views as knox_views



router = routers.DefaultRouter()
router.register('blogs',BlogsViewSet,'blogs')
router.register('hotels',HotelsViewSet,'hotels')
router.register('post',SignIn,'post')


urlpatterns = [
    path('auth' , include('knox.urls')),
    path('auth/signUp' , SignupAPI.as_view(),name='SignUp'),
    path('auth/user' , UserAPI.as_view(),name='Mainprofile') ,
    path('auth/signIn' , SigninAPI.as_view(), name='Signin'),
]   
urlpatterns += router.urls 

    