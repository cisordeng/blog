from django.test import TestCase
import json
import requests
# Create your tests here.

def getLocation(ip):
    url = "http://ip.taobao.com/service/getIpInfo.php?ip="
    data = requests.get(url + ip)
    print(data.text)
    datadict=json.loads(data.text)
    for oneinfo in datadict:
        if "code" == oneinfo:
            if datadict[oneinfo] == 0:
                return datadict["data"]["country"] +'|'+ datadict["data"]["region"] +'|'+ datadict["data"]["city"] +'|'+ datadict["data"]["isp"]

#print(getLocation('12.32.15.19'))

#print(True|False)



#def get_title():
#    url = ['/articles/123456789','/articles/12346578979878977777777777/ ','/message/1/']
#    return [title.strip('/').split('/')[1] for title in url]
#

#print(get_title())
'''
a = []
a.append({'u':'t'})
a.append({'u1':'t'})

a = [b[u]]

print(a)
'''
