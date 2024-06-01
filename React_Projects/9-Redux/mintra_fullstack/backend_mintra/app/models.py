from django.db import models

# Create your models here.
companyChoice = (
    ("Carlton London","Carlton London"),
    ('CUKOO','CUKOO'),
    ('TELLY','TELLY'),
    ('Unknown','Unknown'),
)

class product(models.Model):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to='media')
    company = models.CharField(max_length=100,choices=companyChoice,default='Unknown')
    discount_percentage = models.PositiveIntegerField(default=1)
    original_price = models.PositiveIntegerField(default=1)
    return_period = models.PositiveIntegerField(default=14)
    delivary_date = models.DateTimeField()
    count = models.PositiveIntegerField(default=0)
    stars = models.FloatField(default=4.5)


