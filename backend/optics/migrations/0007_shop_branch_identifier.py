# Generated by Django 4.1.7 on 2024-12-16 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('optics', '0006_remove_shop_owner_shop_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='branch_identifier',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
