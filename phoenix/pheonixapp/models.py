from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100,default='SOME STRING')
    email = models.EmailField(max_length = 100, unique = True)
    password = models.CharField(max_length=50,default='SOME STRING')
    image = models.CharField(max_length=100,default='SOME STRING')
    Bio = models.CharField(max_length=200,default='SOME STRING')


class Blogs(models.Model):
    UserId = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=100,default='SOME STRING')
    Blog = models.TextField(blank=True)


