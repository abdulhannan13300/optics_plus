from django.db import models

class BaseEntity(models.Model):
    isDeleted = models.BooleanField();
    isActive = models.BooleanField();
    DateCreatedUtc = models.DateTimeField(auto_now_add=True);
    DateModifiesUtc = models.DateTimeField(auto_now=True);