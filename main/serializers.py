from rest_framework.serializers import ModelSerializer
from main.models import User

class UserModelSerializer(ModelSerializer):
    """Сериализатор модели пользователя"""

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')