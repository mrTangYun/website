/*
                               ____                  
                            _.' :  `._               
                        .-.'`.  ;   .'`.-.           
               __      / : ___\ ;  /___ ; \      __  
             ,'_ ""=-.:__;".-.";: :".-.":__;.-="" _`,
             :' `.t""=-.. '<@.`;_  ',@:` ..-=""j.' `;
                  `:-.._J '-.-'L__ `-.-' L_..-;'     
                    "-.__ ;  .-"  "-.  : __.-"       
                        L ' /.======.\ ' J           
                         "-.   "__"   .-"            
                        __.l"-:_JL_;-";.__           
                     .-j/'.;  ;""""  / .'\"-.        
                   .' /:`. "-.:     .-" .';  `.      
                .-"  / ;  "-. "-..-" .-"  :    "-.   
             .+"-.  : :      "-.__.-"      ;-._   \  
             ; \  `.; ;                    : : "+. ; 
             :  ;   ; ;                    : ;  : \: 
             ;  :   ; :                    ;:   ;  : 
            : \  ;  :  ;                  : ;  /  :: 
            ;  ; :   ; :                  ;   :   ;: 
            :  :  ;  :  ;                : :  ;  : ; 
            ;\    :   ; :                ; ;     ; ; 
            : `."-;   :  ;              :  ;    /  ; 
             ;    -:   ; :              ;  : .-"   : 
             :\     \  :  ;            : \.-"      : 
              ;`.    \  ; :            ;.'_..-=  / ; 
              :  "-.  "-:  ;          :/."      .'  :
               \         \ :          ;/  __        :
                \       .-`.\        /t-""  ":-+.   :
                 `.  .-"    `l    __/ /`. :  ; ; \  ;
                   \   .-" .-"-.-"  .' .'j \  /   ;/ 
                    \ / .-"   /.     .'.' ;_:'    ;  
                     :-""-.`./-.'     /    `.___.'   
                           \ `t  ._  /               
                            "-.t-._:'                

*/
var aUserName = new Array(); //team数组
var aDivItem=[];
var aFinal =[	
	new Array(0,312),
	new Array(124 ,223),
	new Array(146,235),
	new Array(146,267),
	new Array(145 ,299,3,0),

	new Array(111,424),	//6
	new Array(213 ,424),
	new Array(214,518),
	new Array(214,474),
	new Array(254,428),

	new Array(213,423),	//11
	new Array(213,359),
	new Array(213,351),
	new Array(213,299,1),	//14
	new Array(266,299),

	new Array(266,243),	//16
	new Array(236,243),
	new Array(216,235),
	new Array(216,167),
	new Array(263,167,2,new Array('zonglei','lzl-1.png','lzl-2.png')),

	new Array(315,210),	//21
	new Array(288,299),
	new Array(317,359),
	new Array(291,428,2,new Array('qianshu','lqs-1.png','lqs-2.png')),
	new Array(291,491),

	new Array(324,491),	//26
	new Array(324,541,2,new Array('fanlinlin','fll-1.png','fll-2.png')),
	new Array(389,540),
	new Array(423,486),
	new Array(423,440),

	new Array(376,439),	//31
	new Array(370,360,1),
	new Array(371,359,2,new Array('lulu','wl-1.png','wl-2.png')),
	new Array(371,251),
	new Array(344,251),

	new Array(344,209,1),	//36
	new Array(263,159),
	new Array(372,99),
	new Array(372,71),
	new Array(401,99,2,new Array('jiayang','ljy-1.png','ljy-2.png')),

	new Array(401,157,3,1),	//41
	new Array(448,156,1),
	new Array(448,243,2,new Array('xiaolin','yxl-1.png','yxl-2.png')),
	new Array(492,244),
	new Array(492,328,1),

	new Array(480,362),	//46
	new Array(480,411,2,new Array('xiaozhao','zz-1.png','zz-2.png')),
	new Array(480,486),
	new Array(522,512),
	new Array(595,478,2,new Array('rourou','xy-1.png','xy-2.png')),

	new Array(596,411,1),	//51
	new Array(599,310,2,new Array('aimin','lam-1.png','lam-2.png')),
	new Array(577,309),
	new Array(556,244,1),
	new Array(556,133,3,2),

	new Array(548,133,2,new Array('baobei','lbb-1.png','lbb-2.png')),	//56
	new Array(548,83),
	new Array(461,68),
	new Array(516,68),
	new Array(517,3),

	new Array(589,2,2,new Array('tingting','wct-1.png','wct-2.png')),	//61
	new Array(671,2,1),
	new Array(671,2),
	new Array(671,101),
	new Array(671,133),

	new Array(671,133),	//66
	new Array(675,202),
	new Array(732,192),
	new Array(779,192),
	new Array(779,243,1),

	new Array(675,260),	//71
	new Array(675,310,2,new Array('xiaoxin','kqx-1.png','kqx-2.png')),
	new Array(675,310),
	new Array(778,348),
	new Array(696,400,1),

	new Array(696,474),	//76
	new Array(646,480,3,3),
	new Array(860,194,2,new Array('zhouyang','zy-1.png','zy-2.png')),
	new Array(827,192),
	new Array(757,77),

	new Array(827,61),	//81
	new Array(827,61),
	new Array(966,61,1),
	new Array(894,194,3,4),
	new Array(966,178),	
	
	new Array(1035,178),	//86
	new Array(430,362)	
];


