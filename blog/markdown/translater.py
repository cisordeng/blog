import re

def getSpace(string):
	return re.sub('<[^>]+>', lambda m:m.group(0).replace('&nbsp;',' '), string.replace(' ','&nbsp;'))

def getLine(string):
	return string.replace('\r\n','<br>'+4*'&nbsp;')

def getH(string):
	string = ' ' + string	# exprase  start '#'
	for h in range(1,7):	# \g<name> of ?P<name>
		string = re.sub('(?P<save>[^#])'+'#'*h+'[&nbsp;]+(?P<text>((?!<br>).)+)[<br>]+', '\g<save><h'+str(h)+'>\g<text></h'+str(h)+'>',string)
	return string

def getA(string):#((?!&nbsp;).) exprase '&nbsp;' string
	#return re.sub('\[(?P<text>[^]]+)\]\((?P<href>[^")]+)(\"(?P<title>[^"]+)\")?\)','<a href="\g<href>" title="\g<title>">\g<text></a>',string)
	return re.sub('\[(?P<text>[^]]+)\]\((?P<href>[^")]+)(\"(?P<title>[^"]+)\")?\)',lambda m:'<a href="'+m.group(2).strip("&nbsp;")+'" title="'+m.groups("")[3]+'">'+m.group(1)+'</a>',string)#m.groups(" ") use " " replace None

def getCode(string):
	return re.sub('<br>'+'&nbsp;'*8+'(?P<text>[^<]+)<br>'+'&nbsp;'*4,'<code>'+'\g<text>'+'</code>',string)

def getHTML(string):
	string = getSpace(string)
	string = getLine(string)
	string = getH(string)
	string = getA(string)
	#string = getCode(string)
	return string
