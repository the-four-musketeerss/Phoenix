# Generated by Django 2.2.2 on 2019-06-12 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pheonixapp', '0008_auto_20190612_1455'),
    ]

    operations = [
        migrations.AddField(
            model_name='hotels',
            name='desc',
            field=models.CharField(default='SOME STRING', max_length=500),
        ),
    ]