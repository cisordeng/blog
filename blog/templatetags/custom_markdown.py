import markdown

from django import template
from django.template.defaultfilters import stringfilter
from django.utils.encoding import force_text
from django.utils.safestring import mark_safe
from markdown.extensions.toc import TocExtension
from django.utils.text import slugify

register = template.Library()  #自定义filter时必须加上

# @符号开始的代码不是注释
@register.filter(is_safe=True)  #注册template filter
@stringfilter  #希望字符串作为参数
def custom_markdown(value):
    return mark_safe(markdown.markdown(value,
        extensions = [
                        'fenced_code', 
                        'codehilite(css_class=highlight)',
                        #'toc',
                        TocExtension(slugify=slugify),
                        'tables', 
                        'sane_lists',
                        ],
                       ))
#                                       safe_mode=False,
#                                       enable_attributes=False))
