from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User, Trip
from django.views.decorators.csrf import csrf_exempt
from urllib import response
import requests
import json


def index(request):
    print('home')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def sign_up(request):
    center = { 'lat': 41.8781, 'lng': -87.6298 }
    points = [
    { 'lat': 41.8781, 'lng': -87.6298 },
    { 'lat': 41.8981, 'lng': -87.6398 },
  ]
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
        user = User.objects.get(username=request.data['email'])
        trip = Trip(center=center, points=points, appuser=user)
        trip.save()
        return HttpResponse('User created')
    except Exception as e:
        print(str(e))

@api_view(['POST'])
def user_login(request):
    print(dir(request))
    print(dir(request._request))

    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
                return HttpResponse('success!')
                # Redirect to a success page.
            except Exception as e:
                print('except')
                print(str(e))
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.

@api_view(['POST'])
def user_logout(request):
    logout(request)
    return JsonResponse({'success':True})

@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])

        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

@api_view(['GET'])
def weather_update(request):
    trip = Trip.objects.get(appuser = request.user)
    print(trip.center)
    # first it uses coordinates, then links to fetch grid forecast
    endpoint = f"https://api.weather.gov/points/{trip.center['lat']},{trip.center['lng']}"
    API_response = requests.get(endpoint)
    responseJSON = API_response.json()
    endpoint = responseJSON['properties']['forecast']
    API_response = requests.get(endpoint)
    # 7day forecast info
    responseJSON = API_response.json()['properties']['periods']
    return JsonResponse({'success': responseJSON})

@api_view(['POST'])
def map_update(request):
    trip = Trip.objects.get(appuser = request.user)

    return JsonResponse({'success': 'trip updated'})

@api_view(['POST'])
def add_supplies(request):

    return JsonResponse({'success': 'added supplies'})