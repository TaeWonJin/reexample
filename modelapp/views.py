from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.core.paginator import Paginator
from .models import Blog

def home(request):
    blogs = Blog.objects #쿼리셋 #메소드
    blog_list = Blog.objects.all()
    #블로그 객체 세 개를 한 페이지로 자르기
    paginator = Paginator(blog_list, 3)
    #request된 페이지가 뭔지를 알아내고 (request 페이지를 변수에 담아내고)
    page = request.GET.get('page')
    #request된 페이지를 얻어온 뒤 return 해 준다.
    posts = paginator.get_page(page)
    return render(request ,'home.html',{'blogs':blogs, 'posts':posts})

def detail(request, blog_id):
    blog_detail = get_object_or_404(Blog, pk= blog_id)
    return render(request, 'detail.html',{'blog':blog_detail})

def new(request): #new.html 띄어주는 함수
    return render(request,'new.html')

def create(request):
    blog=Blog()
    blog.title=request.GET['title']
    blog.body=request.GET['body']
    blog.pub_date=timezone.datetime.now()
    blog.save()
    return redirect('/blog/'+str(blog.id))
    #쿼리셋과 메소드의 형식
    #모델.쿼리셋(objects).메소드

def delete(request, blog_id):
    blog =Blog.object.get(id=blog_id)
    blog.delete()
    return redirect('home')


