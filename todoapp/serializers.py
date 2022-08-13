from rest_framework.relations import StringRelatedField, HyperlinkedRelatedField
from rest_framework.serializers import ModelSerializer

from main.models import User
from todoapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    """
    Сериализатор для модели Project.
    В users возвращает ссылки на пользователей привязанных к проекту.
    """
    users = HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    """
    Сериализатор для модели ToDoModel.
    В project возвращает ссылку на проект к которому относится заметка.
    В user возвращает ссылку на пользвателя создателя заметки.
    """
    project = HyperlinkedRelatedField(view_name='project-detail', queryset=Project.objects.all())
    user = HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all())

    class Meta:
        model = ToDo
        fields = '__all__'
