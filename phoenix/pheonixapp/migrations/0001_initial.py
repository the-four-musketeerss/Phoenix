# Generated by Django 2.2.2 on 2019-06-19 13:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotels',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='SOME STRING', max_length=100)),
                ('country', models.CharField(default='SOME STRING', max_length=100)),
                ('phone', models.CharField(default='SOME STRING', max_length=50)),
                ('image', models.CharField(default='SOME STRING', max_length=500)),
                ('rating', models.CharField(default='SOME STRING', max_length=200)),
                ('price', models.CharField(default='SOME STRING', max_length=200)),
                ('desc', models.CharField(default='SOME STRING', max_length=500)),
                ('link', models.CharField(default='SOME STRING', max_length=900)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(default='SOME STRING', max_length=100)),
                ('email', models.CharField(default='SOME STRING', max_length=100, unique=True)),
                ('password', models.CharField(default='SOME STRING', max_length=100)),
                ('url', models.TextField(default='SOME STRING', max_length=21845)),
                ('bio', models.CharField(default='SOME STRING', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='SOME STRING', max_length=100)),
                ('country', models.CharField(default='SOME STRING', max_length=100)),
                ('Blog', models.TextField(blank=True, default='SOME STRING')),
                ('image', models.CharField(default='SOME STRING', max_length=500)),
                ('ProfileId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pheonixapp.Profile')),
            ],
        ),
    ]