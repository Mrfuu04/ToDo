from rest_framework.relations import StringRelatedField, HyperlinkedRelatedField, SlugRelatedField
from rest_framework.serializers import ModelSerializer

from main.models import User
from todoapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    """
    Сериализатор для модели Project.
    """
    # users = HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), many=True)
    # users = SlugRelatedField(many=True, queryset=User.objects.all(), slug_field='username')
    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    """
    Сериализатор для модели ToDoModel.
    """
    # project = HyperlinkedRelatedField(view_name='project-detail', queryset=Project.objects.all())
    project = SlugRelatedField(queryset=Project.objects.all(), slug_field='name')
    # user = HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all())
    user = SlugRelatedField(queryset=User.objects.all(), slug_field='username')

    class Meta:
        model = ToDo
        fields = '__all__'
