var canvas, stage, imageCount = 0,
	indexChoose, update = true,
	pictures_a = new Array(),
	pictures_b = new Array();
	textIcon_a = new Array();
	textIcon_b = new Array();
pictures_size = new Array();
var cappuccino = {
	//默认场景
	defaultPage: "",
	init: function() {
		this.properties = {
			//选择图案的索引
			indexIcon: 0,
			indexTextIcon:0,
			//是否选择了图案
			iChooseIcon: false,
			//是否选择了文字图案
			iChooseTextIcon: false,
			//画图时杯子的背景图片
			cupImg: "images/cup/cup.png",
			//canvas的宽度
			WIDTH: 593,
			//canvas的高度
			HEIGHT: 386,
			//是否正在显示发送成功视图
			showSentOkView: false,
			//冲杯顺序索引
			indexLeftStep: -1,
			//是否支持canvas
			iSupportsCanvas: !! document.createElement('canvas').getContext,
			//iSupportsCanvas: false,
			//杯子缩放比率
			cupRatio: 0.7
		};

		//加载所有图片
		for(var i = 0; i < cappuccino.data.draw.length; i++) {
			pictures_a[i] = new Image();

			pictures_a[i].src = cappuccino.data.draw[i].placeholder;
			pictures_a[i].onload = cappuccino.imageLoaded;
			pictures_b[i] = new Image();
			pictures_b[i].src = cappuccino.data.draw[i].realImg;
			pictures_b[i].onload = cappuccino.imageLoaded;
			pictures_size[i] = new Array(pictures_a[i].width, pictures_a[i].height);
			jQuery('#loadingImgBox').append(pictures_a[i]);
			jQuery('#loadingImgBox').append(pictures_b[i]);
			if (i == 9){
				for (var j = 0; j < 4; j++) {
						textIcon_a[j] = new Image();
						textIcon_a[j].src = cappuccino.data.draw[i].subIcon[j].placeholder;
						textIcon_b[j] = new Image();
						textIcon_b[j].src = cappuccino.data.draw[i].subIcon[j].realImg;
						jQuery('#loadingImgBox').append(textIcon_a[j]);
						jQuery('#loadingImgBox').append(textIcon_b[j]);
					};	
			}
		}

		if(cappuccino.properties.iSupportsCanvas) {
			//html4版本
			canvas = document.getElementById("drawArea-canvas");
			stage = new createjs.Stage(canvas);
			stage.enableMouseOver();
			stage.x = stage.regX = this.properties.WIDTH / 2;
			stage.y = stage.regY = this.properties.HEIGHT / 2;
			var bitmap_cup = new createjs.Bitmap(this.properties.cupImg);
			bitmap_cup.name = "bg_cup";
			bitmap_cup.x = 20;
			bitmap_cup.y = -70;
			stage.addChild(bitmap_cup);
			//createjs.Ticker.setFPS(32);
			createjs.Ticker.addListener(stage);
		} else {
			//html5版本
			$("#drawArea-noCanvas").show();
			$("#drawArea-noCanvas").html("<div id=\"html4-cup\"></div>");
			$("#html4-cup").html("<div class=\"cup\" ><img src=\"" + this.properties.cupImg + "\"></div><div id=\"realImgHtml4\"></div><div id=\"xuXIanHtml4\"></div><div id=\"realTextHtml4\"></div><div id=\"xuXIanTextHtml4\"></div>");
		}
	},

	data: {
		start: {
			btn_postion: [{
				x: 59,
				y: 226
			}, {
				x: 59,
				y: 267
			}, {
				x: 59,
				y: 267
			}],
			logo_postion: {
				x: 19,
				y: 21
			}
		},
		step: {
			logo_postion: {
				x: 579,
				y: 21
			},
			cup: [{
				title: "准备咖啡杯",
				cupImg: "images/cup/0.png",
				postion: {
					x: 202,
					y: 61
				}
			}, {
				frame: 3,
				nameIndex: "images/cup/1",
				title: "撒入咖啡粉",
				cupImg: "images/cup/1.png",
				postion: {
					x: 202,
					y: 55
				}
			}, {
				frame: 3,
				nameIndex: "images/cup/2",
				title: "倒入热水",
				cupImg: "images/cup/2.png",
				postion: {
					x: 202,
					y: 55
				}
			}, {
				title: "用心搅拌",
				cupImg: "images/cup/3.png",
				postion: {
					x: 202,
					y: 54
				}
			}, {
				frame: 3,
				nameIndex: "images/cup/4",
				title: "撒出你的心意",
				cupImg: "images/cup/4.png",
				postion: {
					x: 202,
					y: 0
				}
			}]
		},
		draw: [{
			placeholder: "images/draw/1-a.png",
			realImg: "images/draw/1-b.png",
			x: 154,
			y: 30
		}, {
			placeholder: "images/draw/2-a.png",
			realImg: "images/draw/2-b.png",
			x: 151 + 43,
			y: 78 - 56
		}, {
			placeholder: "images/draw/3-a.png",
			realImg: "images/draw/3-b.png",
			x: 91 + 43,
			y: 76 - 56
		}, {
			placeholder: "images/draw/4-a.png",
			realImg: "images/draw/4-b.png",
			x: 57 + 43,
			y: 84 - 56
		}, {
			placeholder: "images/draw/5-a.png",
			realImg: "images/draw/5-b.png",
			x: 0 + 43,
			y: 77 - 56
		}, {
			placeholder: "images/draw/6-a.png",
			realImg: "images/draw/6-b.png",
			x: 0 + 43,
			y: 67 - 56
		}, {
			placeholder: "images/draw/7-a.png",
			realImg: "images/draw/7-b.png",
			x: 92 + 43,
			y: 64 - 56
		}, {
			placeholder: "images/draw/8-a.png",
			realImg: "images/draw/8-b.png",
			x: 106 + 43,
			y: 100 - 56
		}, {
			placeholder: "images/draw/9-a.png",
			realImg: "images/draw/9-b.png",
			x: 89 + 43,
			y: 71 - 56
		}, {
			placeholder: "images/draw/5-a.png",
			realImg: "images/draw/5-b.png",
			x: 130,
			y: 140,
			subIcon: [{
				placeholder: "images/draw/howareu-a.png",
				realImg: "images/draw/howareu-b.png",
				x: 84 + 43,
				y: 186 - 56
			}, {
				placeholder: "images/draw/iluvu-a.png",
				realImg: "images/draw/iluvu-b.png",
				x: 76 + 43,
				y: 196 - 56
			}, {
				placeholder: "images/draw/thatyear-a.png",
				realImg: "images/draw/thatyear-b.png",
				x: 90 + 43,
				y: 220 - 56
			}, {
				placeholder: "images/draw/ohDear-a.png",
				realImg: "images/draw/ohDear-b.png",
				x: 91 + 43,
				y: 222 - 56
			}]
		}, {
			placeholder: "images/draw/11-a.png",
			realImg: "images/draw/11-b.png",
			x: 91 + 43,
			y: -10 - 56
		}]
	},
	//图案素材加载完毕
	imageLoaded: function() {
		imageCount++;
		if(imageCount >= pictures_a.length + pictures_b.length) {

			if(cappuccino.properties.iSupportsCanvas) {
				cappuccino.createBitMaps();
			} else {

			}
		}
	},
	//跳转场景
	goToPage: function(url) {
		if(!url) url = "start-holder";
		switch(url) {
		case "start-holder":
			//开始
			cappuccino.showSartPage(0);
			break;
		case "start-rule":
			//活动规则
			cappuccino.showSartPage(1);
			break;
		case "start-lawer":
			//声明条款
			cappuccino.showSartPage(2);
			break;
		case "step-0":
			//准备咖啡杯
			cappuccino.leftStep(0);
			break;
		case "step-1":
			//撒入咖啡粉
			cappuccino.leftStep(1);
			break;
		case "step-2":
			//倒入热水
			cappuccino.leftStep(2);
			break;
		case "step-3":
			//用心搅拌
			cappuccino.leftStep(3);
			break;
		case "step-4":
			//撒出你的心意
			cappuccino.leftStep(4);
			break;
		case "saysome":
			//@你的好友
			cappuccino.showSaySomeThingView();
			break;
		case "sent-ok":
			//发布成功
			cappuccino.sentOK();
			break;
		}

	},
	//进入制作咖啡前的几个页面切换
	showSartPage: function(index) {
		if(!index) index = 0;
		this.properties.indexLeftStep = -1;
		//显示开始场景
		$("#loading").hide();
		$("#main").show();
		$("#startPage").show();
		$("#appArea").hide();
		$("#view-submitOk").hide();
		//显示相应的内容
		for(var i = 0; i < $("#slogn .item").length; i++) {
			if(i == index) {
				$("#slogn .item").eq(i).show();
			} else {
				$("#slogn .item").eq(i).hide();
			}
		};
		$("#descript-rule div").getNiceScroll().hide();
		$("#descript-lawer div").getNiceScroll().hide();
		if(index == 1) {
			$("#descript-rule div").niceScroll({
				cursorborder: "",
				cursorcolor: "#FFF",
				cursoropacitymin: 1,
				cursorwidth: 7
			});
			$("#descript-rule div").getNiceScroll().show();
		} else if(index == 2) {
			//$("#descript-rule div").getNiceScroll().resize();
			$("#descript-lawer div").niceScroll({
				cursorborder: "",
				cursorcolor: "#FFF",
				cursoropacitymin: 1,
				cursorwidth: 7
			});
			$("#descript-lawer div").getNiceScroll().show();
		}
		//移动logo
		$("#logo").removeClass("small");
		//移动开始按钮
		$("#btn-start").stop().animate({
			left: cappuccino.data.start.btn_postion[index].x,
			top: cappuccino.data.start.btn_postion[index].y
		});



		//$("#descript-lawer div").niceScroll();
	},
	//显示步骤
	leftStep: function(index) {
		if(!index) index = 0;
		
		if(this.properties.indexLeftStep + 1 != index) {
			alert("请按顺序点击图标");
			return false;
		}
		
		this.properties.indexLeftStep = index;
		//显示主场景
		$("#loading").hide();
		$("#main").show();
		$("#startPage").hide();
		$("#appArea").show();
		$("#view-submitAnimate").hide();
		$("#view-submitOk").hide();
		$("#status").val("");
		$("#input_friend").val("");

		$("#descript-rule div").getNiceScroll().hide();
		$("#descript-lawer div").getNiceScroll().hide();
		$("#view-saySome").hide();

		if(index < 4) {
			$("#leftControl").show();
			$("#canvasArea").hide();
		} 
		//移动logo
		$("#logo").addClass("small");
		if(cappuccino.data.step.cup[index].frame) {
			(function(total) {
				var i = 0;
				var TimerID = setInterval(function() {
					if(i < total) {
						var src = cappuccino.data.step.cup[index].nameIndex + '-' + i + '.png';
						$("#cupAreaStep").html("<img src=\"" + src + "\"/>").css({
							"left": cappuccino.data.step.cup[index].postion.x,
							"top": cappuccino.data.step.cup[index].postion.y
						});
						i++;
					} else {
						clearInterval(TimerID);
						if (index == 4) {

							$("#rightControl").show();
							$("#leftControl").hide();
							$("#canvasArea").show();
							cappuccino.properties.indexLeftStep = -1;

							cappuccino.properties.iChooseIcon = false;
							cappuccino.properties.iChooseTextIcon = false;
							$("#submitCanvas").hide();
							if(cappuccino.properties.iSupportsCanvas) {
								createjs.Tween.get(stage).to({
									scaleX: 1,
									scaleY: 1,
									x: cappuccino.properties.WIDTH / 2
								}, 500, createjs.Ease.linear).call(function() {
									$("#rightControl").show();
								});
							} else {
								$("#html4-cup").css({
									width: "513px",
									top: "-71px",
									left: "20px"
								});
								$("#realImgHtml4").html("");
								$("#realTextHtml4").html("");
								$("#rightControl").show();
							}

						};
					}
				}, 100);
			})(cappuccino.data.step.cup[index].frame);
		} else {
			$("#cupAreaStep").html("<img src=\"" + cappuccino.data.step.cup[index].cupImg + "\"/>").css({
				"left": cappuccino.data.step.cup[index].postion.x,
				"top": cappuccino.data.step.cup[index].postion.y
			});
		}
	},
	//选择图案
	//index 图案索引
	//type 鼠标动作类型 -1:鼠标离开,0:鼠标划上，1:鼠标点击
	chooseIcon: function(index, type) {
		if (index != 9){
			if(cappuccino.properties.iSupportsCanvas) {
				this.canvasDraw(index, type);
			} else {
				(function(index, type) {
					if(type == 1) {
						//console.log(pictures_b[index]);
						$("#realImgHtml4").css({
							top: (cappuccino.data.draw[index].y + 70) + 'px',
							left: (cappuccino.data.draw[index].x - 20) + 'px'
						}).html("<img src=\"" + cappuccino.data.draw[index].realImg + "\" >");

					} else if(type == 0) {
						$("#xuXIanHtml4").css({
							top: (cappuccino.data.draw[index].y + 70) + 'px',
							left: (cappuccino.data.draw[index].x - 20) + 'px'
						}).html("<img src=\"" + cappuccino.data.draw[index].placeholder + "\">");

					} else {
						$("#xuXIanHtml4").html("");
					}
				})(index, type);
			}
			if(type == 1) {
				(function(){
					if (!cappuccino.properties.iChooseIcon && !cappuccino.properties.iChooseTextIcon) {
						$("#timeForText").fadeIn();
						/*
						setTimeout( function() {
							$("#timeForText").fadeOut();
						}, 1000); 
						*/
					}
				})();
				this.properties.iChooseIcon = true;
				this.properties.indexIcon = index;
				$("#submitCanvas").show();
			}
		}
	},
	//选择文字图案
	chooseTextIcon :  function(index, type) {
		if(cappuccino.properties.iSupportsCanvas) {
			this.canvasDraw(index, type ,"text");
		} 
		if(type == 1) {

				(function(index, type) {
					if(type == 1) {
						//console.log(pictures_b[index]);
						$("#realTextHtml4").css({
							top: (cappuccino.data.draw[9].subIcon[index].y + 70) + 'px',
							left: (cappuccino.data.draw[9].subIcon[index].x - 20) + 'px'
						}).html("<img src=\"" + cappuccino.data.draw[9].subIcon[index].realImg + "\" >");

					} else if(type == 0) {
						$("#xuXIanTextHtml4").css({
							top: (cappuccino.data.draw[9].subIcon[index].y + 70) + 'px',
							left: (cappuccino.data.draw[9].subIcon[index].x - 20) + 'px'
						}).html("<img src=\"" + cappuccino.data.draw[9].subIcon[index].placeholder + "\">");

					} else {
						$("#xuXIanTextHtml4").html("");
					}
				})(index, type);
			this.properties.iChooseTextIcon = true;
			this.properties.indexTextIcon = index;
			$("#submitCanvas").show();
		}
	},
	//@好友，说出你的心意
	showSaySomeThingView: function() {
		$("#loading").hide();
		$("#main").show();
		$("#appArea").show();
		$("#startPage").hide();
		$("#leftControl").hide();
		$("#view-saySome").show();
		$("#input_friend").focus();
		//移动logo
		$("#logo").addClass("small");
		//cappuccino.showFriend(json_atUser);
		//cappuccino.properties.iChooseIcon = cappuccino.properties.iChooseIcon ? cappuccino.properties.iChooseIcon : 5;
		cappuccino.createImg();
	},
	//重新选择图案
	reDraw: function() {
		if(cappuccino.properties.iSupportsCanvas) {
			this.canvasReset();
		} else {
			$("#realImgHtml4").html("");
			$("#xuXIanHtml4").html("");
			$("#realTextHtml4").html("");
			$("#xuXIanTextHtml4").html("");
		}
		this.properties.indexIcon = 0;
		$("#submitCanvas").hide();
	},
	//------------------------------------------------------下面是canvas方法  -----------------------
	//在canvas上画画
	//index 图案索引
	//type 鼠标动作类型 -1:鼠标离开,0:鼠标划上，1:鼠标点击
	canvasDraw: function(index, type , controlText) {
		var isText = controlText? controlText: "index";
		var bitmap_hover, bitmap_b, name_a, name_b,_tmpIndex;
		name_a = isText + index + "-s";
		name_b = isText + index + "-r";
		if(stage.getChildByName(name_a)) {
			bitmap_hover = stage.getChildByName(name_a);
			bitmap_b = stage.getChildByName(name_b);
			if(type == 1) {
				bitmap_hover.alpha = 0;
				bitmap_b.alpha = 1;

				//createjs.Tween.get(bitmap_b).to({alpha:1}, 500);
				//console.log(isText);
				if (isText == "index"){
					_tmpIndex = this.properties.indexIcon;
				}
				else{
					_tmpIndex = this.properties.indexTextIcon;
				}

				if(_tmpIndex != index) {
					stage.getChildByName(isText + _tmpIndex + "-r").alpha = 0;
				}
			} else if(type == 0) {
				bitmap_hover.alpha = 1;
				//bitmap_b.alpha = 0;
			} else {
				bitmap_hover.alpha = 0;
			}
		}

	},
	//创建bitMaps
	createBitMaps: function() {
		var bitmap_a, bitmap_b, img_a, name_a, img_b, name_b;
		for(var i = 0; i < pictures_b.length; i++) {
			img_b = pictures_b[i];
			name_b = "index" + i + "-r";
			if(!stage.getChildByName(name_b)) {
				bitmap_b = new createjs.Bitmap(img_b);
				bitmap_b.name = name_b;
				bitmap_b.x = cappuccino.data.draw[i].x;
				bitmap_b.y = cappuccino.data.draw[i].y;
				bitmap_b.alpha = 0;
				//bitmap_b.cursor = "pointer";
				//stage.removeAllChildren();
				stage.addChild(bitmap_b);
				// wrapper function to provide scope for the event handlers:
			}
		}
		for(var j = 0; j < pictures_a.length; j++) {
			img_a = pictures_a[j];
			name_a = "index" + j + "-s";
			if(!stage.getChildByName(name_a)) {
				bitmap_a = new createjs.Bitmap(img_a);
				bitmap_a.name = name_a;
				bitmap_a.x = cappuccino.data.draw[j].x;
				bitmap_a.y = cappuccino.data.draw[j].y;
				bitmap_a.alpha = 0;
				//stage.removeAllChildren();
				stage.addChild(bitmap_a);
			}
		}
		for(var b = 0; b < textIcon_b.length; b++) {
			img_b = textIcon_b[b];
			name_b = "text" + b + "-r";
			if(!stage.getChildByName(name_b)) {
				bitmap_b = new createjs.Bitmap(img_b);
				bitmap_b.name = name_b;
				bitmap_b.x = cappuccino.data.draw[9].subIcon[b].x;
				bitmap_b.y = cappuccino.data.draw[9].subIcon[b].y;
				bitmap_b.alpha = 0;
				//bitmap_b.cursor = "pointer";
				//stage.removeAllChildren();
				stage.addChild(bitmap_b);
				// wrapper function to provide scope for the event handlers:
			}
		}
		for(var a = 0; a < textIcon_a.length; a++) {
			img_a = textIcon_a[a];
			name_a = "text" + a + "-s";
			if(!stage.getChildByName(name_a)) {
				bitmap_a = new createjs.Bitmap(img_a);
				bitmap_a.name = name_a;
				bitmap_a.x = cappuccino.data.draw[9].subIcon[a].x;
				bitmap_a.y = cappuccino.data.draw[9].subIcon[a].y;
				bitmap_a.alpha = 0;
				//stage.removeAllChildren();
				stage.addChild(bitmap_a);
			}
		}
	},
	//重新选择图案
	canvasReset: function() {
		stage.getChildByName("index" + this.properties.indexIcon + "-r").alpha = 0;
		stage.getChildByName("text" + this.properties.indexTextIcon + "-r").alpha = 0;
		this.properties.iChooseIcon = false;
		this.properties.iChooseTextIcon = false;

	},
	//绘制完成，生成图案
	createImg: function() {
		if(!this.properties.iChooseIcon) {
			alert("请选择一个图案");
			return false;
		}

		$("#rightControl").hide();
		if(cappuccino.properties.iSupportsCanvas) {
			//canvas版本
			createjs.Tween.get(stage).to({
				scaleX: cappuccino.properties.cupRatio,
				scaleY: cappuccino.properties.cupRatio,
				x: 197
			}, 500, createjs.Ease.linear).call(function() {
				$("#view-saySome").show();
				$("#input_friend").focus();
			});
		} else {
			//html4版本
			$("#html4-cup").css({
				width: "360px",
				top: "9px",
				left: "0px"
			});
			$("#realImgHtml4 img").css({
				width: $("#realImgHtml4 img").width() * cappuccino.properties.cupRatio + "px"
			});
			$("#realImgHtml4").css({
				top: (cappuccino.data.draw[this.properties.indexIcon].y + 70) * cappuccino.properties.cupRatio + 'px',
				left: (cappuccino.data.draw[this.properties.indexIcon].x - 20) * cappuccino.properties.cupRatio + 'px'
			});
			$("#realTextHtml4 img").css({
				width: $("#realTextHtml4 img").width() * cappuccino.properties.cupRatio + "px"
			});
			$("#realTextHtml4").css({
				top: (cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].y + 70) * cappuccino.properties.cupRatio + 'px',
				left: (cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].x - 20) * cappuccino.properties.cupRatio + 'px'
			});
			//$("#realImgHtml4").css();
			$("#view-saySome").show();
			$("#input_friend").focus();
		}
	},
	//返回制图界面
	backToDraw: function() {

		$("#view-saySome").hide();
		if(cappuccino.properties.iSupportsCanvas) {
			createjs.Tween.get(stage).to({
				scaleX: 1,
				scaleY: 1,
				x: this.properties.WIDTH / 2
			}, 500, createjs.Ease.linear).call(function() {
				$("#rightControl").show();
			});
		} else {
			$("#html4-cup").css({
				width: "513px",
				top: "-71px",
				left: "20px"
			});
			$("#realImgHtml4 img").css({
				width: $("#realImgHtml4 img").width() / cappuccino.properties.cupRatio + "px"
			});
			$("#realImgHtml4").css({
				top: (cappuccino.data.draw[this.properties.indexIcon].y + 70) + 'px',
				left: (cappuccino.data.draw[this.properties.indexIcon].x - 20) + 'px'
			});
			$("#realTextHtml4 img").css({
				width: $("#realTextHtml4 img").width() / cappuccino.properties.cupRatio + "px"
			});
			$("#realTextHtml4").css({
				top: (cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].y + 70) + 'px',
				left: (cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].x - 20) + 'px'
			});
			$("#rightControl").show();
		}
	},
	//显示好友
	//data为新浪返回数据
	showFriend: function(data) {
		//$("#popFriend")
		$("#popFriend").html("");
		for(var i = 0; i < data.length; i++) {
			$("#popFriend").append("<a href=\"\">" + data[i].nickname + "</a>");
			if(i >= 5) {
				break;
			}
		};
		$("#popFriend").show();
	},
	//发送成功
	sentOK: function() {
		this.properties.showSentOkView = true;
		//显示主场景
		$("#loading").hide();
		$("#main").show();
		$("#startPage").hide();
		$("#appArea").hide();

		$("#logo").hide();
		$("#view-submitOk").hide();
		$("#status").val("");
		(function() {
			var $animate = $('.view-submitAnimate');
			$animate.show().sprite({
				fps: 1,
				no_of_frames: 8,
				on_last_frame: function(obj) {
					if(cappuccino.properties.showSentOkView) {
						cappuccino.properties.showSentOkView = false;
						$("#view-submitOk").show();
						//移动logo
						$("#logo").show().addClass("small");
						obj.spStop(); // stop the animation on the last frame
						$animate.hide();
					}
				}
			}).fps(1).spStart(); //牵手动画
		})();


		$("#submitCanvas").hide();
		if(cappuccino.properties.iSupportsCanvas) {
			//canvas版本
			stage.getChildByName("index" + this.properties.indexIcon + "-r").alpha = 0;
			stage.getChildByName("text" + this.properties.indexTextIcon + "-r").alpha = 0;
			createjs.Tween.get(stage).to({
				scaleX: 1,
				scaleY: 1,
				x: this.properties.WIDTH / 2
			}, 500, createjs.Ease.linear);
		} else {
			//html4版本
			$("#html4-cup").css({
				width: "513px",
				top: "-71px",
				left: "20px"
			});
			$("#realImgHtml4").html("");
		}
	},
	//再发一张
	createNew: function() {
		this.goToPage("step-0");
	}
}


