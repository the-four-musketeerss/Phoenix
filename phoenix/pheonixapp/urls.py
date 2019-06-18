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
router.register('Profile/post',SignIn,'Profile/post')


urlpatterns = [
    path('auth' , include('knox.urls')),
    path('auth/signUp' , SignupAPI.as_view()),
    # path('auth/signIn' , SigninAPI.as_view()),
    path('auth/user' , UserAPI.as_view()) ,
    # path("auth/logout",knox_views.logoutView.as_view(),name= "knox_logout"),
]   
urlpatterns += router.urls 

    