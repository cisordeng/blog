from django.shortcuts import render
from blog.models import Article, Log, Word, Message, PV
from django.contrib.sessions.models import Session
from django.shortcuts import render_to_response, render
from django.http import HttpResponse
from blog.forms import MessageForm
from blog.markdown.translater import getHTML
from markdown import markdown
import requests
import datetime
# Create your views here.

def page_not_found(request):
    return render_to_response('error/404.html')

def page_error(request):
    return render_to_response(request, 'error/500.html')

def permission_denied(request):
    return render_to_response(request, 'error/403.html')



def cache(request):
    return render_to_response('index.cache')

def index(request):
    count_pv(request);
    return render_to_response('index.html')

def article(request,title=''):
    title = title
    article = Article.objects.filter(title = title)
    if count_pv(request):
        article[0].add_views()
    return render_to_response('article.html',{'article' : article[0], 'online': get_online()})

def articles(request):
    count_pv(request);
    page = int(request.GET.get('page','1'))
    num = len(Article.objects.order_by('-timestamp'))
    if num%10 != 0:
        pages = num//10 + 1
    else:
        pages = num//10

    article_list = Article.objects.order_by('-timestamp')[(page-1)*10:page*10]#按时间戳排序
    current = page

    for n in article_list:
        n.body = getHTML(n.body)
    return render_to_response('articles.html',{'article_list' : article_list,'current' : current,'pages' : pages, 'online': get_online()})

def log(request):
    count_pv(request);
    page = int(request.GET.get('page','1'))
    leng = len(Log.objects.order_by('-timestamp'))
    num = 20
    if leng%num != 0:
        pages = leng//num + 1
    else:
        pages = leng//num
    


    log_list = Log.objects.order_by('-timestamp')[(page-1)*num:page*num]#按时间戳排序
    return render_to_response('log.html',{'log_list' : log_list,'current' : page,'pages' : pages, 'online': get_online() })

def word(request,title=''):
    count_pv(request);
    page = 0
    current = 0
    num = len(Word.objects.order_by('-timestamp'))
    if num%5 != 0:
        page = num//5 + 1
    else:
        page = num//5


    if title == '':
        title = '$1'
    if title[0] == '$' and title[1:].isdigit():
        word_list = Word.objects.order_by('-timestamp')[(int(title[1:])-1)*5:int(title[1:])*5]#按时间戳排序
        current = int(title[1:])
    for n in word_list:
        n.body = getHTML(n.body)
    return render_to_response('word.html',{'word_list' : word_list,'current' : current,'page' : range(1,page+1), 'online': get_online()})

    

def message(request):
    count_pv(request);
    message_list = Message.objects.order_by('-timestamp')
    form = MessageForm()
    if request.POST and (request.POST.get('body','') != ''):
        if request.session.get('has_msged', False):
            return HttpResponse("十分钟内只能评论一条哦")
        '''
        if form.is_valid():#验证数据是否合法
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
        '''
        body  = request.POST.get('body','匿')
        color = request.POST.get('color','#242424')
        pos   = request.POST.get('pos','200px|300px')
        Message.objects.create(name='',email='',body=body, color=color, pos=pos, siteurl='')
        '''
            siteurl = form.cleaned_data['siteurl']
            Message.objects.create(name=name,email=email,body=body,siteurl=siteurl)
            form = MessageForm()
        '''
        request.session['has_msged'] = True
    return render(request,'message.html',{'form': form,'message_list': message_list.reverse(), 'online': get_online() })

    # 博客全局访问信息记录(返回值标记是否需要自增,供article使用)
def count_pv(request):
    views_info = request.session.get('views_info')
    # 非第一次访问该页面
    if views_info:
        timer = views_info.get(request.META.get('PATH_INFO','/'))
        if timer:
            last_time = datetime.datetime.strptime(timer[:-7], "%Y-%m-%d %H:%M:%S")
        # 距上次访问该页面不超过5min
            if datetime.datetime.now() < last_time + datetime.timedelta(minutes=5):
                print('<5min')
                return False
    else:
        views_info = {}

    pv = PV(ip=get_ip(request),path=request.META.get('PATH_INFO','/'))
    pv.save()
    views_info[request.META.get('PATH_INFO','/')] = str(datetime.datetime.now())
    request.session['views_info'] = views_info
    #print(views_info)
    #print(request.META)
    return True

def get_online(): 
    online_sessions = Session.objects.filter(expire_date__gte=datetime.datetime.now())
    return len(online_sessions)

def get_title(path):
    url = path.strip('/').split('/')
    try:
        if url[0] == 'articles':
            return url[1]
    except:
        return None

def get_ip(request):
    return request.META.get('HTTP_X_FORWARDED_FOR',request.META.get('REMOTE_ADDR','未知IP'))

def get_netease_url(request):
    id = request.GET.get('id','')
    res = requests.get('http://music.163.com/song/media/outer/url?id=' + id)
    return HttpResponse(res.url)
