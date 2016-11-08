var untils = {};

if (!window.requestAnimationFrame){
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { return window.setTimeout(callback, 1000/60)});
}

untils.capureMouse = function (element){
	var mouse = {x:0, y:0};
	
	element.addEventListener('mousemove',function(e){
		var x,y;
		if (e.pageX || e.pageY){
			x = e.pageX;
			y = e.pageY;
		}
		else{
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;

	},false);

	return mouse;
}