from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet

from todoapp.models import Project, ToDo
from todoapp.serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectModelViewSet(ModelViewSet):
    """View для CRUD Project"""
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoModelViewSet(ModelViewSet):
    """View для CRUD To-Do заметок"""
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
