from django.contrib.auth.hashers import make_password
from django.core.management import BaseCommand

from main.models import User


class Command(BaseCommand):
    """Команда создает суперюзера и трех тест-пользователей"""

    def handle(self, *args, **options):
        User.objects.create_superuser('root', password='123', email='superuser@local.com')

        for i in range(3):
            User.objects.create(username=f'user_{i}', password=make_password('123'), email=f'testuser{i}@local.com',
                                first_name=f'Имя_{i}', last_name=f'Фамилия_{i}')
