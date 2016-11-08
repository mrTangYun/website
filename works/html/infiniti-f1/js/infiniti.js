 var indexPage_map_index=0;
 var indexPage_Dealer_right_index=0;
 var Activity_ImgNewsPage=0;
 var RacePage_map_index=0
 var CarModelPage_index=0;
$(document).ready(function(){ 
						   //ie6 png图片
							$(".Png").pngFix();
							
							if ($("#FlashGame").length>0){
								insertFlash('FlashGame', 'flash/game.swf', 815, 501);
							}
							
							if ($("#F1Question").length>0){
								insertFlash('F1Question', 'flash/f1.swf', 568, 241);
							}
							
							if ($("#index_f1_flash").length>0){
							insertFlash('index_f1_flash', 'flash/f1.swf', 568, 241);
							}
						   //格式化数字
						   FormatNumber();
						   //显示或隐藏个人积分信息
						   InitPage();
						   //给按钮添加动作
						   BindFunction();
						    ResetVotePostion();
						   $(window).scroll(function(){
								 ResetVotePostion()
							});
						   $(window).resize(function(){
								 ResetVotePostion()
							});
						   $("#floatVote .close").click(function(){ $("#floatVote").hide();});
						   });
//初始化页面
function InitPage(){
	//首页显示第一个地图
	IndexPage_ShowMapByIndex(indexPage_map_index);
	SwitchList(0);
	SwitchVideo(0);
	//初始化经销商专区右侧位置
	InitDealer_right();
	//经销商大广告
	ShowDealerBigImg(0);
	//观赛季活动页面
	Activity_ImgNewsShowImg(0);
}
//给按钮添加动作
function BindFunction(){
	
						   $("#PersonalInfo .bottom .btn").click(function(){ 
																		  ShowOrHiddenDiv();
																		  });
						   //首页赛道左右按钮
						   $(".mapArea .leftButton").click(function(){
						   										IndexPage_ShowMapByDirection(-1);
																	});
						   $(".mapArea .rightButton").click(function(){
						   										IndexPage_ShowMapByDirection(1);
																	});
						   //首页排行榜切换按钮
						   $(".Top10Hearder .left").click(function(){
																   SwitchList($(this).index());
																   });
						   //赛道最快成绩切换按钮
						   $(".index .ItemBox .FastHeader .left").click(function(){
																   				SwitchFastBox($(this).index());
																				 });
						   //首页视频切换按钮
						   $(".SwithButton .Item").click(function(){
																   SwitchVideo($(this).index());
																   });
						   $(".header .menu .left").hover(function(){
																		  SwichMenu($(this).index());
																		  },function(){
																		  	//SwichMenu(0);
																			  });
						  //经销商专区
						  $(".ShowCar_Small .btn_top").click(function(){
																		Dealer_ScollByDirection(-1);
																		 });
						  $(".ShowCar_Small .btn_bottom").click(function(){
																		Dealer_ScollByDirection(1);
																		 });
						  $(".DealerArea .ShowCar_Big .ButtonArea .left").click(function(){
																						 ShowDealerBigImg($(this).index());
																						 });
						  //观赛季活动
						  $(".Content_Activity_News .ImgBox .ImgList .left").click(function(){
											 Activity_ImgNewsShowImg($(this).index());
																							});
						  $(".Content_Activity_News .ImgBox .LeftButton").click(function(){
											Activity_ImgNewsShowByDirection(-1);										 
																						 });
						  $(".Content_Activity_News .ImgBox .RightButton").click(function(){
											Activity_ImgNewsShowByDirection(1);										 
																						 });
						  $(".Content_Activity_News .ImgBox .LeftButton_2").click(function(){
											Activity_ImgNewsPageByDirection(-1);										 
																						 });
						  $(".Content_Activity_News .ImgBox .RightButton_2").click(function(){
											Activity_ImgNewsPageByDirection(1);										 
																						 });
						  $(".Content_Activity_News .RaceShowBox .LeftButton").click(function(){
											RacePage_ShowMapByDirection(-1);										 
																						 });
						  $(".Content_Activity_News .RaceShowBox .RightButton").click(function(){
											RacePage_ShowMapByDirection(1);										 
																						 });
						  $(".CarModelPage .ImgBox .TopButton").click(function(){
											CarModelPageByDirection(1);										 
																						 });
						  $(".CarModelPage .ImgBox .BottomButton").click(function(){
											CarModelPageByDirection(-1);										 
																						 });
						  
						  
}
//浮动投票图标
function ResetVotePostion(){
	$('#floatVote').css('top', $(document).scrollTop() + $(window).height() - $('#floatVote').height());
	$('#floatVote').css('left', $(document).scrollLeft() + $(window).width() - $('#floatVote').width());	
}
//车型介绍页面
function CarModelPageByDirection(direction){
	var total=$(".CarModelPage .ImgBox .ImgBoxList .Postion div").length-4;
	var index=CarModelPage_index;
	
	if(direction==-1){
		index=(index+direction)<(-1*total)?(-1*total):(index+direction);
	}
	if(direction==1){
		index=(index+direction)>0?0:(index+direction);
	}
	CarModelPage_index=index;
	var postionY="";
	postionY=index*102+"px";
	$(".CarModelPage .ImgBox .ImgBoxList .Postion").animate( { top: postionY } , 500 );
}


