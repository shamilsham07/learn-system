from django.db import models
from django.utils import timezone







class Signup(models.Model):
    name=models.CharField(max_length=100,blank=True,null=True)
    dateofsign=models.DateField(default=timezone.now)
    fathername=models.CharField(max_length=100,blank=True,null=True)
    mothername=models.CharField(max_length=100,blank=True,null=True)
    standard=models.CharField(max_length=2,blank=True,null=True)
    phonenumber=models.CharField(max_length=16,blank=True,null=True)
    email=models.EmailField(max_length=191,unique=True)
    schoolname=models.CharField(max_length=100,blank=True,null=True)
    password=models.CharField(max_length=256,blank=True,null=True)
    
class fileStore(models.Model):
    Filename=models.CharField(max_length=100,blank=True,null=True)
    date=models.DateField(default=timezone.now)
    studentid=models.ForeignKey(Signup,on_delete=models.CASCADE)
    filepath=models.FileField(upload_to="uploads/")
    
        
            