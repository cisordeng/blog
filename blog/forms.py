from django import forms
from ckeditor.fields import RichTextFormField
class MessageForm(forms.Form):
    name = forms.CharField(max_length = 30,widget=forms.TextInput(attrs={'placeholder': '告诉我你叫什么名字吧.'}))
    email = forms.EmailField(max_length = 30,widget=forms.TextInput(attrs={'placeholder': '方便找到你呀.'}))
    siteurl = forms.URLField(max_length = 150,widget=forms.TextInput(attrs={'placeholder': '告诉我你的窝吧.'}))
    #body = forms.CharField(widget=forms.Textarea(attrs={'placeholder': '想说点什么呀.'}))
    body = RichTextFormField(config_name='content')
