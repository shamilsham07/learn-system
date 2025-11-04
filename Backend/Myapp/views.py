from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .models import Signup
from django.contrib.auth.hashers import make_password,check_password
from django.core.mail import send_mail
from django.conf import settings


# Create your views here.



@api_view(["POST"])
def signup(request):
    try:
        data=request.data
        print(data)
        
        name=data.get("name")
        phonenumber=data.get("phonenumber")
        email=data.get("email")
        standard=data.get("standard")
        fathername=data.get("fathername")
        mothername=data.get("mothername")
        schoolname=data.get("school")
        password=data.get("password")
        try:
         Signup.objects.create(name=name,
                               phonenumber=phonenumber,
                               email=email,
                               standard=standard,
                               schoolname=schoolname
                               ,fathername=fathername,
                               mothername=mothername,
                               password=make_password(password)
                               )
               
        except Exception as e:
         print("creation error",e)
         print("hi")
         return JsonResponse({"emailerror":"email already exist in our data base"})
        return JsonResponse({"success":"created successfully"})
    
    except Exception as e:
        return JsonResponse({"error":"something went wrong" })
    
    
    
@api_view(["POST"])
def Login(request):
    try:     
        data=request.data
        # neeed to change this function
        initiallcall()
        username=data.get("username")
        password=data.get("password")
     
        checkuser=Signup.objects.get(email=username)    
        if checkuser:
            if check_password(password,checkuser.password):            
               return JsonResponse({"userlogs":"everything seems good"})
            else:
                print(e)
                return JsonResponse({"password wrong":"something went wrong"})
            
        return JsonResponse({"result":"everything seems good"})
    except Exception as e:
        print(e)
        return JsonResponse({"error":"something went wrong"})
    



def initiallcall():
  print("hello")
  print(settings.DEFAULT_FROM_EMAIL)
  try:
      send_mail(
         subject="testing",
         message="hello shamil",
         from_email=settings.DEFAULT_FROM_EMAIL,
         recipient_list=["shamilsham38@gmail.com"],
         fail_silently=False,    
             )       
  except Exception as e:
       print("error",e)   
   
   

 