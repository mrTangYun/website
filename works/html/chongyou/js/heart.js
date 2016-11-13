var n=0;
var dogandcaty;

var wave = new Array();
var waveout = new Array();
var tryagain;
//计算两点之间指定距离点的位置		
		var midpos = function(x1,y1,x2,y2,mds){
			var L = Math.round(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)));
			var R;
			var md=mds;
		    
			R = Math.atan((y2-y1)/(x2-x1)); 
			
			var tx;
			var ty;
			
			//if (mds>=0){md=mds;}
			//else {md=L+mds;}

			
			var Y = Math.round(y1 + md*Math.sin(R));
		    var X = Math.round(x1 + md*Math.cos(R));

			return {left:X,top:Y,l:L-md,a:R}
			
			}
		
var showheartf = function(){
	    var xhash = window.location.hash; 
		if (xhash=="") {
			navindex = 0;
		    $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			navenable = 1;
		    }
	$(".pet").fadeOut(200);		
		
				//初始化
	window.clearInterval(tryagain);
	tryagain = setInterval(function(){
		var pressbtn = $(".promise_a");
		var pos = pressbtn.offset();
		$(".wavesmall").each(function(index){
			var imgring = $(this).find("img").eq(0);
			imgring.css("width","0px");
		    imgring.css("height","0px");
		    imgring.css("opacity","1");
		    /*imgring.css("margin-left","-683px");
		    imgring.css("margin-top","-336px");*/
			imgring.css("left",(pos.left+pressbtn.width())+"px");
		    imgring.css("top",(pos.top+pressbtn.height())+"px");
			window.clearInterval(wave[index]);
			window.clearTimeout(waveout[index]);
			
			var ma = 0;	
			
			waveout[index]=setTimeout(function(){
			  
		        wave[index] = setInterval(function(){
				 
		         imgring.animate({width:'200px',height:'200px',opacity:0,left:'50%',top:'50%',marginLeft:'-100px',marginTop:'-100px'},2100,function(){
			          //$(".word2").html($(".word2").html()+imgring.attr("id"));	
					  imgring.animate({width:'0px',height:'0px',opacity:1,marginLeft:'0px',marginTop:'0px'},1);
					  
			         });
		           },2100);
			  },index*700);
			
			});
		   
		   },4400);
		
		
		
			
		$("#heartbg").animate({opacity: '1'},500);
		
		$(".heartimg").animate({width:'327px',height:'280px',marginLeft:'-163px',marginTop:'-220px'},1000,function(){
			//$(".heartimg").show();
			$("#sword1").fadeIn(1000,function(){
					$("#sword2").fadeIn(1000,function(){
							$("#sword3").fadeIn(1000,function(){allowwheel = 1;});
							
						    });
						});
				});
		$(".second>.logo").slideDown(400);
		$(".second>.word").slideDown(400);
		
		
		
		//$("#wavering1").hide();
		//$(".wavesmall").hide();
		
		

		
		
		}

function showlog(msg){
	//$("#mmm").append("<li>"+msg+"</li>");
	
	}	
		
		
var ct = 0;
var bStop=true;

