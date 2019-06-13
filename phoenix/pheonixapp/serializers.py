from rest_framework import serializers
from pheonixapp.models import Profile
from pheonixapp.models import Blogs
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from pheonixapp.models import Hotels




# class postSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

class BlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = '__all__'


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id" , "username" ,"email" , "password" )
        extra_kwargs = {'password':{'write_only':True}}

    def create(self , validated_data):
        user = User.objects.create_user(
        validated_data["username"],validated_data["password"])
        return user

# class SigninSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()
#     def validate(self,data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         # raise serializers.ValidationError("ERORR")


class SigninSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    print("\n\n\n username: ", username, "\n\n\n password: ", password )
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'

