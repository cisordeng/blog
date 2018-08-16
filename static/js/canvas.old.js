function DrawLine(opx,opy,op,width,color,time){
	for(var i=op[0];i<op[1]-1;i++)
		setTimeout("Line(["+opx[i]+","+opx[i+1]+"],["+opy[i]+","+opy[i+1]+"],"+width+",'"+color+"')",i*1+time);
}
function Line(opx,opy,width,color){
	var canvas=document.getElementById('canvas');
	var ctx=canvas.getContext('2d');
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(opx[0],opy[0]);
	ctx.lineTo(opx[1],opy[1]);
	ctx.lineCap="round";
	ctx.stroke();
}
function MakeCoor(){
	opx = [];
	opy = [];
	width = 400;
	color = '#24262e';
	time = 0;
	for(var i=200;i<600;i++){
		opx[i] = 400;
		opy[i] = i;
	}
	DrawLine(opx,opy,[200,600],width,color,time);

	width = 400;
	time = 600;
	for(var i=200;i<600;i++){
		opx[i] = i;
		opy[i] = 400;
	}
	DrawLine(opx,opy,[200,600],width,color,time);
	
	width = 20;
	color = '#fff';
	time = 1200;
	for(var i=200;i<450;i++){
		opx[i] = i;
		opy[i] = 190;
	}
	DrawLine(opx,opy,[200,450],width,color,time);
	
	time = 1800;
	for(var i=350;i<600;i++){
		opx[i] = i;
		opy[i] = 610;
	}
	DrawLine(opx,opy,[350,600],width,color,time);
	
	time = 2400;
	width = 50;
	for(var i=375;i<425;i++){
		opx[i] = i;
		opy[i] = 100;
	}
	DrawLine(opx,opy,[375,425],width,color,time);
	
	time = 3000;
	width = 50;	
	for(var i=375;i<425;i++){
		opx[i] = i;
		opy[i] = 700;
	}
	DrawLine(opx,opy,[375,425],width,color,time);

	width = 20;
	time = 3600;
	a = 1;
	for(var i=100;i<700;i++){
		opx[i] = i;
		opy[i] = -1/40000/a/a/a*Math.pow(a*(opx[i]-400),3)+400;
	}
	DrawLine(opx,opy,[100,700],width,color,time);
}
