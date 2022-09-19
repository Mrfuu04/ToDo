from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from graphene_django.views import GraphQLView

from main.views import UserModelViewSet
from todoapp.views import ProjectModelViewSet, ToDoModelViewSet

schema_view = get_schema_view(
    openapi.Info(
        title="Todo application",
        default_version='1',
        description="Todo documentation",
        contact=openapi.Contact(name='Sergei', email="mrfuu04@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register('users', UserModelViewSet, basename='users')
router.register('projects', ProjectModelViewSet, basename='projects')
router.register('todo', ToDoModelViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('swagger/', schema_view.with_ui('swagger')),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    path('', TemplateView.as_view(template_name='index.html'))
]
