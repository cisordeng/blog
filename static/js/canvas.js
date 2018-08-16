var T = 0;
function DrawLine(opx,opy,op,width,color,time){
	for(var i=op[0];i<op[1]-1;i++)
		setTimeout("Line(["+opx[i]+","+opx[i+1]+"],["+opy[i]+","+opy[i+1]+"],"+width+",'"+color+"')",i*time+T);
	T += op[1]*time;
}
function Line(opx,opy,width,color,shadow){
	var canvas=document.getElementById('canvas');
	var ctx=canvas.getContext('2d');
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	if(shadow){
		ctx.shadowOffsetX = 15; // 阴影Y轴偏移
		ctx.shadowOffsetY = 15; // 阴影X轴偏移
		ctx.shadowBlur = 14; // 模糊尺寸
		ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
	}
	ctx.beginPath();
	ctx.moveTo(opx[0],opy[0]);
	ctx.lineTo(opx[1],opy[1]);
	ctx.lineCap="round";
	ctx.stroke();
}
function MakeCoor(op){
	opx = [];
	opy = [];
	width = canvas.width/2;
	Width = width;
	color = '#24262e';
	time = 1;
	for(var i=width/2;i<canvas.width-width/2;i++){
		opx[i] = width;
		opy[i] = i;
	}
	DrawLine(opx,opy,[width/2,canvas.width-width/2],width,color,time,true);

	for(var i=width/2;i<canvas.width-width/2;i++){
		opx[i] = i;
		opy[i] = width;
	}
	DrawLine(opx,opy,[width/2,canvas.width-width/2],width,color,time,true);
	
	width = op[0];
	color = op[1];
	for(var i=Width/2;i<5/8*Width+Width/2;i++){
		opx[i] = i;
		opy[i] = Width/2-width/2;
	}
	DrawLine(opx,opy,[Width/2,5/8*Width+Width/2],width,color,time,false);
	
	for(var i=canvas.width-Width/2-5/8*Width;i<canvas.width-Width/2;i++){
		opx[i] = i;
		opy[i] = canvas.width-Width/2+width/2;
	}
	DrawLine(opx,opy,[canvas.width-Width/2-5/8*Width,canvas.width-Width/2],width,color,time,false);
	
	width = op[2];
	color = op[3];
	for(var i=Width-width/2;i<Width+width/2;i++){
		opx[i] = i;
		opy[i] = Width/4;
	}
	DrawLine(opx,opy,[Width-width/2,Width+width/2],width,color,time,false);
	
	for(var i=Width-width/2;i<Width+width/2;i++){
		opx[i] = i;
		opy[i] = canvas.width-Width/4;
	}
	DrawLine(opx,opy,[Width-width/2,Width+width/2],width,color,time,false);

	width = op[4];
	color = op[5];
	for(var i=Width/4;i<canvas.width-Width/4;i++){
		opx[i] = i;
		opy[i] = -4/Width/Width*Math.pow(opx[i]-Width,3)+Width;
	}
	DrawLine(opx,opy,[Width/4,canvas.width-Width/4],width,color,time,false);
	
	setTimeout("document.getElementById('canvas').style.margin = '0px auto';",T);
	setTimeout("document.getElementById('canvas').style.width = '700px';document.getElementById('img').style.width = '700px';",T+600);
	setTimeout("document.getElementsByTagName('span')[0].style.opacity = '1';",T+1200);
	setTimeout("document.getElementsByTagName('span')[1].style.opacity = '1';",T+1200+1000);
	setTimeout("document.getElementsByTagName('span')[2].style.opacity = '1';",T+1200+2000);
}
