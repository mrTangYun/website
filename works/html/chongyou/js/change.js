var photoplay=23000;

var heartplay=23000+10000;

var footerplay=1000;

var timerinto;
var testcc = 0;
var navenable = 0;
var bgmenable = 0;
var runpetst = 1;

$(document).ready(function(){

	quickclick();
     
    $(function() {

        $('ul.nav a').bind('click',function(event){
            
            var $anchor = $(this);
            allowwheel = 0;
			
            //$('html, body').stop().animate({
			$('body').animate({
                
                scrollTop: $($anchor.attr('href')).offset().top

            }, 1500,'easeInOutExpo',function(){

				var url=window.location.hash;
                
				quickclick();

				//drawslide(url);

				});
        });

    });

	

	function quickclick(){

	var xhash = window.location.hash; 

    if (xhash!="") {

	photoplay=0;

	heartplay=500;

	footerplay=300;

	$("#scene").hide();

	$(".pet").hide();
     
	
	drawslide(xhash);

	}

		}

	

	function drawslide(url){

                navenable = 1;
				bgmenable=0;
				$(".nav img").each(function(ins){$(this).show(1);});
				
                $(".pet").stop();
				runpetst = 0;
				
				if(url == "#section1")

				{    navindex = 0;
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);	

				    clearTimeout(dogandcaty);
					showheartf();
	                clearTimeout(timerinto);
	                $(".footer").show(500);
                    allowwheel = 1;

					}

				

								//二屏

				if(url == "#section2"){
                     navindex = 1;
					 
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);
					 
					$(".two_bg").animate({opacity:'1'},500,function(){

					$(".two_box .two_box_img").animate({opacity:'1',marginLeft:'-450px'},1000);

					});

					setTimeout(function(){

							$(".two_box #warp").animate({opacity:'1'},1000,function(){allowwheel = 1;});

					}, 1000);
					
					

				}else{
                    
					$(".two_bg").animate({opacity:'0'},10);

					$(".two_box .two_box_img").animate({opacity:'0',marginLeft:'-470px'},10);

					$(".two_box #warp").animate({opacity:'0'},10);

					

				}

				//三屏

				if(url == "#section3"){
					 navindex = 2;
					 allowwheel = 0; 
					 
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);

						$(".three_bg").animate({opacity:'1'},1000,function(){

							$(".three_box .video_img1").animate({opacity:'1',marginLeft:'-720px',marginTop:'-170px',width:'261px'},1000);

							$(".three_box .video_img2").animate({opacity:'1',marginLeft:'-420px',marginTop:'-125px',width:'185px'},1000);

							$(".three_box .video_img3").animate({opacity:'1',marginLeft:'-278px',marginTop:'-400px',width:'308px'},1000);

							$(".three_box .video_img4").animate({opacity:'1',marginLeft:'-372px',marginTop:'155px',width:'331px'},1000);

							$(".three_box .video_img5").animate({opacity:'1',marginLeft:'123px',marginTop:'35px',width:'322px'},1000);

							$(".three_box .video_img6").animate({opacity:'1',marginLeft:'278px',marginTop:'-400px',width:'252px'},1000);

							$(".three_box .video_img7").animate({opacity:'1',marginLeft:'400px',marginTop:'-168px',width:'308px'},1000);

						});

						setTimeout(function(){

							$(".three_box .video_word").animate({opacity:'1'},1000,function(){allowwheel = 1;bgmenable=1;});

						}, 2000);

					}else{
                        
						$(".three_bg").animate({opacity:'0'},10);

						$(".three_box .video_img1").animate({opacity:'0',marginLeft:'-750px',marginTop:'-200px',width:'291px'},10);

						$(".three_box .video_img2").animate({opacity:'0',marginLeft:'-450px',marginTop:'-155px',width:'215px'},10);

						$(".three_box .video_img3").animate({opacity:'0',marginLeft:'-308px',marginTop:'-430px',width:'338px'},10);

						$(".three_box .video_img4").animate({opacity:'0',marginLeft:'-402px',marginTop:'185px',width:'361px'},10);

						$(".three_box .video_img5").animate({opacity:'0',marginLeft:'153px',marginTop:'65px',width:'352px'},10);

						$(".three_box .video_img6").animate({opacity:'0',marginLeft:'308px',marginTop:'-430px',width:'282px'},10);

						$(".three_box .video_img7").animate({opacity:'0',marginLeft:'430px',marginTop:'-198px',width:'338px'},10);

						

						$(".three_box .video_word").animate({opacity:'0'},10);

						

					};

				//四屏

				if(url == "#section4"){
                    navindex = 3;
					allowwheel = 0; 
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);
					$(".four_bg").animate({opacity:'1'},1000,function(){

						$(".four_box .photo_img1").animate({opacity:'1',marginLeft:'-420px',marginTop:'-220px'},1000);

						$(".four_box .photo_img2").animate({opacity:'1',marginLeft:'-250px',marginTop:'-255px'},1000);

						$(".four_box .photo_img3").animate({opacity:'1',marginLeft:'-95px',marginTop:'-306px'},1000);

						$(".four_box .photo_img4").animate({opacity:'1',marginLeft:'70px',marginTop:'-281px'},1000);

						$(".four_box .photo_img5").animate({opacity:'1',marginLeft:'230px',marginTop:'-252px'},1000);

						$(".four_box .photo_img6").animate({opacity:'1',marginLeft:'318px',marginTop:'-84px'},1000);

						$(".four_box .photo_img7").animate({opacity:'1',marginLeft:'280px',marginTop:'45px'},1000);

						$(".four_box .photo_img8").animate({opacity:'1',marginLeft:'92px',marginTop:'107px'},1000);

						$(".four_box .photo_img9").animate({opacity:'1',marginLeft:'-100px',marginTop:'145px'},1000);

						$(".four_box .photo_img10").animate({opacity:'1',marginLeft:'-323px',marginTop:'100px'},1000);

						$(".four_box .photo_img11").animate({opacity:'1',marginLeft:'-385px',marginTop:'18px'},1000);

						$(".four_box .photo_img12").animate({opacity:'1',marginLeft:'-480px',marginTop:'-87px'},1000);

						});

						

						

						setTimeout(function(){

							$(".four_box .photo_word").animate({opacity:'1'},1000,function(){allowwheel = 1;bgmenable=1;});

						}, 2000);

						

					}else{

						$(".four_bg").animate({opacity:'0'},100);

						$(".four_box .photo_img1").animate({opacity:'0',marginLeft:'-440px',marginTop:'-240px'},10);

						$(".four_box .photo_img2").animate({opacity:'0',marginLeft:'-270px',marginTop:'-275px'},10);

						$(".four_box .photo_img3").animate({opacity:'0',marginLeft:'-115px',marginTop:'-326px'},10);

						$(".four_box .photo_img4").animate({opacity:'0',marginLeft:'90px',marginTop:'-301px'},10);

						$(".four_box .photo_img5").animate({opacity:'0',marginLeft:'250px',marginTop:'-272px'},10);

						$(".four_box .photo_img6").animate({opacity:'0',marginLeft:'338px',marginTop:'-104px'},10);

						$(".four_box .photo_img7").animate({opacity:'0',marginLeft:'300px',marginTop:'65px'},10);

						$(".four_box .photo_img8").animate({opacity:'0',marginLeft:'112px',marginTop:'127px'},10);

						$(".four_box .photo_img9").animate({opacity:'0',marginLeft:'-120px',marginTop:'165px'},10);

						$(".four_box .photo_img10").animate({opacity:'0',marginLeft:'-343px',marginTop:'120px'},10);

						$(".four_box .photo_img11").animate({opacity:'0',marginLeft:'-405px',marginTop:'38px'},10);

						$(".four_box .photo_img12").animate({opacity:'0',marginLeft:'-500px',marginTop:'-107px'},10);

						

						$(".four_box .photo_word").animate({opacity:'0'},10);

						

					}

				//五屏

				

				//alert(url);

				if(url == "#section5"){

					navindex = 4;
					allowwheel = 0; 
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);

					$(".five_bg_png").animate({opacity:'1'},1000,function(){

						$(".five_person").animate({opacity:'1',marginLeft:'-560px'},1000,function(){

							$(".five_word").animate({opacity:'1'},1000,function(){allowwheel = 1;});

							});

					});

				}else{

					$(".five_bg_png").animate({opacity:'0'},10,function(){

						$(".five_person").animate({opacity:'0',marginLeft:'-580px'},10,function(){

							$(".five_word").animate({opacity:'0'},10);

							});

					});

					};

				//六屏

				if(url == "#section6"){

					navindex = 5;
					allowwheel = 0; 
				     $('ul.nav a img').eq(navindex).animate({right:'0px'},300);
			         $('ul.nav a img lt['+navindex+']').animate({right:'-68px'},300);	
                     $('ul.nav a img gt['+navindex+']').animate({right:'-68px'},300);

					$(".six_box img").animate({opacity:'1'},1000,function(){

						$(".six_box p").animate({opacity:'1'},1000,function(){allowwheel = 1;});

					});

				}else{

					$(".six_box img").animate({opacity:'0'},10,function(){

						$(".six_box p").animate({opacity:'0'},10);

					});

					};

					

				}

	

});

