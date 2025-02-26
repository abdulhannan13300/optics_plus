# Generated by Django 4.1.7 on 2024-10-25 10:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('customer_prescriptions', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customerprescription',
            name='DateCreatedUtc',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customerprescription',
            name='DateModifiedUtc',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='customerprescription',
            name='isActive',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='customerprescription',
            name='isDeleted',
            field=models.BooleanField(default=False),
        ),
    ]
