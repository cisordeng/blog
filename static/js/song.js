$(function(){
    $.ajax({
        url: '/static/api/netease-cloud-music.xjson',
        dataType: 'text',
        success: function(filedata) {
            var data = eval("("+filedata+")");
            data['list'].push(data['list'].shift());
			
            var listcache=0;
            var listnum=0;
			var songnum=0;
			var order='list';;
			
            get_author(data);
			get_list(data);
			get_song(data['list'][listnum]['song']);
            
            $("#mplayer").after("<audio id='py'></audio>");
			var audio = $("#py")[0];
			
            mInit(data,audio,listnum,songnum)
			//mPlay(data,audio,listnum,songnum);

			$("#music-list li").click(function(){
                console.log('1');
				get_song(data['list'][$(this).index()]['song']);
                listcache=$(this).index();
			});
			
			$('#music-song').on('click','tr',function(){
				listnum = listcache;
				songnum = $(this).index();
				mPlay(data,audio,listnum,songnum);
			});
			
			$(".ctrl").click(function(){
				if(audio.paused){
					audio.play();
					$('.ctrl img').attr('src','/static/playing.png');
					$('.ctrl').css('animation-play-state','running');
	                $('.mlrc').css('width','600px');
				}
				else{
					audio.pause();
					$('.ctrl img').attr('src','/static/paused.png');
					$('.ctrl').css('animation-play-state','paused');
	                $('.mlrc').css('width','0');
				}
			});

			$('#py').bind('ended',function(){
                $('.ctrl img').attr('src','/static/paused.png');
                if(order==='list'){
					listlength=data['list'][listnum]['song'].length;
					songnum=(songnum+1)%listlength;
					mPlay(data,audio,listnum,songnum)
				}
			});
            //window.setInterval("drawProgress()",1000);
            window.setInterval("lrc_roll()",50);
        }
    });


});
function get_author(data){
    var str="<img src='"+data['pic']+"'><span>"+data['nickname']+"</span>";
    $('#music-author').html(str);
}

function get_list(data){
	var str="<ul>";
	var lists = data['list'];
	for(var i=0;i<lists.length;i++){
		str+="<li><img src='"+lists[i]['pic']+"'><span>"+lists[i]['name']+"</span></li>";
	}
    str+="</ul>";
	//$('.mlists').html(str);
    $('#music-list').html(str);
}

function get_song(list){
	var str="<table>";
	for(var i=0;i<list.length;i++){
		str+="<tr><td>"+list[i]['name']+"</td><td>"+list[i]['singer']+"</td></tr>";
	}
    str+="</table>";
	//$('.mlist').html(str);
    $('#music-song').html(str);
}


var lrc_num=0;
var words=[];
function lrc_roll(){
    if(lrc_num<words.length && $('#py')[0].currentTime*1000+200>words[lrc_num][0]){
        $("#music-lrc ul").animate({scrollTop:50*++lrc_num},'slow');
    }
}


function get_lrc(song){
    lrc_num=0;
    words=[];
    $("#music-lrc ul").animate({scrollTop:0},'slow');
    
    var lrc=song['lyric']['lyric'];
    if(lrc==='null')
        return
    var str="<ul><li>...<span></span></li>";
    words=load_lrc(lrc);

	for(var i=0;i<words.length;i++){
		str+="<li><span>"+words[i][1]+"</span></li>";
	}
    str+="</ul>";
	$('#music-lrc').html(str);
    
}


function load_lrc(str){
	var lrc=str.trim().split('\n');
    for(var i=0;i<lrc.length;i++){
        words[i]=lrc[i].trim().trim('\n').substring(1).split(']');
        console.log(words[i]);
        words[i][0] = parseFloat(words[i][0].split(':')[0])*60*1000+
                      parseFloat(words[i][0].split(':')[1])*1000;
        if(isNaN(words[i][0])){
            words[i][0]=0;
            words[i][1]="...";
        }
        if(words[i][1]=="")
            words[i][1]="...";
    }
    return words;
}

function mInit(data,audio,listnum,songnum){
    mPlay(data,audio,listnum,songnum);
    audio.pause();
	$('.ctrl img').attr('src','/static/paused.png');
    $('.ctrl').css('animation-play-state','paused');
	$('.mlrc').css('width','0');
            
}

function mPlay(data,audio,listnum,songnum){
    get_song(data['list'][listnum]['song']);
    get_lrc(data['list'][listnum]['song'][songnum]);

	$('.ctrl').css({'background':'url('+data['list'][listnum]['song'][songnum]['pic']+')','background-size':'100%'});	
	audio.src=data['list'][listnum]['song'][songnum]['url'];
	audio.play();
	$('.ctrl img').attr('src','/static/playing.png');
	$('.ctrl').css('animation-play-state','running');
	$('.playing').removeClass('playing');
	$('.playing').removeClass('playing');
	$('.mlists>li:eq('+listnum+')').addClass('playing');
	$('.mlist>li:eq('+songnum+')').addClass('playing');
	$('.mlrc').css('width','600px');
   
    //$('canvas')[0].getContext("2d").clearRect(0,0,$('canvas')[0].width,$('canvas')[0].height);
}


function getTime(src){
	var audio = $('#py')[0];
	audio.src = src;
	return audio.duration
}

function drawProgress(){
    var alpha = $('#py')[0].currentTime/$('#py')[0].duration;

    var c=$('canvas')[0];
    var ctx=c.getContext("2d");
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(c.width/2,c.height/2,c.width/2,0.5*Math.PI,(2*alpha+0.5)*Math.PI);
    ctx.stroke();
}