$(document).ready(function() {
	$('video').mediaelementplayer({
		success: function(media, node, player) {
			var events = ['loadstart', 'play','pause', 'ended'];
			
			for (var i=0, il=events.length; i<il; i++) {
				
				var eventName = events[i];
				
				media.addEventListener(events[i], function(e) {
					//console.log(e.type);
					//SUDA.uaTrack("ebusiness_apps","2240206400:92069987:other1_video::::"+e.type);
					//$('#output').append( $('<div>' + e.type + '</div>') );
				});
				
			}
		}
	});
	cappuccino.init();
	$('#loading').sprite({
		fps: 2,
		no_of_frames: 4
	}); //loading动画
	//预加载图片
	var $container = jQuery('#loadingImgBox');
	$container.imagesLoaded(function() {
		cappuccino.goToPage(cappuccino.defaultPage);
	});
	$("#logo").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("start-holder");
		return false;
	}); //点击活动规则
	$("#rule").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("start-rule");
		return false;
	}); //点击活动规则
	$("#lawer").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("start-lawer");
		return false;
	}); //点击声明条款
	$("#btn-start").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("step-0");
		return false;
	}); //点击开始制作
	$("#step_1").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("step-1");
		return false;
	}); //撒入咖啡粉
	$("#step_2").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("step-2");
		return false;
	}); //倒入热水
	$("#step_3").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("step-3");
		return false;
	}); //用心搅拌
	$("#step_4").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.goToPage("step-4");
		return false;
	}); 

	//选择文字
	$("#drawWord span").click(function(event) {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.chooseTextIcon($(this).index("#drawWord span"), 1 ,'text');
		event.stopPropagation();
		return false;
	});
	//选择图案
	$("#drawWord span").hover(function(event) {
		cappuccino.chooseTextIcon($(this).index("#drawWord span"), 0);
		event.stopPropagation();
		return false;
	}, function(event) {
		cappuccino.chooseTextIcon($(this).index("#drawWord span"), -1);
		event.stopPropagation();
		return false;
	});
	
	//撒出你的心意
	$("#rightControl li a").click(function(event) {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		if ($(this).index("#rightControl li a") != 9) {
			cappuccino.chooseIcon($(this).index("#rightControl li a"), 1);
		}
		return false;
	});

	//选择图案
	$("#rightControl li a").hover(function() {
		if ($(this).index("#rightControl li a") != 9) {
			cappuccino.chooseIcon($(this).index("#rightControl li a"), 0);
		}
		else{
			
			$("#timeForText").fadeOut();
		}
		return false;
	}, function() {
		if ($(this).index("#rightControl li a") != 9) {
			cappuccino.chooseIcon($(this).index("#rightControl li a"), -1);
		}
		return false;
	});

	//重新选择图案
	$("#resetCanvas").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.reDraw();
		return false;
	});
	//绘制完成
	$("#submitCanvas").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.createImg();
		return false;
	});
	//返回绘制图案
	$("#backToDraw").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.backToDraw();
		return false;
	});
	//全部发布
	$("#submitWord").click(function() {
		cappuccino.goToPage("sent-ok");
		return false;
		if ($("#input_friend").val().length == 0 || $("#status").val().length == 0) {
			alert("请@一位好友，并说出你的心意");
			return false;
		};
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		//url,[data],[callback],[type]
		$("#submitWord").hide();
		/*
		$.post("http://quechaokabuqinuo.sinaapp.com/api.php", {
			text: "hello"
		}, function(data) {
			if(data.error) {
				$("#submitWord").show();
				alert("网络错误！");
			} else {
				$("#submitWord").show();
				cappuccino.goToPage("sent-ok");
			}
		}, "json");
		*/
		/*
				$("#submitWord").show();
				cappuccino.goToPage("sent-ok");
		*/
		$.getJSON("http://quechaokabuqinuo.sinaapp.com/gd.php", {
			atuser: encodeURIComponent($("#input_friend").val()),
			text: encodeURIComponent($("#status").val()),
			videourl: "http://t.cn/zY1YvKN",
			postion: cappuccino.properties.iChooseIcon ? cappuccino.data.draw[cappuccino.properties.indexIcon].x + '|' + cappuccino.data.draw[cappuccino.properties.indexIcon].y : '',
			waterimg: cappuccino.properties.iChooseIcon ? cappuccino.data.draw[cappuccino.properties.indexIcon].realImg : '',
			postion2: cappuccino.properties.iChooseTextIcon ? cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].x + '|' + cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].y : '',
			waterimg2: cappuccino.properties.iChooseTextIcon ? cappuccino.data.draw[9].subIcon[cappuccino.properties.indexTextIcon].realImg : ''

		}, function(data) {
			if(data.error_code) {
				$("#submitWord").show();
				if (data.error_code == 20012){
					alert("输入文字太长了！");
					$("#status").focus();
				}
				else if(data.error_code == 21301){
					alert("认证失败，请刷新页面重试。");
				}
				else{
					alert("错误代码:" + data.error_code);
				}
			} else {
				$("#submitWord").show();
				cappuccino.goToPage("sent-ok");
			}
		});
		return false;
	});
	//选择好友
	$("#popFriend a").live('click', function() {
		//console.log($(this).html());
		$("#input_friend").val($(this).html());
		//$("#popFriend").hide();
		$("#popFriend").html("").hide();
		$("#status").focus();
		return false;
	});
	$("#popFriend").hover(function(){

	},function(){
		$("#popFriend").html("").hide();
	});
	//再发一张
	$("#createNew").click(function() {
		//SUDA.uaTrack("ebusiness_apps",$(this).attr("//suda-uatrack"));
		cappuccino.createNew();
		//window.location.reload();
		return false;
	});
});

//计算可输入微博内容的字数

function countChar(textareaName, spanName) {
	//$("#" + spanName).html(130 - $(".status-head").html().length - $("#" + textareaName).val().length);
	document.getElementById(spanName).innerHTML = 80 -document.getElementById(textareaName).value.length;
	var length = document.getElementById(textareaName).value.length;
	if (length > 80){
		$("#status").val($("#status").val().substring(0,80));
	}
}

function searchUser(){
	var now = $("#input_friend").val();
		$.getJSON("http://quechaokabuqinuo.sinaapp.com/app/api.php", {
			action: "search_at_users",
			q: now
		}, function(data) {
			if(data.error_code) {
				//alert("错误代码:" + data.error_code + data.error);
			} else {
				if (data.length > 0 )
				{
					cappuccino.showFriend(data);
				}
				else{
					$("#popFriend").html("").hide();
				}
				return false;
				//console.log(data);
			}
		});
}
