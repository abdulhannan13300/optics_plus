# Generated by Django 4.1.7 on 2024-09-07 06:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('optics', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shop_admin', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='currency',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='optics.country'),
        ),
        migrations.AddField(
            model_name='city',
            name='state',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='optics.state'),
        ),
        migrations.AlterUniqueTogether(
            name='shoptaxdetails',
            unique_together={('id', 'shop_id')},
        ),
    ]