//观赛季活动页面
function Activity_ImgNewsPageByDirection(direction){
	var total=$(".Content_Activity_News .ImgBox .ImgList .left").length;
	var index=$(".Content_Activity_News .ImgBox .ImgList .left[select=true]").index();
	if(direction==1){
		Activity_ImgNewsPage=Activity_ImgNewsPage+6>total?Activity_ImgNewsPage:Activity_ImgNewsPage+5;
		index=Activity_ImgNewsPage;
	}
	if(direction==-1){
		Activity_ImgNewsPage=Activity_ImgNewsPage-5<0?0:Activity_ImgNewsPage-5;
		$(".Content_Activity_News .ImgBox .ImgList .left").show();
		index=Activity_ImgNewsPage;
	}
	Activity_ImgNewsShowImg(index);
	$(".Content_Activity_News .ImgBox .ImgList .left").each(function(i, domEle){
																	 if(i<Activity_ImgNewsPage){
																		 $(domEle).hide();
																	 }
																	 });
}
function Activity_ImgNewsShowByDirection(direction){
	var total=$(".Content_Activity_News .ImgBox .ImgList .left").length;
	var index=$(".Content_Activity_News .ImgBox .ImgList .left[select=true]").index();
	if(direction==1){
		index=index+1>=total-1?total-1:index+1;
	}
	if(direction==-1){
		index=index-1<0?0:index-1;
	}
	Activity_ImgNewsShowImg(index);
	
}
function Activity_ImgNewsShowImg(index){
	$(".Content_Activity_News .ImgBox .ImgList .left").attr("select","false");
	$(".Content_Activity_News .ImgBox .ImgList .left:eq("+index+")").attr("select","true");
	var src=$(".Content_Activity_News .ImgBox .ImgList .left:eq("+index+") img").attr("src");
	var txt=$(".Content_Activity_News .ImgBox .ImgList .left:eq("+index+")").attr("text");
	$(".Content_Activity_News .ImgBox .Text").html(txt);
	$(".Content_Activity_News .ImgBox .ShowImg").html("<img src=\""+src+"\" height=\"323\" width=\"517\" />");
}
//根据方向显示赛道介绍赛道地图
function RacePage_ShowMapByDirection(direction){
	var total=$(".Content_Activity_News .RaceShowBox .ImgAreaSprite .list .left").length;
	var index=RacePage_map_index;
	index=index+direction;
	if (index>total-1) index=total-1;
	if (index<0) index=0;
	RacePage_ShowMapByIndex(index);
}
//根据索引显示赛道介绍赛道地图
function RacePage_ShowMapByIndex(index){
	RacePage_map_index=index;
	index*=-1;
	var postionX=index*500;
	postionX=postionX+"px";
	
	$(".Content_Activity_News .RaceShowBox .ImgAreaSprite .list").animate( { left: postionX } , 500 );
}

//-观赛季活动页面
//根据索引显示经销商专区广告图片
function ShowDealerBigImg(index){
		var postionY=(index*-18)-406+"px"
		$(".DealerArea .ShowCar_Big .ButtonArea").css("background-position","-354px "+postionY+"");
		$(".DealerArea .ShowCar_Big .Content .Item").hide();
		$(".DealerArea .ShowCar_Big .Content .Item").eq(index).show();
}

//根据方向移动经销商专区图片移动
function Dealer_ScollByDirection(direction){
	var total=$(".ShowCar_Small .CarListBox div").length;
	var index=indexPage_Dealer_right_index;
	index=index+direction;
	if (index>total-4) index=total-4;
	if (index<0) index=0;
	Dealer_ScollByIndex(index);
}
//根据索引移动经销商专区右侧图片
function Dealer_ScollByIndex(Index){
	indexPage_Dealer_right_index=Index;
	$(".ShowCar_Small .CarListBox div").each(function(index, domEle){
										var postionX=38-(index-Index)*8+"px";
										var postionY=60*(index-Index)+"px";
										//$(domEle).css("left",postionX).css("top",postionY);
										$(domEle).animate( { top: postionY,left: postionX} , "fast");
											  });
}

