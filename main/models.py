from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    Модель пользователя.
    Является AUTH_USER_MODEL.
    """
    email = models.EmailField('email address', unique=True)

    def __str__(self):
        return f'{self.username}'
