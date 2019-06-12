from rest_framework import routers
from .api import UserViewSet
from .api import BlogsViewSet
from .api import HotelsViewSet


router = routers.DefaultRouter()
router.register('profile',UserViewSet,'profile')
router.register('blogs',BlogsViewSet,'blogs')
router.register('hotels',HotelsViewSet,'hotels')


urlpatterns = router.urls 