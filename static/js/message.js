$(function(){
   $('#main').on('submit','#msg-form',function(){
        var body = $('#msg-form #msg-body').val();
        var pos = $('#msg-pos').val();
        var color = $('#msg-color').val();

        $.ajax({
        	type:"POST",
            data: { body: body, pos: pos, color: color },
            url: "/message/",
            dataType: "text",
            success: function(res){
                console.log('True');
         	},
         	error: function(e){
				console.log('留言出错啦'); 
         	}
         });
         // 去除表单默认提交
         event.preventDefault()
   }); 
});

var submit_flag=true,i=1,j=1;
function create_message(){
    if(submit_flag) {
        createBoard(true, "", "50%|50%", "");
        submit_flag=false;
    }
    else{
        //alert("you need submit you have been board~");
    }
}
function createBoard(able,message,pos,color) {

    /*var default_pos = (Math.random() * 1200).toString() + "px*" + (Math.random() * 600).toString() + "px";
     var default_background = "rgb(" + parseInt(Math.random() * 255).toString() + ","
     + parseInt(Math.random() * 255).toString() + ","
     + parseInt(Math.random() * 255).toString() + ")";//random color
     */

    if (!color)
        color="#c20c0c";

    var boarder = document.createElement("textarea");
    var style = document.createAttribute("class");
    style.value = "boarder_css";
    boarder.setAttribute("id","msg-body");
    boarder.setAttributeNode(style);
    //boarder.style.background = default_background;
    boarder.style.background = color;
    boarder.setAttribute("placeholder", "在这敲吧");

    var order = document.createElement("span");
    var style=document.createAttribute("class");
    style.value = "order_css";
    order.setAttributeNode(style);
    
    var add = document.getElementById('message-add');
    if(able) {

        var partent = document.createElement("span");
        var style=document.createAttribute("class");
        style.value="parent_css";
        partent.setAttributeNode(style);
        //partent.style.left = default_pos.split('*')[0];
        //partent.style.top = default_pos.split('*')[1];
        //partent.style.background = default_background;
        partent.style.left = pos.split('|')[0];
        partent.style.top = pos.split('|')[1];
        //partent.style.background = color;
        partent.style.zIndex=j++;

        var form = document.createElement("form");
        form.setAttribute("method","post");
        form.setAttribute("id","msg-form");

        var poss=document.createElement("input");
        poss.setAttribute("type","text");
        poss.setAttribute("id","msg-pos");
        poss.style.display="none";


        var colors = document.createElement("input");
        colors.setAttribute("id","msg-color");
        colors.setAttribute("type", "color");
        var style = document.createAttribute("class");
        style.value = "able_css";
        colors.setAttributeNode(style);
        colors.style.width = "50px";
        colors.style.right = "50px";
        colors.style.outline = "none";
        colors.value = "#c20c0c";

        colors.oninput = function () {
            //partent.style.background = colors.value;
            boarder.style.background = colors.value;
        }

        var submit = document.createElement("input");
        submit.setAttribute("type","submit");
        var style=document.createAttribute("class");
        style.value="able_css";
        submit.setAttributeNode(style);
        submit.style.width="50px";
        submit.style.height="22px";
        submit.innerHTML="敲给你";
        submit.addEventListener("click",function () {
            if(boarder.value === ''){
                submit_flag=false;
                alert('忘记敲内容啦～');
            }
            else{
                submit_flag=true;
                partent.style.display="none";
                pos=partent.style.left.toString()+"|"+partent.style.top.toString();
                color=colors.value;
                poss.value=pos;
                createBoard(false,boarder.value,pos,color);
            }
        });


        form.appendChild(poss);
        form.appendChild(submit);
        form.appendChild(colors);
        form.appendChild(boarder);
        partent.appendChild(form);
        add.parentNode.appendChild(partent);

        var d = partent;

    }
    else{
        boarder.value=message;
        boarder.style.cursor="move";
        //boarder.style.left = default_pos.split('*')[0];
        //boarder.style.top = default_pos.split('*')[1];
        boarder.style.left = pos.split('|')[0];
        boarder.style.top = pos.split('|')[1];
        boarder.style.zIndex=j++;
        boarder.readOnly="true";
        boarder.appendChild(order);
        add.parentNode.appendChild(boarder);

        var d = boarder;
    }

    i++;

    var b = document.getElementById('main');

    d.addEventListener("mousedown", function (ed) {//enable move
        d.style.zIndex = j++;

        var flag;
        var dl = d.offsetLeft;
        var dt = d.offsetTop;
        if((able&&(ed.clientY-dt<20||ed.clientY-dt>160||ed.clientX-dl<20||ed.clientX-dl>205))||!able) {
            flag = true;
        }
        b.addEventListener("mousemove", function (em) {
            if (flag) {
                d.style.left = dl + em.clientX - ed.clientX + "px";
                d.style.top = dt + em.clientY - ed.clientY + "px";
            }
        });

        b.addEventListener("mouseup", function () {
            flag = false;
        });
    });

}
