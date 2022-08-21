from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet

from main.models import User
from main.serializers import UserModelSerializer


class UserModelViewSet(mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       mixins.ListModelMixin,
                       GenericViewSet):
    """View для CRUD пользователей"""
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
