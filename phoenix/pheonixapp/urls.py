from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet
from .api import SignupAPI
from .api import SigninAPI
from knox import views as knoxviews
from django.urls import path, include

# router = routers.DefaultRouter()
# router.register('profile',UserViewSet,'profile')
# router.register('blogs',BlogsViewSet,'blogs')
path('auth' , include('knox.urls'))
path('auth/signUp' , SignupAPI.as_view())
path('auth/signin' , SigninAPI.as_view())

urlpatterns = [
    path('auth' , include('knox.urls')),
    path('auth/signUp' , SignupAPI.as_view()),
    path('auth/signin' , SigninAPI.as_view())   
]

# urlpatterns = router.urls 
    