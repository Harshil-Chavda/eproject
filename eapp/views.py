from django.shortcuts import render, redirect, HttpResponse 
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
# from .models import UserProfile
from .models import Student
from django.contrib.auth import authenticate, login as auth_login
# Create your views here.
def index(request):
    return render(request,'index.html')

def materials(request):
    return render(request,'pdfs_notes.html')

def video(request):
    return render(request,'video.html')

def contact(request):
    return render(request,'CONTACT_US.html')

def blogs(request):
    return render(request,'Blogs.html')

def ExchBooks(request):
    return render(request,'exchangebook.html')

def Login(request):
    if request.method == "POST":
        user_mail = request.POST.get('umail')
        pass1 = request.POST.get('upass')
        user = authenticate(request, username=user_mail, password=pass1)
        if user is not None:
            auth_login(request, user)
            return redirect('Profile')
        else:
            return render(request, 'login.html', {'error': "Username or Password is incorrect"})
    return render(request,'login.html')

def qt(request):
    return render(request,'Q_T.html')

@login_required
def Profile(request):
    current_user = request.user
    user_profile = Student.objects.get(user=current_user)
    return render(request,'profile.html', {'current_user': current_user, 'Profile': user_profile})

def Register(request):
    if request.method == "POST":
        first_name = request.POST.get('fname')
        last_name = request.POST.get('lname')
        user_mail = request.POST.get('mail')
        password = request.POST.get('pw')
        course = request.POST.get('ucourse')
        branch = request.POST.get('ubranch')
        skill = request.POST.get('uskill')
        urself = request.POST.get('uself')
        e_credits = request.POST.get('ecredits')
        u_documents = request.POST.get('udocuments')
        if User.objects.filter(email=user_mail).exists():
            return render(request, 'register.html', {'error': "Email already exists"})
        my_user = User.objects.create_user(
            username=user_mail,
            password=password,
            email=user_mail,
            first_name=first_name,
            last_name=last_name,
        )
        my_user.save()
        student = Student(
            user=my_user,
            Course=course,
            Branch=branch,
            Skills=skill,
            E_credits=e_credits,
            Uploaded_Documents=u_documents
        )
        student.save()
        return redirect('Login')  
    return render(request,'register.html')
