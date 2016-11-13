var navindex = -1;

$(document).ready(function(){

	setTimeout(function(){ $(".nav").show(500)}, 500);
	

		$(".nav img").each(function(ins){
			
			//if (ins!=0) {$(this).hide();}

			$(this).mouseover(function(){
                 
				$(this).stop(true,true);
				$(this).animate({right:'0px'},300);

			});

			$(this).mouseout(function(){

				var ins = $(this).attr("ins");

				if (ins==navindex){

					$(this).animate({right:'0px'},300);

				}else{

					$(this).animate({right:'-68px'},300);

				}

			});

			

			

			$(this).click(function(){

				

				var ma = $(this); 

				var ins = ma.attr("ins");	

				if (ins!=navindex) {

			     $(".nav img").eq(navindex).animate({right:'-68px'},300);		

				}

				navindex = ins;

				//$(document).attr("title",navindex);



			});

		});



	});	

