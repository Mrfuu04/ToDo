import json

from django.test import TestCase
from mixer.auto import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase, RequestsClient

from main.models import User
from todoapp.models import ToDo
from todoapp.views import ProjectModelViewSet


class TestAPIRequestFactory(TestCase):

    def setUp(self) -> None:
        self.url = '/api/projects/'

    def test_projects_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestAPIclient(TestCase):

    def setUp(self) -> None:
        self.url = '/api/users/'
        self.user = mixer.blend(User)

    def test_user_detail(self):
        client = APIClient()
        response = client.get(f'{self.url}{self.user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestAPITestCase(APITestCase):

    def setUp(self) -> None:
        self.url = '/api/todo/'
        self.todo = mixer.blend(ToDo)
        self.admin = User.objects.create_superuser('root',
                                                   'root@root.ru',
                                                   'root', )

    def test_todo_update_quest(self):
        response = self.client.put(f'{self.url}{self.todo.id}/',
                                   {'text': 'Ничего!'})

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        todo = self.client.get(f'{self.url}{self.todo.id}/')
        self.assertNotEqual(json.loads(todo.content)['text'], 'Ничего!')

    def test_todo_update_admin(self):
        self.client.force_authenticate(user=self.admin)
        response = self.client.patch(f'{self.url}{self.todo.id}/',
                                     {'text': 'Ничего!'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        todo = self.client.get(f'{self.url}{self.todo.id}/')
        self.assertEqual(json.loads(todo.content)['text'], 'Ничего!')


class TestLiveTests(TestCase):

    def test_live(self):
        client = RequestsClient()
        response = client.get('http://127.0.0.1:8000/api/')
        assert response.status_code == 200
