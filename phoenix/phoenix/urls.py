from django.contrib import admin
from django.urls import path, include
from pheonixapp.views import ListView
from pheonixapp.views import detailListView
from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    path('', include('pheonixapp.urls')),
    url(r'^TravelList/$', ListView.as_view()),
    url(r'^TravelList/(?P<pk>[0-9]+)/$', detailListView.as_view())
]
