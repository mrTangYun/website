var W,H;



var TP = {
	init:function(){
		this.flashObj = null;
		this.properties={
			flashplay:false,
			ie:document.all ? true : false,
			ipad:navigator.userAgent.toLowerCase().indexOf("ipad") > -1,
			iphone:navigator.userAgent.toLowerCase().indexOf("iphone") > -1,
			android:navigator.userAgent.toLowerCase().indexOf("android") > -1,
			bSupportVideo:$("html").hasClass('video') //是否支持video
		};
		TP.skrollrInit();
		return false;
		if (!$("html").hasClass('swf')){
			TP.skrollrInit();
		}
		else{
			TP.flashLoading();
		}
	},
	flashLoading:function(){
		var videoData = {
        	src : '../video/loading.flv',
        	autostart : true,
        	chromeless : true,
        	seekStart:false,
        	showLoader : true,
        	//endImage : jx.properties.imagePath+jx.currentPage.endImg,
        	videoProgress : 1
		};
		var options = {
			onEmbedComplete: function(){ 
			},
        	onComplete : function(){ 
        		TP.skrollrInit();
			},
        	onPercentComplete : function(percentage){	//console.log('per complete');
			},
        	onProgress : function(progress){ 
			},
        	onLoaded : function(){ 
        	}
    	}
    	var flashObj = new VideoPlayer("flashBgArea", videoData , options);
	},
	skrollrInit:function(){
        $("#flashBg").remove();
		TP.bindEvent();
		var todayDate = new Date();
		var sToday = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate();
		var iCountBackwards = TP.daysBetween(sToday,"2014-1-1");
		$("#countBackwards").html(iCountBackwards);


		var s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			},
			beforerender:function(o){
				//console.log(o.curTop);
				if (o.curTop <= 700){
					$("#left-nav a.home").parent().addClass('current').siblings('.current').removeClass('current');
				}
				else if(o.curTop <= 1400){
					$("#left-nav a.activity").parent().addClass('current').siblings('.current').removeClass('current');
				}
			}
		});
		skrollr.menu.init(s, {
		    //skrollr will smoothly animate to the new position using `animateTo`.
		    animate: true,

		    //The easing function to use.
		    easing: 'sqrt',

		    //Multiply your data-[offset] values so they match those set in skrollr.init
		    scale: 2,

		    //How long the animation should take in ms.
		    duration: function(currentTop, targetTop) {
		        //By default, the duration is hardcoded at 500ms.
		        return 500;

		        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
		        //return Math.abs(currentTop - targetTop) * 10;
		    },

		    //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
		    //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
		    handleLink: function(link) {
		        return 400;//Hardcoding 400 doesn't make much sense.
		    }
		});

		$('body,html').stop().animate({scrollTop:700},1000);
	},
	//+---------------------------------------------------  
	//| 求两个时间的天数差 日期格式为 YYYY-MM-dd   
	//+---------------------------------------------------  
	daysBetween:function(DateOne,DateTwo)  
	{   
	    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));  
	    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);  
	    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
	  
	    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
	    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);  
	    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
	  
	    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
	    return Math.abs(cha);  
	}, 
	elements:{
		flashVideo : false
	},
	bindEvent:function(){
		$("#right-s1-notitext .btn-close").click(function(){
			$("#right-s1-notitext").remove();
			return false;
		});
		$("#left-nav a.home").click(function(event) {
			/* Act on the event */
			$('body,html').stop().animate({scrollTop:700},'slow');
			return false;
		});
		$("#goto-activePage,#nav-message,#left-nav a.activity").click(function(event) {
			$('body,html').stop().animate({scrollTop:1400},1000);
			return false;
		});
	}
};
$(document).ready(function(){


	resizeWindow();
	$(window).resize(function() {
		resizeWindow();
	});

	function resizeWindow(){
		W = $(window).outerWidth();
		H = $(window).outerHeight();
		//计算首页容器宽度
		resizeScene1Page(W,H);
	}

	//重置首页
	function resizeScene1Page(w,h){
		$("#scene-1-bg").height(h);
		$("#scene-2-bg").height(h);

		//$("#flashBg").height(w*1080/1920);
		//$("#flashBg").height(h);

	}


	TP.init();
});