if (!window.requestAnimationFrame){
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback){
        return window.setTimeout(callback, 1000/60);
    });
}

jQuery(document).ready(function($) {

	var screenWidth,screenHeight,scrollTop,afilm = [],avideo = [];

	$(window).resize(function(event) {
		/* Act on the event */
		myresize();

	});

	function myresize(){
		screenWidth = $(window).outerWidth();
		screenHeight = $(window).outerHeight();

		var w_ercode = $(".ercode").outerWidth();
		if (screenWidth > 960){
			$(".ercode").css("right",(screenWidth - 960) / 2+"px");
		}
		else{
			$(".ercode").css("right","0px");
		}
		resizeRadio();
		//resize_triangle();

	}

	//animatePlay();
	pageInit();

	function pageInit(){
		var aColor = ["#f5f4ef","#92c72f","#0b0904","#ed3924","#464649","#98a0aa","#c74600","#ff6f2d","#150e64","#db0051","#fff047"];
		$(".chooseBtn .item").each(function(index, el) {
			$(this).html("<div class='color color_"+index+"' style='background-color:"+aColor[index]+"'></div>");
		});


		
		  // var headimg_mySwiper = new Swiper ('#headImgSwiper.swiper-container', {
		  //   // Optional parameters
		  //   //direction: 'vertical',
		  //   loop: true,
		  //   paginationClickable : true,
		  //   // If we need pagination
		  //   pagination: '#headImgSwiper .swiper-pagination',
		  //   // Navigation arrows
		  //   nextButton: '#headImgSwiper .swiper-button-next',
		  //   prevButton: '#headImgSwiper .swiper-button-prev',
		  //   // And if we need scrollbar
		  //   //scrollbar: '.swiper-scrollbar',
		  // });       


		  var zysj_mySwiper = new Swiper ('.zysj-swiper.swiper-container', {
		    // Optional parameters
		    //direction: 'vertical',
		    loop: true,
		    paginationClickable : true,
		    // If we need pagination
		    pagination: '.zysj-swiper .swiper-pagination',
		    // Navigation arrows
		    nextButton: '.zysj-swiper .swiper-button-next',
		    prevButton: '.zysj-swiper .swiper-button-prev',
		    // And if we need scrollbar
		    //scrollbar: '.swiper-scrollbar',
		  });       


		   

		$(".video").append('<div class="play"></div>');


		$(".featureBox").append('<div class="bottom-text-area"></div>');

		myresize();
		bindEvent();
		chooseColor(0);
	}
	function youku(vid){

	}
	function bindEvent(){

		$(".video").click(function(event) {

			var vid = $(this).attr("data-video");
			if ($(this).attr('data-youku') == "1"){
				
				var wangshiSwf = "<div class='chunwanvideo' id='wangshiSwf'><div style='position:relative'><div id='swf-close'></div></div>";	
				wangshiSwf += "<div id='youkuplayer'></div>";
				wangshiSwf += "</div>";
				$('.flashBg').html(wangshiSwf);
				var player = new YKU.Player('youkuplayer',{
					styleid: '0',
					client_id: 'f85c861572e921cc',
					vid: vid,
					autoplay: true,
					show_related: false
				});
				$('.flashBg').show();
				$('#swf-close').click(function(){
					$('.flashBg').hide();
					$('#wangshiSwf').remove();
				});
				$(".flashBg").show();
				return false;
			}
			swfShow("tworeg",vid);
			//myFlash('FlashID').play(vid);
			$(".flashBg").show();
			return false;
			$("#popNeiShi").hide();
			$("#WxMomentVideo").show();
			/* Act on the event */
			$("#popwindows").show();
			/* Act on the event */
			var video = new WxMoment.Video({
			    //请联系接口人确认视频清晰度已调至高清版本
			    //如果要定制“播放按钮”的样式，请使用 CSS 覆盖 .tvp_overlay_play 和 .tvp_button_play 即可

			    vid: "a0016gys8ct", //视频 vid 取自视频地址：http://v.qq.com/page/a/t/t/a0016gys8ct.html
			    pic: "http://wximg.qq.com/tmt/_demo/wxmoment/img/video-thumb.jpg", //设置视频默认缩略图
			    oninited: function () {
			        //播放器在视频载入完毕触发

			    },
			    onplaying: function () {
			        //播放器真正开始播放视频第一帧画面时
			    },
			    onpause: function () {
			        //播放器触发暂停时，目前只针对HTML5播放器有效
			    },
			    onresume: function () {
			        //暂停后继续播放时触发
			    },
			    onallended: function () {
			        //播放器播放完毕时
			    },
			    onfullscreen: function (isfull) {
			        //onfullscreen(isfull) 播放器触发全屏/非全屏时，参数isfull表示当前是否是全屏
			    }
			});
			avideo.push(video);
		});

		$(".chooseBtn .item").hover(function() {
			/* Stuff to do when the mouse enters the element */
			chooseColor($(this).index());
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});

		$(".featureBox .mouseArea").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$(this).addClass('red').siblings('.red').removeClass('red');
			var height = 0,_height = 0;
			for (var i = 0; i < $(this).parent().find(".title").length; i++) {
				_height = $(this).parent().find(".title").eq(i).outerHeight();
				height = _height > height ? _height : height;
			};
			var title = '<div class="absoluCenter">'+$(this).find(".title").html()+'</div>';
			if ($(this).siblings('.specialFeatureBox').length > 0){
				var index = $(this).index();
				$(this).siblings('.specialFeatureBox').find(".item").eq(index).show().siblings().hide().parent().show();

			}
			$(this).siblings('.bottom-text-area').html(title).height(height+1).show();
			
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).removeClass('red');
			if ($(this).siblings('.specialFeatureBox').length > 0){
				return false;
			}
			else{
				$(this).siblings('.bottom-text-area').html("").hide();
			}
		});

		$(".specialFeatureBox").hover(function() {
			/* Stuff to do when the mouse enters the element */
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).hide();
		});

		$(".featureBox .close").click(function(event) {
			/* Act on the event */
			$(this).parents(".specialFeatureBox").hide();
			$(this).parents(".mouseArea").removeClass('red').siblings('.bottom-text-area').html("").hide();
			//$(".featureBox").append($(this).parent());
		});

		//弹窗关闭按钮
		$("#popwindows .main-outer .close").click(function(event) {
			/* Act on the event */
			for (var i = 0; i < avideo.length; i++) {
				avideo[i].getPlayer().pause();
			};
			$("#WxMomentVideo").hide();
			$("#popwindows").hide();
		});
		// 三大内饰
		var sdns_mySwiper;
		$("#pop-sdns").click(function(event) {
			/* Act on the event */
			$('#popNeiShi').show();
			$("#WxMomentVideo").hide();
			$("#popwindows").show();
			if (sdns_mySwiper == undefined){
				sdns_mySwiper = new Swiper ('#popNeiShi .swiper-container', {
			    // Optional parameters
			    //direction: 'vertical',
			    loop: true,
			    paginationClickable : true,
			    // If we need pagination
			    pagination: '#popNeiShi .swiper-pagination',
			    // Navigation arrows
			    nextButton: '#popNeiShi .swiper-button-next',
			    prevButton: '#popNeiShi .swiper-button-prev',
			    // And if we need scrollbar
			    //scrollbar: '.swiper-scrollbar',
			  }); 
			}
			return false; 
		});
	}
	function chooseColor(index){
		$(".chooseColor .item,.chooseBtn .item").eq(index).addClass('red').siblings('.red').removeClass('red');
		$(".chooseBtn .item").eq(index).addClass('red').siblings('.red').removeClass('red');

	}

	function resizeRadio(){
		$(".radio").each(function(index, el) {
			var radio = parseFloat($(this).attr("data-radio"));
			$(this).height($(this).outerWidth()/radio);
			//console.log($(this).outerWidth()/radio);
		});
	}
	//重置三角形
	function resize_triangle(){
		var w = $(".main-outer").outerWidth();
		var h = 56*w/960;
		$(".triangle-left-top").css("border-width",h+"px "+w+"px 0 0");
		$(".triangle-left-bottom").css("border-width",h+"px 0 0 "+w+"px");
		$(".triangle-right-top").css("border-width","0 "+w+"px "+h+"px 0");
		$(".triangle-right-bottom").css("border-width","0 0 "+h+"px "+w+"px");
	}

	function animatePlay(){
		for (var i = 0; i < $(".screen-outer .frame").length; i++) {
			if ($(".screen-outer .frame").eq(i).find(".item").length > 1){
				afilm.push(new FILM($(".screen-outer .frame").eq(i)));
			}
		};

		(function drawFrame(){
		    window.requestAnimationFrame(drawFrame);  
		    scrollTop = $(window).scrollTop();
			//console.log(scrollTop);
			for (var i = 0; i < afilm.length; i++) {
				afilm[i].play();
			};
		}());
	}


	function FILM($obj){
		var speed,obj,length,index,f_index,offset,height;

		this.init = function ($obj){
			//console.log("init");
			var FILM = this;
			FILM.speed = parseInt($obj.attr("data-speed"));
			FILM.obj = $obj.find(".item");
			FILM.length = FILM.obj.length;
			FILM.index = 0;
			FILM.f_index = 0;
			FILM.offset = $obj.offset();
			FILM.height = $obj.outerHeight();
			//console.log(FILM.offset.top);
		};
		this.resize = function(){
			var FILM = this;
			FILM.offset = FILM.obj.offset();
			FILM.height = FILM.obj.outerHeight();
			//console.log(FILM.offset);
		};
		this.play = function(){
			var FILM = this;
			/*
			if ((FILM.offset.top+FILM.height <= scrollTop)  || (FILM.offset.top >= scrollTop + screenHeight)){
				return false;
			}
			*/
			FILM.f_index = FILM.f_index+1 >= FILM.speed ? 0 : FILM.f_index+1;
			if (FILM.f_index > 0){
				return false;
			}
			FILM.index = FILM.index+1 >= FILM.length ? 0 : FILM.index+1 ;
			FILM.obj.eq(FILM.index).show().siblings().hide();
		};

		this.init($obj);

	}
})