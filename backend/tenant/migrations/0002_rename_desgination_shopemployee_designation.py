# Generated by Django 4.2.6 on 2023-10-19 17:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tenant', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shopemployee',
            old_name='desgination',
            new_name='designation',
        ),
    ]
