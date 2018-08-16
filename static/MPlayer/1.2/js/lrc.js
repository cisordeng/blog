

function Lrc(n){
	var m=document.getElementById('music');
	var x=m.currentTime;
	var s=parseInt((x/60)/10)+""+parseInt((x/60)%10)+":"
				+parseInt((x%60)/10)+""+parseInt((x%60)%10);

	var l=document.getElementById('lrc');
	var rc=[];
	rc[0]=
/*'[ti:红日]'+
'[ar:李克勤]'+
'[al:Elements - 励志歌曲]'+
'[by:]'+*/
'[00:00.10]红日 (粤语) - 李克勤'+
'[00:00.60]'+
'[00:21.23]命运就算颠沛流离'+
'[00:22.91]命运就算曲折离奇'+
'[00:24.97]命运就算恐吓着你做人没趣味'+
'[00:28.47]别流泪心酸更不应舍弃'+
'[00:32.40]我愿能一生永远陪伴你'+
'[00:37.14]命运就算颠沛流离'+
'[00:38.95]命运就算曲折离奇'+
'[00:40.95]命运就算恐吓着你做人没趣味'+
'[00:44.38]别流泪心酸更不应舍弃'+
'[00:48.37]我愿能一生永远陪伴你'+
'[00:51.99]'+
'[00:53.05]哦~'+  
'[01:00.98]一生之中兜兜转转那会看清楚'+
'[01:04.13]彷徨时我也试过独坐一角像是没协助'+
'[01:08.35]'+
'[01:08.98]在某年那幼小的我'+
'[01:12.29]跌倒过几多几多落泪在雨夜滂沱'+
'[01:16.90]一生之中弯弯曲曲我也要走过'+
'[01:20.34]从何时有你有你伴我给我热烈地拍和'+
'[01:24.39]像红日之火燃点真的我'+
'[01:28.54]结伴行千山也定能踏过'+
'[01:32.09]让晚风轻轻吹过'+
'[01:36.46]伴送着清幽花香像是在祝福你我'+
'[01:40.39]让晚星轻轻闪过'+
'[01:44.20]闪出你每个希冀如浪花快要沾湿我'+
'[01:49.80]'+
'[01:52.74]命运就算颠沛流离'+
'[01:54.86]命运就算曲折离奇'+
'[01:56.80]命运就算恐吓着你做人没趣味'+
'[02:00.29]别流泪心酸更不应舍弃'+
'[02:04.70]我愿能一生永远陪伴你'+
'[02:08.07]'+
'[02:16.93]一生之中兜兜转转 那会看清楚'+
'[02:20.18]彷徨时我也试过独坐一角像是没协助'+
'[02:24.48]在某年 那幼小的我'+
'[02:28.22]跌倒过几多几多落泪在雨夜滂沱'+
'[02:32.72]一生之中弯弯曲曲我也要走过'+
'[02:36.15]从何时有你有你伴我给我热烈地拍和'+
'[02:40.27]像红日之火 燃点真的我'+
'[02:44.66]结伴行 千山也定能踏过'+
'[02:47.97]让晚风 轻轻吹过'+
'[02:52.40]伴送着清幽花香像是在祝福你我'+
'[02:56.08]让晚星 轻轻闪过'+
'[03:00.20]闪出你每个希冀如浪花 快要沾湿我'+
'[03:06.63]'+
'[03:08.75]命运就算颠沛流离'+
'[03:10.74]命运就算曲折离奇'+
'[03:12.80]命运就算恐吓着你做人没趣味'+
'[03:16.24]别流泪 心酸 更不应舍弃'+
'[03:20.23]我愿能 一生永远陪伴你'+
'[03:23.97]'+
'[03:24.97]命运就算颠沛流离'+
'[03:26.78]命运就算曲折离奇'+
'[03:28.78]命运就算恐吓着你做人没趣味'+
'[03:32.28]别流泪心酸更不应舍弃'+
'[03:36.55]我愿能一生永远陪伴你'+
'[03:41.04]命运就算颠沛流离'+
'[03:42.73]命运就算曲折离奇'+
'[03:44.79]命运就算恐吓着你做人没趣味'+
'[03:48.22]别流泪 心酸 更不应舍弃'+
'[03:52.15]我愿能 一生永远陪伴你'+
'[03:57.02]命运就算颠沛流离'+
'[03:58.77]命运就算曲折离奇'+
'[04:00.76]命运就算恐吓着你做人没趣味'+
'[04:04.34]别流泪 心酸 更不应舍弃'+
'[04:08.14]我愿能 一生永远陪伴你'+
'[04:12.82]命运就算颠沛流离'+
'[04:14.70]命运就算曲折离奇'+
'[04:16.82]命运就算恐吓着你做人没趣味'+
'[04:20.25]别流泪 心酸 更不应舍弃'+
'[04:24.18]我愿能 一生永远陪伴你'+
'[04:28.67]哦~';


	rc[1]=
'[00:00.00]The Greatest - Sia'+
'[00:17.00]Uh-oh running out of breath but I<br/>虽然有些喘不过气 而我'+
'[00:20.00]Oh I I got stamina<br/>而我 我仍精力充沛'+
'[00:23.00]Uh-oh running now I close my eyes<br/>纵使我精疲力竭 我闭上双眼'+
'[00:25.00]Well oh I got stamina<br/>我激情澎湃活力迸发'+
'[00:27.00]And uh-oh I see another mountain to climb<br/>纵有更高的山峰等着我攀登'+
'[00:30.00]But I I got stamina<br/>而我斗志昂扬意气风发'+
'[00:34.00]And uh-oh I need another love to be mine<br/>我渴望一份属于我的爱'+
'[00:35.00]Cause I I got stamina<br/>因为我激情无限'+
'[00:37.00]Don\'t give up I won\'t give up<br/>绝不放弃 我绝不会放弃'+
'[00:40.00]Don\'t give up no no no<br/>绝不放弃'+
'[00:42.00]Don\'t give up I won\'t give up<br/>绝不放弃 我绝不会放弃'+
'[00:45.00]Don\'t give up no no no<br/>绝不放弃'+
'[00:47.00]I\'m free to be the greatest I\'m alive<br/>我纵情自如只为成为最好 不卑不亢存活于世'+
'[00:52.00]I\'m free to be the greatest here tonight the greatest<br/>我纵情自如只为成为最好 今夜只为最好'+
'[00:56.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[01:02.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[01:07.00]Well uh-oh running out of breath but I<br/>虽然有些喘不过气 而我'+
'[01:10.00]Oh I I got stamina<br/>而我 我仍精力充沛'+
'[01:13.00]Uh-oh running now I close my eyes<br/>纵使我精疲力竭 我闭上双眼'+
'[01:15.00]But oh I got stamina<br/>我激情澎湃活力迸发'+
'[01:17.00]And oh yeah running to the waves below<br/>波涛汹涌中 我随波逐浪'+
'[01:20.00]Uh-oh I got stamina<br/>我朝气蓬勃斗志昂扬'+
'[01:22.00]And oh yeah I\'m running and I\'m just enough<br/>我狂奔不止 至于千里'+
'[01:25.00]And uh-oh I got stamina<br/>而我激情澎湃活力迸发'+
'[01:27.00]Don\'t give up I won\'t give up<br/>绝不放弃 我绝不会放弃'+
'[01:30.00]Don\'t give up no no no<br/>绝不放弃'+
'[01:32.00]Don\'t give up I won\'t give up<br/>绝不放弃 我绝不会放弃'+
'[01:34.00]Don\'t give up no no no<br/>绝不放弃'+
'[01:37.00]I\'m free to be the greatest I\'m alive<br/>我纵情自如只为成为最好 不卑不亢存活于世'+
'[01:42.00]I\'m free to be the greatest here tonight the greatest<br/>我纵情自如只为成为最好 今夜只为最好'+
'[01:46.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[01:51.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[01:57.00]Oh-oh I got stamina<br/>我激情澎湃'+
'[01:59.00]Oh-oh I got stamina<br/>我朝气蓬勃'+
'[02:02.00]Oh-oh I got stamina<br/>我精力充沛'+
'[02:05.00]Oh-oh I got stamina<br/>我斗志昂扬'+
'[02:26.00]Don\'t give up no no I won\'t give up no no<br/>绝不放弃 我绝不会放弃'+
'[02:30.00]Don\'t give up no no no nah<br/>绝不放弃'+
'[02:32.00]Don\'t give up I won\'t give up<br/>绝不放弃 我绝不会放弃'+
'[02:34.00]Don\'t give up no no no<br/>绝不放弃'+
'[02:37.00]I\'m free to be the greatest I\'m alive<br/>我纵情自如只为成为最好 不卑不亢存活于世'+
'[02:42.00]I\'m free to be the greatest here tonight the greatest<br/>我纵情自如只为成为最好 今夜只为最好'+
'[02:46.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[02:49.00]Don\'t give up no no no<br/>绝不放弃'+
'[02:51.00]The greatest the greatest alive<br/>存活于世 不朽传奇'+
'[02:54.00]Don\'t give up no no no<br/>绝不放弃'+
'[02:56.00]Don\'t give up don\'t give up don\'t give up I got stamina<br/>绝不放弃 我朝气蓬勃'+
'[03:02.00]Don\'t give up don\'t give up don\'t give up I got stamina<br/>绝不放弃 我精力充沛'+
'[03:06.00]Don\'t give up don\'t give up don\'t give up I got stamina<br/>绝不放弃 我斗志昂扬'+
'[03:11.00]Don\'t give up don\'t give up don\'t give up I got stamina<br/>绝不放弃 我激情澎湃'+
'[03:17.00]Don\'t give up don\'t give up don\'t give up I got stamina<br/>绝不放弃 我活力迸发'

var r=rc[n].split(/\[\d{2}\:\d{2}\.\d{2}\]/);
var t=rc[n].split(/[^\d\:\.]+/);

	for(var i=0;i<t.length;i++)
	{
		if(t[i].substring(0,5)==s&&r[i]!="")
		{

			l.innerHTML=r[i];
		}
	}
}

