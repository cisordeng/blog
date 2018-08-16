

function Play(){
	var m=document.getElementById('music');
	if(m.paused){
		m.play();
	}
	else {
		m.pause();
	}

}

function Stop(){
	var m=document.getElementById('music');
	m.pause();
	m.currentTime=0;
}

function play_chang_css(){
	var m=document.getElementById('music');
	var p=document.getElementById('play_button');
	if(!m.paused){
		p.className="pause_css";
	}
	else{
		p.className="play_css";
	}
}


function music_Buffer(){ 
var m=document.getElementById('music');
var timeRanges = m.buffered;
var timeBuffered = timeRanges.end(timeRanges.length - 1);
var bufferPercent = timeBuffered / m.duration; 

var p=document.getElementById('music_Buffer');
p.value=bufferPercent*100;
}
setInterval("music_Buffer();Time();play_chang_css()",10);



function Time(){
	var m=document.getElementById('music');
	var t=document.getElementById('time');

	var x=m.duration-m.currentTime;
	var t_string=parseInt((x/60)/10)+""+parseInt((x/60)%10)+":"
				+parseInt((x%60)/10)+""+parseInt((x%60)%10);
	t.innerHTML=t_string;
}

var n=1,run_lrc,flag=false,time=0;
window.onload=function(){

	Next();//init audio

var d = document.getElementById('drag_button');
var m=document.getElementById('music');
var a=document.getElementById('all');
d.addEventListener("mousedown", function(ed) {

    flag=true;
	a.addEventListener("mousemove",function(em){
		if(flag&&em.clientX-640>=0&&em.clientX-640<=320){
		d.style.left=em.clientX-9-480+"px";
		time=(em.clientX-640)/320*m.duration;
		}
	});


	a.addEventListener("mouseup",function(){
		if (flag) {
			flag=false;
			m.currentTime=time;
		}
	});
	

});


var p=document.getElementById('click_progress');
p.addEventListener("click",function(ec){
			var t=(ec.clientX-640)/320*m.duration;
			m.currentTime=t;
	});



var next_one=document.getElementById('next_one');
	next_one.addEventListener("click", function() {
		Next();
	});

var previous_track=document.getElementById('previous_track');
	previous_track.addEventListener("click", function() {
		Previous();
	});



}

function Next(){
var m=document.getElementById('music');
var p=document.getElementById('musicplayer');
		var sr=[];
		sr[0]="music/红日 - 李克勤.mp3";
		sr[1]="music/The Greatest - Sia.mp3";
		m.src=sr[n];
		var image_src="image/music_image/"+sr[n].substring(6,sr[n].length-3)+"jpg";
		p.style.backgroundImage="url('"+image_src+"')";
		p.style.backgroundRepeat="no-repeat";
		p.style.backgroundSize="cover";
  		p.style.backgroundPosition="0px -150px";
		m.play();
		var cache=run_lrc;
		var fun="Lrc("+n+")";
		run_lrc=setInterval(fun,10);
		n++;
		clearInterval(cache);
		if(n>=sr.length){
			n=0;
		}
	}

function Previous(){
var p=document.getElementById('musicplayer');
var m=document.getElementById('music');
		var sr=[];
		sr[0]="music/红日 - 李克勤.mp3";
		sr[1]="music/The Greatest - Sia.mp3";
		m.src=sr[n];
		var image_src="image/music_image/"+sr[n].substring(6,sr[n].length-3)+"jpg";
		p.style.backgroundImage="url('"+image_src+"')";

		m.play();
		var cache=run_lrc;
		var fun="Lrc("+n+")";
		run_lrc=setInterval(fun,10);
		n--;
		clearInterval(cache);
		if(n<0){
			n=sr.length-1;
		}
	}


	function Progress(){
		var m=document.getElementById('music');
		var p=document.getElementById('progress');
		var d=document.getElementById('drag_button');
		if(!flag){
			p.value=m.currentTime/m.duration*100;
			d.style.left=(p.value/100*320+160-9).toString()+"px";
			//console.log("播放时间->"+m.currentTime);
			//console.log("time->"+time);
		}
		else{
			p.value=time/m.duration*100;
		}
	}
	setInterval("Progress()",10);
