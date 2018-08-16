from django.db import models
from django.contrib import admin
from django.utils import timezone

from ckeditor_uploader.fields import RichTextUploadingField
from mdeditor.fields import MDTextField
# Create your models here.

class Article(models.Model):
    title     = models.CharField(max_length = 150)
    body      = MDTextField()
    #body      = RichTextUploadingField(verbose_name='正文')
    #body      = models.TextField()
    imgurl    = models.CharField(max_length = 150)
    timestamp = models.DateTimeField()
    views     = models.PositiveIntegerField(default = 0)

    def add_views(self):
        self.views += 1
        self.save()

class Log(models.Model):
    timestamp    = models.DateTimeField()
    event        = models.CharField(max_length = 150)
    PROG_CHOICES = (
        (0,u'×'),
        {1,u'√'},
    )
    prog         = models.PositiveIntegerField(choices = PROG_CHOICES)

class Word(models.Model):
	body = models.TextField(blank=True)
	timestamp = models.DateTimeField()

class Message(models.Model):
    name      = models.CharField(max_length = 30, blank = True)
    email     = models.CharField(max_length = 30, blank = True)
    #body    = RichTextUploadingField(verbose_name='正文')
    body      = models.TextField()
    siteurl   = models.CharField(max_length = 150,blank=True)
    timestamp = models.DateTimeField(editable=False)
    pos       = models.CharField(max_length = 30)
    color     = models.CharField(max_length = 30)
    
    def save(self, *args, **kwargs):
        self.timestamp = timezone.localtime(timezone.now())
        return super(Message, self).save(*args, **kwargs)

class PV(models.Model):
    ip    = models.CharField(max_length = 30)
    path  = models.CharField(max_length = 300)
    timestamp = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        self.timestamp = timezone.localtime(timezone.now())
        return super(PV, self).save(*args, **kwargs)

class ArticleAdmin(admin.ModelAdmin):
	list_display = ('title','timestamp','views')

class LogAdmin(admin.ModelAdmin):
	list_display = ('timestamp','event','prog')

class WordAdmin(admin.ModelAdmin):
	list_display = ('body','timestamp')

class MessageAdmin(admin.ModelAdmin):
	list_display = ('body','timestamp')

class PVAdmin(admin.ModelAdmin):
	list_display = ('ip','path','timestamp')

admin.site.register(Article,ArticleAdmin)
admin.site.register(Log,LogAdmin)
admin.site.register(Word,WordAdmin)
admin.site.register(Message,MessageAdmin)
admin.site.register(PV,PVAdmin)
