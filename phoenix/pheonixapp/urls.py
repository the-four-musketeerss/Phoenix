from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet
from .api import SignUp
from .api import SignIn

router = routers.DefaultRouter()
router.register('profile',UserViewSet,'profile')
router.register('blogs',BlogsViewSet,'blogs')
router.register('signUp',SignUp,'signUp')
router.register('signIn',SignIn,'signIn')

urlpatterns = router.urls 