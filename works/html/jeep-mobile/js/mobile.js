if (!window.requestAnimationFrame){
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback){
        return window.setTimeout(callback, 1000/60);
    });
}

jQuery(document).ready(function($) {

	var screenWidth,screenHeight,scrollTop,afilm = [];

	$(window).resize(function(event) {
		/* Act on the event */
		myresize();

	});

	function myresize(){
		screenWidth = $(window).outerWidth();
		screenHeight = $(window).outerHeight();

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



		  var headimg_mySwiper = new Swiper ('#chooseColorSwiper.swiper-container', {
		    // Optional parameters
		    //direction: 'vertical',
		    //loop: true,
		    paginationClickable : true,
		    // If we need pagination
		    // Navigation arrows
		    nextButton: '#chooseColorSwiper .swiper-button-next',
		    prevButton: '#chooseColorSwiper .swiper-button-prev',
		    onSlideChangeEnd: function(swiper){
		      var index = swiper.activeIndex;
		      var _event = $(".chooseBtn .item").eq(index).attr("data-data-event");
		      gsTracker(_event);
		      //console.log(index);
		      $(".chooseBtn .item").eq(index).addClass('red').siblings('.red').removeClass('red');
		    },
		    onProgress: function(swiper, progress){
		      var index = swiper.activeIndex;
		      //console.log(index);
		      $(".chooseBtn .item").eq(index).addClass('red').siblings('.red').removeClass('red');
		    }
		    // And if we need scrollbar
		    //scrollbar: '.swiper-scrollbar',
		  });       


		  // var zysj_mySwiper = new Swiper ('.zysj-swiper.swiper-container', {
		  //   // Optional parameters
		  //   //direction: 'vertical',
		  //   loop: true,
		  //   paginationClickable : true,
		  //   // If we need pagination
		  //   pagination: '.zysj-swiper .swiper-pagination',
		  //   // Navigation arrows
		  //   nextButton: '.zysj-swiper .swiper-button-next',
		  //   prevButton: '.zysj-swiper .swiper-button-prev',
		  //   // And if we need scrollbar
		  //   //scrollbar: '.swiper-scrollbar',
		  // });       


		   

		$(".video").append('<div class="play"></div>');


		$(".featureBox").append('<div class="bottom-text-area"></div>');

		myresize();
		bindEvent();
		chooseColor(0);
	}
	function bindEvent(){
		// $(".chooseBtn .item").hover(function() {
		// 	/* Stuff to do when the mouse enters the element */
		// 	chooseColor($(this).index());
		// }, function() {
		// 	/* Stuff to do when the mouse leaves the element */
		// });

		// $(".featureBox .mouseArea").hover(function() {
		// 	/* Stuff to do when the mouse enters the element */
		// 	$(this).addClass('red').siblings('.red').removeClass('red');
		// 	var height = 0,_height = 0;
		// 	for (var i = 0; i < $(this).parent().find(".title").length; i++) {
		// 		_height = $(this).parent().find(".title").eq(i).outerHeight();
		// 		height = _height > height ? _height : height;
		// 	};
		// 	var title = '<div class="absoluCenter">'+$(this).find(".title").html()+'</div>';
		// 	if ($(this).siblings('.specialFeatureBox').length > 0){
		// 		var index = $(this).index();
		// 		$(this).siblings('.specialFeatureBox').find(".item").eq(index).show().siblings().hide().parent().show();

		// 	}
		// 	$(this).siblings('.bottom-text-area').html(title).height(height+1).show();
			
		// }, function() {
		// 	/* Stuff to do when the mouse leaves the element */
		// 	$(this).removeClass('red');
		// 	if ($(this).siblings('.specialFeatureBox').length > 0){
		// 		return false;
		// 	}
		// 	else{
		// 		$(this).siblings('.bottom-text-area').html("").hide();
		// 	}
		// });

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
			$("#popwindows").hide();
		});
		// 三大内饰
		var sdns_mySwiper;
		$("#pop-sdns").click(function(event) {
			/* Act on the event */
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
});