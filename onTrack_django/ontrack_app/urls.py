from . import views;
from django.urls import path;

urlpatterns = [
    path('', views.index),
    path('signup', views.sign_up),
    path('login', views.user_login),
    path('logout', views.user_logout),
    path('whoami', views.who_am_i),
    path('weatherupdate', views.weather_update),
    path('mapupdate', views.map_update),
    path('addsupplies', views.add_supplies),
]
