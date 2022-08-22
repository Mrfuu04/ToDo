from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todoapp.models import Project, ToDo
from todoapp.serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    """View для CRUD Project"""
    serializer_class = ProjectModelSerializer
    # pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        q = self.request.query_params.get('name')
        if q:
            return Project.objects.filter(name__icontains=q)
        return Project.objects.all()


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ToDoModelViewSet(ModelViewSet):
    """View для CRUD To-Do заметок"""
    serializer_class = ToDoModelSerializer
    # pagination_class = ToDoLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.activity = False
        obj.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_queryset(self):
        q = self.request.query_params.get('project')
        if q:
            return ToDo.objects.filter(project__name__icontains=q)
        return ToDo.objects.all()