$(document).ready(function(){
		var ie = $.browser.msie ? $.browser.version*1 : false;
		/*屏幕高度宽度*/
		
		function resize(){
			var WINDOWWIDTH = $(window).innerWidth() >= 1280 ? $(window).innerWidth() : 1280;
			var WINDOWHEIGHT = $(window).innerHeight() <= 660 ? 660 :$(window).innerHeight() ;
			$("#showArea,#Works").width(WINDOWWIDTH).height(WINDOWHEIGHT);
			$("#Team").css({top:(WINDOWHEIGHT-337)/2+'px',left:(WINDOWWIDTH-738)/2+'px'});
			$("#showArea .showArea").css({top:(WINDOWHEIGHT-648)/2+'px'});

		}
		resize();
		$(window).resize(function(){
			resize();
		});
		
		function randomCreateDiv(length){
			for (var i = 0; i < length ; i++){
				if (aFinal[i][2]){
					aDivItem.push(new Array(Math.random()*$(this).outerWidth()*2,Math.random()*$(this).outerHeight()*2,aFinal[i][0],aFinal[i][1],aFinal[i][2],aFinal[i]));
				}
				else{
					aDivItem.push(new Array(Math.random()*$(this).outerWidth()*2,Math.random()*$(this).outerHeight()*2,aFinal[i][0],aFinal[i][1]));
				}
			}
		}
		randomCreateDiv(87);
		
		var iTriangleLength = aDivItem.length , _iTriangleLength=0;
		var _htmlShowArea = '',_htmlfooter = '';
		for (var i=0; i<aDivItem.length; i++){
			if (aDivItem[i][4]){
				if (aDivItem[i][4] == 2)
				{
					_htmlShowArea += "<div class=\"item hasAction\" data-username='"+aDivItem[i][5][3][0]+"' data-avatar='"+aDivItem[i][5][3][1]+"' data-arrow='"+aDivItem[i][5][3][2]+"' data-type=\""+aDivItem[i][4]+"\" data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" /></div>";
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />";	
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />";
				}
				else if (aDivItem[i][4] == 3)
				{
					_htmlShowArea +="<div class=\"item hasAction\" data-type=\""+aDivItem[i][4]+"\" data-workindex='"+aDivItem[i][5][3]+"' data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" /></div>";
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />";	
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />";
				}
				else{
					/*info*/
					_htmlShowArea +="<div class=\"item hasAction justFlip\" data-type=\""+aDivItem[i][4]+"\" data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'>";
					_htmlShowArea +="<div class = 'container'>";
					_htmlShowArea +="<div class = 'flip'>";
					_htmlShowArea +="<div class = 'face-front'>";
					_htmlShowArea +="<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />";
					_htmlShowArea +="</div>";
					_htmlShowArea +="<div class = 'face-back'>";
					_htmlShowArea +="<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s-red.png\" />";
					_htmlShowArea +="</div>";
					_htmlShowArea +="</div>";
					_htmlShowArea +="</div>";
					_htmlShowArea +="</div>";
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />";	
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />";
					_htmlfooter += "<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s-red.png\" />";
				}
			}
			else{
				_htmlShowArea +="<div class=\"item\" style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group/"+(i+1)+".png\" /></div>";
				_htmlfooter += "<img src=\"images/group/"+(i+1)+".png\" />";
			}

			/*
			if (aDivItem[i][4]){
				if (aDivItem[i][4] == 2)
				{
					$(".showArea").append("<div class=\"item hasAction\" data-username='"+aDivItem[i][5][3][0]+"' data-avatar='"+aDivItem[i][5][3][1]+"' data-arrow='"+aDivItem[i][5][3][2]+"' data-type=\""+aDivItem[i][4]+"\" data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" /></div>");
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />");	
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />");
				}
				else if (aDivItem[i][4] == 3)
				{
					$(".showArea").append("<div class=\"item hasAction\" data-type=\""+aDivItem[i][4]+"\" data-workindex='"+aDivItem[i][5][3]+"' data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" /></div>");
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />");	
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />");
				}
				else{
					$(".showArea").append("<div class=\"item hasAction\" data-type=\""+aDivItem[i][4]+"\" data-index='"+(i+1)+"' style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" /></div>");
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+".png\" />");	
					$("footer").append("<img src=\"images/group"+aDivItem[i][4]+"/"+(i+1)+"s.png\" />");
				}
			}
			else{
				$(".showArea").append("<div class=\"item\" style='left:"+aDivItem[i][2]+"px;top:"+aDivItem[i][3]+"px' data-spreadX='"+aDivItem[i][0]+"' data-spreadY='"+aDivItem[i][1]+"' data-gatherX='"+aDivItem[i][2]+"' data-gatherY='"+aDivItem[i][3]+"'><img src=\"images/group/"+(i+1)+".png\" /></div>");
				$("footer").append("<img src=\"images/group/"+(i+1)+".png\" />");
			}
			*/
		}
		/*work图片*/
		_htmlfooter += "<img src=\"images/works/testdriver7days.png\" />";
		_htmlfooter += "<img src=\"images/works/infiniti-f1-2011.png\" />";
		_htmlfooter += "<img src=\"images/works/infiniti-gforce-2012.png\" />";
		_htmlfooter += "<img src=\"images/works/infiniti-jx-chinasite.png\" />";
		_htmlfooter += "<img src=\"images/works/infiniti-ex-2012.png\" />";
		$(".showArea").html(_htmlShowArea);
		$('footer').html(_htmlfooter);
		/*三角形动作*/
		function GolygonAction(action){
			//action (1为聚合,0为散开)
			if (action == 1){
				$('body').removeClass('noline');
				if ($('.showArea').hasClass("gather"))
				{
					$(".showArea .item").each(function(i){
							
							if ( ie && ie<10 ){
								//ie10以下
								$(this).stop().animate({ 
									top : $(this).attr("data-gatherY")+'px',
									left : $(this).attr("data-gatherX")+'px',
									opacity: 1,
								  }, Math.random()*2000+1000 /*,function(){  _iTriangleLength --;}*/);
							}
							else{
								if (!$(this).hasClass("justFlip")){
									$(this).transition({ 
													//rotate: '180deg',
													//perspective: '100px',
													rotate3d: '1, 1, 2, 0deg',
													opacity: 1,
													scale: 1,
													translate: [0,0], 
									 },Math.random()*2000+1000/*,function(){  _iTriangleLength --;}*/);
								}
								else{
									$(this).show();
								}
							}
						});
					$('.showArea').removeClass("gather");
				}
				
			}
			else if(action == 0 ){
				$('body').addClass('noline');
				if ($('.showArea').hasClass("gather")){
					return false;
				}
				$(".showArea .item").each(function(i){
						if ( ie && ie<10 ){
							//ie10以下
							$(this).stop().animate({ 
								top : Math.random()*$(this).attr("data-spreadY")+'px',
								left : Math.random()*$(this).attr("data-spreadX")-700+'px',
								opacity: 0,
							  },Math.random()*2000+1000 /*,function(){ _iTriangleLength ++;}*/ );
						}
						else{
							if (!$(this).hasClass("justFlip")){
								$(this).transition({ 
												rotate3d: '1, 1, 2,'+(Math.random()*360-180)+'deg',
												opacity: 0,
												scale: Math.random()*4,
												translate: [($(this).attr("data-gatherX")-$(this).attr("data-spreadX")),($(this).attr("data-gatherY")-$(this).attr("data-spreadY"))], 
								
								 },Math.random()*2000+1000 /*,function(){ _iTriangleLength ++;}*/);
							}
							else{
								$(this).hide();
							}
						}
					});
				$('.showArea').addClass("gather");
			}
			
		}
		
		$("#showArea .grayDiv").click(function(){
			$(".showArea .hasAction.run").css({left:$(".showArea .hasAction.run").attr("data-gatherx")+"px",top:$(".showArea .hasAction.run").attr("data-gathery")+"px"}).removeClass("run");
			$(this).removeClass("red");
		});
		
		$(".showArea .hasAction").live({
			   mouseenter:function(){
				 $(this).addClass("hover");
				 if (!$(this).hasClass("justFlip")){
				 	$(this).transition({ scale: 1.1 },200);
				 }	
			   },
			   mouseleave:function(){
				 $(this).removeClass("hover");
				 if (!$(this).hasClass("justFlip")){
				 	$(this).transition({ scale: 1},200);
				 }
			   }
		});
		$(".showArea .hasAction").live('click',function(){
			$(".showArea .hasAction.run").css({left:$(".showArea .hasAction.run").attr("data-gatherx")+"px",top:$(".showArea .hasAction.run").attr("data-gathery")+"px"}).removeClass("run");
			$("#showArea .grayDiv").removeClass("red");
					if (_iTriangleLength > 0)
					{
						return false;	
					}
					var _i = $(this).index();
					if ($(this).attr("data-type")>1)
					{
						GolygonAction(0);	//聚合
						//works
						if ($(this).attr("data-type") == 3){
							window.location.hash = 'Works/'+$(this).attr("data-workindex");
							$("#Works").show();
							oDiGroup.goToPage();
						}
						else if ($(this).attr("data-type") == 2){
							window.location.hash = 'Team/'+$(this).attr("data-username");
							oDiGroup.goToPage();
						}
					}
					else{
						//info
						$(this).addClass("run").css({left:"444px",top:"456px"});
						$("#showArea .grayDiv").addClass("red");
						//InfoShow($(this).index(".showArea .hasAction"));
					}
					return false;
			});
	/*Works*/
	function WorksWhow(index){
		/*
		$('#svgintro').svg();
		var svg = $('#svgintro').svg('get');
		var svgGolygon = svg.polygon( [[100,200],[200,200],[150,250]], {fill: 'red'}) ;
		$(svgGolygon).css("cursor","pointer");
		$(svgGolygon).animate({svgWidth: 200, svgHeight: '30%', svgStroke: 'aqua', svgStrokeWidth: '+=7', svgTransform: 'rotate(20, 360, 0)'}, 2000);
		$(svgGolygon).click(function(){
				console.log('hello');
			});
		*/
	}
	
	/*Info*/
	function InfoShow(index){
		if (index >= 0 ){
			//$("#Info").show();
			//$("#Info div").hide().eq(index).show();
		}
		else{
			//$("#Info").hide();
			//$("#Info div").hide()
		}
	}
	
	/* TEAM */
	$("#btn-TeamNext,#btn-TeamPre").click(function(){
			window.location.hash = 'Team/'+$(this).attr("data-name");
			oDiGroup.goToPage();
			return false;
		});
			
	/*导航*/
	$("#ShowNumber").click(function(){
			$(".showArea .item img").each(function(i){
					$(this).attr('src','images/group-number/'+(i+1)+'.png');
				});
			return false;
		});
	$("#menu-Info").click(function(){
			window.location.hash = 'Info';
			oDiGroup.goToPage();
			return false;
		});
	$("#menu-Team").click(function(){
			window.location.hash = 'Team';
			oDiGroup.goToPage();
			return false;
		});
	$("#Contact").click(function(){
		var h = $(window).innerHeight();
		h = (h- 457)/2;
		$(".popWindow").show();
		$(".popWindow .Content-container").html("<div class='contact-container'><img src='images/contact-us.png'/><a title='关闭'></a></div>").css("padding-top",h+"px");
		
		$(".popWindow .Content-container .contact-container a").click(function(){
			$(".popWindow").hide();
			return false;
		});
		return false;
	});
	$("#menu-Works").click(function(){
			window.location.hash = 'Works';
			oDiGroup.goToPage();
			return false;
		});
	function resetImg(type){
			//1:还原所有
			$(".showArea .hasAction img").each(function(i){
				if(!$(this).parent().parent().hasClass("flip")){
					$(this).attr('src','images/group'+$(this).parent().attr('data-type')+'/'+$(this).parent().attr('data-index')+'.png');
				}
				else{
					if ($(this).parent().hasClass("face-front")){
						$(this).attr('src','images/group'+$(this).parent().parent().parent().parent().attr('data-type')+'/'+$(this).parent().parent().parent().parent().attr('data-index')+'.png');
					}
				}
			});	
			$(".showArea .hasAction").removeClass("hasAction").removeClass("run");
			//2：加hasAction
			$(".showArea .item[data-type='"+type+"']").addClass("hasAction");
			//3：换图片
			$(".showArea .item[data-type='"+type+"'] img").each(function(i){
				if(!$(this).parent().parent().hasClass("flip")){
					$(this).attr('src','images/group'+type+'/'+$(this).parent().attr('data-index')+'s.png');
				}
				else{
					if ($(this).parent().hasClass("face-front")){
						$(this).attr('src','images/group'+$(this).parent().parent().parent().parent().attr('data-type')+'/'+$(this).parent().parent().parent().parent().attr('data-index')+'s.png');
					}
				}
			});	
	}
	
	var oDiGroup = {
			init:function(){
				oDiGroup.goToPage();
				},
			reset:function(){},
			
			goToPage:function(href) {
				window.location.hash = window.location.hash ? window.location.hash : 'Info';	//默认info
				var hash = window.location.hash ;
				if (window.location.hash) {
					$("#showArea .grayDiv").click();
					//upg.showbyindex(upg.parseHash(hash.split("/")));
					$("#Team").hide();
					if (hash.split("/").length == 1){
						switch (oDiGroup.parseHash(hash.split("/")))
						{
							case '#Info':
								resetImg(1);
								GolygonAction(1);
								break;	
							case '#Works':
								resetImg(3);
								GolygonAction(1);
								
								break;	
							case '#Team':
								resetImg(2);
								GolygonAction(1);
								break;	
						}
						$("#Works").hide();
					}
					else if(hash.split("/").length == 2){
						
						switch (oDiGroup.parseHash(hash.split("/"))[0])
						{
							case '#Info':
								resetImg(1);
								GolygonAction(1);
								break;	
							case '#Works':
								var workIndex = oDiGroup.parseHash(hash.split("/"))[1];
								resetImg(3);
								(function(){
									var iNow = 0;
									var imageCount = 0;
									var jWork=[
										{
											"title":"北京运通英菲尼迪7天试驾",
											"description":"用户可以深入了解英菲尼迪的超凡性能，提高产品的偏好度		<br/>		后期传播引起大家对英菲尼迪的深度讨论，提高品牌的知名度，达成深度传播		<br/>		最终报名人数3240人。报名到店试驾总人数：316人		<br/>		汇总贴的点击总数为79207评论数为754		<br/>		试驾者分享帖的点击总数为213675，评论总数为2097",
											"img":"images/works/testdriver7days.png",
											"x":10,
											"y":100,
											"rotation":0,
											"stage_x":-50,
											"stage_y":-0,
											"btn_x":600,
											"btn_y":248

										},
										{
											"title":"北京运通英菲尼迪 F1 网际夺标",
											"description":"用户可以深入了解英菲尼迪的超凡性能，提高产品的偏好度		<br/>		后期传播引起大家对英菲尼迪的深度讨论，提高品牌的知名度，达成深度传播		<br/>		最终报名人数3240人。报名到店试驾总人数：316人		<br/>		汇总贴的点击总数为79207评论数为754		<br/>		试驾者分享帖的点击总数为213675，评论总数为2097",
											"img":"images/works/infiniti-f1-2011.png",
											"x":104,
											"y":-195,
											"rotation":-13.48,
											"stage_x":104,
											"stage_y":-195,
											"btn_x":950,
											"btn_y":0
										},
										{
											"title":"INFINITI G-Force 极风之旅 2012",
											"description":"用户可以深入了解英菲尼迪的超凡性能，提高产品的偏好度		<br/>		后期传播引起大家对英菲尼迪的深度讨论，提高品牌的知名度，达成深度传播		<br/>		最终报名人数3240人。报名到店试驾总人数：316人		<br/>		汇总贴的点击总数为79207评论数为754		<br/>		试驾者分享帖的点击总数为213675，评论总数为2097",
											"img":"images/works/infiniti-gforce-2012.png",
											"x":-420,
											"y":-260,
											"rotation":-34.98,
											"stage_x":-220,
											"stage_y":-360,
											"btn_x":464,
											"btn_y":-90
										},
										{
											"title":"INFINITI JX 官方网站",
											"description":"用户可以深入了解英菲尼迪的超凡性能，提高产品的偏好度		<br/>		后期传播引起大家对英菲尼迪的深度讨论，提高品牌的知名度，达成深度传播		<br/>		最终报名人数3240人。报名到店试驾总人数：316人		<br/>		汇总贴的点击总数为79207评论数为754		<br/>		试驾者分享帖的点击总数为213675，评论总数为2097",
											"img":"images/works/infiniti-jx-chinasite.png",
											"x":-589,
											"y":-139,
											"rotation":20,
											"stage_x":-589,
											"stage_y":039,
											"btn_x":100,
											"btn_y":522
										},
										{
											"title":"英菲尼迪EX全球旅游摄影大赛网站",
											"description":"用户可以深入了解英菲尼迪的超凡性能，提高产品的偏好度		<br/>		后期传播引起大家对英菲尼迪的深度讨论，提高品牌的知名度，达成深度传播		<br/>		最终报名人数3240人。报名到店试驾总人数：316人		<br/>		汇总贴的点击总数为79207评论数为754		<br/>		试驾者分享帖的点击总数为213675，评论总数为2097",
											"img":"images/works/infiniti-ex-2012.png",
											"x":-685,
											"y":-839,
											"rotation":43.6,
											"stage_x":-985,
											"stage_y":-139,
											"btn_x":-1145,
											"btn_y":72
										}];
									var canvas=document.getElementById("canvasWorks");
									var stage = new createjs.Stage(canvas);
									var container = new createjs.Container();
									var aWork = new Array();
									var btn_next = new createjs.Bitmap("images/btn/btn_next.png");
									stage.enableMouseOver();
									btn_next.cursor = "pointer";
									btn_next.addEventListener("click",OnMouseClickHandlerForBtnNext);

									for (var i = 0; i < jWork.length; i++) {
										aWork[i] = new Image();
										aWork[i].src = jWork[i].img; 
										aWork[i].onload = imageLoaded;
									};

									createjs.Ticker.setFPS(32);
            						createjs.Ticker.addListener(stage);

									function imageLoaded(){
										imageCount++;
										if (imageCount >= jWork.length){
											createBitMaps();
										}
									}
									function createBitMaps(){
										var bitmap;
										for (var i = 0; i < jWork.length; i++) {
											bitmap = new createjs.Bitmap(aWork[i]);
											bitmap.name = "_"+i
											bitmap.x= jWork[i].x;
											bitmap.y = jWork[i].y ;
											bitmap.rotation = jWork[i].rotation;
											bitmap.alpha = .5;

											bitmap.addEventListener("click",OnMouseClickHandlerForWork);
											container.addChild(bitmap);
										};
										stage.addChild(container);
										stage.addChild(btn_next);
										stage.update();
										showWorkByIndex(0,1);
									}

									function OnMouseClickHandlerForWork(e){
										var bitmap = e.target;
										showWorkByIndex(bitmap.name.replace("_",'')*1);
									}
									function OnMouseClickHandlerForBtnNext(e){
										iNow = iNow+1 >= jWork.length ? 0 : iNow+1;
										showWorkByIndex(iNow);
									}

									function showWorkByIndex(index,iDuration){
										btn_next.alpha = 0;
										var bitmap;
										var _iDuration = iDuration? iDuration : 1000;
										for (var i = 0; i < jWork.length; i++) {
											bitmap = container.getChildAt(i);
											if (i == index )
											{
												bitmap.alpha = 1;
											}
											else{
												bitmap.alpha = .3;
											}
										};
										btn_next.x = jWork[index].btn_x;
										btn_next.y = jWork[index].btn_y;
										createjs.Tween.get(container).to({rotation:jWork[index].rotation*-1}, _iDuration, createjs.Ease.linear);
										createjs.Tween.get(stage).to({x:jWork[index].stage_x*-1+300,y:jWork[index].stage_y*-1}, _iDuration, createjs.Ease.linear);
										createjs.Tween.get(btn_next).to({x:jWork[index].btn_x,y:jWork[index].btn_y,alpha:1}, _iDuration, createjs.Ease.linear);
										
										stage.update();
									}
									
									function tick () {
										stage.tick();
									}
								})();
								break;	
							case '#Team':
								//team2级
								var username = oDiGroup.parseHash(hash.split("/"))[1];
								(function(username){
										resetImg(2);
										GolygonAction(0);
										
										//如果数组为空
										if (aUserName.length == 0){
											for(var i= 0 ; i<aFinal.length ; i++){
												if (aFinal[i][2] == 2)
												{
													aUserName.push(aFinal[i][3]);
													$("footer .Team").append("<img src=\"images/group2/"+aFinal[i][3][1]+"\" />"); //
													$("footer .Team").append("<img src=\"images/group2/"+aFinal[i][3][2]+"\" />");
												}
											}
											aUserName = aUserName.reverse();
										}
										//显示目标图层下面的照片
										var _css = 1,index =0 ,now_index;
										var _bCreated = $("#Team .user div").length >0 ? true : false ; //是否已经创建dom
										if (_bCreated){
											now_index = $("#Team .user div[data-show=1]:last").index();
										}
										for(var j= 0 ; j<aUserName.length ; j++){
											if (aUserName[j][0] == decodeURIComponent(username)){
													_css = 0;
													index = j;
												}
											if (!_bCreated){
												//如果没有创建,创建dom
												$("#Team .user").append("<div data-show= \""+_css+"\" data-name='"+aUserName[j][0]+"' ><img src=\"images/group2/"+aUserName[j][1]+"\" /></div>");
												$("#Team .text").append("<div data-show= \""+_css+"\" data-name='"+aUserName[j][0]+"' ><img src=\"images/group2/"+aUserName[j][2]+"\" /></div>");
											}
										}
										$("#Team:hidden").show();
										
										if (now_index > index){
											if (now_index == index+1)
											{
												//往两边分开
												$("#Team .user div[data-show=1]").eq(now_index).attr('data-show',0).stop().animate({ left : '-200px',opacity: 0}, 1000);
												$("#Team .text div[data-show=1]").eq(now_index).attr('data-show',0).stop().animate({ left : '200px',opacity: 0}, 1000);
											}
											else{
												//console.log(now_index);
												(function(length,index){
														for (var i = 0 ; i <length ; i++){
															if (i > index){
																$("#Team .user div").eq(i).attr('data-show',0).css({left : '-200px',opacity: 0});
																$("#Team .text div").eq(i).attr('data-show',0).css({left : '-200px',opacity: 0});
															}
														}
													})(aUserName.length,index);
											}
											
										}
										else if(now_index == index){
											
										}
										else{
												(function(length,index){
														for (var i = 0 ; i <length ; i++){
															if (i < index){
																$("#Team .user div").eq(i).attr('data-show',1).css({left : '0px',opacity: 1});
																$("#Team .text div").eq(i).attr('data-show',1).css({left : '0px',opacity: 1});
															}
														}
													})(aUserName.length,index);
												
											//向中间合拢
											//console.log('now_index='+now_index+',index='+index);
											$("#Team .user div[data-show=0]").css({opacity:0,left:'-200px'});
											$("#Team .text div[data-show=0]").css({opacity:0,left:'200px'});
											
											
											//显示目标图层
											$("#Team .user div[data-show=0]").eq(0).attr('data-show',1).stop().animate({ left : '0px',opacity: 1}, 1000);
											$("#Team .text div[data-show=0]").eq(0).attr('data-show',1).stop().animate({ left : '0px',opacity: 1}, 1000);
											
										}
										//绑定属性
										$("#btn-TeamNext").attr('data-name',aUserName[(index-1)<0?0:(index-1)][0]);
										$("#btn-TeamPre").attr('data-name',aUserName[(index+1)>(aUserName.length-1)?(aUserName.length-1):(index+1)][0]);
										
									})(username);
								break;	
						}
					}
				}
				else{
					//upg.showbyindex(0);
				}
			},
			parseHash:function(hash) {
				if (hash.length==1){
					return hash[0];
				}
				else if (hash.length==2){
					return hash;
				}
				else{
					return 0;
				}
			}
	};
	oDiGroup.init();
		
});	


