import graphene
from graphene_django import DjangoObjectType

from main.models import User
from todoapp.models import ToDo, Project


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    todos = graphene.List(ToDoType)
    users = graphene.List(UserType)
    projects = graphene.List(ProjectType)

    def resolve_todos(self, info):
        return ToDo.objects.all()

    def resolve_users(self, info):
        return User.objects.all()

    def resolve_projects(self, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
