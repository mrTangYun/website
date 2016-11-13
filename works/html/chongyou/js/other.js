	$(document).ready(function(){

		//背景音乐

		/*$(".audiocontrols input").each(function(){
			document.getElementById('myaudio').play()
			
			
			
			
			$(this).click(function(){

				$(this).fadeOut();

				$(this).siblings().fadeIn();	

			});
		});*/
		$(".audiocontrols img").click(function(){
			if($(".audiocontrols img").attr("src") =="images/BTN_03.png"){
				document.getElementById('myaudio').pause();
				$(".audiocontrols img").attr("src","images/BTN_24.png");
				
			}else{
				document.getElementById('myaudio').play();
				$(".audiocontrols img").attr("src","images/BTN_03.png");
			}
			
			});
		//分享

		$(".promise_a").click(function(){
			if($(".promise_a_open").css("display") =="none"){
				$(".promise_a_open").fadeIn(1000);	
			}else{
				$(".promise_a_open").fadeOut(1000);	
			}
			

		});
		$(".promise_a_open a").click(function(){
			$(".promise_a_open").fadeOut(1000);	
			});
		



		

//加载完成22秒后执行跳转	

	 timerinto = setTimeout(function(){

		$(".second").show(500);		

		}, photoplay); 

//加载完成22秒后执行跳转	

	 timerinto = setTimeout(function(){

		$(".footer").show(500);		

		}, heartplay); 

		

	

		

	});

