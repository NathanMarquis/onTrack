from django.db import models;
from django.contrib.auth.models import AbstractUser;
from django.contrib.postgres.fields import JSONField

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
    center = models.JSONField()
    points = models.JSONField()

class Supplies(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    item = models.CharField(
        max_length=255
    )