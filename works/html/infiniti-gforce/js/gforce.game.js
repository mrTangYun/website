$(document).ready(function(){
	
	$("[data-game]").live('click',function(){
			if (IsLogin)
			{
				var url=$(this).attr("data-game");
				
				var _html="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"  codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\"   width=\"750\" height=\"358\" id=\"flashgame\">"; 				
				_html+="<param name=\"movie\" value=\""+url+"\">";
				_html+="<param value=\"transparent\" name=\"wmode\">";
				_html+="<param name=\"quality\" value=\"high\"> ";
				_html+="<embed src=\""+url+"\" width=\"750\" height=\"358\" wmode=\"transparent\" quality=\"high\"  pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" swLiveConnect=\"true\"  name=\"flashgame\"></embed>";
				_html+="</object> ";
				$("#flashGameArea").html(_html);
				$("#flashGameArea").animate({marginTop: '344px'},1000);
				return false;
			}
			else{
				alert("请先进行登录！");
				$(".btn_dealerAndLogin .login").click();
				return false;
			}
		});	
	
	$(".flash_1_popDiv .top100 li[data-page]").live('click',function(){
		var index=$(this).attr("data-page");
		var $list_box=$(this).parents(".page").prev(".list_box");
		index=index*$list_box.height()*-1;
		$list_box.find(".list").stop().animate({marginTop: index+'px'},500);
	});
	
	$(".flash_1_popDiv .btn_close_1").live('click',function(){
			$(".flash_1_popDiv").stop().animate({marginTop: '-360px'},500);
			return false;
		});
		
});



function game_share(name,raceNo,score){
	 var url=encodeURIComponent('http://gforce.infiniti.com.cn/');
	 var _pic='http://gforce.infiniti.com.cn/images/gforce/shareimage2.jpg';
	 var __title;
	 var __score_title='';
	 if (score>0)	__score_title='，获得'+score+'G分';
	 if (raceNo==1){
	 	__title="我刚刚挑战了加速与紧急制动计时赛"+__score_title+"！启动，加速，路况突变，适时刹车, 在严酷挑战面前，你可有自信做到绝对精准，而不失之毫厘？点击下面链接：http://t.cn/zWy9IZB ，和我一起参加G速特训，挑战车王维特尔，进阶Master G！";
	 }
	 else if  (raceNo==2){
	 	__title="我刚刚挑战了往复蛇形绕桩计时赛"+__score_title+"！百转千肠的蛇形赛道障碍重重，凶险异常，你可对自己的驾驶功力有信心，做到精准掌握，驾驭随心？点击下面链接：http://t.cn/zWy9IZB ，和我一起参加G速特训，挑战车王维特尔，进阶Master G！";
	 }
	 var title=encodeURIComponent(__title);
	 switch (name){
		 case "tsina":
			var param = {
				url:'',
				type:'3',
				count:'', /**是否显示分享数，1显示(可选)*/
				appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
				title:__title, /**分享的文字内容(可选，默认为所在页面的title)*/
				pic:_pic, /**分享图片的路径(可选)*/
				ralateUid:'', /**关联用户的UID，分享微博会@该用户(可选)*/
				language:'zh_cn', /**设置语言，zh_cn|zh_tw(可选)*/
				rnd:new Date().valueOf()
			  }
			 ShareScore(4,name);
			 window.open("http://service.weibo.com/share/share.php?url="+ param["url"]+"&appkey="+ param["appkey"]+"&title="+ param["title"]+"&pic="+ param["pic"]+"&ralateUid="+ param["ralateUid"]+"&language="+ param["language"],"_blank","width=615,height=505");
			  //return false;
			
			break;
		 case "renren":
			 var rrShareParam = {
					resourceUrl : 'http://gforce.infiniti.com.cn?utm_source=SINARenren&utm_medium=Task&utm_content=Task&utm_campaign=GForceReferral',	//分享的资源Url
					//resourceUrl : 'http://www.56.com/u29/v_NjY4MjYxNjI.html',	//分享的资源Url
					pic : _pic,		//分享的主题图片Url
					title : '英菲尼迪2012 G-Force极风之旅大型体验活动全国招募开始了！',		//分享的标题
					description :__title	//分享的详细描述
				};
			 ShareScore(4,name);
			rrShareOnclick(rrShareParam);
			//return false;
			break;
		 
	 }
	 if (name!="tsina" && name!="renren"){
		 
		 var u='http://www.jiathis.com/send/?webid='+name+'&url='+url+'&title='+title+'&pic='+_pic;
		 
		var W=$(window).width();	//浏览器可视区域的宽度
		var H=$(window).height();	//浏览器可视区域的高度
		W=0;
		H=0;
		ShareScore(4,name);
		window.open(u,'sharewindow','toolbar=0,resizable=1,scrollbars=yes,status=1,width=626,height=436,top='+W+',left='+H);
	 }
}

//积分更新
function Flash_UpdateScores(scores,rank){
	UpdateUserInfoStatus(scores,rank);
}
function Flash_Exit(){
	$("#flashGameArea").animate({marginTop: '0px'},1000);
}
function Flash_LoginForm(){
	$(".btn_dealerAndLogin .login").click();
}
function Flash_SnsShare(index,raceNo,score){
	index*=1;
	var name;
	switch (index){
		 case 1:
		 	name="tsina";
		 	break;
		 case 2:
		 	name="renren";
		 	break;
		 case 3:
		 	name="douban";
		 	break;
		 case 4:
		 	name="qzone";
		 	break;
		 case 5:
		 	name="kaixin001";
		 	break;
		 case 6:
		 	name="tqq";
		 	break;
	}
	game_share(name,raceNo,score);
}
	
		
function flashgame_DoFSCommand(command, args) { 
 if (command == "Flash_LoginForm") { 
	Flash_LoginForm();
 }
 if (command == "Flash_Exit") { 
	Flash_Exit();
 }
 
 if (command == "Flash_UpdateScores") { 
	Flash_UpdateScores();
 }
 
 if (command == "Flash_SnsShare") { 
 	//alert(args.length);
	Flash_SnsShare(args[0],args[1],args[2]);
 }
}


if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && 
  navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
  document.write('<SCRIPT LANGUAGE=VBScript\> \n');
  document.write('on error resume next \n');
  document.write('Sub flashgame_FSCommand(ByVal command, ByVal args)\n');
  document.write(' call flashgame_DoFSCommand(command, args)\n');
  document.write('end sub\n');
  document.write('</SCRIPT\> \n');
}


