# Generated by Django 4.1.7 on 2024-10-29 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('optics', '0003_shop_datecreatedutc_shop_datemodifiedutc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='contact_number',
            field=models.CharField(default=9090909090, max_length=15),
            preserve_default=False,
        ),
    ]
