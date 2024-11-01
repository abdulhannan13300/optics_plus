from django.db import models

class BaseEntity(models.Model):
    isDeleted = models.BooleanField(default=False);
    isActive = models.BooleanField(default=True);
    DateCreatedUtc = models.DateTimeField(auto_now_add=True);
    DateModifiedUtc = models.DateTimeField(auto_now=True);
    
    class Meta:
        abstract = True  # This makes the model abstract