from django.db import models
from django.contrib.auth.models import User

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     course = models.CharField(max_length=100, blank=True, null=True)
#     branch = models.CharField(max_length=100, blank=True, null=True)
#     skill = models.TextField(blank=True, null=True)
#     urself = models.TextField(blank=True, null=True)  # "About Me" field

#     def __str__(self):
#         return self.user.username

class Student(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    Course = models.CharField(max_length=100)
    Branch = models.CharField(max_length=100)
    Skills = models.CharField(max_length=100)
    E_credits = models.IntegerField(default=0)
    Uploaded_Documents = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username