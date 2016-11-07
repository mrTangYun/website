var W,H;
var aData = new Array();
//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图,置顶大缩略图]
var aDirectorData = new Array();
var aTeamData = new Array(); //名字，职位，工作地点，图片,索引，城市
var aHonorData = new Array();
var aClientData = new Array(); //合作客户  标题，logo图片
var aAgentsData = new Array(); //合作代理商
var aAlliance = new Array();	//我们的联盟
var fRadio_right = .953125,fRadio_left=.046875;
var map;
var aVideo = ["popWorkWindowVideo","flowerPlayer","worksByDirectorListPlayer","popMapWindowVideo","flowerPlayer-map","worksByHonerPlayer"];
var nowVideoObject;
var aLoading = new Array();
var isLogin = false;	//是否登录
var timer_skroll = false,indexAuto = 0,bSkrollAuto = false;
var s;
var bIsWidthView ,_bIsWidthView;

 String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
 }

//--------------------------------------------------
// LOADER FUNCTION (图像显示功能)
//--------------------------------------------------
var Loader = {
	imgTag : null,
	imgHeight : 0,
	//
	setVal : function(number){
		var loaded;
		if (number<0){
			loaded = 0;	
		}else if(number >= 100){
			loaded = 99;	
		}else{
			loaded = Math.ceil(number);
		}
		this.imgTag.css("top", -this.imgHeight*loaded).attr("data",loaded);
	},
	Init : function(opt){
		this.imgTag = $(opt.imgTag);
		this.imgHeight = opt.imgHeight;
	}
}

