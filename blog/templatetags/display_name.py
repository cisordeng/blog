from django import template

register = template.Library()  #自定义filter时必须加上

@register.filter(name='display_name')
def display_name(value, arg):
    return eval('value.get_'+arg+'_display')()