//run a frame
function petRun(obj,ff,fnEnd){
	if (runpetst != 1) return;
    ct++;
	var pos = $(obj).position();
	//var pos = $(obj).offset();
	
	var ltop = $(obj).attr("stoptop");
	var lleft =$(obj).attr("stopleft");
	 
	 
	var left;
	var top;
	var numargs = arguments.length;
	
	var xwidth = 1366 ;  //$(window).width();
	var xheight = 673;  //$(window).height();
	
	
    //实际终点位置	
	var xtop = Math.round(parseFloat(ltop)*xheight);
	var xleft = Math.round(parseFloat(lleft-0.11)*xwidth);
	
	//Left or Right
	//var setdist = (Math.round(pos.left-xleft)>0)?-10:10	;
	
	//第一次进入写目标位置	
	if (numargs>1) {$(obj).attr("tartop",xtop); top=xtop;} else {top =$(obj).attr("tartop"); }
	if (numargs>1) {$(obj).attr("tarleft",xleft); left=xleft; } else {left =$(obj).attr("tarleft");	}
	
	var templeft = $(obj).attr("tarleft");
	//Left or Right
	var setdist = (Math.round(pos.left-templeft)>0)?-10:10	;
	
	
	
	//取得移动位置到
	var move2Here;
	/*if (setdist>0) {
	    move2Here = midpos(pos.left,pos.top,left,top,setdist);}
	else {
		move2Here = midpos(left,top,pos.left,pos.top,setdist);}*/
	move2Here = midpos(pos.left,pos.top,left,top,setdist);
	
	
	var newtop = move2Here.top+"px";
	var newleft = move2Here.left+"px";
	var dis = move2Here.l;
	
	
	//初始化旋转
	if (numargs>1) {
	    var rotate=move2Here.a*Math.PI/180; 
		$(obj).css("-webkit-transform","rotate("+rotate+"deg)");
		$(obj).css("-moz-transform","rotate("+rotate+"deg)");
		$(obj).css("-ms-transform","rotate("+rotate+"deg)");
		
	}
	
	var n = $(obj).attr("ifra");  //
	var frawidth ;
	if (obj=="#pet29") {frawidth = 184;}
	else {
	       frawidth = 160;}
	
	var loopfra = $(obj).attr("loopfra");  //6
	var stopfra = $(obj).attr("stopfra");  //7
	var stopfra2 = $(obj).attr("stopfra2");  //8
	
	//递归终止条件
	if ((setdist>=0 && dis<=0)|| (setdist<=0 && dis<=0)) {
		showlog("stop ct="+ct+" , "+setdist+","+dis);
		
		//定帧
		var ttop = $(obj).attr("tartop");
		var tleft = $(obj).attr("tarleft");
		var s1 = ((stopfra-1)*(-frawidth)) +"px 0px";
		var s2 = ((stopfra-0)*(-frawidth)) +"px 0px";
		//var s1 = ((stopfra-1)*(-200)) +"px 0px";
		
		$(obj).css("background-position",s1);
		if (stopfra2){
			$(obj).animate({top:ttop,left:tleft},100,function(){$(obj).css("background-position",s2);});}
		
		//$(obj).css("background-position",s1);
		
		return};
		
		
    //移动位置
	 if (numargs>1) {
		 $(obj).attr("xshow","1");
		 $(obj).animate({top:newtop,left:newleft,opacity:0.2},100,function(){
	     petRun(obj);
		});
		 }
	 else {
		 var tmp = $(obj).attr("xshow");
		 tmp++;
		 $(obj).attr("xshow",tmp);
		 if (tmp<6){
			$(obj).animate({top:newtop,left:newleft,opacity:0.2*tmp},100,function(){
	             petRun(obj);
		      });
			 }
		 else {
	     $(obj).animate({top:newtop,left:newleft},100,function(){
	     petRun(obj);
		});
		 }
	 }
	

    
	//当前帧-1
    var curfra = n/(-frawidth);   
	//next

	n=(n>-loopfra*frawidth)?n-frawidth:-frawidth;
	
	
	
	
	
	//当前位移 最大 200*7  
	//n=(n>-1400)?n-200:-200;
	
	
	$(obj).attr("ifra",n);
	$(obj).css("background-position",n+"px 0px");
   

	}
var completeframes = 0;
function heartfrmcount(){
	completeframes++;
	if (completeframes>=34) {
		alert("3333");
		
		}
	}

$(document).ready(function(){
  
  var ratio = window.devicePixelRatio;	
  //$(document).attr("title",ratio);	
	
  if (photoplay>0) {
      
      $(".pet").css("opacity","0");
	  var dogandcatx = setTimeout(function(){
		$(".pet").each(function(){
		var oid = "#"+$(this).attr("id");
		var rundelay = $(this).attr("rundelay");
		if (rundelay) {
			
			$(this).animate({display:"none"},rundelay*1000,function(){petRun(oid,1);});
			
			}
		else {	
		petRun(oid,1);}
		
		});

		}
		
		,photoplay);
  }
	
	 dogandcaty = setTimeout(showheartf
       ,heartplay);


});