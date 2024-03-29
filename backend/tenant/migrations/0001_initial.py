# Generated by Django 4.2.7 on 2024-02-06 09:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('shared', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerPrescription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('reference_by', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ShopTaxDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tax_name', models.CharField(max_length=255)),
                ('tax_rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shared.shop')),
            ],
        ),
        migrations.CreateModel(
            name='ShopCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=255)),
                ('address', models.TextField()),
                ('pincode', models.CharField(max_length=6)),
                ('contact_number', models.CharField(max_length=15, unique=True)),
                ('alternate_number', models.CharField(max_length=15)),
                ('age', models.PositiveIntegerField()),
                ('gender', models.CharField(max_length=10)),
                ('dob', models.DateField()),
                ('Employee_of', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shared.shop')),
            ],
        ),
        migrations.CreateModel(
            name='OrderDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('frame_type', models.CharField(max_length=255)),
                ('frame_details', models.TextField()),
                ('frame_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('glass_detail', models.TextField()),
                ('glass_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('contact_lens_detail', models.TextField()),
                ('contact_lens_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('remarks', models.TextField()),
                ('extra_charges', models.DecimalField(decimal_places=2, max_digits=10)),
                ('advance_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('pending_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('delivery_status', models.CharField(max_length=20)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tenant.shopcustomer')),
                ('prescription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tenant.customerprescription')),
            ],
        ),
        migrations.AddField(
            model_name='customerprescription',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tenant.shopcustomer'),
        ),
    ]
