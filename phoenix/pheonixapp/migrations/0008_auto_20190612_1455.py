# Generated by Django 2.2.2 on 2019-06-12 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pheonixapp', '0007_hotels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotels',
            name='country',
            field=models.CharField(default='SOME STRING', max_length=100),
        ),
        migrations.AlterField(
            model_name='hotels',
            name='image',
            field=models.CharField(default='SOME STRING', max_length=500),
        ),
    ]