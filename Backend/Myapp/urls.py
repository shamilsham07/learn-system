from .import views
from django.urls import path
from django.urls import path,include


urlpatterns = [
    path("signup/",views.signup),
    path("Login",views.Login),
    path("filecreation",views.filecreation),
    path("startchat",views.Chating),    

]
     