from rest_framework.serializers import ModelSerializer
from main.models import User

class UserModelSerializer(ModelSerializer):
    """Сериализатор модели пользователя"""

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

class UserModelSerialiverV2(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser',)
