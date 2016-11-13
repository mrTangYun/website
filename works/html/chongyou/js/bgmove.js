$(document).ready(function(){

var imgmovefun = function(ostr,movescale,movescaleY){
	var objs = $(ostr).find('div img');
			objs.each(function(index){
				var obj = $(this);
			    
			    var objml = parseInt(obj.attr("mlx"));
				var objmt = parseInt(obj.attr("mlt"));
				if (!(objml)) {
					objml = parseInt(obj.css("margin-left"));
					obj.attr("mlx",objml);
					} 
				if (!(objmt)) {
					objmt = parseInt(obj.css("margin-top"));
					obj.attr("mlt",objmt);
					}	
				
			    obj.css("margin-left", (movescale+objml)+"px");
				obj.css("margin-top", (movescaleY+objmt)+"px");
				
				
				
			});
	
	}


$(document).mousemove(function(ev)
		{
			
			if (bgmenable==0) return;
			var ev=ev||event;
			var curposX=ev.clientX;
			var curposY=ev.clientY;
			
			var winwidth = $(window).width();
			var winheight = $(window).height();
			var movescaleX = 40-Math.round((curposX/winwidth*40));
			var movescaleY = 10-Math.round((curposY/winheight*10));
			
			var movescaleX2 = Math.round( movescaleX/2);
			var movescaleY2 = Math.round( movescaleY/2);
			
			var xhash = window.location.hash;
			
			if (xhash=="#section3") {		
			imgmovefun("#parallax3",-movescaleX2,-movescaleY2);
			imgmovefun("#vidx3",movescaleX,movescaleY);}
			
			if (xhash=="#section4") {
			imgmovefun("#parallax4",-movescaleX2,-movescaleY2);
			imgmovefun("#vidx4",movescaleX,movescaleY);}
			
			//$(document).attr("title","x:"+movescale+"  y:"+ movescaleY);
			
});
	



});

