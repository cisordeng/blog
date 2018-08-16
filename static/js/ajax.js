pushUrl(window.location.href);
function pushUrl(req){
	var state = {
		title: '123456',
		url: req,
		otherkey: 'abcd'
	};
	window.history.pushState(state, document.title, req);//改变url显示
}
function getPage(req)
{
getData(req);
//var state = {
//title: '123456',
//url: req,
//otherkey: 'abcd'
//};
//window.history.pushState(state, document.title, req);//改变url显示
pushUrl(req);
}
function getData(url){
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//$("#hidden").text(xmlhttp.responseText);
$("#page").html($(xmlhttp.responseText).find("#page").html());
$('#load-img').remove();
$("html,body").animate({scrollTop:0},'slow');
}
}
xmlhttp.open("GET",url,true);
xmlhttp.send();

}
window.addEventListener('popstate', function(e){
if (history.state){
var state = e.state;
getData(state.url);
$(".selected").removeClass('selected');/*remove*/
}
}, false);