function getParamsOfShareWindow(width, height) {
	return ['toolbar=0,status=0,resizable=1,width=' + width + ',height=' + height + ',left=',(screen.width-width)/2,',top=',(screen.height-height)/2].join('');
}
 
function bindShareList() {
	var link = encodeURIComponent(document.location); // 文章链接
	var title = encodeURIComponent('北京博尚广告有限公司'); // 文章标题
	var source = encodeURIComponent(document.title.substring(0,76)); // 网站名称
	var windowName = 'share'; // 子窗口别称
	var site = document.location; // 网站链接
 
	jQuery('#facebook-share').click(function() {
		var url = 'http://facebook.com/share.php?u=' + link + '&t=' + title;
		var params = getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
 
	jQuery('#twitter-share').click(function() {
		var url = 'http://twitter.com/share?url=' + link + '&text=' + title;
		var params = getParamsOfShareWindow(500, 375);
		window.open(url, windowName, params);
	});
 
	jQuery('#delicious-share').click(function() {
		var url = 'http://delicious.com/post?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(550, 550);
		window.open(url, windowName, params);
	});
 
	jQuery('#kaixin001-share').click(function() {
		var url = 'http://www.kaixin001.com/repaste/share.php?rurl=' + link + '&rcontent=' + link + '&rtitle=' + title;
		var params = getParamsOfShareWindow(540, 342);
		window.open(url, windowName, params);
	});
 
	jQuery('#share-renren').click(function() {
		var url = 'http://share.renren.com/share/buttonshare?link=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
 
	jQuery('#share-douban').click(function() {
		var url = 'http://www.douban.com/recommend/?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(450, 350);
		window.open(url, windowName, params);
	});
 
	jQuery('#share-sina').click(function() {
		var url = 'http://v.t.sina.com.cn/share/share.php?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(607, 523);
		window.open(url, windowName, params);
	});
 
	jQuery('#netease-share').click(function() {
		var url = 'http://t.163.com/article/user/checkLogin.do?link=' + link + 'source=' + source + '&info='+ title + ' ' + link;
		var params = getParamsOfShareWindow(642, 468);
		window.open(url, windowName, params);
	});
 
	jQuery('#share-qq').click(function() {
		var url = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + link + '&site=' + site;
		var params = getParamsOfShareWindow(634, 668);
		window.open(url, windowName, params);
	});
}

$(document).ready(function(){
	bindShareList();
});