from django.db import models

# Create your models here.
from main.models import User


class Project(models.Model):
    """
    Модель проекта
    """
    name = models.CharField('Название', max_length=255)
    repo_link = models.CharField('Ссылка на репозиторий', max_length=255, null=True, blank=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return f'{self.name}'


class ToDo(models.Model):
    """
    Модель заметки
    """
    project = models.ForeignKey(Project, verbose_name='Проект', on_delete=models.CASCADE)
    text = models.TextField('Текст заметки')
    created = models.DateField('Создан', auto_now_add=True)
    updated = models.DateField('Обновлен', auto_now=True)
    user = models.OneToOneField(User, verbose_name='Пользователь', on_delete=models.CASCADE, null=False, db_index=True)
    activity = models.BooleanField(verbose_name='Активность', default=True)

    def __str__(self):
        return f'{self.project}'
