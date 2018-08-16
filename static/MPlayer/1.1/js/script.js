function drawLine_auto(){
	var canvas = document.getElementById("canvas"); 
	var m=document.getElementById('music');  
//�򵥵ؼ�⵱ǰ������Ƿ�֧��Canvas����������һЩ��֧��html5�����������ʾ�﷨����   
if(canvas.getContext){     
    //��ȡ��Ӧ��CanvasRenderingContext2D����(����)   
    var ctx = canvas.getContext("2d");   
       
    //ע�⣬Canvas������ϵ�ǣ�Canvas���������Ͻ�Ϊԭ��(0,0)������Ϊ�����꣬����Ϊ�����꣬��λ������(px)��   
      
    //��ʼһ���µĻ���·��  
    ctx.beginPath();
	//�����ߵĿ��
	ctx.lineWidth=20;   
	//������ɫ
	ctx.strokeStyle = "#EEBD44";  //#EEBD44
    //����ֱ�ߵ��������Ϊ(x0,y0)   
    ctx.moveTo(36, 80);   
    //����ֱ�ߵ��յ�����Ϊ(x1,y1)   
    ctx.lineTo(36+(240-36)*m.currentTime/m.duration, 80);   
    //���������˳���·������ֱ��   
    ctx.stroke();   
    //�رյ�ǰ�Ļ���·��
	if(m.currentTime>=m.duration-1){
	 ctx.clearRect(36,70,240,90);
	 drawLine_static(36,80,240,80);
	}
	 
}   
}
setInterval("drawLine_auto()",1000);

  function drawLine_static(x0,y0,x1,y1){
//��ȡCanvas����(����)   
var canvas = document.getElementById("canvas");   
//�򵥵ؼ�⵱ǰ������Ƿ�֧��Canvas����������һЩ��֧��html5�����������ʾ�﷨����   
if(canvas.getContext){     
    //��ȡ��Ӧ��CanvasRenderingContext2D����(����)   
    var ctx = canvas.getContext("2d");   
       
    //ע�⣬Canvas������ϵ�ǣ�Canvas���������Ͻ�Ϊԭ��(0,0)������Ϊ�����꣬����Ϊ�����꣬��λ������(px)��   
       
    //��ʼһ���µĻ���·��   
    ctx.beginPath();
	//�����ߵĿ��
	ctx.lineWidth=20;   
	//������ɫ
	ctx.strokeStyle = "#7D7D7D";  //#EEBD44
    //����ֱ�ߵ��������Ϊ(x0,y0)   
    ctx.moveTo(x0, y0);   
    //����ֱ�ߵ��յ�����Ϊ(x1,y1)   
    ctx.lineTo(x1, y1);   
    //���������˳���·������ֱ��   
    ctx.stroke();   
    //�رյ�ǰ�Ļ���·��   
    ctx.closePath();   
}   
}


function Play(){
	var m=document.getElementById('music');
	var b=document.getElementById('play_button');
	
	if(m.paused){
		m.play();
		b.value="||";
		}else{
		m.pause();
		b.value="?";
		}
}


function Stop(){
	var m=document.getElementById('music');
	var canvas = document.getElementById("canvas");
	var b= document.getElementById("play_button");
	var ctx = canvas.getContext("2d");
	if(!m.paused)
		{
		m.currentTime=0;
		m.pause();
		b.value="?";
		ctx.clearRect(36,70,240,90);
	    drawLine_static(36,80,240,80);
		}
}

function Time(){
   var m=document.getElementById('music');
   var t=document.getElementById("time");
   var b=document.getElementById('play_button');
   t.innerHTML=parseInt((m.duration-m.currentTime)/60)+" : "+parseInt((m.duration-m.currentTime)%60);
   if(m.ended){
   b.value="?";
   t.innerHTML=parseInt((m.duration)/60)+" : "+parseInt((m.duration)%60);
	   }

}
setInterval("Time()",1000);