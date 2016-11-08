var G_Nav_index=1;	//当前背景视图的索引
var Form_data="";	//每次提交的表单数据
var IsLogin=0;	//是否登录
var LocString=String(window.document.location.href); 

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-12089791-2']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

$(document).ready(function(){		
			//-----------------------网址参数--------------------------
			//
			
			
			
			var _g_nav_index=getQueryStr(LocString,'categroyid');
			var _Behavior=getQueryStr(LocString,'behavior');
			var _show=getQueryStr(LocString,'show');
			if (_g_nav_index>0 && _g_nav_index<=6){
				G_Nav_index=_g_nav_index;
			}
			
			
			//打开经销商查询
			$(".btn_dealer_show").click(function(){
											 $("div.dealerSearchBox").show();
											 $(".appleDotArea").hide();
											 $(".carInfo").hide();
											 });
			//关闭经销商查询
			$(".closeDealer").click(function(){
											 $("div.dealerSearchBox").hide();
											 $(".appleDotArea").show();
											 if (G_Nav_index==0){
											 	$(".carInfo").show();
											 }
											 });
			
			
			//-----------------------------跳过视频--------------
			$(".floatFlash .skip_flash .btn").click(function(){
				slogan_DoFSCommand("slogan","");
			});
			
			
			//ajax加载
			$("div[ajax]").live('click',function(){
											if ($(this).attr("ajax_condiv")!="")
												//console.log($(this).attr("ajax_condiv"));
											 	var targetDiv=$(this).attr("ajax_condiv");
												//console.log($(this).attr("ajax_condiv"));
												$(targetDiv).load($(this).attr("ajax"));
											
											 });
			
			var flashvars = {},
			params = {wmode:"transparent"},
			attributes = {};
			swfobject.embedSWF("flash/bmg.swf", "bmgArea", "67", "16", "9.0.0", "expressInstall.swf",flashvars, params, attributes); 
			
			
			
			//$("#HiddenBGM").play();
			$(".header .share .left").click(function(){
													 var name=$(this).attr("data"); 
													 var url=encodeURIComponent('http://gforce.infiniti.com.cn');
													 var title=encodeURIComponent('英菲尼迪2012 G-Force极风之旅大型体验活动全国招募开始了！请参与网上互动，拨打热线4008809090，或莅临英菲尼迪授权经销店，就有机会一睹F1车王维特尔风采，独揽G37一年使用权，更可亲临上海及新加坡F1比赛现场！尽快报名，咱们竞G场上见！');
													 switch (name){
														 case "tsina":
														 	var param = {
																url:'http://gforce.infiniti.com.cn?utm_source=SINAWeibo&utm_medium=Task&utm_content=Task&utm_campaign=GForceReferral',
																type:'3',
																count:'', /**是否显示分享数，1显示(可选)*/
																appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
																title:'英菲尼迪2012 G-Force极风之旅大型体验活动全国招募开始了！请参与网上互动，拨打热线4008809090，或莅临英菲尼迪授权经销店，就有机会一睹F1车王维特尔风采，独揽G37一年使用权，更可亲临上海及新加坡F1比赛现场！尽快报名，咱们竞G场上见！', /**分享的文字内容(可选，默认为所在页面的title)*/
																pic:'http://gforce.infiniti.com.cn/images/gforce/shareimage.jpg', /**分享图片的路径(可选)*/
																ralateUid:'', /**关联用户的UID，分享微博会@该用户(可选)*/
																language:'zh_cn', /**设置语言，zh_cn|zh_tw(可选)*/
																rnd:new Date().valueOf()
															  }
															 window.open("http://service.weibo.com/share/share.php?url="+ param["url"]+"&appkey="+ param["appkey"]+"&title="+ param["title"]+"&pic="+ param["pic"]+"&ralateUid="+ param["ralateUid"]+"&language="+ param["language"],"_blank","width=615,height=505");
															 //window.open("http://v.t.sina.com.cn/share/share.php?appkey=4237586023&url=http://v.youku.com/v_show/id_XMzY0MzMwNjcy.html&title=%E5%B4%94%E6%B0%B8%E5%85%83%EF%BC%9A%E6%9C%88%E8%96%AA%E8%BF%87%E4%B8%87%E5%B8%B8%E6%84%9F%E8%A7%89%E4%B8%8D%E5%A4%9F%E8%8A%B1%5B%E4%B9%9D%E7%82%B9%E5%8D%8A%5D&source=%E4%BC%98%E9%85%B7%E7%BD%91&sourceUrl=http%3A%2F%2Fwww.youku.com%2F&content=utf8","_blank","width=615,height=505");
															  return false;
															  //alert('http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&'));
													        //url=encodeURIComponent(' http://gforce.infiniti.com.cn?utm_source=SINAWeibo&utm_medium=Task&utm_content=Task&utm_campaign=GForceReferral');
															
														 	break;
														 case "renren":
															 var rrShareParam = {
																	resourceUrl : 'http://gforce.infiniti.com.cn?utm_source=SINARenren&utm_medium=Task&utm_content=Task&utm_campaign=GForceReferral',	//分享的资源Url
																	pic : 'http://gforce.infiniti.com.cn/images/gforce/shareimage.jpg',		//分享的主题图片Url
																	title : '英菲尼迪2012 G-Force极风之旅大型体验活动全国招募开始了！',		//分享的标题
																	description : '英菲尼迪2012 G-Force极风之旅大型体验活动全国招募开始了！请参与网上互动，拨打热线4008809090，或莅临英菲尼迪授权经销店，就有机会一睹F1车王维特尔风采，独揽G37一年使用权，更可亲临上海及新加坡F1比赛现场！尽快报名，咱们竞G场上见！'	//分享的详细描述
																};
															rrShareOnclick(rrShareParam);
															return false;
													        //url=encodeURIComponent('http://gforce.infiniti.com.cn?utm_source=SINARenren&utm_medium=Task&utm_content=Task&utm_campaign=GForceReferral');
														 	break;
													 }
													 var u='http://www.jiathis.com/send/?webid='+name+'&url='+url+'&title='+title;
													 
													var W=$(window).width();	//浏览器可视区域的宽度
													var H=$(window).height();	//浏览器可视区域的高度
													W=0;
													H=0;
													window.open(u,'sharewindow','toolbar=0,resizable=1,scrollbars=yes,status=1,width=626,height=436,top='+W+',left='+H);
													 });
			//-----------------------网址参数 end --------------------------
			//最下面的翻页点
			$("footer .appleDotOuter .appleDotArea .left").click(function(){
																		  $(this).addClass("Current").siblings(".Current").removeClass("Current");
																		  var index=$(this).index();
																		  $("header .shareAndNav .nav .item").eq(index).click();
																		  });
			
			
			//选项卡切换
			$(".tabbar .list .tabitem").live('click',function(){
															  $(this).addClass("Current").siblings(".Current").removeClass("Current");
															  var postionBox=$(this).parents(".btn_ChangeTab").parent().find(".ChangeTab_postionBox");
															  var _x=($(this).index()-$(this).parent().find(".tabitem").length+1)*820;
															  $(this).parents(".btn_ChangeTab").parent().find(".ChangeTab_postionBox").stop().animate({marginLeft:_x+'px'},500);
															  });
			
			//------------------------------------------------------------视频页-------------------------------------------------
			
			//切换提交按钮的mouseover状态
			$(".hoverBtn img[my_type='btn']").live({
										   mouseenter:function(){
											   $(this).attr("src",$(this).attr("overimg"));
										   },
										   mouseleave:function(){
											   $(this).attr("src",$(this).attr("outimg"));
										   }
										   });
			//------------------------------------------------------------视频页  end-------------------------------------------------
			
			//专属赛车页
			$(".header .carInfo .CarModelTab .itemCar").click(function(){
																 var modelName=$(this).attr("data");
																 $(".textByModel ."+modelName).show().siblings(".itemCar").hide();
																 $(".CarArea ."+modelName).show().siblings(".itemCar").hide();
																 $(".header .carInfo .text ."+modelName).show().siblings(".itemCar").hide();
																 
																 
																 /*
																	var timeJianGe=20;
																	
																	
																	var _slideFun=[
																		//把要执行的动画依次放入一个数组
																		function(){$(".main_view .background .land .item_1 .BigCarArea .carItem.Coupe").animate({backgroundPosition:"0px 0"},timeJianGe,_takeOne);},
																		function(){$(".main_view .background .land .item_1 .BigCarArea .carItem.Coupe").animate({backgroundPosition:"-695px 0"},timeJianGe,_takeOne);},
																		function(){$(".main_view .background .land .item_1 .BigCarArea .carItem.Coupe").animate({backgroundPosition:"-1268px 0"},timeJianGe,_takeOne);},
																		function(){$(".main_view .background .land .item_1 .BigCarArea .carItem.Coupe").animate({backgroundPosition:"-2052px 0"},timeJianGe,_takeOne);},
																		function(){$(".main_view .background .land .item_1 .BigCarArea .carItem.Coupe").animate({backgroundPosition:"-2736px 0"},timeJianGe);}
																	];
																	//将函数数组放入slideList动画队列
																	$('.main_view .background .land .item_1 .BigCarArea .carItem.Coupe').queue('slideList',_slideFun);
																	var _takeOne=function(){
																		//取出第一个函数,并执行它
																		$('.main_view .background .land .item_1 .BigCarArea .carItem.Coupe').dequeue('slideList');
																	};
																	//初始执行第一个函数
																	_takeOne();
																	
																	*/
																 });
			
			
				
			//------------------------------------图片页-------------------------
			$(".photosBox td img").live('click',function(){
														 var src=$(this).attr("src");
														 $(this).parents(".photosBox").find(".BigImgArea").html("<img src=\""+src+"\" width=\"418\" height=\"279\"/>");
														 });
			$(".photosBox .btn_up_arrow").live('click',function(){
													 if ($(this).siblings(".markBox").find(".per_table").length>1){
													 	var $markbox=$(this).siblings(".markBox");
														var h=$markbox.find(".per_table").outerHeight()*-1;
														$markbox.find(".per_table").stop();
														$markbox.find(".per_table:first").animate({marginTop:h+'px'},500,function(){
																$markbox.find(".per_table:first").insertAfter($markbox.find(".per_table:last")).css("margin-top","0");
																																				  });
														
													 }
		
													 });
			$(".photosBox .btn_down_arrow").live('click',function(){
													 if ($(this).siblings(".markBox").find(".per_table").length>1){
													 	var $markbox=$(this).siblings(".markBox");
														var h=$markbox.find(".per_table").outerHeight()*-1;
														$markbox.find(".per_table").stop();
														$markbox.find(".per_table:last").insertBefore($markbox.find(".per_table:first")).css("margin-top",h+"px");
														$markbox.find(".per_table:first").animate({marginTop:'0'},500);
														
													 }
		
													 });
			
			//-----------------------------------图片页
			
			
			//后续精彩，敬请期
			$("[coming]").live('click',function(){
												var text=$(this).attr("coming");
												alert(text);
												return false;
												});
			
			/*---------------------------------------------------------------------------------任务列表-----------------------------------------*/
			/*
			$(".mission_table .mission_info").live({
										   mouseenter:function(){
											   var _h=$(this).find(".default").outerHeight()*-1;
											   $(this).find(".over").animate({marginTop:_h+'px'},500);
											   $(".mission_table .mission_info .default div").each(function(i){
																										$(this).fadeOut();
																										});
											   
										   },
										   mouseleave:function(){
											   $(this).find(".over").animate({marginTop:'0px'},500);
										   }
										   });
			*/
			$(".mission_table .mission_info").live({
										   mouseenter:function(){
											   $(this).find(".over").stop().fadeTo("fast", 1);	//显示任务描述
											   $(".mission_table .mission_info .default div").each(function(i){
																										$(this).stop().fadeOut();	//隐藏任务默认视图
																										});
											   
										   },
										   mouseleave:function(){
											   $(this).find(".over").fadeOut(0);
										   }
										   });
			
			$(".mission_table .main").live({
										   mouseenter:function(){
										   },
										   mouseleave:function(){
											   $(".mission_table .mission_info .default div").each(function(i){
																										$(this).stop().fadeIn();
																										});
											   
										   }
										   });
			/*
			$(".mission_table .main").live({
										   mouseenter:function(){
											   
										   },
										   mouseleave:function(){
										   });
			*/
			//每个任务项目
			$(".mission_main_div .mission_table .btn a").live('click', function() {
																			
														var href=$(this).attr("href");		//链接的网址
														if ($(this).parents("td").attr("data-postion-x")){
														  var w=$(this).parents(".mission_info").outerWidth();
														  var h=$(this).parents(".mission_info").outerHeight();
														  var x=$(this).parents("td").attr("data-postion-x");
														  var y=$(this).parents("td").attr("data-postion-y");
														  $(".mission_main_div .mission_table .main table").fadeOut("slow");;
														  $(".mission_main_div .mission_table .pop_bg").css("width",w+"px").css("height",h+"px").css("top",y+"px").css("left",x+"px").show().animate({top:'26px',left:'2px',width:"748px",height:"334px"},500);
														  $(".mission_main_div .mission_table .pop_bg_container").fadeIn("slow");
														  if (href.length>0){
															  //$(".mission_main_div .mission_table .pop_bg_container").load(href);
															  
																$.get(href, function(data){
																						if (data.substr(0,5)=="error"){
																						   //如果返回错误
																							$(".missionTableBottom .make_mission").click();
																						    var message=data.substr(6,data.length-5);
																						    alert(message);
																						}
																						else{
																							$(".mission_main_div .mission_table .pop_bg_container").html(data);
																						}
																					 });
														  }
														}
														else if ($(this).parents("td").attr("justAjax")){
															//签到类提交
															$.get(href, function(data){
																var data_length=data.length;
																if (data.substr(0,5)=="error"){
																   //如果返回错误
																   var message=data.substr(6,data.length-5);
																   alert(message);
															   	}
																
																 else if(data.substr(0,1)=="{"){
																   //如果返回的是json
																   var dataObject = eval('(' + data + ')');
																   if (dataObject["status"]=="true"){
																	   UpdateMissionStatus(dataObject["missionID"],dataObject["status"],dataObject["getsorce"]);
																		UpdateUserInfoStatus(dataObject["sorce"],dataObject["paiming"]);
																   }
																  }
																  else if(data.substr(0,8)=="<script>"){
																	   $(".script").html(data);
																  }
																
															});
															
														}
														return false;
			});
			
			//返回任务列表
			$(".missionTableBottom .make_mission").live('click', function() {
														$(".mission_main_div .mission_table .main table").fadeIn("slow");
														  $(".mission_main_div .mission_table .pop_bg").fadeOut("slow");
														  $(".mission_main_div .mission_table .pop_bg_container").html("").fadeOut("slow");
			});
			
			//任务页面切换小栏目
			$("[mission_view]").live('click',function(){
													  var targetDiv=$(this).attr("mission_view");
													  $(this).addClass("Current").siblings(".Current").removeClass("Current");
													  ShowView_MissionPage(targetDiv);
													  return false;
													  });
			$(".missionTableBottom .nologin_btn .goto_login").live('click',function(){
															   						G_Nav_index=1;
																					ChangeView();
																					$(".homepage .view_1 div[target-div='view_3']").click();
																					return false;
																					});
			$(".missionTableBottom .nologin_btn .goto_reg").live('click',function(){
															   						G_Nav_index=1;
																					ChangeView();
																					$(".homepage .view_1 div[target-div='view_2']").click();
																					return false;
																					});
			
			$(".huodongjieshaoPage div[target-div='view_2']").live('click',function(){
															   						G_Nav_index=1;
																					ChangeView();
																					$(".homepage .view_1 div[target-div='view_2']").click();
																					return false;
																					});
			$(".gotoSeeVeteel a").live('click',function(){
													//切换至车手传奇
													G_Nav_index=4;
													ChangeView();
													$(".legendPage .btn_ChangeTab .item1").click();
													ShowAllMission();
													return false;
													  });
			//需要加上mouseover的
			$("div[needhover='true']").live({
										   mouseenter:function(){
											   $(this).addClass("hover");
										   },
										   mouseleave:function(){
											   $(this).removeClass("hover");
										   }
										   });
			
			$(".mission_main_div .mission_table .pop_bg_share .toMissionMain").live('click',function(){ShowAllMission();});		//关闭任务成功
			/*---------------------------------------------------------------------------------任务列表-----------------------------------------*/
			/*----------------------报名                   -----*/
			//切换提交按钮的mouseover状态
			$("input[my_type='btn']").live({
										   mouseenter:function(){
											   $(this).attr("src",$(this).attr("overimg"));
										   },
										   mouseleave:function(){
											   $(this).attr("src",$(this).attr("outimg"));
										   }
										   });
			
			//输入框得到焦点时
			$("input.inputText").focus(function(){
												var placeholder=$(this).attr("placeholder");
												if ($(this).val()=="请填写真实信息" || $(this).val()==placeholder){
													$(this).attr("rathorztion",0);
													$(this).val("");	
												}
												$(this).removeClass("fail");
												});
		
			//表单提交时
			$("form").live('submit',function(){
											 //无所不知
											 if($(this).attr("form_name")=="knowform"){
													if ($(this).find(".item[status='false']").length>0){
														alert("答案错误或者未完成答题！");
														return false;
													}
													else{
													  PostForm($(this));
													  return false;	
													}
											 }
											 //邀请好友
											 if($(this).attr("form_name")=="ifriend"){
											 		var _text="";
													var _sina="";
													$(this).find("input:checked").each(function(i){
														var _pix=_text==""?"":",";
														if ($("#sns_type").val()==1){
															var s_name=$(this).attr("data");
															_text=_text+"@"+s_name+" ";
															_sina=_sina+_pix+$(this).val();
														}
														else if ($("#sns_type").val()==2){
															_text=_text+_pix+$(this).val();
														}
													});
													$(this).find("#sns_friends").val(_sina);
													if (_text!=""){
														$(this).find("#sns_text").val(_text);
													  	PostForm($(this));
													  	return false;	
													}
													else{
														return false;
													}
											 }
											 
											 
											 	$(this).find("input[regText]").each(function(i){
																							   var reg=eval("/"+$(this).attr("regText")+"/");	//得到正则规则
																							   var result = reg.test($(this).val());	//正则匹配
																							   if (result && $(this).val()!="请填写真实信息"){	
																								   $(this).attr("rathorztion",1).removeClass("fail");	//如果正确，删除失败class
																							   }
																							   else{
																									if (!$(this).val()){
																										$(this).val("请填写真实信息");	//如果没有填写，提示
																									}
																									$(this).attr("rathorztion",0).addClass("fail");		//添加失败class
																							   }
																							   });
												  if ($(this).find("input[rathorztion='0']").length>0){
												  	return false;	//检查有没有失败的项目，如果有则不提交
												  }
												  else{
													  PostForm($(this));
													  return false;
												  }
											 });
			
			/*---------------------------------------------详细资料-----------------------------------------*/
			$(".full_reg_next_button").live('click',function(){
															 $(".memberFullInfo .page1").find("input[regText]").each(function(i){
																							   var reg=eval("/"+$(this).attr("regText")+"/");	//得到正则规则
																							   var result = reg.test($(this).val());	//正则匹配
																							   if (result && $(this).val()!="请填写真实信息" && $(this).attr("required")=="required"){	
																							   		//如果有内容，且内容不是默认值,且为必填值
																								   $(this).attr("rathorztion",1).removeClass("fail");	//如果正确，删除失败class
																							   }
																							   else if (!$(this).val() && $(this).attr("required")!="required"){
																								   //如果内容为空,且不为必填值
																								   $(this).attr("rathorztion",1).removeClass("fail");	//如果正确，删除失败class
																							   }
																							   
																							   else{
																									if (!$(this).val() && $(this).attr("required")=="required"){
																										$(this).val("请填写真实信息");	//如果没有填写，提示
																									}
																									$(this).attr("rathorztion",0).addClass("fail");		//添加失败class
																							   }
																							   });
															  if ($(".memberFullInfo .page1").find("input[rathorztion='0']").length>0){
																  $(".memberFullInfo .page1").find("input[rathorztion='0']").eq(0).attr("rathorztion",0).addClass("fail");	
																	return false;	//检查有没有失败的项目，如果有则不动作
															  }
															  else{
																  $(this).parents(".outer").animate({left:"-750px"},500);
																  //翻页
																  return false;
															  }
															 
															 });
			$(".full_reg_pre_button").live('click',function(){
															$(this).parents(".outer").animate({left:"0px"},500);});
						   
			/*------------------------------------------------------------------背景 start------------------------------------------------*/
			setBgWidth();	//设置背景的宽度，
			postionBg();	//定位背景
			$(window).resize(function(){
			  postionBg();	//切换浏览器窗口大小时，定位背景
			});
			//点击导航栏场景切换
			$("header .shareAndNav .nav .item").click(function(){
															   var index=$(this).attr("viewIndex");
															   $(this).siblings(".Current").removeClass("Current").mouseout();;
															   $(this).addClass("Current");
															   $("footer .appleDotOuter .appleDotArea .left").eq(index).addClass("Current").siblings(".Current").removeClass("Current");
															   G_Nav_index=index;
															   moveSkybg(index);
															   moveLandbg(index);
															   ShowMyCar(index); 	//专属赛车的hack
															   ShowActiveInfo(index); 	//活动介绍的hack
															   ShowWindowView();
															   });
			$("header .shareAndNav .nav .item").hover(function(){
															   var _src=$(this).attr("data");
															   _src="images/gforce/bg/"+_src+"_2.gif";
															   $(this).children("img").attr("src",_src);
															   },function(){
																		   var _src=$(this).attr("data");
																		   if (!$(this).hasClass("Current")){
																				_src="images/gforce/bg/"+_src+"_1.gif";
																				$(this).children("img").attr("src",_src);
																		   }
																			});
			ChangeView();
			
			ShowWindowView();
			/*------------------------------------------------------------------背景 /end------------------------------------------------*/
			
			
			/*------------------------------------------------------------------首页按钮 start----------------------------------------------*/
			//
			
			$("div[target-div]").live('click', function() {
														   var _target=$(this).attr("target-div");
														   if ((_target=="view_3" ||_target=="view_2" ) && IsLogin==1){
															   	G_Nav_index=2;
																ChangeView();
														   }
														   else{
														   		$(this).parents(".view").hide("slow").siblings("."+_target).show("slow");   
														   }
			});
			
			
			/*------------------------------------------------------------------首页按钮 end---------------------------------------------*/
			
			
			/*---------------------------------------------------------------------sns登录按钮----------------------------------------*/
			
			$(".sns_login a").live('click', function() {
														  var href=$(this).attr("href");
														  var _w=$(this).attr("w");
														  var _h=$(this).attr("h");
														  var W=$(window).width();	//浏览器可视区域的宽度
														  var H=$(window).height();	//浏览器可视区域的高度
														  var w=(W-_w)/2;
														  var h=(H-_h)/2;
														  window.open (href, "newwindow", "height="+_h+", width="+_w+", top="+h+",left="+w+",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
														  return false;
			});
			/*---------------------------------------------------------------------sns登录按钮 end----------------------------------------*/	
			
			
			switch (_Behavior){
				case "lottery":
					ShowView_MissionPage("jiangxiang");
					break;
				case "reg":
					$(".windows .container .homepage .view_1 .btn div[target-div='view_2']").click();
					break;
			}
			
			/*----------ga-----------*/
			$("[ga_category]").live('click',function(){
													 var ga_category=$(this).attr("ga_category");
													 var ga_action=$(this).attr("ga_action");
													 var ga_label=$(this).attr("ga_label");
													 var ga_islogin=$(this).attr("ga_islogin");
													 if (ga_islogin){
														 //如果需要检测登录状态
														 if (ga_islogin=="0" && IsLogin==0){
															 //_gaq.push(['_trackEvent', ga_category, ga_action, ga_label]);
															 _gaq.push(['_trackEvent', ga_category, ga_action, ga_label]);
														 }
													 }
													 else{
														 //如果不检测登录状态
															_gaq.push(['_trackEvent', ga_category, ga_action, ga_label]);
													 }
													 });
			if (_show=="dealer"){
				$(".btn_dealer_show").click();
			}
			else if (_show=="activities"){
				//活动介绍
			}
});

//切换场景，并模拟鼠标滑动
function ChangeView(){
		
	//console.log('模拟点击');
	$("header .shareAndNav .nav .item").eq(G_Nav_index).click();	//切换主要场景
	G_Nav_index=G_Nav_index*1;
	//console.log('模拟鼠标移上');
	$("header .shareAndNav .nav .item").eq(G_Nav_index).addClass("Current").mouseover();	//模拟鼠标mouseover
	if (G_Nav_index==2){
		//console.log('如果是任务页面，装载任务列表');
		$(".mission_View .view_1").html("").load("div/mission_main.php");
	}
	else if (G_Nav_index==0){
		//console.log('如果是专属赛车页面，汽车信息显示（选择框）');
		$(".header .carInfo").fadeIn();
	}
}

//检查并post表单
function PostForm($form){
	Form_data="";
	$form.find(".errorTip").html("");
	$form.find("input.inputText").each(function(){
												MakeData($(this).attr("name"),$(this).val());	//检查文字输入框
												});
	$form.find("input.inputCodeKey").each(function(){
												MakeData($(this).attr("name"),$(this).val());	//检查文字输入框
												});
	$form.find("input:checked").each(function(){
												MakeData($(this).attr("name"),$(this).val());	//检查单选框
												});
	$form.find("select option:selected").each(function(){
														MakeData($(this).parent().attr("name"),$(this).val());		//检查下拉选择框
														});
													  
	$form.find("input:hidden").each(function(){
												MakeData($(this).attr("name"),$(this).val());		//检查隐藏项目
												});
	var url=$form.attr("action");
	var target_div=$form.attr("target_div");
	Form_data="{"+Form_data+"}";
	var json= eval('(' + Form_data + ')');	//构造json，用来传递数据
	
	if ($form.find(".loadingText").length>0){
		$form.find("[issubmit]").hide();
		$form.find(".loadingText").show();
	}
	$.post(url, json,function(data) {
		   var data_length=data.length;
		   if (data.substr(0,5)=="error"){
			   //如果返回错误
			   if ($form.find(".errorTip").length>0){
			   $form.find(".errorTip").html(data.substr(6,data_length-5));	//错误提示
			   
				if ($form.find(".loadingText").length>0){
					$form.find("[issubmit]").show();
					$form.find(".loadingText").hide();
				}
				   
			   }
			   else{
				   
				if ($form.find(".loadingText").length>0){
					$form.find("[issubmit]").show();
					$form.find(".loadingText").hide();
				}
			   	var message=data.substr(6,data.length-5);
			   	alert(message);
			   }
		   }
		   else if(data.substr(0,1)=="{"){
			   //如果返回的是json
			   var dataObject = eval('(' + data + ')');
			   if (dataObject["G_Nav_index"]){
				  //如果需要切换主要场景
				   if (dataObject["IsLogin"]){
					   IsLogin=dataObject["IsLogin"];
				   }
				   G_Nav_index=dataObject["G_Nav_index"];
				   ChangeView();
			   }
			   //任务状态y
			   if (dataObject["mission"]){
				   //dataObject["missionID"]
				   if (dataObject["status"]=="true"){
						UpdateMissionStatus(dataObject["missionID"],dataObject["status"],dataObject["getsorce"]);
						UpdateUserInfoStatus(dataObject["sorce"],dataObject["paiming"]);
				   }
			   }
		   }
		   else if(data.substr(0,8)=="<script>"){
			   $(".script").html(data);
		   }
		   else{
				//如果返回的是html
			   if (data_length>0){
					 //这里有问题，不通用
					 if (target_div.length>0)
					 {
						$(target_div+" .clearFloat").before("<div class='boxItem'></div>");
						$(target_div+" .boxItem:last").html(data);
						$(target_div).css("width",$(target_div+" .boxItem").outerWidth()*$(target_div+" .boxItem").length+"px");
						$(target_div).animate( {marginLeft: ($(target_div+" .boxItem").outerWidth()*($(target_div+" .boxItem").length-1))*-1+"px"},"slow");
					 }
			   }
		   }
		
	});
	
}
// Post data的值
function MakeData(name,value){
	var pix=Form_data==""?"":",";
	var _tmp=name+":\""+value+"\"";
	Form_data=Form_data+pix+_tmp;
}


/*------------------------------------------------------------------窗口 start-----------------------------------------------*/
function ShowWindowView(){
	//显示各大栏目中的小窗口，更具defalut_2_view决定显示哪个小视窗
	var defalut_2_view=$(".windows>.container>.item").eq(G_Nav_index).attr("defalut_2_view");	//默认视窗样式名
	//console.log('得到默认的小视窗名'+defalut_2_view);
	//console.log('--小视窗循环开始');
	$(".windows>.container>.item").eq(G_Nav_index).children(".view").each(function(i){
																					//console.log('-----小视窗循环'+i);
																				   var fadeInTime=2000;
																				   if (G_Nav_index==1){
																					   fadeInTime=0;
																				   }
																				   if (!$(this).hasClass(defalut_2_view)){
																					//如果不是需要显示的
																					//console.log('如果不是需要显示的');
																				   	//$(this).fadeOut(0);
																				   	$(this).hide();
																				   }
																				   else{
																					   //如果是需要显示的
																					//console.log('如果是需要显示的');
																					$(this).fadeIn(fadeInTime);
																				   }
																				   });
	
	//console.log('--小视窗循环结束');
	/*
	if($(".windows>.container>.item").eq(G_Nav_index).children("."+defalut_2_view).find(".outView .viewBox").lenth>0){
		$(".windows>.container>.item").eq(G_Nav_index).children("."+defalut_2_view).find(".outView .viewBox").html("hello");
	}
	$(".windows>.container>.item").eq(G_Nav_index).children("."+defalut_2_view).show();
	*/
	$(".windows>.container>.item").eq(G_Nav_index).addClass("Current").show(0).siblings(".Current").removeClass("Current").hide(0);
}

/*------------------------------------------------------------------窗口 end-----------------------------------------------*/

/*------------------------------------------------------------------背景 start------------------------------------------------*/

//按样式名得到天空或背景需要的偏移量
function getBg_PostionX(ClassName){
	var W=$(window).width();	//浏览器可视区域的宽度
	var w=$(".main_view .background ."+ClassName+" .item").outerWidth();	//单个天空区域的宽度
	var w_current=$(".main_view .background ."+ClassName+" .item").eq(G_Nav_index).outerWidth();	//当前天空区域的宽度
	var w_preAll=0;	//当前背景之前的背景总宽度
	$(".main_view .background ."+ClassName+" .item").eq(G_Nav_index).prevAll().each(function(i){
																							w_preAll+=$(this).outerWidth();
																							});
	var _x=(W-w_current)/2;	//当前背景居中时的偏移量
	var _w=w_preAll*-1+_x;	//整体偏移量
	return _w;
	
}
//移动天空背景层
function moveSkybg(index){
	$(".main_view .background .sky").stop();
	$(".main_view .background .sky").animate({left: getBg_PostionX("sky")+'px'},2000);
			
	
}
//移动地面背景层
function moveLandbg(index){
	$(".main_view .background .land").stop();
	$(".main_view .background .land").animate({left: getBg_PostionX("land")+'px'},2000);
}

//设置背景的宽度
function setBgWidth(){
		setSkyWidth();	//设置天空背景宽度
		setLandWidth();	//设置地面背景宽度
}
//定位背景位置
function postionBg(){
	$(".main_view .background .land").css("left",getBg_PostionX("land")+"px");	//定位地面整体的位置
	$(".main_view .background .sky").css("left",getBg_PostionX("sky")+"px");	//定位天空整体的位置
}
//设置天空背景宽度
function setSkyWidth(){
		if ($(".main_view .background .sky .item").length>0){
			var _W=0;
			$(".main_view .background .sky .item").each(function(){
																_W+= $(".main_view .background .sky .item").outerWidth();
																 });
			//设置天空的整体宽度
			var _w=$(".main_view .background .sky .item").outerWidth()*$(".main_view .background .sky .item").length;
			$(".main_view .background .sky").css("width",_W+"px");
			
		}
	
}
//设置地面背景宽度
function setLandWidth(){
		if ($(".main_view .background .land .item").length>0){
			var _W=0;
			$(".main_view .background .land .item").each(function(){
																_W+= $(".main_view .background .land .item").outerWidth();
																 });
			//设置地面的整体宽度
			var _w=$(".main_view .background .land .item").outerWidth()*$(".main_view .background .land .item").length;
			$(".main_view .background .land").css("width",_W+"px");
			
		}
}


/*------------------------------------------------------------------背景 /end------------------------------------------------*/


/*---------------------------------------------------------------浏览器参数---------------------------------------------------*/
function getQueryStr(LocString,str){  
        var rs = new RegExp("(^|)"+str+"=([^\&]*)(\&|$)","gi").exec(LocString), tmp;  
        if(tmp=rs){  
            return tmp[2];  
        }  
        return "";  
}  


/*---------------------------------------------------------------浏览器参数---------------------------------------------------*/
//UpdateMissionStatus更新任务状态
//MissionID   任务ID
//status	任务完成状态
function UpdateMissionStatus(MissionID,status,getsorce){
	if (status=="true"){
		$(".mission_table .mission_"+MissionID).addClass("completed");
		$(".missionTableBottom .Badge  li.mission_"+MissionID).addClass("completed");
		$(".mission_main_div .mission_table .pop_bg_share .sorces").html(getsorce);
		$(".mission_main_div .mission_table .pop_bg_share").fadeIn("slow");
		
	}
	else if (status=="false"){
		$(".mission_table .mission_"+MissionID).removeClass("completed");
		$(".missionTableBottom .Badge  li.mission_"+MissionID).removeClass("completed");
	}
}
//隐藏成功弹窗，显示所有的任务
function ShowAllMission(){
	$(".missionTableBottom .make_mission").click();	//模拟点击任务挑战按钮
	$(".mission_main_div .mission_table .pop_bg_share").fadeOut("slow");	//隐藏成功后分享按钮
}

//如果有任务的完成状态（）
function UpdateMissionBtn(MissionID,status){
	if (status=="true"){
		$(".mission_table .mission_"+MissionID).addClass("completed_not_all");
		$(".missionTableBottom .make_mission").click();
	}
	else if (status=="false"){
		$(".mission_table .mission_"+MissionID).removeClass("completed_not_all");
	}
}
//更新积分和排名
function UpdateUserInfoStatus(sorce,paiming){
	$(".missionTableBottom .memberInfo .scores").html(sorce+"G");
	$(".missionTableBottom .memberInfo .paiming").html(paiming+"位");
}

//ShowMyCar(index)	//只有在专属赛车有用
function ShowMyCar(index){
	if (index==0){
		
		$(".windows>.container>.homepage").hide();
		$(".header .carInfo").delay(1500).fadeIn(400,function(){
															  $(".header .carInfo .CarModelTab .itemCar").eq(0).click()
															  });
	}
	else{
		$(".mycarPage .CarArea .itemCar").hide();
		$(".header .carInfo").fadeOut();
	}
}

function ShowActiveInfo(index){
	if  (index==5){
		$(".windows>.item").eq(5).show();
		//$(".huodongjieshaoPage .PopWindows").show();
	}
	else{
		$(".windows>.item").eq(5).hide();
		$(".huodongjieshaoPage .PopWindows").hide();
	}
}
//ShowView_MissionPage(div_class)	//主窗口是任务窗口
//div_class	//要显示的视图的Classname
function ShowView_MissionPage(div_class){
	$(".mission_View .outerBox .postionBox").stop();
	var index=0;
	var w=750;
	switch (div_class){
		case "mission_table":
			index=0;
			break;
		case "saicheng":
			index=2;
			break;
		case "jiangxiang":
			index=1;
			break;
	}
	var _x=index*-1*750;
	$(".mission_View .outerBox .postionBox").animate({marginLeft: _x+'px'},1000);
}


//社交按钮
//腾讯

function postToWb(){
    var _t = encodeURI('');
    var _url = encodeURIComponent(document.location);
    var _appkey = encodeURI("258efff116d2466da9b7513cbae7de0b");
    var _pic = encodeURI('');
    var _site = _url;
    var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}