var TP = {
	makeDownload:function(title,url){
		if (url){
			var html = "";
			html += 'wp-content/themes/tpss/download.php?title='+title+'&content='+url;
			return html;
			//aData[index][9]
		}
		else{
			return false;
		}
	},
	init:function(){
		TP.setLogin();
		this.flashObj = null;
		this.properties={
			flashplay:false,
			ie:document.all ? true : false,
			bSupportVideo:$("html").hasClass('video') //是否支持video
		};
		this.bindEvent();
		//分类导航
		$(".floatCreategory .level-2").each(function(i){
			var y = $(this).children("li").length*36;
			y = (y-48)/-2;
			$(this).css({top: y+"px"});
		});

		s= skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			},
		    render: function(data) {
		        //Log the current scroll position.
		        //console.log(data.curTop);
				//$("#curTop").html(data.curTop);
		    },
			beforerender:function(o){
				//console.log(o.curTop);
				if (o.curTop <= 300){
					$("#aside a").eq(0+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 700){
					$("#aside a").eq(1+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 1500){
					$("#aside a").eq(2+1).addClass('current').siblings('.current').removeClass('current');

				}
				else if(o.curTop <= 2250){
					$("#aside a").eq(3+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 3000){
					$("#aside a").eq(4+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 3780){
					$("#aside a").eq(5+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 4500){
					$("#joinusPage-gray .downArrow").addClass('current').siblings().removeClass('current');
					$("#aside a").eq(6+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 5300){
					$("#joinusPage-gray .upArrow").addClass('current').siblings().removeClass('current');
					$("#aside a").eq(6+1).addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop > 5300){
					$("#aside a").eq(7+1).addClass('current').siblings('.current').removeClass('current');

				}

				if (o.curTop <= 189){
					indexAuto = 0 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 190 && o.curTop <= 659){
					indexAuto = 1 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 660 && o.curTop <= 1513){
					indexAuto = 2 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 1514 && o.curTop <= 2305){
					indexAuto = 3 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 2306 && o.curTop <= 2975){
					indexAuto = 4 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 2976 && o.curTop <= 3774){
					indexAuto = 5 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 3775 && o.curTop <= 4513){
					indexAuto = 6 ;
					bSkrollAuto = true;
				}
				else if (o.curTop >= 4514 && o.curTop <= 5373){
					indexAuto = 6.5 ; //6600
					bSkrollAuto = true;
				}
				else if (o.curTop >= 5374){
					indexAuto = 7 ;
					bSkrollAuto = true;
				}
				else{
					bSkrollAuto = false;
				}
			}
		});
		skrollr.menu.init(s);
	},
	//是否登录
	setLogin:function(){
		$.getJSON('wp-content/themes/tpss/is_login.php', function(json, textStatus) {
			if (json.error_code){
				isLogin = false;
			}
			else{
				isLogin = true;
			}
				/*optional stuff to do after success */
		});
	},
	//停止播放视频
	stopPlayer:function(){
		var Player;
		for (var i = 0; i < aVideo.length; i++) {
			Player = videojs(aVideo[i]);
			if (Player){
				//console.log(Player);
				Player.pause();
			}
		};
	},
	//关闭弹窗
	closePopWindow:function(){
		$(".close").click();
	},
	bindEvent:function(){
		$(window).bind('mousewheel', function(event) {
			
			$("html,body").stop();
			//console.log(indexAuto);
			if (!timer_skroll){
				timer_skroll = setTimeout(function(){
					if (bSkrollAuto){
						var _y;
						if (indexAuto == 6.5 ) {
							_y = 5000;
						}
						else{
							_y = $("#aside a[data-menu-top]").eq(indexAuto).attr("data-menu-top");
						}
						$("html,body").stop().animate({scrollTop:_y+"px"},"slow");
					}
				},500);
			}
			else{
				clearTimeout(timer_skroll);
				timer_skroll = setTimeout(function(){
					if (bSkrollAuto){
						var _y;
						if (indexAuto == 6.5 ) {
							_y = 5000;
						}
						else{
							_y = $("#aside a[data-menu-top]").eq(indexAuto).attr("data-menu-top");
						}
						$("html,body").stop().animate({scrollTop:_y+"px"},"slow");
					}
				},500);
			}
			
		});
		$("#worksPage").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#worksPage .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#worksPage .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$("#directorPage").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#directorPage > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#directorPage > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$("#teamPage").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#teamPage > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#teamPage > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$("#honorPage").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#honorPage .mianBox > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#honorPage .mianBox > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$("#logoWall-Client").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#logoWall-Client > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#logoWall-Client > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$("#logoWall-Agents").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$("#logoWall-Agents > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$("#logoWall-Agents > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		$(".Alliance-box").swipe({
			swipe:function(event, direction, distance, duration, fingerCount) {
			    if (direction == "left"){
					$(".Alliance-box > .pagenavi span.current").next("span").click();
			    }
			    else if(direction == "right"){
					$(".Alliance-box > .pagenavi span.current").prev("span").click();
			    }
		    }
		});
		
	/*
		$("#rightMain").on('swipeleft', '#worksPage', function(event) {
			$("#worksPage .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#rightMain").on('swiperight', '#worksPage', function(event) {
			$("#worksPage .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$("#directorPage").on('swipeleft', '.mianBox', function(event) {
			$("#directorPage > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#directorPage").on('swiperight', '.mianBox', function(event) {
			$("#directorPage > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$("#teamPage").on('swipeleft', '.mianBox', function(event) {
			$("#teamPage > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#teamPage").on('swiperight', '.mianBox', function(event) {
			$("#teamPage > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$("#honorPage").on('swipeleft', '.mianBox', function(event) {
			$("#honorPage .mianBox > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#honorPage").on('swiperight', '.mianBox', function(event) {
			$("#honorPage .mianBox > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$("#logoWall-Client").on('swipeleft', '.mianBox', function(event) {
			$("#logoWall-Client > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#logoWall-Client").on('swiperight', '.mianBox', function(event) {
			$("#logoWall-Client > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$("#logoWall-Agents").on('swipeleft', '.mianBox', function(event) {
			$("#logoWall-Agents > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$("#logoWall-Agents").on('swiperight', '.mianBox', function(event) {
			$("#logoWall-Agents > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
		$(".Alliance-box").on('swipeleft', '.mianBox', function(event) {
			$(".Alliance-box > .pagenavi span.current").next("span").click()
			event.preventDefault();
		});
		$(".Alliance-box").on('swiperight', '.mianBox', function(event) {
			$(".Alliance-box > .pagenavi span.current").prev("span").click()
			event.preventDefault();
		});
	*/
		$("#aside a").click(function(){

			$(".pagenavi").each(function(index, el) {
				$(this).find("span").eq(0).click();
			});
			TP.closePopWindow();
			TP.stopPlayer();
			nowVideoObject = false;
			/*
			$(this).addClass('current').siblings('.current').removeClass('current');
			var _y = $(this).attr("data-menu-offset");
			if (_y >= 0){
				//$("html,body").scrollTop(_y);
				$("html,body").stop().animate({scrollTop:_y+"px"},"slow")
				//$("html,body").stop().animate({scrollTop:_y+"px"},t,"easeOutCubic")
				return false;
			}
			*/
		});
		$("#joinusPage-gray .upArrow").click(function(event) {
			var _y = 6300;
			$("html,body").stop().animate({scrollTop:_y+"px"})
		});
		$("#joinusPage-gray .downArrow").click(function(event) {
			var _y = 6600;
			$("html,body").stop().animate({scrollTop:_y+"px"})
		});

		var bIsOnMenu = false;
		$("#menuAlert").hide();
		$("#aside a[data-menu-top]").hover(function(){
			//console.log($(this).position().top);
			bIsOnMenu = true;
			var i_top = $(this).css("margin-top").replace('px','')*1;
			$("#menuAlert").show().addClass('show').css({
				top: $(this).position().top+i_top+'px'
			}).find(".text").html($(this).html());
		},function(){
			bIsOnMenu = false;
			setTimeout(function(){
				if (!bIsOnMenu){
					$("#menuAlert").removeClass('show');
					setTimeout(function(){
						if (!bIsOnMenu){
							$("#menuAlert").hide();
						}
					},500);
				}
			},300);
			
		});

		$("#popMember .container .btnTab .item").click(function(event) {
			$(this).addClass('current').siblings('.current').removeClass('current');
			$("#popMember .box").eq($(this).index()).show().siblings().hide();
			var _y = (H-$("#popMember .container").height())/2;
			$("#popMember .container").css({marginTop: _y + "px"});
		});
		$("#icon-user").click(function(event) {
			if (!isLogin){
				$("#popMember").show();
				$("#popMember .container .btnTab .item").eq(0).click();
			}
			return false;
		});
		$("#popMember .reg .btn").click(function(){
			var v = false;
			if ($("#reg-name").val().trim() != '' && $("#reg-pwd").val().trim() != '' && $("#reg-repwd").val().trim() != ''){
				v = true;
			}
			if (v){
				$.getJSON('wp-content/themes/tpss/register.php', {log: $("#reg-name").val().trim(),pwd:$("#reg-pwd").val().trim(),repwd:$("#reg-repwd").val().trim()}, function(json, textStatus) {
						/*optional stuff to do after success */
						if (json.error_code){
							if (json.error_code == 20001 || json.error_code == 20002|| json.error_code == 20006){
								$("#popMember .reg .inputCell-2:eq(0) .info").html("<div class='info Error'>"+json.error+"</div>");
							}
							if (json.error_code == 20003 || json.error_code == 20004){
								$("#popMember .reg .inputCell-2:eq(1) .info").html("<div class='info Error'>"+json.error+"</div>");
							}
							if (json.error_code == 20005){
								$("#popMember .reg .inputCell-2:eq(2) .info").html("<div class='info Error'>"+json.error+"</div>");
							}
						}
						else{
							isLogin = true;
							$("#popMember .close").click();
						}
				});
			}
			return false;
		});
		$("#popMember .login .btn").click(function(){
			var v = false;
			if ($("#login-name").val().trim() != '' && $("#login-pwd").val().trim() != ''){
				v = true;
			}
			if (v){
				$.getJSON('wp-content/themes/tpss/login.php', {log: $("#login-name").val().trim(),password:$("#login-pwd").val().trim()}, function(json, textStatus) {
						/*optional stuff to do after success */
						if (json.error_code){

						}
						else{
							isLogin = true;
							$("#popMember .close").click();
						}
				});
			}
			return false;
		});

		//下载
		$("#popDownload .btn-downLoadArea a").click(function(){
			/*
			$.get('wp-content/themes/tpss/zip_download.php',{'title':"下载测试","content":'["'+$(this).attr("href")+'"]'}, function(data, textStatus, xhr) {
			});

			return false;
			*/
		});

		//分享
		var bIsOnShareDiv = false;
		$("#icon-share").hover(function(){
			$("#menuAlert2").addClass('show');
		},function(){
			setTimeout(function(){
				if(!bIsOnShareDiv){
					$("#menuAlert2").removeClass("show");
				}
			},200);
		});
		$("#menuAlert2").hover(function(){
			bIsOnShareDiv = true;
		},function(){
			bIsOnShareDiv = false;
			$("#menuAlert2").removeClass("show");
		});
		$("#shareSina").click(function(){
			$(".jiathis_button_tsina").click();
		});
		$("#shareFb").click(function(){
			$(".jiathis_button_fb").click();
		});
		$("#shareQq").click(function(){
			$(".jiathis_button_qzone").click();
		});
		//链接
		var bIsOnLinkDiv = false;
		$("#icon-link").hover(function(){
			bIsOnShareDiv = false;
			$("#menuAlert2").removeClass("show");
			$("#menuAlert3").addClass('show');
		},function(){
			setTimeout(function(){
				if(!bIsOnLinkDiv){
					$("#menuAlert3").removeClass("show");
				}
			},300);
		});
		$("#menuAlert3").hover(function(){
			bIsOnLinkDiv = true;
		},function(){
			bIsOnLinkDiv = false;
			$("#menuAlert3").removeClass("show");
		});


		$("#popMember .close").click(function(event) {
			$("#icon-user").removeClass('current');
			$("#popMember").hide();
		});
		$(".btn-download").click(function(event) {
			if (isLogin){

				//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图,置顶大缩略图]
				var index = $(this).attr("data-index");
				$("#popDownload .downloadSinger").show();
				$("#popDownload .downloadM").hide();
				$("#popDownload .title").html("视频下载："+aData[index][0]);
				var _infoHtml = '';
				if (aData[index][9] != ''){
					_infoHtml += '篇名：';
					_infoHtml += aData[index][9];
					_infoHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				}
				if (aData[index][10] != ''){
					_infoHtml += '导演：';
					_infoHtml += aData[index][10];
					_infoHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				}
				if (aData[index][11] != ''){
					_infoHtml += '客户：';
					_infoHtml += aData[index][11];
					_infoHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				}
				if (aData[index][12] != ''){
					_infoHtml += '代理商：';
					_infoHtml += aData[index][12];
					_infoHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				}
				$("#popDownload .info").html(_infoHtml);

				$("#popDownload .btn-downLoadArea a.btn-0").attr("href",TP.makeDownload(aData[index][9],aData[index][21]));
				if (aData[index][22] !=""){
					$("#popDownload .btn-downLoadArea").removeClass("justNomal");
					$("#popDownload .btn-downLoadArea a.btn-1").attr("href",TP.makeDownload(aData[index][9],aData[index][22]));
				}
				else{
					$("#popDownload .btn-downLoadArea").addClass("justNomal");
				}
				$("#popDownload").show();
				
				(function(){
					var _y = (H-$("#popDownload .container").height())/2;
					$("#popDownload .container").css({marginTop: _y + "px"});
				})();
			}
			else{
				$("#popMember").show();
				$("#popMember .container .btnTab .item").eq(0).click();
			}
			return false;
		});


		$(".btn-downWork").click(function(event) {
			if (isLogin){
				var index = $(this).attr("data-index");
				$("#popDownload .downloadM").show();
				$("#popDownload .downloadSinger").hide();
				$("#popDownload .title").html($(this).parent().prev().find(".name").html()+"-作品下载");
				var _infoHtml = '';
				//作品列表
				//#worksByDirectorList .list 
				$("#worksByDirectorList .list li").each(function(i){
					_infoHtml += '<div class="item checked"';
					_infoHtml += ' data-mp4="'+JsonDirectorsWork[$(this).attr("data-index")].mp4+'"';
					_infoHtml += '>';
					_infoHtml += $(this).find(".title").html();
					_infoHtml += '</div>';
				});
				$("#popDownload .downloadM .list").html(_infoHtml);
				$("#popDownload .downloadM .btnArea .btn-chooseAll").html("全选").removeClass("checked");
				$("#popDownload").show();
				
				TP.MkDownloadUrl();
				(function(){
					var _y = (H-$("#popDownload .container").height())/2;
					$("#popDownload .container").css({marginTop: _y + "px"});
				})();
			}
			else{
				$("#popMember").show();
				$("#popMember .container .btnTab .item").eq(0).click();
			}
			return false;
		});
		$("#popDownload .downloadM .btnArea .btn-chooseAll").click(function(){
			if (!$(this).hasClass("checked")){
				$("#popDownload .downloadM .list .item").addClass("checked");
				$(this).html("取消全选").addClass("checked");
			}
			else{
				$("#popDownload .downloadM .list .item").removeClass("checked");
				$(this).html("全选").removeClass("checked");
			}
			TP.MkDownloadUrl();
		});
		//下载导演作品

		$("#popDownload .close").click(function(event) {
			$("#popDownload").hide();
		});
		$(".to-findPwd").click(function(event) {
			$("#popMember .container .btnTab .item:eq(2)").click();
		});

		//导演页，点击导演
		$("#directorPage .mianBox").on('click', '.box .item0', function(){
			if (!$(this).hasClass('tempAdd-0')){
				//[名字，是否有头像(1/0),头像地址]
				var index= $(this).attr("data-index");
				var _html = "";
				//姓名
				$("#directorPage .popShowItem .name").html(aDirectorData[index][0]);
				var bHasWorks = false; //是否有作品
				//根据姓名，列出其作品
				(function(sName){
				 	//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图]
				 	var _html = "";
				 	for (var i = 0; i < JsonDirectorsWork.length; i++) {
				 		//aData[i]
				 		if (JsonDirectorsWork[i].director == sName){
				 			bHasWorks = true;
				 			_html += '<li data-index="'+i+'">';
				 			_html += '<div class="img">';
				 			_html += '<img src="'+JsonDirectorsWork[i].thumb+'" width="100%">';
				 			_html += '<div class="play">';
				 			_html += '</div>';
				 			_html += '</div>';
				 			_html += '<div class="title">';
				 			_html += JsonDirectorsWork[i].title;
				 			_html += '</div>';
				 			_html += '</li>';
				 		}
				 	};
				 	_html += '<div class="clearfloat"></div>';
				 	$("#directorPage .popShowItem .InfoArea ul").html(_html);
				})(aDirectorData[index][0]);
				if (bHasWorks){
					$("#ShowWorks,.btn-downWork").show();
				}
				else{
					$("#ShowWorks,.btn-downWork").hide();
					$("#ShowResume").click();
				}
				//简历
				$("#Resume").html($("#DirectorPageData li").eq(index).html());
				if (aDirectorData[index][1] == "1"){
					//如果有头像
					$("#directorPage .popShowItem .BigImg img").attr("src",aDirectorData[index][2]).parent().show().parent().removeClass('hasNoBigImg').addClass('hasBigImg');
				}
				else{
					$("#directorPage .popShowItem .BigImg img").attr("src","images/null-big.jpg").parent().show().parent().removeClass('hasNoBigImg').addClass('hasBigImg');
					//如果没头像
				}
				$("#directorPage .popShowItem").show(0, function() {
					$("#directorPage .popShowItem .container").removeClass('hides');
				});

				$("#worksByDirectorList .list li").click(function(event) {
					$(this).addClass("current").siblings(".current").removeClass("current");
					/* Act on the event */
					//var myWorksByDirectorListPlayer
					$("#worksByDirectorList ul").addClass('hide');
					var index = $(this).attr("data-index");
					$(".worksByDirectorListPlayDiv .titleDiv .title").html(JsonDirectorsWork[index].title);
					var myWorksByDirectorListPlayer = videojs('worksByDirectorListPlayer');
					 //[标题，视频截图，说明，‘未知’，缩略图（小）,mp4,webm,索引,片名,导演,客户,代理商]
					myWorksByDirectorListPlayer.src([
					  { type: "video/mp4", src: JsonDirectorsWork[index].mp4 },
					  { type: "video/webm", src: JsonDirectorsWork[index].webm }
					]);
					myWorksByDirectorListPlayer.height($("#worksByDirectorList").width()*9/16);
					nowVideoObject = "worksByDirectorListPlayer";
					myWorksByDirectorListPlayer.on("canplay",function(){
						if (nowVideoObject == "worksByDirectorListPlayer")
						{
							TP.stopPlayer();
							myWorksByDirectorListPlayer.play();
						}
					});
				});
				if ($("#worksByDirectorList .list li").length > 0){
					//console.log($("#worksByDirectorList .list li").length);
					$("#worksByDirectorList .list li").eq(0).click().addClass("current");
				}
			}
		});
		
		//作品列表搜索分页
		$("#worksPage .pagenavi-search").on('click', 'span', function(event) {
			event.preventDefault();
			$(this).addClass("current").siblings(".current").removeClass("current");
			var index = $(this).index();
			var totalPage = $(this).siblings('span').length + 1;
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#worksPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#worksPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#worksPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
		});

		//导演列表搜索分页
		$("#directorPage .pagenavi-search").on('click', 'span', function(event) {
			event.preventDefault();
			$(this).addClass("current").siblings(".current").removeClass("current");
			var index = $(this).index();
			var totalPage = $(this).siblings('span').length + 1;
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#directorPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#directorPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#directorPage .mianBox .item0.tempAdd[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
		});
	},
	//构建下载网址
	MkDownloadUrl:function(){
			var _html = "";
			var aFiles = new Array();
			$("#popDownload .downloadM .list .item").each(function(index, el) {
				if ($(this).hasClass('checked')){
					//console.log($(this).attr("data-mp4"));
					aFiles.push('"'+$(this).attr("data-mp4")+'"');
				}
			});
			_html = aFiles.join();
			_html = '['+_html+']';
			_html = encodeURIComponent(_html);
			var title = encodeURIComponent($("#popDownload .title").html());
			var url = "wp-content/themes/tpss/zip_download.php?title="+title+"&content="+_html;
			$("#popDownload .downloadM .btnArea a").attr("href",url);
	},
	elements:{
		flashVideo : false
	},
	initWindow:function(){
		W = $(window).outerWidth();
		H = $(window).outerHeight();

		if (W < 600){
			_bIsWidthView = false;
		}
		else{
			_bIsWidthView = true;
		}
		//计算首页容器宽度
		$(".rightMain").width(W-60);
		TP.resizeHomePage(W-60,H);
	},
	resizeWindow:function(){
		W = $(window).outerWidth();
		H = $(window).outerHeight();

		if (W < 600){
			_bIsWidthView = false;
		}
		else{
			_bIsWidthView = true;
		}
		//计算首页容器宽度
		$(".rightMain").width(W-60);
		TP.resizeHomePage(W-60,H);
		TP.resizeHonerPage();
		if (bIsWidthView != _bIsWidthView){
			bIsWidthView = _bIsWidthView;
			//console.log("变化元素");
			TP.resizeDirectorPage();
			TP.resizeTeamPage();
			TP.resizeAgentsPage();
			TP.resizeClientPage();
		}
		//
		$(".floatCreategory").each(function(i) {
			var y = $(this).children(".level-1").length*48;
			y = (H-y)/2 - 2;
			$(this).css({top: y+"px"});
		});

		(function(){
			var _y = (H-$("#popDownload .container").height())/2;
			$("#popDownload .container").css({marginTop: _y + "px"});
		})();
		//resizeJoinUsPage(W,H);
		//resizeContactPage(W,H);
	},
	//重置首页
	resizeHomePage:function(w,h){
		w = $("#worksPage").width();
		if (W < 600){
			$("#worksPage .mianBox .bigItem").width(w);
			$("#worksPage .mianBox").attr("data-width",w);
			$("#worksPage .mianBox .item").width(w*.5);
			$("#popWorkWindow .infoBox .gallery .list div.item").height(w*.28*.5*9/16);
		}
		else{
			$("#worksPage .mianBox .bigItem").width(w*.6);
			$("#worksPage .mianBox").attr("data-width",w*.6);
			$("#worksPage .mianBox .item").width(w*.2);
			$("#popWorkWindow .infoBox .gallery .list div.item").height(w*.28*.5*9/16);
		}
	},
	//重置导演
	resizeDirectorPage:function(){
		var _iPerPage = 18;
		if (W < 600){
			_iPerPage = 9;
			var _tmpHtml = '<div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div>';
			$("#directorPage .mianBox .item").html(_tmpHtml);
			$("#directorPage").addClass("smallSize");
		}
		else{
			_iPerPage = 18;
			var _tmpHtml = '<div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div>';
			$("#directorPage .mianBox .item").html(_tmpHtml);
			$("#directorPage").removeClass("smallSize");
		}
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aDirectorData.length; _i++) {
			index = _i % _iPerPage;
			if (_i >0  ){
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			var isHasNoImg = 'style-has-no-img';
			if (aDirectorData[_i][1] == "1"){
				isHasNoImg = '';
			}
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+' '+isHasNoImg+'" data-name="'+aDirectorData[_i][0]+'" data-page="'+totalPage+'" data-index="'+_i+'">';
			if (aDirectorData[_i][1] == "1"){
				__html += '<div class="img"><img src="'+aDirectorData[_i][2]+'" width="100%" ></div>';
			}
			else if(aDirectorData[_i][1] == "0"){
				__html += '<div class="img"><img src="images/null-big.jpg" width="100%" ></div>';
			}

			__html += '<div class="info-short">';
			__html += '<table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%">';
			__html += '<tr>';
			__html += '<td valign="middle" align="center">';
			__html += '<img src="images/play5.png"><br/>';
			__html += '<span>'+aDirectorData[_i][0]+'</span>';
			__html += '</td>';
			__html += '</tr>';
			__html += '</table>';
			__html += '</div>';

			__html += '<div class="info">';
			__html += '</div>';
			__html += '</div>'
			$("#directorPage .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#directorPage .pagenavi").html(_html).show();
			$("#directorPage .pagenavi span").eq(0).addClass('current');
		}
		else{
			$("#directorPage .pagenavi").html('').hide();
		}
		$("#directorPage .pagenavi-search").hide();
	},
	//重置团队
	resizeTeamPage:function(){
		var _iPerPage = 10;
		if (W < 600){
			_iPerPage = 4;
			var _tmpHtml = '<div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="clearfloat"></div>';
			$("#teamPage .mianBox").html(_tmpHtml);
			$("html").addClass("smallSize");
		}
		else{
			_iPerPage = 10;
			var _tmpHtml = '<div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div><div class="clearfloat"></div>';
			$("#teamPage .mianBox").html(_tmpHtml);
			$("html").removeClass("smallSize");
		}
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aTeamData.length; _i++) {
			index = _i % _iPerPage;
			if (_i >0  ){
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-name="'+aTeamData[_i][0]+'" data-page="'+totalPage+'" data-postion="'+aTeamData[_i][1]+'" data-address="'+aTeamData[_i][2]+'" data-index="'+aTeamData[_i][4]+ '" data-Bilingual="'+aTeamData[_i][6]+'">';
			__html += '<div class="img"><img src="'+aTeamData[_i][3]+'" width="100%" ></div>';

			__html += '<div class="info">';
			__html += '<table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%" class="justName">';
			__html += '<tr>';
			__html += '<td valign="middle" align="center">';
			__html += '<img src="images/play5.png"><br/>';
			//__html += aTeamData[_i][0];
			__html += '</td>';
			__html += '</tr>';
			__html += '</table>';
			__html += '</div>';
			__html += '<div class="info-short">';
			__html += '<span>'+aTeamData[_i][0]+'</span>';
			__html += aTeamData[_i][2];
			__html += aTeamData[_i][1];
			if( aTeamData[_i][6] != ''){
				__html += '&nbsp;&nbsp;'+aTeamData[_i][6];
			}
			__html += '</div>';

			__html += '</div>'
			$("#teamPage .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#teamPage .pagenavi").html(_html);
			$("#teamPage .pagenavi span").eq(0).addClass('current');
		}
		else{
			$("#teamPage .pagenavi").html('').hide();
		}
	},
	//重置合作客户
	resizeClientPage:function(){
		var _iPerPage = 15;
		if (W < 600){
			_iPerPage = 10;
			var _tmpHtml = '<div class="item"><div class="category-name"><table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr><td  valign="middle">合作客户</td></tr></table></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="clearfloat"></div>';
			$("#logoWall-Client .mianBox").html(_tmpHtml);
		}
		else{
			_iPerPage = 15;
			var _tmpHtml = '<div class="item"><div class="category-name"><table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr><td  valign="middle">合作客户</td></tr></table></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="clearfloat"></div>';
			$("#logoWall-Client .mianBox").html(_tmpHtml);
		}
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aClientData.length; _i++) {
			if (_i <_iPerPage-1 ){
				index = _i;
			}
			else{
				index = (_i-_iPerPage-1) % _iPerPage;
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";

			 /*[标题，logo]*/
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-page="'+totalPage+'">';

			__html += '<div class="img" style="background-image:url('+aClientData[_i][1]+');"></div>';

			__html += '</div>'
			$("#logoWall-Client .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#logoWall-Client .pagenavi").html(_html);
			$("#logoWall-Client .pagenavi span").eq(0).addClass('current');
		}
		else{
			$("#logoWall-Client .pagenavi").html('').hide();
		}
	},
	//重置合作代理商
	resizeAgentsPage:function(){

		var _iPerPage = 15;
		if (W < 600){
			_iPerPage = 10;
			var _tmpHtml = '<div class="item"><div class="category-name"><table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr><td  valign="middle">合作代理商</td></tr></table></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="item"><div class="box"></div><div class="box"></div></div><div class="clearfloat"></div>';
			$("#logoWall-Agents .mianBox").html(_tmpHtml);
		}
		else{
			_iPerPage = 15;
			var _tmpHtml = '<div class="item"><div class="category-name"><table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr><td  valign="middle">合作代理商</td></tr></table></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="item"><div class="box"></div><div class="box"></div><div class="box"></div><div class="clearfloat"></div></div><div class="clearfloat"></div>';
			$("#logoWall-Agents .mianBox").html(_tmpHtml);
		}
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aAgentsData.length; _i++) {
			if (_i <_iPerPage-1 ){
				index = _i;
			}
			else{
				index = (_i-_iPerPage-1) % _iPerPage;
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";

			 /*[标题，logo]*/
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-page="'+totalPage+'">';

			__html += '<div class="img" style="background-image:url('+aAgentsData[_i][1]+');"></div>';

			__html += '</div>'
			$("#logoWall-Agents .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#logoWall-Agents .pagenavi").html(_html);
			$("#logoWall-Agents .pagenavi span").eq(0).addClass('current');
		}
		else{
			$("#logoWall-Agents .pagenavi").html('').hide();
		}
	},
	//重置奖项
	resizeHonerPage:function(){
		var w = $("#honorPage .mianBox").outerWidth();
		//console.log(w);
		w = (w-5)/5;
		$("#honorPage .mianBox .box").width(w);
	}
};

$(document).ready(function(){
	Loader.Init({
		imgTag : "div#loader > img",
		imgHeight : 132 
	});
	// 调用方法
	//Loader.setVal(78);
	initHomePage();	//初始化首页
	var _tLoader = aLoading.length,_iLoader = 0;
	for (var i = 0; i < _tLoader; i++) {
		//aLoading[i]
		var img= new Image();
		img.src = aLoading[i];
		if (img.complete) {
	        _iLoader++;
            if (_iLoader/_tLoader < 1){
            	Loader.setVal(_iLoader/_tLoader*100);
            	//console.log(_iLoader/_tLoader*100 + '*缓存');
            }
            else{
            	PageStart();
            }
	    } else {
	        img.onload = function () {
	            _iLoader++;
	            if (_iLoader/_tLoader < 1){
	            	Loader.setVal(_iLoader/_tLoader*100);
	            	//console.log(_iLoader/_tLoader*100 + '*2');
	            }
	            else{
	            	PageStart();
	            }
	        };
	    };
	};

	function PageStart(){
		//$("#loader").hide();
		$("#loader").remove();
		$("#aside,#rightMain").css({
			position: 'fixed',
			display:'block'
		});
		TP.init();
		TP.initWindow();
		TP.resizeHonerPage();
		//TP.resizeWindow();
		initDirectorPage();	//初始化导演
		initTeamPage();	//初始化团队
		initHonorPage();	//初始化奖项
		initClientPage();	//初始化合作客户
		initAgentsPage();	//初始化合作代理商
		initAlliancePage();	//初始化我们的联盟

		//initMapPage(); //初始化地图
		//initContactPage(); //初始化联系我们
	}

	$(window).resize(function() {
		TP.resizeWindow();
	});
	return;

	//初始化首页
	function initHomePage(){
		$("#HomePageData > li").each(function(i) {
			 /* iterate through array or object */
			 	//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图,行业,门类,置顶大缩略图,下载（普清），下载（高清）]
			 aData.push(new Array($(this).attr("data-title"),$(this).attr("data-videothumb"),$(this).attr("data-desc"),$(this).attr("data-video"),$(this).attr("data-thumb"),i,$(this).attr("data-video-mp4"),$(this).attr("data-video-webm"),i,$(this).attr("data-pianming"),$(this).attr("data-director"),$(this).attr("data-kehu"),$(this).attr("data-dailishang"),$(this).attr("data-city"),$(this).attr("data-cityThumb"),$(this).attr("data-hightlight-mp4"),$(this).attr("data-hightlight-webm"),$(this).attr("data-hightlight-thumb"),$(this).attr("data-trade"),$(this).attr("data-category"),$(this).attr("data-bigThumb"),$(this).attr("data-download-normal"),$(this).attr("data-download-hight")));
			 //console.log($(this).attr("data-download-normal"));
			 if (i == 0 ) {
			 	//aLoading.push($(this).attr("data-videothumb"));
			 	aLoading.push($(this).attr("data-bigThumb"));
			 }
			 aLoading.push($(this).attr("data-thumb"));
		});

		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aData.length; _i++) {
			//aData[_i]
			if (_i == 0 ){
				//把第一个填入最大的一块
				var _bigItemHtml = '';
				_bigItemHtml += '<img src="'+aData[_i][20]+'" height="100%" >';
				_bigItemHtml += '<div class="btn-play">';

				_bigItemHtml += '<table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%">';
				_bigItemHtml += '<tr>';
				_bigItemHtml += '<td valign="middle" align="center">';
				_bigItemHtml += '<div class="btn"></div>';
				_bigItemHtml += '<div class="text">'+aData[_i][0]+'</div>';
				_bigItemHtml += '</td>';
				_bigItemHtml += '</tr>';
				_bigItemHtml += '</table>';
				_bigItemHtml += '</div>';
				_bigItemHtml += '<div class="mouse"><img src="images/scrollTip.png" /></div>';
				$("#worksPage .bigItem").html(_bigItemHtml).attr("data-index",_i);
			}
			else if (_i <5 ){
				index = _i-1;
			}
			else{
				index = (_i-5) % 10;
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-video-url="'+aData[_i][3]+'" data-page="'+totalPage+'" data-video-mp4="'+aData[_i][6]+'" data-video-webm="'+aData[_i][7]+'" data-index="'+aData[_i][8]+'">';
			__html += '<div class="img"><img src="'+aData[_i][4]+'" height="100%"></div>';
			__html += '<div class="masker">';

			__html += '</div>';
			__html += '<div class="info">';
			__html += '<p class="title">'+aData[_i][0]+'</p>';
			__html += '<p class="des">'+aData[_i][2]+'</p>';
			__html += '</div>';
			__html += '</div>';
			$("#worksPage .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#worksPage .pagenavi").html(_html);
			$("#worksPage .pagenavi span").click(function(){
				showAll();
				$(this).addClass("current").siblings(".current").removeClass("current");
				var index = $(this).index();
				for (var j = 1; j <= totalPage; j++) {
					if (j < index+1){
						$("#worksPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
					}
					else if(j == index+1){
						$("#worksPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
					}
					else{
						$("#worksPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
					}
				}

				//显示/隐藏置顶视频
				/*
				var iShowTop = index > 0 ? $("#worksPage .mianBox").attr("data-width")*-1 : 0;
				$("#worksPage .mianBox").stop().animate({marginLeft:iShowTop+"px"},'slow');
				*/
				if (index > 0){
					$("#worksPage .mianBox").addClass('otherPage');
				}
				else{
					$("#worksPage .mianBox").removeClass('otherPage');
				}
			}).eq(0).addClass('current');
		}
		$("#popWorkWindow .infoBox .changeBtn .item").click(function(){
			//花絮
			var heightLightPlayer = videojs('flowerPlayer');
			heightLightPlayer.pause();
			$(this).addClass('hover').siblings('.hover').removeClass('hover');
			$("#popWorkWindow .infoBox .changeTabBox > div").eq($(this).index()).show().siblings().hide();
			//$("#popWorkWindow .infoBox .gallery .popimg").hide();
		});
		$("#popWorkWindow .infoBox .changeBtn .item").eq(0).click();
		$("#popWorkWindow .infoBox .leftArrrow").click(function(event) {
			TP.stopPlayer();
			if ($(this).hasClass('current')){
				$(this).removeClass('current');
				$("#popWorkWindow .aboveVideo").hide()
				$("#popWorkWindow .infoBox").stop().animate({marginLeft:"-37.1475409836%"}, "slow");
			}
			else{
				$(this).addClass('current');
				$("#popWorkWindow .aboveVideo").show();
				$("#popWorkWindow .infoBox").stop().animate({marginLeft:"0%"}, "slow");
			}
			//花絮
			var heightLightPlayer = videojs('flowerPlayer');
			heightLightPlayer.pause();
		});
		$("#popWorkWindow > .close").click(function(event) {
			$("#popWorkWindow .infoBox .changeTabBox .container-hidden").removeClass('showBigImg');
			var Player = videojs(aVideo[0]);
			Player.pause();
			//花絮
			var heightLightPlayer = videojs(aVideo[1]);
			heightLightPlayer.pause();
			nowVideoObject = false;
			$("#popWorkWindow").removeClass('show');
			//$("#popWorkWindow").hide();
		});
		$("#worksPage .mianBox ").on('click', '.bigItem,.item0', function(event) {
			event.preventDefault();
			if ($(this).find(".btn-showAll").length > 0){
				return false;
			}
			var offset = $(this).offset();
			var w = $(this).width();
			var h = $(this).height();
			var index = $(this).attr("data-index");
			 //[标题，视频截图，说明，‘未知’，缩略图（小）,mp4,webm]
			$("#popWorkWindow h3").html(aData[index][0]);
			$("#popWorkWindow .des").html(aData[index][2]);
			$("#popWorkWindow .pianming").html(aData[index][9]);
			$("#popWorkWindow .daoyan").html(aData[index][10]);
			$("#popWorkWindow .kehu").html(aData[index][11]);
			$("#popWorkWindow .dailishang").html(aData[index][12]);
			//剧照
			if ($("#HomePageData li:eq("+index+") .item").length > 0){
				$("#popWorkWindow .infoBox .changeBtn .item:eq(0)").show().click();
				$("#popWorkWindow .infoBox .gallery .list").html($("#HomePageData li").eq(index).find(".hightlightGallery").html()+'<div class="clearfloat"></div>');
				$("#popWorkWindow .infoBox .gallery .list .item").each(function(i){
					var html = '';
					html += '<div class="image">';
					html += '<img src="'+$(this).find("img").attr("src")+'" width="100%">';
					html += '</div>';

					html += '<div class="border">';
					html += '</div>';
					$(this).html(html);
				});
			}
			else{
				$("#popWorkWindow .infoBox .changeBtn .item:eq(0)").hide();
				$("#popWorkWindow .infoBox .changeBtn .item:eq(1)").click();
			}

			var Player = videojs(aVideo[0]);
			Player.src([
			  { type: "video/mp4", src: aData[index][6] },
			  { type: "video/webm", src: aData[index][7] }
			]);
			if (aData[index][1] != ""){
				$("#popWorkWindow .video .vjs-poster").css({"background-image":"url("+aData[index][1]+")"}).show();
			}
			nowVideoObject = aVideo[0];
			Player.on("canplay",function(){
				if (nowVideoObject == aVideo[0])
				{
					TP.stopPlayer();
					Player.play();
				}
			});

			//花絮
			if (aData[index][15] != ""){
				$("#popWorkWindow .infoBox .changeBtn .item:eq(1)").show();
				//$("#popWorkWindow .infoBox .flower").show();
				var heightLightPlayer = videojs('flowerPlayer');
				heightLightPlayer.src([
				  { type: "video/mp4", src: aData[index][15] },
				  { type: "video/webm", src: aData[index][16] }
				]);
				if (aData[index][17] != ''){
					$("#popWorkWindow .infoBox .vjs-poster").css({"background-image":"url("+aData[index][17]+")"}).show();
				}
				//console.log(aData[index]);
				heightLightPlayer.height($("#popWorkWindow").width()*.311475409836*9/16);
				heightLightPlayer.on('play', function(event) {
					var Player = videojs(aVideo[0]);
					Player.pause();
					event.preventDefault();
					/* Act on the event */
				});
				$("#popWorkWindow .infoBox .flower .flowerText").html($("#HomePageData li").eq(index).find(".hightlightGalleryText").html());
			}
			else{
				$("#popWorkWindow .infoBox .changeBtn .item:eq(1)").hide();
				$("#popWorkWindow .infoBox .flower").hide();
			}
			//_html += "</div>";
			//_html += "<div class='close'>关闭</div>";

			//下载
			$("#popWorkWindow .btn-download").attr("data-index",index);

			$("#popWorkWindow .infoBox .leftArrrow").removeClass('current');
			$("#popWorkWindow .infoBox").css({marginLeft:"-37.1475409836%"});
			$("#popWorkWindow").addClass('show');
			$("#popWorkWindow").show();
			$("#popWorkWindow .infoBox .gallery .list .item").eq(0).click();
		});
		//剧照
		
		$("#popWorkWindow .infoBox .gallery .list").on('click', '.item', function(event) {
			var _html = "";
			_html += '<img src="'+$(this).find("img").attr("src")+'" width="100%"/>';
			$("#popWorkWindow .infoBox .gallery .popimg .img").html(_html);
			$(this).addClass('current').siblings(".current").removeClass("current");
			$("#popWorkWindow .infoBox .changeTabBox .container-hidden").addClass('showBigImg');
			resizeGallery();
			event.preventDefault();
		});
		
		$("#popWorkWindow .infoBox .gallery .actionArea .leftArrow,#popWorkWindow .infoBox .gallery .actionArea .rightArrow").click(function(event) {
			var now = $("#popWorkWindow .infoBox .gallery .item.current").index();
			var total = $("#popWorkWindow .infoBox .gallery .item").length;
			var index = now ? now : 0;
			if ($(this).hasClass('leftArrow')){
				index = index-1 < 0 ? total - 1 : index-1;
			}
			else{
				index = index+1 > total-1 ? 0 : index+1;
			}
			var _html = "";
			_html += '<img src="'+$("#popWorkWindow .infoBox .gallery .item").eq(index).find("img").attr("src")+'" width="100%"/>';
			$("#popWorkWindow .infoBox .gallery .popimg .img").html(_html);
			$("#popWorkWindow .infoBox .gallery .item").eq(index).addClass('current').siblings('.current').removeClass('current')
			resizeGallery();
		});
		function resizeGallery(){
			if ($("#popWorkWindow .infoBox .gallery .list .item").length <= 1){
				$("#popWorkWindow .infoBox .gallery .actionArea").hide();
			}
			if ($("#popWorkWindow .infoBox .gallery .list .item.current").length == 0){
				$("#popWorkWindow .infoBox .gallery .list .item").eq(0).addClass('current');
			}
			$("#popWorkWindow .infoBox .gallery .txt-info").html(($("#popWorkWindow .infoBox .gallery .item.current").index()+1)+'/'+$("#popWorkWindow .infoBox .gallery .item").length);
		}
		//resizeGallery();

		
		//搜索-显示全部
		$("#worksPage .floatCreategory .level-1 span[data-show-all=true]").click(function(event) {
			showAll();
			$("#worksPage .pagenavi span").eq(0).click();
		});
		//搜索-按行业或地区
		$("#worksPage .floatCreategory .level-2 li").click(function(event) {
			var array = new Array();
			if ($(this).attr("data-other") != "true"){
				//如果不是其它分类
				for (var i = 0; i < aData.length; i++) {
					//aDirectorData[i]
					if ($(this).parent().siblings('span').html() == '行业'){
						
						if (aData[i][18] && aData[i][18].match($(this).html())){
							array.push(i);
						}
					}
					else{
						if (aData[i][19] && aData[i][19].match($(this).html())){
							array.push(i);
						}
					}
				}
			}
			$("#worksPage .mianBox").addClass('otherPage');
			//第一个格子
			if ($("#worksPage .item .box:eq(0) .tempAdd-0").length > 0){
				$("#worksPage .item .box:eq(0) .tempAdd-0 .searchArea").html($(this).parent().siblings('span').html());
				$("#worksPage .item .box:eq(0) .tempAdd-0 .keyword").html($(this).html());
			}
			else{			
				var searchHtml = '<div class="item0 pageNext tempAdd-0">';
				searchHtml += '<h3 class="searchArea">'+$(this).parent().siblings('span').html()+'</h3>';
				searchHtml += '<h2 class="keyword">'+$(this).html()+'</h2>';
				searchHtml += '<div class="btn-showAll">返回</div>';
				searchHtml += '</div>';
				$("#worksPage .item .box:eq(0)").append(searchHtml);
				(function($el){
					setTimeout(function() {
						$el.removeClass('pageNext').addClass('pageNow').siblings('.pageNow').removeClass('pageNow').addClass('pageLast');
					}, 10);
				})($("#worksPage .item .box .tempAdd-0"));
			}
			var _indexPage,tmpPage = 1;	//tmpPage页面数
			//将当前的移动到左边，清空其它临时构造的元素
			$("#worksPage .item .box .item0.pageNow:not(.tempAdd-0)").removeClass('pageNow').addClass('pageLast').siblings('.tempAdd[data-page]').remove();
			
			//重新构造元素
			for (var i = 0; i < array.length; i++) {
				//array[i]
				_indexPage = i % 9;
				if (i >0 ) {
					tmpPage = _indexPage == 0 ? tmpPage+1 : tmpPage ;
				}
				if (array[i] == 0){
					//console.log(aData[array[i]]);
					//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图]
					var bigItemHtml = '<div class="img"><img src="'+aData[array[i]][4]+'" height="100%"></div><div class="masker"></div><div class="info"><p class="title">'+aData[array[i]][0]+'</p><p class="des">'+aData[array[i]][2]+'</p></div>';
					$("#worksPage .item .box:eq("+(_indexPage+1)+")").append($("#worksPage .mianBox .bigItem:not(.tempAdd)").clone().attr({
						"data-category": $(this).html(),
						"data-page": tmpPage,
						"style":''
					}).html(bigItemHtml).removeClass('bigItem').addClass('tempAdd').addClass('item0').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
				}
				else{
					$("#worksPage .item .box:eq("+(_indexPage+1)+")").append($("#worksPage .mianBox .item0[data-index="+array[i]+"]:not(.tempAdd)").clone().attr({
						"data-category": $(this).html(),
						"data-page": tmpPage
					}).addClass('tempAdd').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
				}
			};
			//隐藏分页导航
			$("#worksPage .pagenavi").hide();
			//console.log(tmpPage);
			//搜索时候的分页导航
			mk_search_page(tmpPage);
			//显示第一页
			$("#worksPage .item .box .item0.tempAdd[data-page=1]").each(function(index, el) {
				(function($el){
					setTimeout(function() {
						if (!$el.hasClass('pageLast')){
							$el.removeClass('pageNext').addClass('pageNow');
						}
					}, 10);
				})($(this));
			});
		});
		$("#worksPage .mianBox").on('click', '.btn-showAll', function(event) {
			showAll();
			$("#worksPage .pagenavi span").eq(0).click();
			event.preventDefault();
		});
		//显示全部
		function showAll(){
			//显示分页导航

			$("#worksPage .pagenavi-search").html('').hide();
			$("#worksPage .mianBox").removeClass('otherPage');
			$("#worksPage .pagenavi").show();
			$("#worksPage .mianBox .item0.tempAdd-0,#worksPage .mianBox .item0.tempAdd").remove();
			$("#worksPage .mianBox .box").each(function(index, el) {
				$(this).find(".pageLast:last").removeClass('pageLast').addClass('pageNow');
			});
		}
		//搜索时的翻页
		function mk_search_page(totalPage){
			var tmpPage = totalPage;
			if (tmpPage <= 1){
				$("#worksPage .pagenavi-search").html('').hide();
			}
			else{
				var _pagenavi_search_html = '';
				for (var i = 0; i < tmpPage; i++) {
					_pagenavi_search_html += "<span>";
					_pagenavi_search_html += i+1;
					_pagenavi_search_html += "</span>";
				};
				$("#worksPage .pagenavi-search").html(_pagenavi_search_html).show();
				$("#worksPage .pagenavi-search span").eq(0).addClass('current');
			}
		}
		$("#worksForm input[name=q]").keypress(function(e){
			if (e.keyCode == 13){
				$("#worksPage .floatCreategory .level-1 span[data-action=search]").click();
			}
		});

		//搜索-输入框
		$("#worksPage .floatCreategory .level-1 span[data-action=search]").click(function(event) {
			var k = $("#worksForm input[name=q]").val().trim();
			if (k != ''){
				var array = new Array();
				//如果不是其它分类
				for (var i = 0; i < aData.length; i++) {
					//aDirectorData[i]
					
					if (aData[i][0].toLowerCase().match(k.toLowerCase())){
						array.push(i);
					}
				}
				//第一个格子
				if ($("#worksPage .item .box:eq(0) .tempAdd-0").length > 0){
					$("#worksPage .item .box:eq(0) .tempAdd-0 .searchArea").html("搜索");
					$("#worksPage .item .box:eq(0) .tempAdd-0 .keyword").html(k);
				}
				else{			
					var searchHtml = '<div class="item0 pageNext tempAdd-0">';
					searchHtml += '<h3 class="searchArea">搜索</h3>';
					searchHtml += '<h2 class="keyword">'+k+'</h2>';
					searchHtml += '<div class="btn-showAll">所有作品</div>';
					searchHtml += '</div>';
					$("#worksPage .item .box:eq(0)").append(searchHtml);
					(function($el){
						setTimeout(function() {
							$el.removeClass('pageNext').addClass('pageNow').siblings('.pageNow').removeClass('pageNow').addClass('pageLast');
						}, 10);
					})($("#worksPage .item .box .tempAdd-0"));
				}
				var _indexPage,tmpPage = 1;	//tmpPage页面数
				//将当前的移动到左边，清空其它临时构造的元素
				$("#worksPage .item .box .item0.pageNow:not(.tempAdd-0)").removeClass('pageNow').addClass('pageLast').siblings('.tempAdd[data-page]').remove();
				
				//重新构造元素
				for (var i = 0; i < array.length; i++) {
					//array[i]
					_indexPage = i % 9;
					if (i >0 ) {
						tmpPage = _indexPage == 0 ? tmpPage+1 : tmpPage ;
					}
					$("#worksPage .item .box:eq("+(_indexPage+1)+")").append($("#worksPage .mianBox .item0[data-index="+array[i]+"]:not(.tempAdd)").clone().attr({
						"data-category": $(this).html(),
						"data-page": tmpPage
					}).addClass('tempAdd').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
				};
				$("#worksPage .mianBox").addClass('otherPage');
				//隐藏分页导航
				$("#worksPage .pagenavi").hide();
				//显示第一页
				$("#worksPage .item .box .item0.tempAdd[data-page=1]").each(function(index, el) {
					(function($el){
						setTimeout(function() {
							if (!$el.hasClass('pageLast')){
								$el.removeClass('pageNext').addClass('pageNow');
							}
						}, 10);
					})($(this));
				});

				//搜索时候的分页导航
				mk_search_page(tmpPage);
			}
			return false;
		});
	}

	//初始化导演
	function initDirectorPage(){
		/*
		console.log("hello3");
		$.getJSON('/?cat=19', function(json, textStatus) {
				console.log("hello2");
				JsonDirectorsWork = json;
				console.log(JsonDirectorsWork);
		});
		*/
		$("#DirectorPageData li").each(function(i) {
			 /* iterate through array or object */
			 //[名字，是否有头像(1/0),头像地址,行业,地区]
			 aDirectorData.push(new Array($(this).attr("data-name"),$(this).attr("data-hasthum"),$(this).attr("data-thumb"),$(this).attr("data-trade"),$(this).attr("data-area")));
		});
		//console.log("initDirectorPage");
		TP.resizeDirectorPage();

		//搜索时的翻页
		function mk_search_page(totalPage){
			var tmpPage = totalPage;
			if (tmpPage <= 1){
				$("#directorPage .pagenavi-search").html('').hide();
			}
			else{
				var _pagenavi_search_html = '';
				for (var i = 0; i < tmpPage; i++) {
					_pagenavi_search_html += "<span>";
					_pagenavi_search_html += i+1;
					_pagenavi_search_html += "</span>";
				};
				$("#directorPage .pagenavi-search").html(_pagenavi_search_html).show();
				$("#directorPage .pagenavi-search span").eq(0).addClass('current');
			}
		}
		//翻页
		$("#directorPage .pagenavi").on('click', 'span', function(event) {
			showAll();
			$(this).addClass("current").siblings(".current").removeClass("current");
			var totalPage = $("#directorPage .pagenavi span").length;
			var index = $(this).index();
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#directorPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#directorPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#directorPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
			event.preventDefault();
		});
		//搜索-按行业或地区
		$("#directorPage .floatCreategory .level-2 li").click(function(event) {
			var array = new Array();
			if ($(this).attr("data-other") != "true"){
				//如果不是其它分类
				for (var i = 0; i < aDirectorData.length; i++) {
					//aDirectorData[i]
					if ($(this).parent().siblings('span').html() == '行业'){
						if (aDirectorData[i][3] && aDirectorData[i][3].match($(this).html())){
							array.push(i);
						}
					}
					else{
						if (aDirectorData[i][4] && aDirectorData[i][4].match($(this).html())){
							array.push(i);
						}
					}
				}
			}
			else{
				//如果是“其它类”
				var _array = new Array();
				$(this).siblings().each(function(index, el) {
					_array.push($(this).html());
				});
				for (var i = 0; i < aDirectorData.length; i++) {
					//aDirectorData[i]
					if (jQuery.inArray( aDirectorData[i][3], _array) < 0){
						array.push(i);
					}
				}
			}
			//console.log(array);

			//第一个格子
			if ($("#directorPage .item .box:eq(0) .tempAdd-0").length > 0){
				$("#directorPage .item .box:eq(0) .tempAdd-0 .searchArea").html($(this).parent().siblings('span').html());
				$("#directorPage .item .box:eq(0) .tempAdd-0 .keyword").html($(this).html());
			}
			else{			
				var searchHtml = '<div class="item0 pageNext tempAdd-0">';
				searchHtml += '<h3 class="searchArea">'+$(this).parent().siblings('span').html()+'</h3>';
				searchHtml += '<h2 class="keyword">'+$(this).html()+'</h2>';
				searchHtml += '<div class="btn-showAll">返回</div>';
				searchHtml += '</div>';
				$("#directorPage .item .box:eq(0)").append(searchHtml);
				(function($el){
					setTimeout(function() {
						$el.removeClass('pageNext').addClass('pageNow').siblings('.pageNow').removeClass('pageNow').addClass('pageLast');
					}, 10);
				})($("#directorPage .item .box .tempAdd-0"));
			}
			var _indexPage,tmpPage = 1;	//tmpPage页面数
			//将当前的移动到左边，清空其它临时构造的元素
			$("#directorPage .item .box .item0.pageNow:not(.tempAdd-0)").removeClass('pageNow').addClass('pageLast').siblings('.tempAdd[data-page]').remove();
			
			//重新构造元素
			for (var i = 0; i < array.length; i++) {
				//array[i]
				_indexPage = i % 17;
				if (i >0 ) {
					tmpPage = _indexPage == 0 ? tmpPage+1 : tmpPage ;
				}
				$("#directorPage .item .box:eq("+(_indexPage+1)+")").append($("#directorPage .mianBox .item0[data-index="+array[i]+"]:not(.tempAdd)").clone().attr({
					"data-category": $(this).html(),
					"data-page": tmpPage
				}).addClass('tempAdd').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
			};
			//隐藏分页导航
			$("#directorPage .pagenavi").hide();
			mk_search_page(tmpPage);
			//显示第一页
			$("#directorPage .item .box .item0.tempAdd[data-page=1]").each(function(index, el) {
				(function($el){
					setTimeout(function() {
						if (!$el.hasClass('pageLast')){
							$el.removeClass('pageNext').addClass('pageNow');
						}
					}, 10);
				})($(this));
			});
		});
		//搜索-显示全部
		$("#directorPage .floatCreategory .level-1 span[data-show-all=true]").click(function(event) {
			showAll();
			$("#directorPage .pagenavi span").eq(0).click();
		});
		
		$("#directorForm input[name=q]").keypress(function(e){
			if (e.keyCode == 13){
				$("#directorPage .floatCreategory .level-1 span[data-action=search]").click();
			}
		});
		//搜索-输入框
		$("#directorPage .floatCreategory .level-1 span[data-action=search]").click(function(event) {
			var k = $("#directorForm input[name=q]").val().trim();
			if (k != ''){
				var array = new Array();
					//如果不是其它分类
					for (var i = 0; i < aDirectorData.length; i++) {
						//aDirectorData[i]
						if (aDirectorData[i][0].toLowerCase().match(k.toLowerCase())){
							array.push(i);
						}
					}
				//console.log(array);

				//第一个格子
				if ($("#directorPage .item .box:eq(0) .tempAdd-0").length > 0){
					$("#directorPage .item .box:eq(0) .tempAdd-0 .searchArea").html("搜索");
					$("#directorPage .item .box:eq(0) .tempAdd-0 .keyword").html(k);
				}
				else{			
					var searchHtml = '<div class="item0 pageNext tempAdd-0">';
					searchHtml += '<h3 class="searchArea">搜索</h3>';
					searchHtml += '<h2 class="keyword">'+k+'</h2>';
					searchHtml += '<div class="btn-showAll">所有导演</div>';
					searchHtml += '</div>';
					$("#directorPage .item .box:eq(0)").append(searchHtml);
					(function($el){
						setTimeout(function() {
							$el.removeClass('pageNext').addClass('pageNow').siblings('.pageNow').removeClass('pageNow').addClass('pageLast');
						}, 10);
					})($("#directorPage .item .box .tempAdd-0"));
				}
				var _indexPage,tmpPage = 1;	//tmpPage页面数
				//将当前的移动到左边，清空其它临时构造的元素
				$("#directorPage .item .box .item0.pageNow:not(.tempAdd-0)").removeClass('pageNow').addClass('pageLast').siblings('.tempAdd[data-page]').remove();
				
				//重新构造元素
				for (var i = 0; i < array.length; i++) {
					//array[i]
					_indexPage = i % 17;
					if (i >0 ) {
						tmpPage = _indexPage == 0 ? tmpPage+1 : tmpPage ;
					}
					$("#directorPage .item .box:eq("+(_indexPage+1)+")").append($("#directorPage .mianBox .item0[data-index="+array[i]+"]:not(.tempAdd)").clone().attr({
						"data-category": $(this).html(),
						"data-page": tmpPage
					}).addClass('tempAdd').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
				};
				//隐藏分页导航
				$("#directorPage .pagenavi").hide();
				mk_search_page(tmpPage);
				//显示第一页
				$("#directorPage .item .box .item0.tempAdd[data-page=1]").each(function(index, el) {
					(function($el){
						setTimeout(function() {
							if (!$el.hasClass('pageLast')){
								$el.removeClass('pageNext').addClass('pageNow');
							}
						}, 10);
					})($(this));
				});
			}
			return false;
		});
		$("#directorPage .mianBox").on('click', '.btn-showAll', function(event) {
			showAll();
			$("#directorPage .pagenavi span").eq(0).click();
			event.preventDefault();
		});
		//显示全部
		function showAll(){
			//显示分页导航
			$("#directorPage .pagenavi-search").hide();
			$("#directorPage .pagenavi").show();
			$("#directorPage .mianBox .item0.tempAdd-0,#directorPage .mianBox .item0.tempAdd").remove();
			$("#directorPage .mianBox .box").each(function(index, el) {
				$(this).find(".pageLast:last").removeClass('pageLast').addClass('pageNow');
			});
		}
		//切换作品列表和个人简历
		$("#ShowWorks,.worksByDirectorListPlayDiv .right").click(function(event) {
			var myWorksByDirectorListPlayer = videojs('worksByDirectorListPlayer');
			myWorksByDirectorListPlayer.pause();
			$(this).addClass('hover').siblings().removeClass('hover');
			$("#worksByDirectorList ul").removeClass('hide');
			$("#worksByDirectorList").show();
			$("#Resume").hide();
		});
		$("#ShowResume").click(function(event) {
			var myWorksByDirectorListPlayer = videojs('worksByDirectorListPlayer');
			myWorksByDirectorListPlayer.pause();
			$(this).addClass('hover').siblings().removeClass('hover');
			$("#worksByDirectorList").hide();
			$("#Resume").show();
		});
		$("#ShowWorks").click();
		$("#popDownload .downloadM .list").on("click",'.item',function(event){
			if ($(this).hasClass("checked")){
				$(this).removeClass("checked");
			}
			else{
				$(this).addClass("checked");
			}
			TP.MkDownloadUrl();
		});
		$("#directorPage .close").click(function(){
			var myWorksByDirectorListPlayer = videojs('worksByDirectorListPlayer');
			myWorksByDirectorListPlayer.pause();
			nowVideoObject = false;
			//
			$("#worksByDirectorList ul").removeClass('hide');

			$("#directorPage .popShowItem .container").addClass('hides');
			setTimeout(function(){
				$("#directorPage .popShowItem").hide();
				$("#ShowWorks").click();
			},900);
		});
	}

	//初始化团队
	function initTeamPage(){
		$("#TeamPageData li").each(function(i) {
			 /* iterate through array or object */
			 aTeamData.push(new Array($(this).attr("data-name"),$(this).attr("data-position"),$(this).attr("data-address"),$(this).attr("data-thumb-url"),i,$(this).attr("data-city"),$(this).attr("data-Bilingual")));
		});
		//console.log(aTeamData);
		TP.resizeTeamPage();
		//翻页
		$("#teamPage .pagenavi").on('click', 'span', function(event) {
			var totalPage = $("#teamPage .pagenavi span").length;
			showAll();
			$(this).addClass("current").siblings(".current").removeClass("current");
			var index = $(this).index();
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
			event.preventDefault();
		});
		//搜索
		$("#teamPage .floatCreategory span").click(function(event) {
			var array = new Array();
			if ($(this).attr("data-show-all") != "true"){
				//如果不是全部
				for (var i = 0; i < aTeamData.length; i++) {
					if (aTeamData[i][5] && aTeamData[i][5].toString().match($(this).html())){
						array.push(i);
					}
				}
				
			}
			var _indexPage,tmpPage = 1;	//tmpPage页面数
			//将当前的移动到左边，清空其它临时构造的元素
			$("#teamPage .item .box .item0.pageNow").removeClass('pageNow').addClass('pageLast').siblings('.tempAdd[data-page]').remove();
			//console.log(array);
			//重新构造元素
			//console.log(array);
			for (var i = 0; i < array.length; i++) {
				//array[i]
				_indexPage = i % 10;
				if (i >0 ) {
					tmpPage = _indexPage == 0 ? tmpPage+1 : tmpPage ;
				}
				//console.log(_indexPage +'-'+array[i]);
				$("#teamPage .item .box:eq("+(_indexPage)+")").append($("#teamPage .mianBox .item0[data-index="+array[i]+"]:not(.tempAdd)").clone().attr({
					"data-category": $(this).html(),
					"data-page": tmpPage
				}).addClass('tempAdd').removeClass('pageLast').removeClass('pageNow').addClass('pageNext'));
			};
			//隐藏分页导航
			$("#teamPage .pagenavi").hide();
			//显示第一页
			$("#teamPage .item .box .item0.tempAdd[data-page=1]").each(function(index, el) {
				(function($el){
					setTimeout(function() {
						if (!$el.hasClass('pageLast')){
							$el.removeClass('pageNext').addClass('pageNow');
						}
					}, 10);
				})($(this));
			});
		});
		//点击具体item
		$("#teamPage .mianBox").on('click', '.item0', function(){
			//名字，职位，工作地点，图片
			var index= $(this).attr("data-index");
			var _html = "";
			$("#teamPage .popShowItem .bigImg").html('<img src="'+aTeamData[index][3]+'" width="100%" >');

			_html += "<h3>"+aTeamData[index][0]+"</h3>";
			_html += '<p class="p2">'+aTeamData[index][1]+'---'+aTeamData[index][2]+'</p>';
			_html += '<div class="spc2">'+$("#TeamPageData li").eq(index).find(".resumeText").html()+'</div>';
			_html += '<p class="p2">自我评价</p>';
			_html += '<div class="spc2">'+$("#TeamPageData li").eq(index).find(".EvaluateMyself").html()+'</div>';
			$("#teamPage .popShowItem .info .content").html(_html);
			
			$("#teamPage .popShowItem").show(0, function() {
				$("#teamPage .popShowItem .container").removeClass('hide');
			});
		});

		$("#teamPage .floatCreategory .level-1 span[data-show-all=true]").click(function(event) {
			showAll();
		});
		//显示全部
		function showAll(){
			//显示分页导航
			$("#teamPage .pagenavi").show();
			$("#teamPage .mianBox .item0.tempAdd").remove();
			$("#teamPage .mianBox .box").each(function(index, el) {
				$(this).find(".pageLast:last").removeClass('pageLast').addClass('pageNow');
			});
		}
		$("#teamPage .popShowItem .close").click(function(){
				$("#teamPage .popShowItem .container").addClass('hide');
			setTimeout(function() {
				$("#teamPage .popShowItem").hide();
			}, 1000);
		});
	}

	//初始化奖项
	function initHonorPage(){
		$("#honorPageData li").each(function(i) {
			 /* iterate through array or object */
			 /*[标题，获奖，获奖等级，导演，视频缩略图，奖杯照片（小）,奖项照片（大）,mp4,webm]*/
			 aHonorData.push(new Array($(this).attr("data-title"),$(this).attr("data-party"),$(this).attr("data-level"),$(this).attr("data-director"),$(this).attr("data-thumb"),$(this).attr("data-img-small"),$(this).attr("data-img-big"),$(this).attr("data-video-mp4"),$(this).attr("data-video-webm")));
		});
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aHonorData.length; _i++) {
			index = _i % 15;
			if (_i >0  ){
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";

			 /*[标题，获奖，获奖等级，导演，视频缩略图，奖杯照片（小）,奖项照片（大）,mp4,webm]*/
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-page="'+totalPage+'" data-index="'+_i+'">';

			__html += '<div class="img" style="background-image:url('+aHonorData[_i][5]+');"></div>';

			__html += '<div class="info-short">';
			__html += '<div class="info-short-son">';
			__html += '<div class="title">';
			__html += aHonorData[_i][0];
			__html += '</div>';
			__html += '<div>';
			__html += aHonorData[_i][1]+'<br/>'+aHonorData[_i][2];
			__html += '</div>';
			__html += '</div>';
			__html += '</div>';

			__html += '</div>'
			$("#honorPage .item .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$("#honorPage .pagenavi").html(_html);
			$("#honorPage .pagenavi span").click(function(){
				$(this).addClass("current").siblings(".current").removeClass("current");
				var index = $(this).index();
				for (var j = 1; j <= totalPage; j++) {
					if (j < index+1){
						$("#honorPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
					}
					else if(j == index+1){
						$("#honorPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
					}
					else{
						$("#honorPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
					}
				}
			}).eq(0).addClass('current');
		}
		$("#honorPage .mianBox .item0").click(function(){
			//[标题，获奖，获奖等级，导演，视频缩略图，奖杯照片（小）,奖项照片（大）,mp4,webm]
			var index= $(this).attr("data-index");
			$("#popHonerWindow .leftBigImg").css("background-image","url("+aHonorData[index][6]+")");
			$("#popHonerWindow .info-1").html(aHonorData[index][1]+' - '+aHonorData[index][2]);
			$("#popHonerWindow .info-2").html('导演：'+aHonorData[index][3]+'<br/>简介：'+$("#honorPageData li").eq(index).html());
			$("#popHonerWindow .title").html(aHonorData[index][0]);
			var _html = "";
			$("#honorPage .pagenavi").hide();
			$("#popHonerWindow").addClass('show');

				var myWorksByHonerPlayer = videojs('worksByHonerPlayer');
				 //[标题，视频截图，说明，‘未知’，缩略图（小）,mp4,webm,索引,片名,导演,客户,代理商]
				myWorksByHonerPlayer.src([
				  { type: "video/mp4", src: aHonorData[index][7] },
				  { type: "video/webm", src: aHonorData[index][8] }
				]);
				if (aHonorData[index][4] != ""){
					$("#worksByHonerPlayer .vjs-poster").css({"background-image":"url("+aHonorData[index][4]+")"}).show();
				}
				myWorksByHonerPlayer.height($("#popHonerWindow .rightContent").width()*9/16);
				TP.stopPlayer();
				/*
				myWorksByHonerPlayer.on("canplay",function(){
					TP.stopPlayer();
					//myWorksByHonerPlayer.play();
				});
				*/

			$("#popHonerWindow .close").click(function(){
				var myWorksByHonerPlayer = videojs('worksByHonerPlayer');
				myWorksByHonerPlayer.pause();
				nowVideoObject = false;
				$("#popHonerWindow").removeClass('show');
				$("#honorPage .pagenavi").show();
			});
		});
	}

	//初始化合作客户
	function initClientPage(){
		$("#ClientData li").each(function(i) {
			 /* iterate through array or object */
			 /*[标题，logo]*/
			 aClientData.push(new Array($(this).html(),$(this).attr("data-img")));
		});

		TP.resizeClientPage();
		$("#logoWall-Client .pagenavi ").on('click', 'span', function(event) {
			event.preventDefault();
			var totalPage = $("#logoWall-Client .pagenavi span").length;
			$(this).addClass("current").siblings(".current").removeClass("current");
			var index = $(this).index();
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#logoWall-Client .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#logoWall-Client .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#logoWall-Client .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
		});
	}

	//初始化合作代理商
	function initAgentsPage(){
		$("#AgentsData li").each(function(i) {
			 /* iterate through array or object */
			 /*[标题，logo]*/
			 aAgentsData.push(new Array($(this).html(),$(this).attr("data-img")));
		});
		TP.resizeAgentsPage();
		$("#logoWall-Agents .pagenavi").on('click', 'span', function(event) {
			event.preventDefault();
			var totalPage = $("#logoWall-Agents .pagenavi span").length;
			$(this).addClass("current").siblings(".current").removeClass("current");
			var index = $(this).index();
			for (var j = 1; j <= totalPage; j++) {
				if (j < index+1){
					$("#logoWall-Agents .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
				}
				else if(j == index+1){
					$("#logoWall-Agents .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
				}
				else{
					$("#logoWall-Agents .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
				}
			}
		});
	}


	//初始化我们的联盟
	function initAlliancePage(){
		$("#data-Alliance li").each(function(i) {
			 /* iterate through array or object */
			 /*[logo]*/
			 aAlliance.push(new Array($(this).attr("data-img")));
		});
		var __html = '',index,totalPage = 1,cssPage='';
		var aTransitionTime = new Array();
		for (var _i = 0; _i < aAlliance.length; _i++) {
			index = _i % 4;
			if (_i >0  ){
				totalPage = index == 0 ? totalPage+1 : totalPage;
			}
			cssPage = totalPage == 1 ? "pageNow" : "pageNext";

			 /*[标题，logo]*/
			var nR ;
			if (!aTransitionTime[index]){
				nR = aTransitionTime[index] = Math.random()*1+1;
			}
			else{
				nR = aTransitionTime[index];
			}
			var cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
			__html = '<div style="'+cssHtml+'" class="item0 '+cssPage+'" data-page="'+totalPage+'">';
			__html += '<table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%" class="justName">';
			__html += '<tr>';
			__html += '<td valign="middle">';
			__html += '<img src="'+aAlliance[_i][0]+'">';
			__html += '</td>';
			__html += '</tr>';
			__html += '</table>';


			__html += '</div>'
			$(".Alliance-box .box").eq(index).append(__html);
		};
		if (totalPage > 1){
			var _html = '';
			for (var i = 0; i < totalPage; i++) {
				_html += "<span>";
				_html += i+1;
				_html += "</span>";
			};
			$(".Alliance-box .pagenavi").html(_html);
			$(".Alliance-box .pagenavi span").click(function(){
				$(this).addClass("current").siblings(".current").removeClass("current");
				var index = $(this).index();
				for (var j = 1; j <= totalPage; j++) {
					if (j < index+1){
						$(".Alliance-box .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
					}
					else if(j == index+1){
						$(".Alliance-box .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
					}
					else{
						$(".Alliance-box .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
					}
				}
			}).eq(0).addClass('current');
		}
	}


	function initMapPage(){
		var aInfoWindow = new Array();
		function initialize() {
			var mapOptions = {
			    zoom: 3,
			    center: new google.maps.LatLng( 21.453068633086783,76.81640625),
			    streetViewControl: false,	//禁用街景
		        scrollwheel: false,	//禁用鼠标滑轮
		        mapTypeControl:false //禁用地图类型
			};
		  	var styles = [
						  {
						    "elementType": "labels",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "water",
						    "stylers": [
						      { "color": "#202021" }
						    ]
						  },{
						    "featureType": "landscape.natural.landcover",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "landscape.natural.terrain",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "road",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "poi",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "landscape",
						    "stylers": [
						      { "color": "#3a393a" }
						    ]
						  },{
						    "featureType": "administrative.province",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "administrative.country",
						    "stylers": [
						      { "invert_lightness": true }
						    ]
						  }];

		  	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
		  	map.setOptions({styles: styles});		
			var stylez = [
				{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}
			];
			var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
			map.mapTypes.set('tehgrayz', mapType);
			map.setMapTypeId('tehgrayz');
		}	
		initialize();	
		$("#mapPage .chooseArea .item").click(function(){
			$(this).addClass('hover').siblings('.hover').removeClass('hover');
			var baseLatlng = new google.maps.LatLng($(this).attr("data-lat"),$(this).attr("data-lng")); 
			map.setZoom($(this).attr("data-zoom")*1);
			map.setCenter(baseLatlng);

			if (!aCity.info[$(this).index()].hasMarker)
			{
				(function(j){
					if (aCity.info[j].city.length > 0 ){
						for (var i = 0; i < aCity.info[j].city.length; i++) {
							//Things[i]
							(function(jCity){
								//创建标记
								var myLatlng = new google.maps.LatLng(jCity.lat,jCity.lng);  	
								var marker = new google.maps.Marker({
									    position: myLatlng,
									    map: map,
									    title: jCity.title
								});
								marker.setMap(map);

								var aWorksByCity = new Array();	//城市作品的索引
								var _length = 0;
								for (var _i = 0; _i < aData.length; _i++) {
									//aData[_i]
									//aDirectorData[i][0].toLowerCase().match(k.toLowerCase())
									if (aData[_i][13].toLowerCase().match(jCity.title.toLowerCase()) && _length<3){
										aWorksByCity.push(aData[_i][5]);
										 _length++;
										 //console.log(_length);
									}
								};
								if (aWorksByCity.length > 0){
									var boxText = document.createElement("div");
									boxText.style.cssText = "border: 1px solid #981e22; margin-top: 8px; background: #802024; padding: 18px;";
									var _innerHTML = '<div class="cityName">';
									_innerHTML += jCity.title;
									_innerHTML += '</div>';
									_innerHTML += '<div class="Container">';
									var odd_innerHTML = '',even_innerHTML = '',index_page = 0;
									var nR,cssHtml;
									for (var _j = 0; _j < aWorksByCity.length; _j++) {
										//aWorksByCity[_j]
									 	//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图]

				 							if (_j == 0){
				 							}
				 							else{
				 								index_page += 1;
				 							}
											nR = 0.387993;
											cssHtml = "-ms-transition: all "+nR+"s ease 0s;-moz-transition: all "+nR+"s ease 0s;-o-transition: all "+nR+"s ease 0s;-webkit-transition: all "+nR+"s ease 0s;transition: all "+nR+"s ease 0s;"
											even_innerHTML += '<div style="'+cssHtml+'" class="item" data-index="'+aWorksByCity[_j]+'" data-page="'+index_page+'">';
											even_innerHTML += '<div class="title">';
											even_innerHTML += aData[aWorksByCity[_j]][0];	
											even_innerHTML += '</div>';	// -title
											even_innerHTML += '<div class="img">';
											even_innerHTML += '<img src="'+aData[aWorksByCity[_j]][14]+'" width="100%" />';
											even_innerHTML += '<div class="play"></div>';
											even_innerHTML += '</div>';	// -img
											even_innerHTML += '</div>';	// -item
									};
									_innerHTML += '<div class="box">';
									_innerHTML += even_innerHTML;
									_innerHTML += '</div>';	// -box
									/*
									_innerHTML += '<div class="box">';
									_innerHTML += odd_innerHTML;
									_innerHTML += '</div>';	// -box
									*/
									_innerHTML += '<div class="pagenavi">';
									if (index_page > 0){
										for (var i = 0; i <= index_page; i++) {
											//Things[i]
											_innerHTML += '<span>'+i+'</span>';
										};
									}
									_innerHTML += '</div>';	// -pagenavi
									_innerHTML += '</div>';	// -Container
									boxText.innerHTML = _innerHTML;

									var myOptions = {
										 content: boxText
										,disableAutoPan: false
										,maxWidth: 0
										,pixelOffset: new google.maps.Size(50, -129)
										,zIndex: null
										,boxStyle: { 
										  //background: "url('images/tipbox.png') no-repeat",
										  opacity: 1
										  ,width: "280px"
										 }
										,closeBoxMargin: "15px 10px 2px 2px"
										,closeBoxURL: "images/close.png"
										,infoBoxClearance: new google.maps.Size(1, 1)
										,isHidden: false
										,pane: "floatPane"
										,enableEventPropagation: false
									};


									google.maps.event.addListener(marker, "mouseover", function (e) {
										for (var i = 0; i < aInfoWindow.length; i++) {
											//aInfoWindow[i].close(map, this);
											aInfoWindow[i].close();
										};
										ib.open(map, this);
									});
									var ib = new InfoBox(myOptions);
									google.maps.event.addListener(ib,"domready",function(){
										//播放事件
										$("#mapPage .box .item").click(function(event) {
											/* Act on the event */
											var index = $(this).attr("data-index");
											//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图]
											$("#popMapWindow .title").html(aData[index][0]);
											$("#popMapWindow .pianming").html(aData[index][0]);
											$("#popMapWindow .daoyan").html(aData[index][10]);
											$("#popMapWindow .kehu").html(aData[index][11]);
											$("#popMapWindow .dailishang").html(aData[index][12]);
											$("#popMapWindow").show();

											var Player = videojs('popMapWindowVideo');
											Player.src([
											  { type: "video/mp4", src: aData[index][6] },
											  { type: "video/webm", src: aData[index][7] }
											]);

											Player.height($("#popMapWindow .container").width()*9/16);
											nowVideoObject = "popMapWindowVideo";
											Player.on("canplay",function(){
												if (nowVideoObject == "popMapWindowVideo"){
													TP.stopPlayer();
													Player.play();
												}
												
											});

											//aData[标题，视频截图，说明，‘未知’，缩略图（小）,索引,mp4,webm,索引,片名,导演,客户,代理商,城市,缩略图(按城市显示),花絮mp4,花絮webm,花絮缩略图]
											var Player2 = videojs('flowerPlayer-map');
											Player2.height($("#popMapWindow .infoBox").width()*.7*9/16);
											if (aData[index][1] != ''){
												$("#flowerPlayer-map .vjs-poster").css({"background-image":"url("+aData[index][1]+")"}).show();
											}

											Player2.src([
												  { type: "video/mp4", src: aData[index][15] },
												  { type: "video/webm", src: aData[index][16] }
												]);
											Player2.on("play",function(){
												Player.pause();
											});

											//剧照
											if ($("#HomePageData li:eq("+index+") .item").length > 0){
												$("#popMapWindow .infoBox .changeBtn .btn-item:eq(0)").show().click();
												$("#popMapWindow .infoBox .gallery .list").html($("#HomePageData li").eq(index).html()+'<div class="clearfloat"></div>');
											}
											else{
												$("#popMapWindow .infoBox .changeBtn .btn-item:eq(0)").hide();
												$("#popMapWindow .infoBox .changeBtn .btn-item:eq(1)").click();
											}
											//$("#popMapWindow .infoBox .changeBtn .btn-item").eq(0).click();
										});
										//关闭
										$("#popMapWindow .container > .close").click(function(event) {
											/* Act on the event */
											TP.stopPlayer();
											nowVideoObject = false;
											$("#popMapWindow .infoBox").hide();
											$("#mapPage .infoBox .changeTabBox .container-hidden").removeClass('showBigImg');
											$("#popMapWindow").hide();
										});
										//翻页
										$("#mapPage .pagenavi span").click(function(){
											$(this).addClass("current").siblings(".current").removeClass("current");
											var index = $(this).index();
											var totalPage = $(this).parent().find("span").length;
											for (var j = 0; j <= totalPage; j++) {
												if (j < index){
													$(this).parent().parent().find(".item[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
													//$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
												}
												else if(j == index){
													$(this).parent().parent().find(".item[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
													//$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
												}
												else{
													$(this).parent().parent().find(".item[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
													//$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
												}
											}
										}).eq(0).click();
									});
									aInfoWindow.push(ib);
								}

							})(aCity.info[j].city[i]);
						};
					}
					aCity.info[j].hasMarker = true;
				})($(this).index());
			}

			return false;
		});
		$("#mapPage .chooseArea .item").eq(0).click();
		$("#popMapWindow .infoBox .changeBtn .btn-item").click(function(event) {
			$(this).addClass('hover').siblings('.hover').removeClass('hover');
			$("#popMapWindow .changeTabBox .gallery,#popMapWindow .changeTabBox .flower").hide();
			$("#popMapWindow .changeTabBox > div").eq($(this).index()).show();
			var Player = videojs('flowerPlayer-map');
			Player.pause();
			
		});
		$("#popMapWindow .video .btn-openInfo").click(function(event) {
			TP.stopPlayer();
			$("#popMapWindow .infoBox").height($("#popMapWindowVideo").height()).show();
		});

		//剧照
		$("#mapPage .infoBox .gallery").on('click', '.item', function(event) {
			var _html = "";
			_html += '<img src="'+$(this).find("img").attr("src")+'" width="100%"/>';
			$("#mapPage .infoBox .gallery .popimg .img").html(_html);
			$(this).addClass('current');
			$("#mapPage .infoBox .changeTabBox .container-hidden").addClass('showBigImg');
			resizeGallery();
			event.preventDefault();
		});

		function resizeGallery(){
			if ($("#mapPage .infoBox .gallery .list .item").length <= 1){
				$("#mapPage .infoBox .gallery .actionArea").hide();
			}
			if ($("#mapPage .infoBox .gallery .list .item.current").length == 0){
				$("#mapPage .infoBox .gallery .list .item").eq(0).addClass('current');
			}
			$("#mapPage .infoBox .gallery .txt-info").html(($("#mapPage .infoBox .gallery .item.current").index()+1)+'/'+$("#mapPage .infoBox .gallery .item").length);
		}


		$("#mapPage .infoBox .gallery .actionArea .leftArrow,#mapPage .infoBox .gallery .actionArea .rightArrow").click(function(event) {
			var now = $("#mapPage .infoBox .gallery .item.current").index();
			var total = $("#mapPage .infoBox .gallery .item").length;
			var index = now ? now : 0;
			if ($(this).hasClass('leftArrow')){
				index = index-1 < 0 ? total - 1 : index-1;
			}
			else{
				index = index+1 > total-1 ? 0 : index+1;
			}
			var _html = "";
			_html += '<img src="'+$("#mapPage .infoBox .gallery .item").eq(index).find("img").attr("src")+'" width="100%"/>';
			$("#mapPage .infoBox .gallery .popimg .img").html(_html);
			$("#mapPage .infoBox .gallery .item").eq(index).addClass('current').siblings('.current').removeClass('current')
			resizeGallery();
		});

		//关闭剧照
		$("#mapPage .infoBox .gallery .popimg .close").click(function(event) {
			TP.stopPlayer();
			nowVideoObject = false;
			$("#mapPage .infoBox .changeTabBox .container-hidden").removeClass('showBigImg');
		});

		/*
			$("#mapPage .pagenavi span").click(function(){
				$(this).addClass("current").siblings(".current").removeClass("current")
				var index = $(this).index();
				for (var j = 1; j <= totalPage; j++) {
					if (j < index+1){
						$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageNext').removeClass('pageNow').addClass('pageLast');
					}
					else if(j == index+1){
						$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNext').addClass('pageNow');
					}
					else{
						$("#teamPage .mianBox .item0[data-page="+j+"]").removeClass('pageLast').removeClass('pageNow').addClass('pageNext');
					}
				}
			}).eq(0).addClass('current');
		*/
	}

	function initContactPage(){
		function initialize() {
			var mapOptions = {
			    streetViewControl: false,	//禁用街景
		        scrollwheel: false,	//禁用鼠标滑轮
		        mapTypeControl:false //禁用地图类型
			};

		  	var mapContact = new google.maps.Map(document.getElementById('contactMapCanvas'),mapOptions);
		  	//mapContact.setOptions({styles: styles});		
			var stylez = [
				{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}
			];
			var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
			mapContact.mapTypes.set('tehgrayz', mapType);
			mapContact.setMapTypeId('tehgrayz');


			//创建标记
			var myLatlng = new google.maps.LatLng(39.9143260000,116.4948290000);  	
			var marker = new google.maps.Marker({
				    position: myLatlng,
				    map: mapContact,
				    title: '北京'
			});
			marker.setMap(mapContact);
			var myLatlngSH = new google.maps.LatLng(31.239276909514142,121.44307352149576);  	
			var markerSH = new google.maps.Marker({
				    position: myLatlngSH,
				    map: mapContact,
				    title: '上海'
			});
			markerSH.setMap(mapContact);

			$("#contactPage .changeTab .btn").click(function(){
				$(this).addClass("current").siblings(".current").removeClass("current");
				$("#contactPage .address").eq($(this).index()).show().siblings(".address").hide();
				var baseLatlng;
				if ($(this).index() == 0){
					baseLatlng = new google.maps.LatLng(39.9143260000,116.4948290000);
				}
				else{
					baseLatlng = new google.maps.LatLng(31.239276909514142,121.44307352149576);
				}
				mapContact.setZoom(18);
				mapContact.setCenter(baseLatlng);
			}).eq(0).click();
		}	
		initialize();
	}
});