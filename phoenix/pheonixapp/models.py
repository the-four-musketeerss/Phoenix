from django.db import models
# from knox.modles import AuthToten

from django.contrib.auth.models import User



class User1(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100,default='SOME STRING')
    email = models.EmailField(max_length = 100, unique = True)
    password = models.CharField(max_length=50,default='SOME STRING')
    image = models.CharField(max_length=100,default='SOME STRING')
    Bio = models.CharField(max_length=200,default='SOME STRING')
    owner = models.ForeignKey(
        User , related_name="myapp", on_delete=models.CASCADE,null = True)


class Blogs(models.Model):
    User1Id = models.ForeignKey(
        'User1',
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=100,default='SOME STRING')
    country = models.CharField(max_length=100,default='SOME STRING')
    Blog = models.TextField(blank=True)
    image = models.CharField(max_length=500,default='SOME STRING')


