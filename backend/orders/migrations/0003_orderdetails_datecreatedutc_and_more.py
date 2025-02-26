# Generated by Django 4.1.7 on 2024-10-25 10:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_remove_orderdetails_advance_amount_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderdetails',
            name='DateCreatedUtc',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='DateModifiedUtc',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='isActive',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='isDeleted',
            field=models.BooleanField(default=False),
        ),
    ]
