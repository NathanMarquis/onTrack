from . import views;
from django.urls import path;

urlpatterns = [
    path('', views.index),
    path('/signup/', views.sign_up),
    path('/login/', views.login),
    path('/logout/', views.logout),
    path('/whoami/', views.who_am_i),
]
