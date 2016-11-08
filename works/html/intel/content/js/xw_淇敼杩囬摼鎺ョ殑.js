$(function(){
	window.setTimeout(function(){
		location.hash="#vps=ssc:intro";
	},2000);
	//定义右侧的链接
	var linksurl = [
		[
			"http://www.suning.com/emall/prd_10052_10051_-7_3322757_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_4887534_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_4623652_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_2328574_.html"
		],
		[
			"http://www.suning.com/emall/prd_10052_10051_-7_10435270_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_3432093_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_4638180_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_4892090_.html"
		],
		[
			"http://www.suning.com/emall/prd_10052_10051_-7_6931432_.html ",
			"http://www.suning.com/emall/prd_10052_10051_-7_3476559_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_3430069_.html",
			"http://www.suning.com/emall/prd_10052_10051_-7_2324097_.html"
		]
	];
	//屏幕是否可以滚动
	var canScroll = true;
	var w_height = $(window).height();
	var header_height =  65;
	var footer_height = 57;
	//设置中间内容的高度
	var setContentHeight = function(){
		/*
		var max_stage_height = 705;
		if(max_stage_height+header_height+footer_height>w_height){
			$("#header,#footer").hide();
			$(".xw_content").addClass("margin_top_0");
			$(".xw_content,.xw_main").height(w_height);	
		}else{
			$("#header,#footer").show();
			$(".xw_content").removeClass("margin_top_0");
			$(".xw_content,.xw_main").height(w_height-header_height-footer_height);	
		}
		*/
		$(".xw_content,.xw_main").height(w_height-header_height-footer_height);	
	};
	
	//设置右侧
	var setRight = function(){
		//设置高度 高除以tan75
		var leftshowwidth = $(".xw_content").height()/(Math.tan(75*Math.PI/180))+21;
		var showwidth = $(window).width()-leftshowwidth;
		$(".m_right").height($(".xw_content").height()).width($(window).width()).css({"left":showwidth});
		if($(".left_stage .selected").index()==0){
			var h = $(".xw_content").height();
			$(".m_right").css("top",h+"px");
		}
		
		//设置关闭的位置
		var l =(leftshowwidth - 76)/2;
		var t = ($(".xw_content").height() - 76)/2;
		$(".m_right .close").css({"left":(l+20),"top":t});
		
		//左侧的距离
		var product_left = ($(window).width() - leftshowwidth - 1000)/2+leftshowwidth;
		if(product_left<leftshowwidth){
			//小屏幕
			var right_container_width = $(window).width()-leftshowwidth;
			$(".m_r_r").width(right_container_width);
		}
		
		$(".m_r_r,.m_r_zhuyi").css("left",product_left>leftshowwidth?product_left:leftshowwidth);
		var p_t = ($(".xw_content").height() - 410)/2;
		$(".m_r_r").css("top",p_t>0?p_t:0);
		
		//设置又下角的东西
		$(".jkhx").css("right",leftshowwidth+20);
		
		m_right_canhover = true;
		canScroll = true;
	}
	
	//设置左侧高度
	var setLeftStage = function(){
		var thisHeight = 192;
		$(".left_stage").css("top",(w_height-footer_height-header_height-thisHeight)/2);
		$(".left_stage").css("left",0);
		$(".gototop").css({"left":"0px","bottom":"32px"});
		$(".gobottom").css({"left":"-15px","bottom":"0px"});
	};
	
	//页面初始化
	var pageInit = function(){
		w_height = $(window).height();
		setContentHeight();
		setLeftStage();
		initStage();
		var p = getQuerySring("p");
		if(p==null || p==""){
			p = 0;
		}
		leftStageSelectChange(parseInt(p));
		setRight();
		
		//绑定flash
		swfobject.embedSWF("http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/swf/860_573.swf", "flash", "860", "573", "9.0.0", "expressInstall.swf",{doamin:'http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/swf/'},{wmode:"transparent"});
		//swfobject.embedSWF("http://d.cn/intel/content/swf/860_573.swf", "flash", "860", "573", "9.0.0", "expressInstall.swf",{doamin:'http://d.cn/intel/content/swf/'},{wmode:"transparent"});
		//swfobject.embedSWF("gen_shu.swf", "gen_swf1", "180", "105", "9.0.0",null,null,{wmode:"transparent"},null,function(){alert("已加载成功flash")});
		$(".stage_2_right_bg,.stage_3_mainbg_bg,.stage_4_right_bg").hide();
	};
	
	//初始化每个场景的高度和留白的高度
	var initStage = function(){
		$(".stage_empty").remove();
		$(".stage").each(function(index, element) {
			$this = $(this);
			var bclass = $(this).attr("bclass");
			var tclass = $(this).attr("tclass");
			var thisHeight = $this.height();
			var empty_height = ($(".xw_content").height()-thisHeight)/2;
			if(empty_height<0){
				empty_height = 0;	
			}
			var $stage_empty = $("<div></div>").addClass("stage_empty").height(empty_height);
			$this.before($stage_empty.clone().addClass(tclass));
			$this.after($stage_empty.clone().addClass(bclass));
		});
	};
	
	//初始化页面内容
	pageInit();
	//改变浏览器大小
	$(window).resize(function(e) {
		w_height = $(window).height();
		setContentHeight();
		setLeftStage();
		initStage();
		setRight();
		var index = $(".left_stage .selected").index(".leftstagediv");
		leftStageSelectChange(index);
	});
	
	//鼠标滚轮滚动事件
	$(document).mousewheel(function(event, intDelta){
		//这里做判断是继续滚动还是播放动画
		if(true){
			var curren_index = $(".left_stage .selected").index(".leftstagediv");
			//判断方向
			if (intDelta > 0){
				curren_index--;
			}else if (intDelta < 0){
				curren_index++;
			}
			//判断是不是到头了
			if(curren_index<0){
				curren_index=0;
			}else if(curren_index>=$(".stage").length){
				curren_index=$(".stage").length-1;
			}else{
				leftStageSelectChange(curren_index);
			}
		}
		return false;
	});
	
	function getTopByIndex(index){
		var top = 0;
		var allele = $(".stage").eq(index).prev().prevAll();
		for(var i = 0,l =allele.length; i<l;i++){
			top += 	allele.eq(i).height();
		}
		return top;
	}
	//左侧改变选中
	function leftStageSelectChange(index){
		if(canScroll){
			if(index >= $(".left_stage .leftstagediv").length || index<0){
				return;
			}
			//----------------------------------------------------------这里是判断右侧是否显示----------------------------
			var oldindex = $(".left_stage .selected").index(".leftstagediv");
			//从第一个切换到第二个
			if(oldindex==0 && index==1){
				var g = 0;
				$(".m_right").animate({"top":g+"px"},1200);
			//从第二个切换到第一个
			}else if(oldindex==1 && index==0){
				var g = $(".xw_content").height();
				$(".m_right").animate({"top":g+"px"},1200);
			//从第四个切换到最后一个
			}else if(oldindex ==3 && index==4){
				var g = 0- $(".xw_content").height();
				$(".m_right").animate({"top":g+"px"},1200);
			//从第五个切换到第四个
			}else if(oldindex ==4 && index==3){
				var g = 0;
				$(".m_right").animate({"top":g+"px"},1200);
			//从第一到第五个
			}else if(oldindex == 0 && index==4){
				//先出来
				var g = 0;	
				var step = index-oldindex;
				var t = 1200/step;
				$(".m_right").animate({"top":g+"px"},t,function(){
					g = 0- $(".xw_content").height();
					$(".m_right").delay(1100-t*2).animate({"top":g+"px"},t);
				});
			//从第五个到第一个
			}else if(oldindex == 4 && index==0){
				var g = 0;
				var step = oldindex-index;
				var t = 1200/step;
				$(".m_right").animate({"top":g+"px"},t,function(){
					g = $(".xw_content").height();
					$(".m_right").delay(1200-t*2).animate({"top":g+"px"},t);
				});
			}else{
				//从其他的切换到第一个
				if(index==0 && oldindex!=-1 && oldindex!=0){
					var g = $(".xw_content").height();
					var step = oldindex- index;
					var t = 1200/step;
					$(".m_right").delay(1200-t).animate({"top":g+"px"},t);
				}
				//从第一个切换到其他的 不包括最后一个
				if(oldindex==0 && index!=0 && index!=4){
					var g = 0;
					var step = index-oldindex;
					var t = 1200/step;
					$(".m_right").animate({"top":g+"px"},t);
				}
				//从第五个切换到其他的 不包括第一个
				if(oldindex==4 && index!=4 && index<oldindex && index!=0){
					var g = 0;	
					var step = oldindex - index;
					var t = 1200/step;
					$(".m_right").animate({"top":g+"px"},t);
				}
				//从其他的跳到第五个 不包括第一个
				if(index==4 && oldindex!=4 && oldindex!=0){
					var g =0- $(".xw_content").height();
					var step = index - oldindex;
					var t = 1200/step;
					$(".m_right").delay(1100-t).animate({"top":g+"px"},t);
				}
			}
			//----------------------------------------------------------这里是判断右侧是否显示----------------------------
			//锁定滚动和右侧的弹出
			canScroll = false;
			old_m_right_canhover = m_right_canhover;
			m_right_canhover = false;
			//修改左侧样式
			$(".left_stage .leftstagediv").removeClass("selected").removeClass("left2_5_select").removeClass("left1_select");
			$(".left_stage .leftstagediv").eq(index).addClass("selected");
			if(index>0 && index<5){
				$(".left_stage .leftstagediv").eq(index).addClass("left2_5_select");	
			}
			else if(index==0){
				$(".left_stage .leftstagediv").eq(index).addClass("left1_select");	
			}
			//改变位置
			var top = getTopByIndex(index);
			leftStageSelectBeforeChange(index,oldindex);
			$(".xw_main").stop().animate({ scrollTop: top},1200,function(){
				leftStageSelectChangeCallback(index,oldindex);
			});
			//显示或者隐藏回到顶部
			if(index==4){
				$(".gototop").fadeIn();	
			}
			else{
				$(".gototop").fadeOut();	
			}
			
			if(index==4){
				$(".gobottom").fadeOut();	
			}else{
				$(".gobottom").fadeIn();
			}
		}else{
			return;	
		}
	}
	//切换屏幕前的同步方法
	function leftStageSelectBeforeChange(index,oldindex){
		$(".left_show").hide();
		switch(index){
			case 1:
				$(".m_r_r_c").css("background-image","url(http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/bx.jpg)");
				window.setTimeout(function(){
					$(".s2_1").stop().delay(200).animate({"top":"51px"},1500);	
					$(".s2_2").stop().delay(200).animate({"top":"145px"},1000);	
					$(".s2_3").stop().delay(200).animate({"top":"185px"},800);	
				},200);
				break;
			case 2:
				$(".m_r_r_c").css("background-image","url(http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/ck.jpg)");
				window.setTimeout(function(){
					$(".s3_1").stop().delay(200).animate({"top":"110px"},1500);	
					$(".s3_2").stop().delay(200).animate({"top":"185px"},1000);	
					$(".s3_3").stop().delay(100).animate({"top":"270px"},850);	
				},200);
				break;
			case 3:
				$(".m_r_r_c").css("background-image","url(http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/pt.jpg)");
				window.setTimeout(function(){
					$(".s4_1").stop().delay(200).animate({"top":"110px"},1500);	
					$(".s4_2").stop().delay(200).animate({"top":"210px"},1100);	
					$(".s4_3").stop().delay(200).animate({"top":"250px"},1000);	
					$(".s4_4").stop().delay(200).animate({"top":"330px"},900);	
					$(".s4_5").stop().delay(100).animate({"top":"395px"},700);	
					$(".s4_6").stop().delay(100).animate({"top":"480px"},700);	
				},200);
				break;
		}
		//更换链接
		if(index==1 || index==2 ||index==3){
			//控制右侧按钮显示和隐藏
			$(".m_r_r_c").hide();
			$(".m_r_r_c").eq(index-1).show();
		}
		
		//播放动画
		switch(index){
			case 1:
				window.setTimeout(function(){
					stage_2_play();
				},600);
				break;	
			case 2:
				window.setTimeout(function(){
					stage_3_play();
				},600);
				break;	
			case 3:
				window.setTimeout(function(){
					stage_4_play();
				},600);
				break;
		};
		
			//上一个结束画面
		switch(oldindex){
			case 1:
				window.setTimeout(function(){
					$(".s2_1").css({"top":"-86px"});	
					$(".s2_2").css({"top":"-86px"});	
					$(".s2_3").css({"top":"-86px"});	
					$(".s2_4").css({"top":"-86px"});	
					$(".s2_5").css({"top":"-86px"});
				},1200);
				break;
			case 2:
				window.setTimeout(function(){
					$(".s3_1").css({"top":"-86px"});	
					$(".s3_2").css({"top":"-86px"});	
					$(".s3_3").css({"top":"-86px"});	
					$(".s3_4").css({"top":"-86px"});	
				},1200);
				break;
			case 3:
				window.setTimeout(function(){
					$(".s4_1").css({"top":"-96px"});	
					$(".s4_2").css({"top":"-96px"});	
					$(".s4_3").css({"top":"-96px"});	
					$(".s4_4").css({"top":"-96px"});	
					$(".s4_5").css({"top":"-96px"});	
					$(".s4_6").css({"top":"-96px"});
				},1200);
				break;
		}
	}
	
	
	
	//切换屏幕后的回调
	function leftStageSelectChangeCallback(index,oldindex){
		$(".left"+ (index+1) +"_show").show();
		canScroll = true;
		m_right_canhover = old_m_right_canhover;
		switch(oldindex){
			case 1:
				stage_2_return_play();
				break;	
			case 2:
				stage_3_return_play();
				break;	
			case 3:
				stage_4_return_play();
				break;	
		};
	}
	
	//左侧点击
	$(".left_stage .leftstagediv").click(function(e) {
		location.hash="#vps=ssc:nav";
		leftStageSelectChange($(this).index(".leftstagediv"));
	});
	
	//回到顶部按钮点击事件
	$(".gototop").click(function(e) {
		leftStageSelectChange(0);
	});
	
	
	//第二个场景的鼠标经过动画
	(function(){
		var timer1 = timer2 =timer3 = "";
		var play1 = play2 = play3 = 0;
		var bindAnimal = function(id,timer,count,height,endnum){
			$("#"+id).hover(function(){
				location.hash="#vps=ssc:nav";
				clearInterval(timer);
				timer=setInterval(function(){
					$("#"+id).css({"background-position":"0 "+(0-height*count)+"px"});
					count++;
					if(count>=endnum){
						clearInterval(timer);
						count=endnum
					}
				},40);
			},function(){
				clearInterval(timer);
				timer=setInterval(function(){
					$("#"+id).css({"background-position":"0 "+(0-height*count)+"px"});
					count--;
					if(count<=0){
						clearInterval(timer);
						count=0
					}
				},40);
			});
		};
		bindAnimal("stage_2_donghua_1",timer1,play1,96,130);
		bindAnimal("stage_2_donghua_2",timer2,play2,96,90);
		bindAnimal("stage_2_donghua_3",timer3,play3,122,95);
	}());
	//第二个动画
	function stage_2_play(){
		$(".stage_2_right").animate({"margin-top":"-10"},1,function(){
			$(".stage_2_right_p1").animate({"top":"86px","left":"226px"},1200);
			$(".stage_2_right_p2").animate({"top":"106px","left":"260px"},1200);
			$(".stage_2_right_p3").animate({"top":"246px","left":"270px"},1200);
			$(".stage_2_right_bg").delay(1200).fadeIn(1200);
			$(".stage_2_right_xuxian").delay(1200).fadeIn(1200);
		});
	}
	function stage_2_return_play(){
		$(".stage_2_right_bg,.stage_2_right_xuxian").hide();
		$(".stage_2_right_p1").stop().animate({"top":"0px","left":"146px"},10);
		$(".stage_2_right_p2").stop().animate({"top":"26px","left":"190px"},10);
		$(".stage_2_right_p3").stop().animate({"top":"157px","left":"280px"},10);
		$(".stage_2_right").animate({"margin-top":"-10"},10);
	}
	//第三个动画
	function stage_3_play(){
		$(".stage_3_mainbg_img").animate({"top":"0px"},700)	
		$(".stage_3_hand").fadeIn(100);
		$(".stage_3_hand").delay(700).animate({"left":"310px"},800,function(){
			$(".hand_bowen").removeClass("hand_bowen_animal");
			setTimeout(function(){
				$(".hand_bowen").eq(1).addClass("hand_bowen_animal");
				setTimeout(function(){
					$(".hand_bowen").eq(2).addClass("hand_bowen_animal");
					setTimeout(function(){
						$(".hand_bowen").eq(3).addClass("hand_bowen_animal");
						setTimeout(function(){
							$(".hand_bowen").eq(0).addClass("hand_bowen_animal");
						},500);
					},500);
				},500);
			},500);	
		});	
		$(".stage_3_mainbg_bg").delay(1500).fadeIn(1500,function(){
			$("#screen").show();	
		});	
		$(".stage_3_qiuqiu").delay(1500).fadeIn(1500);
	}
	function stage_3_return_play(){
		$("#screen").stop().hide();
		$(".stage_3_mainbg_bg,.stage_3_qiuqiu").stop().hide();
		$(".stage_3_hand").stop().css({"left":"459px"}).hide();	
		$(".stage_3_mainbg_img").stop().css({"top":"-50px"})	
	}
	
	//第三个场景动画
	function stage_4_play(){
		$(".stage_4_right").stop().animate({"top":"118px"},1000,function(){
			$(".stage_4_computer_2").stop().animate({"left":"290px"},1100);	
			$(".stage_4_computer_3").stop().animate({"left":"595px"},1100);
			$(".stage_4_right_bg").stop().delay(1100).fadeIn(1500);	
		});
	}
	function stage_4_return_play(){
		$(".stage_4_right_bg").hide();
		$(".stage_4_computer_2").stop().css({"left":"450px"});	
		$(".stage_4_computer_3").stop().css({"left":"445px"});	
		$(".stage_4_right").stop().css({"top":"68px"});	
	}	
	
	
	//右侧的事件
	var old_m_right_canhover = true;
	var m_right_canhover = true;
	$(".m_right").hover(function(){
		location.hash="#vps=ssc:nav";
		if(m_right_canhover){
			canScroll = false;
			var leftshowwidth = $(".xw_content").height()/(Math.tan(75*Math.PI/180));
			var showwidth = $(window).width()-leftshowwidth;
			$(this).stop().animate({"left":$(window).width()-(parseInt($(".m_r_r").css("left"))+350)});	
		}
	},function(){
		if(m_right_canhover){
			var showwidth = $(window).width()-$(".xw_content").height()/(Math.tan(75*Math.PI/180))-21;
			$(this).stop().animate({"left":showwidth},function(){
				canScroll = true;	
			});	
		}
	});
	//展开 右侧
	$(".m_right").click(function(e) {
		location.hash="#vps=ssc:nav";
		if(canScroll==true || m_right_canhover==true){
			var elem = $(e.target); 
			if(elem.hasClass("close")){
				return;	
			}
			m_right_canhover = false;
			canScroll = false;
			$(this).stop().animate({"left":"0px"},1000,function(){
				$(".m_right .close").addClass("close2");	
				$(".m_right").removeClass("m_right_point");
			});	
			$(".gototop").stop().delay(500).animate({"left":"-60px"});
			$(".gobottom").stop().delay(500).animate({"left":"-150px"});
			$(".left_stage").stop().delay(500).animate({"left":"-150px"});
		}
	});
	//关闭右侧
	$(".m_right .close").click(function(e) {
		if(parseInt($(".m_right").css("left"))==0){
			var showwidth = $(window).width()-$(".xw_content").height()/(Math.tan(75*Math.PI/180))-21;
			$(".m_right").stop().animate({"left":showwidth+"px"},1000,function(){
				$(".m_right .close").removeClass("close2");		
				m_right_canhover = true;
				$(".m_right").addClass("m_right_point");
			});	
			$(".gototop").stop().animate({"left":"0px"});
			$(".gobottom").stop().animate({"left":"-15px"});
			$(".left_stage").stop().animate({"left":"0px"},function(){canScroll=true});
		}else{
			$(".m_right").click();	
		}
	});
	
	
	//最后一个场景的三个图片切换
	$("#idSlideView .b1").mouseover(function(){
		$("#idSlideView li:eq(0)").stop().animate({left:"0",width:"576px"});
		$("#idSlideView li:eq(1)").stop().animate({left:"576px"});
		$("#idSlideView li:eq(2)").stop().animate({left:"740px"});
	});
	$("#idSlideView .b2").mouseover(function(){
		$("#idSlideView li:eq(0)").stop().animate({left:"0"});
		$("#idSlideView li:eq(1)").stop().animate({left:"164px",width:"576px"});
		$("#idSlideView li:eq(2)").stop().animate({left:"740px"});
	});
	$("#idSlideView .b3").mouseover(function(){
		$("#idSlideView li:eq(0)").stop().animate({left:"0"});
		$("#idSlideView li:eq(1)").stop().animate({left:"164px"});
		$("#idSlideView li:eq(2)").stop().animate({left:"347px",width:"576px"});
	});
	
	$("#idSlideView").mouseout(function(){
		$("#idSlideView li:eq(0)").stop().animate({left:"0",width:"450px"});
		$("#idSlideView li:eq(1)").stop().animate({left:"164px",width:"576px"});
		$("#idSlideView li:eq(2)").stop().animate({left:"740px",width:"370px"});
	});
	
	
	//换新的链接
	$(".click_show_right").click(function(e) {
        $(".m_right").click();
    });
	
	//loadimg
	$(function(){
		var img = new Image();
		img.src = "http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/ck.jpg";
		var img2 = new Image();
		img2.src = "http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/bx.jpg";
		var img3 = new Image();
		img3.src = "http://intelchina.ccgslb.com.cn/ultrabook/ad/q2/content/images/pt.jpg";	
	});
	
	$(".leftpoint").hover(function(){
		var index = $(this).index();
		$(".left"+ (index+1) +"_show").show();	
	},function(){
		var index = $(this).index();
		$(".left"+ (index+1) +"_show").hide();		
	});
});



function getQuerySring(name){
	var regexp = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var match = window.location.search.substr(1).match(regexp);
    if (match != null) return decodeURIComponent(match[2]); return null;
};