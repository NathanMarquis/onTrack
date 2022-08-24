from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User
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
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('User created')

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
    latitude = '41.8781'
    longitude = '-87.6298'
    # first it uses coordinates, then links to fetch grid forecast
    endpoint = f"https://api.weather.gov/points/{latitude},{longitude}"
    API_response = requests.get(endpoint)
    responseJSON = API_response.json()
    endpoint = responseJSON['properties']['forecast']
    API_response = requests.get(endpoint)
    # 7day forecast info
    responseJSON = API_response.json()['properties']['periods']
    data = []
    for item in responseJSON:
        if 'isDaytime' == True:
            data.append(item)
    print(data)
    return JsonResponse({'success': responseJSON})