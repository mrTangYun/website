var canvas, stage, imageCount = 0,
	indexChoose, update = true,
	pictures_a = new Array(),
	pictures_b = new Array();
var cappuccino = {
	//默认场景
	defaultPage: "",
	init: function() {
		this.properties = {
			//选择图案的索引
			indexIcon: 0,
			//是否选择了图案
			iChooseIcon: false,
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
			iSupportsCanvas: !! document.createElement('canvas').getContext
		}


		//加载所有图片
		for(var i = 0; i < cappuccino.data.draw.length; i++) {
			pictures_a[i] = new Image();
			pictures_a[i].src = cappuccino.data.draw[i].placeholder;
			pictures_a[i].onload = cappuccino.imageLoaded;
			pictures_b[i] = new Image();
			pictures_b[i].src = cappuccino.data.draw[i].realImg;
			pictures_b[i].onload = cappuccino.imageLoaded;
		}

		if(cappuccino.properties.iSupportsCanvas) {
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
		}
	},

	data: {
		start: {
			btn_postion: [{
				x: 132,
				y: 222
			}, {
				x: 69,
				y: 267
			}, {
				x: 69,
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
					x: 225,
					y: 68
				}
			}, {
				title: "撒入咖啡粉",
				cupImg: "images/cup/1.png",
				postion: {
					x: 219,
					y: 65
				}
			}, {
				title: "倒入热水",
				cupImg: "images/cup/2.png",
				postion: {
					x: 215,
					y: 70
				}
			}, {
				title: "用心搅拌",
				cupImg: "images/cup/3.png",
				postion: {
					x: 213,
					y: 70
				}
			}, {
				title: "撒出你的心意",
				cupImg: "images/cup/4.png",
				postion: {
					x: 213,
					y: 70
				}
			}]
		},
		draw: [{
			placeholder: "images/draw/1-a.png",
			realImg: "images/draw/1-b.png",
			x: 130,
			y: 132
		}, {
			placeholder: "images/draw/2-a.png",
			realImg: "images/draw/2-b.png",
			x: 130,
			y: 139
		}, {
			placeholder: "images/draw/3-a.png",
			realImg: "images/draw/3-b.png",
			x: 130,
			y: 110
		}, {
			placeholder: "images/draw/4-a.png",
			realImg: "images/draw/4-b.png",
			x: 130,
			y: 120
		}, {
			placeholder: "images/draw/5-a.png",
			realImg: "images/draw/5-b.png",
			x: 130,
			y: 140
		}, {
			placeholder: "images/draw/6-a.png",
			realImg: "images/draw/6-b.png",
			x: 150,
			y: 80
		}, {
			placeholder: "images/draw/2-a.png",
			realImg: "images/draw/2-b.png",
			x: 130,
			y: 139
		}, {
			placeholder: "images/draw/3-a.png",
			realImg: "images/draw/3-b.png",
			x: 130,
			y: 110
		}, {
			placeholder: "images/draw/4-a.png",
			realImg: "images/draw/4-b.png",
			x: 130,
			y: 120
		}, {
			placeholder: "images/draw/5-a.png",
			realImg: "images/draw/5-b.png",
			x: 130,
			y: 140
		}, {
			placeholder: "images/draw/6-a.png",
			realImg: "images/draw/6-b.png",
			x: 150,
			y: 80
		}]
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
				cursorwidth: 7,
				touchbehavior: true
			});
			$("#descript-rule div").getNiceScroll().show();
		} else if(index == 2) {
			//$("#descript-rule div").getNiceScroll().resize();
			$("#descript-lawer div").niceScroll({
				cursorborder: "",
				cursorcolor: "#FFF",
				cursoropacitymin: 1,
				cursorwidth: 7,
				touchbehavior: true
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

		$("#descript-rule div").getNiceScroll().hide();
		$("#descript-lawer div").getNiceScroll().hide();
		if(index < 4) {
			$("#leftControl").show();
			$("#canvasArea").hide();
			$("#view-saySome").hide();
		} else {
			$("#rightControl").show();
			$("#leftControl").hide();
			$("#canvasArea").show();
			$("#view-saySome").hide();
			this.properties.indexLeftStep = -1;
		}
		//移动logo
		$("#logo").addClass("small");
		$("#cupAreaStep").html("<img src=\"" + cappuccino.data.step.cup[index].cupImg + "\"/>").css({
			"left": cappuccino.data.step.cup[index].postion.x,
			"top": cappuccino.data.step.cup[index].postion.y
		});
	},
	//选择图案
	//index 图案索引
	//type 鼠标动作类型 -1:鼠标离开,0:鼠标划上，1:鼠标点击
	chooseIcon: function(index, type) {
		if(cappuccino.properties.iSupportsCanvas) {
			this.canvasDraw(index, type);
		}
		if(type == 1) {
			this.properties.iChooseIcon = true;
			this.properties.indexIcon = index;
			$("#submitCanvas").show();
		}
	},
	//重新选择图案
	reDraw: function() {
		if(cappuccino.properties.iSupportsCanvas) {
			this.canvasReset();
		}
		this.properties.indexIcon = 0;
		$("#submitCanvas").hide();
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
				scaleX: .7,
				scaleY: .7,
				x: 197
			}, 500, createjs.Ease.linear).call(function() {
				$("#view-saySome").show();
				$("#status").focus();
			});
		}
		else{
			//html4版本
			$("#view-saySome").show();
			$("#status").focus();
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
		}
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
				},
			}).fps(1).spStart(); //牵手动画
		})();


		$("#submitCanvas").hide();
		stage.getChildByName("index" + this.properties.indexIcon + "-r").alpha = 0;
		if(cappuccino.properties.iSupportsCanvas) {
			//canvas版本
			createjs.Tween.get(stage).to({
				scaleX: 1,
				scaleY: 1,
				x: this.properties.WIDTH / 2
			}, 500, createjs.Ease.linear);
		}
		else{
			//html4版本
		}
	},
	//再发一张
	createNew: function() {
		this.goToPage("step-0");
	},
	//------------------------------------------------------下面是canvas方法  -----------------------
	//在canvas上画画
	//index 图案索引
	//type 鼠标动作类型 -1:鼠标离开,0:鼠标划上，1:鼠标点击
	canvasDraw: function(index, type) {
		var bitmap_hover, bitmap_b, name_a, name_b;
		name_a = "index" + index + "-s";
		name_b = "index" + index + "-r";
		if(stage.getChildByName(name_a)) {
			bitmap_hover = stage.getChildByName(name_a);
			bitmap_b = stage.getChildByName(name_b);
			if(type == 1) {
				bitmap_hover.alpha = 0;
				bitmap_b.alpha = 1;

				//createjs.Tween.get(bitmap_b).to({alpha:1}, 500);
				if(this.properties.indexIcon != index) {
					stage.getChildByName("index" + this.properties.indexIcon + "-r").alpha = 0;
				}
			} else if(type == 0) {
				bitmap_hover.alpha = 1;
				//bitmap_b.alpha = 0;
			} else {
				bitmap_hover.alpha = 0;
			}
		}

	},
	//图案素材加载完毕
	imageLoaded: function() {
		imageCount++;
		if(imageCount >= pictures_a.length + pictures_b.length) {
			cappuccino.createBitMaps();
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
	},
	//重新选择图案
	canvasReset: function() {
		stage.getChildByName("index" + this.properties.indexIcon + "-r").alpha = 0;
		this.properties.iChooseIcon = false;
	}
}


