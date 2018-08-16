$(function(){
	$(".wrap .index").on("click",">li",function(){
	
		$(".selected").removeClass('selected');/*remove*/
		
		$(this).addClass("selected");/*add*/
	});

	$("#top").click(function(){
		$("html,body").animate({scrollTop:0},'slow');
	});

    $("#bt-menu").click(function(){
		$(this).toggleClass('display-nav');
        $('nav').toggleClass('display-nav');
        $('#main').toggleClass('display-nav');
        $('#mplayer').toggleClass('display-nav');
    });
    $("#bt-music").click(function(){
        $("#mplayer").toggleClass('display-mplayer');
        $("body").toggleClass('hidden-scroller');
    });

    $("#main").click(function (){
		$(".display-nav").toggleClass('display-nav');/*remove*/
    });


    //$(".toc").append("<div id='bt-toc'>123</div>");
	$(window).scroll(function(){
		if($(this).scrollTop()>1){
			$("#top").css("opacity","1");
		}
		else{
            $("#top").css("opacity","0");
		}

		$(".display-nav").removeClass('display-nav');/*remove*/
    });


});

function getDonate(){
	var str="<div id='lbody'><div id='byte-info'><div class='close-info'>╳</div><img id='byte' src='/static/donate_me.png'/></div>";
	$("body").after(str);	
	$(".close-info").click(function(){
		$("#lbody").remove();
	});
}

function Init($this){
	$this.addClass("selected");
}

function get_runtime(){
    var dt_now = new Date();
    var dt_his = new Date('2017-10-05 01:02:03');
    var dt = dt_now - dt_his;
    run_d = Math.floor(dt/(1000*3600*24)) + ' 天 ';
    run_h = Math.floor(dt%(1000*3600*24)/(1000*3600)) + ' 时 ';
    run_m = Math.floor(dt%(1000*3600*24)%(1000*3600)/(1000*60)) + ' 分 ';
    run_s = Math.floor(dt%(1000*3600*24)%(1000*3600)%(1000*60)/1000) + ' 秒 ';
    $('#f-time').text("已运行: "+run_d + run_h + run_m + run_s);
    window.setTimeout("get_runtime();", 1000);
}
