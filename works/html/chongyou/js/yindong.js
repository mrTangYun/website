$(document).ready(function(){

	

	if (photoplay==0) return;
    $("#scene").show(200); 
	

	//第一层动画

	$(".fl_1 .s_photo").each(function(){
        var thistop = $(this).scrollTop()-2000;

		$(this).animate({top:thistop+'px'},27000,function(){
			$(".fl_1 .s_photo").hide(100);
		});
/*		
		$(this).animate({top:'-600px'},20000,function(){
			$(".fl_1 .s_photo").hide(100);
		});
		
*/
	});

	//第二层动画

	$(".fl_2 .s_photo").each(function(){
		$(this).animate({top:'-600px'},25000,function(){
			$(".fl_2 .s_photo").hide(100);
		});
	});

	//第三层动画

	$(".fl_3 .s_photo").each(function(){

		$(this).animate({top:'-600px'},30000,function(){

			$(".fl_3 .s_photo").hide(100);
		});

	});

	//第四层动画

	$(".fl_4 .s_photo").each(function(){

		$(this).animate({top:'-200px'},26000,function(){

			$(".fl_4 .s_photo").hide(100);

		});

	});



	//根据时间显示文字

	var tTimeLine=0;

	var timer=setInterval(function(){

		tTimeLine++;

		switch(tTimeLine){

			case 1:

			   $("#scene .s_text:eq(0)").fadeIn(1000); break;

			case 3:

			   $("#scene .s_text:eq(0)").fadeOut(1000); break;

			case 5:

			   $("#scene .s_text:eq(1)").fadeIn(1000); break;

			case 7:

			   $("#scene .s_text:eq(1)").fadeOut(1000); break;	

			case 9:

			   $("#scene .s_text:eq(2)").fadeIn(1000); break;

			case 11:

			   $("#scene .s_text:eq(2)").fadeOut(1000); break;

			case 13:

			   $("#scene .s_text:eq(3)").fadeIn(1000); break;

			case 15:

			   $("#scene .s_text:eq(3)").fadeOut(1000); break;	

			case 17:

			   $("#scene .s_text:eq(4)").fadeIn(1000); break;

			case 19:

			   $("#scene .s_text:eq(4)").fadeOut(1000); break;
			case 21:

			   $("#scene .s_text:eq(5)").fadeIn(1000); break;
			case 23:

			   $("#scene .s_text:eq(5)").fadeOut(1000); break;
			case 25:

			   $("#scene .s_text:eq(6)").fadeIn(1000); break;
			case 27:

			   $("#scene .s_text:eq(6)").fadeOut(1000); break;

			case 29:

			   clearInterval(timer);break;	 

			}

		},800);	

	

});