$(document).ready(function() {
	cappuccino.init();
	$('#loading').sprite({
		fps: 2,
		no_of_frames: 4
	}); //loading动画
	$("#logo").click(function() {
		cappuccino.goToPage("start-holder");
		return false;
	}); //点击活动规则
	$("#rule").click(function() {
		cappuccino.goToPage("start-rule");
		return false;
	}); //点击活动规则
	$("#lawer").click(function() {
		cappuccino.goToPage("start-lawer");
		return false;
	}); //点击声明条款
	$("#btn-start").click(function() {
		cappuccino.goToPage("step-0");
		return false;
	}); //点击开始制作
	$("#step_1").click(function() {
		cappuccino.goToPage("step-1");
		return false;
	}); //撒入咖啡粉
	$("#step_2").click(function() {
		cappuccino.goToPage("step-2");
		return false;
	}); //倒入热水
	$("#step_3").click(function() {
		cappuccino.goToPage("step-3");
		return false;
	}); //用心搅拌
	$("#step_4").click(function() {
		cappuccino.goToPage("step-4");
		return false;
	}); //撒出你的心意
	$("#rightControl li a").click(function() {
		cappuccino.chooseIcon($(this).index("#rightControl li a"), 1);
		return false;
	});
	//选择图案
	$("#rightControl li a").hover(function() {
		cappuccino.chooseIcon($(this).index("#rightControl li a"), 0);
		return false;
	}, function() {
		cappuccino.chooseIcon($(this).index("#rightControl li a"), -1);
	});
	//重新选择图案
	$("#resetCanvas").click(function() {
		cappuccino.reDraw();
		return false;
	});
	//绘制完成
	$("#submitCanvas").click(function() {
		cappuccino.createImg();
		return false;
	});
	//返回绘制图案
	$("#backToDraw").click(function() {
		cappuccino.backToDraw();
		return false;
	});
	//全部发布
	$("#submitWord").click(function() {
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
		$("#submitWord").show();
		cappuccino.goToPage("sent-ok");
		return false;
	});

	//再发一张
	$("#createNew").click(function() {
		cappuccino.createNew();
		return false;
	});

	//预加载图片
	var $container = jQuery('#loadingImgBox');
	$container.imagesLoaded(function() {
		cappuccino.goToPage(cappuccino.defaultPage);
	});

});

//计算可输入微博内容的字数

function countChar(textareaName, spanName) {
	$("#" + spanName).html(130 - $(".status-head").html().length - $("#" + textareaName).val().length);
	//document.getElementById(spanName).innerHTML = 130 - $(".status-head").html().length-document.getElementById(textareaName).value.length;
}

var json_atUser = [{
	"uid": 1962310741,
	"nickname": "微相册",
	"remark": ""
}, {
	"uid": 1870632073,
	"nickname": "微博API",
	"remark": ""
}, {
	"uid": 1454657695,
	"nickname": "无谓思索",
	"remark": ""
}, {
	"uid": 1642909335,
	"nickname": "微博小秘书",
	"remark": ""
}, {
	"uid": 1898303727,
	"nickname": "企业微博",
	"remark": ""
}, {
	"uid": 1730365875,
	"nickname": "企业微博助理",
	"remark": ""
}, {
	"uid": 1941321955,
	"nickname": "echowc7",
	"remark": ""
}, {
	"uid": 2463917682,
	"nickname": "sina王木木木木木",
	"remark": ""
}];