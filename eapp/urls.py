from django.urls import path
from .views import *
urlpatterns = [

path('',index,name='Index'),
path('materials/',materials,name='Materials'),
path('video/',video,name='Videos'),
path('Blogs/',blogs,name='Blogs'),
path('Q_T/',qt,name='QT'),
path('CONTACT_US/',contact,name='Contact'),
path('exchangebook/',ExchBooks,name='Exchange'),
path('register/',Register,name='Register'),
path('login/',Login,name='Login'),
path('profile/',Profile,name='Profile'),
]
