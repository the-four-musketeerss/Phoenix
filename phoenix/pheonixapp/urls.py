from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet


router = routers.DefaultRouter()
router.register('profile',UserViewSet,'profile')
router.register('blogs',BlogsViewSet,'blogs')


urlpatterns = router.urls 