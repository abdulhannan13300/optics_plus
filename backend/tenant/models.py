# Create your models here.
# tenants/models.py

from django.db import models


from shared.models import  Client



# tenants/models.py

class ShopCustomer(models.Model):
    customer_name = models.CharField(max_length=255)
    address = models.TextField()
    # city = models.ForeignKey(City, on_delete=models.CASCADE)
    # state = models.ForeignKey(State, on_delete=models.CASCADE)
    # country = models.ForeignKey(Country, on_delete=models.CASCADE)
    pincode = models.CharField(max_length=6)
    contact_number = models.CharField(max_length=15, unique=True)
    alternate_number = models.CharField(max_length=15)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    Employee_of = models.ForeignKey(Client, on_delete=models.CASCADE)

class CustomerPrescription(models.Model):
    customer = models.ForeignKey(ShopCustomer, on_delete=models.CASCADE)
    date = models.DateField()
    reference_by = models.CharField(max_length=255)
    # od_r_sph = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_axis = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_va = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_add = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_vn = models.DecimalField(max_digits=5, decimal_places=2)
    # od_r_ipd = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_sph = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_cyl = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_axis = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_va = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_add = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_vn = models.DecimalField(max_digits=5, decimal_places=2)
    # os_l_ipd = models.DecimalField(max_digits=5, decimal_places=2)

class OrderDetails(models.Model):
    customer = models.ForeignKey(ShopCustomer, on_delete=models.CASCADE)
    date = models.DateField()
    prescription = models.ForeignKey(CustomerPrescription, on_delete=models.CASCADE)
    frame_type = models.CharField(max_length=255)
    frame_details = models.TextField()
    frame_price = models.DecimalField(max_digits=10, decimal_places=2)
    glass_detail = models.TextField()
    glass_price = models.DecimalField(max_digits=10, decimal_places=2)
    contact_lens_detail = models.TextField()
    contact_lens_price = models.DecimalField(max_digits=10, decimal_places=2)
    remarks = models.TextField()
    extra_charges = models.DecimalField(max_digits=10, decimal_places=2)
    advance_amount = models.DecimalField(max_digits=10, decimal_places=2)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    pending_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=20)

class ShopTaxDetails(models.Model):
    tax_name = models.CharField(max_length=255)
    tax_rate = models.DecimalField(max_digits=5, decimal_places=2)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
