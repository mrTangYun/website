$(document).ready(function(){	
	var timeJianGe=50;
	//还可以利用queue()方法简明自如的实现
	var _slideFun=[
		//把要执行的动画依次放入一个数组
		function(){$(".animationDiv").animate({backgroundPosition:"0px 0"},timeJianGe,_takeOne);},
		function(){$(".animationDiv").animate({backgroundPosition:"-695px 0"},timeJianGe,_takeOne);},
		function(){$(".animationDiv").animate({backgroundPosition:"-1268px 0"},timeJianGe,_takeOne);},
		function(){$(".animationDiv").animate({backgroundPosition:"-2052px 0"},timeJianGe,_takeOne);},
		function(){$(".animationDiv").animate({backgroundPosition:"-2736px 0"},timeJianGe,_takeOne);},
		function(){$(".animationDiv").animate({top:'+=290px'},500,function(){
			alert('按序落体运动结束! Yeah!');
		});}
	];
	//将函数数组放入slideList动画队列
	$('#demo').queue('slideList',_slideFun);
	var _takeOne=function(){
		//取出第一个函数,并执行它
		$('#demo').dequeue('slideList');
	};
	//初始执行第一个函数
	_takeOne();
});