//初始化经销商专区右侧位置
function InitDealer_right(){
	$(".ShowCar_Small .CarListBox div").each(function(index, domEle){
										var postionX=38-index*8+"px";
										var postionY=60*index+"px";
										$(domEle).css("left",postionX).css("top",postionY);
											  });
}

//导航条切换
function SwichMenu(index){
	var postionY=(index*35+219)*-1+"px"
	$(".header .menu").css("background-position","0 "+postionY+"");
}

//首页视频切换
function SwitchVideo(index){
	var postionY=(index*-18)+"px"
	//视频头部按钮切换css
	$(".index .VideoArea .SwithButton_BG").css("background-position","-231px "+postionY+"");
	$(".VideoArea .SwichContent .Item").hide();
	$(".VideoArea .SwichContent .Item").eq(index).show();
}
//首页排行榜切换
function SwitchList(index){
	var postionY=(index*-24)+"px"
	//排行榜头部按钮切换css
	$(".index .header .Top10Hearder").css("background-position","0 "+postionY+"");
	$(".ListArea .ItemBox").hide();
	$(".ListArea .ItemBox").eq(index).show();
	if(index==2){SwitchFastBox(0);}
}
//首页排行榜最快成绩切换
function SwitchFastBox(index){
	var postionY=(index*-22)-575+"px"
	//排行榜赛道按钮切换css
	$(".index .ItemBox .FastHeader").css("background-position","52px "+postionY+"");
	$(".index .ItemBox .FastBox").hide();
	$(".index .ItemBox .FastBox").eq(index).show();
}

//根据方向显示首页赛道地图
function IndexPage_ShowMapByDirection(direction){
	var total=$(".index .mapBoxPostion .item").length;
	var index=indexPage_map_index;
	index=index+direction;
	if (index>total-1) index=total-1;
	if (index<0) index=0;
	IndexPage_ShowMapByIndex(index);
}
//根据索引显示首页赛道地图
function IndexPage_ShowMapByIndex(index){
	indexPage_map_index=index;
	index*=-1;
	var postionX=index*398;
	postionX=postionX+"px";
	$(".index .mapBoxPostion").animate( { left: postionX } , 500 );
	
}
//页面顶部个人积分信息
function ShowOrHiddenDiv(){
	var topValue=$("#PersonalInfo").position().top;
	topValue=topValue==0?"-29px":"0px";
	 $("#PersonalInfo").animate( { top: topValue } , 500 );
}
//格式化数字
function FormatNumber(){
	//顶部浮动条-积分
	//FormatMyScore();
	//顶部浮动条-单圈最好成绩
	//FormatMyFast();
	//排行榜
	FormatTop10();
	$(".FormatNumber").pngFix();
	
	
}
//格式化排行榜的数字
function FormatTop10(){
	$(".ItemBox .FormatNumber_A").each(function(index, domEle){
										var str=$(domEle).html();
										$(domEle).html(CreateNumberDiv(str,"images/FormatNumber/style3/","gif",13,15));
											  });
	$(".ItemBox .FormatNumber_B").each(function(index, domEle){
										var str=$(domEle).html();
										$(domEle).html(CreateNumberDiv(str,"images/FormatNumber/style4/","gif",13,15));
											  });
}
function FormatMyFast(){
	var str=$("#myFast").html();
	$("#myFast").html(CreateNumberDiv(str,"images/FormatNumber/style2/","png",13,11));
}

function FormatMyScore(){
	var str=$("#myScore").html();
	$("#myScore").html(CreateNumberDiv(str,"images/FormatNumber/style1/","png",13,11));
}

function CreateNumberDiv(str,FormatImgPath,filetype,width,height){
	var re=new RegExp(/\d/);
	var f =str.split("");
	var text="";
	for (var i=0;i<f.length;i++)
	{
		if (f[i]<10 && f[i]>=0)
		{
			text+="<img src=\""+FormatImgPath+f[i]+"."+filetype+"\" width=\""+width+"\" height=\""+height+"\" />";
		}
		else{
			var asc=f[i].charCodeAt(0);
			//分号和引号的处理
			if (asc==8216 || asc==39){
				text+="<img src=\""+FormatImgPath+"m."+filetype+"\" width=\""+width+"\" height=\""+height+"\" />";
			}
			if (asc==8220 || asc==34){
				text+="<img src=\""+FormatImgPath+"s."+filetype+"\" width=\""+width+"\" height=\""+height+"\" />";
			}
		}
	}
	return text;
}

