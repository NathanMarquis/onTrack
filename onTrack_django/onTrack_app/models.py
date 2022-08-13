from django.db import models;
from django.contrib.auth.models import AbstractUser;

class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Trip(models.Model):
    appuser = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    map = models.CharField(
        max_length=255
    )
    forecast = models.CharField(
        max_length=255,
    )
    supplies = models.CharField(
        max_length=255,
    )