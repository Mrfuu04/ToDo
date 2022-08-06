from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from main.models import User
from main.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    """View для CRUD пользователей"""
    queryset = User.objects.all()
    serializer_class = UserModelSerializer