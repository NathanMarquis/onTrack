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
    map = models.Charfield(
        max_length=255,
    )
    forecast = models.Charfield(
        max_length=255,
    )
    supplies = models.Charfield(
        max_length=255,
    )