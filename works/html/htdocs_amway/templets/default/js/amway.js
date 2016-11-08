$(document).ready(function(){
						   
	//展区现场
	var ex_total=$(".ex_live_page .mainbox .imagesBox li").length;
	var page_num=18;
	if (ex_total>0){
		$(".ex_live_page .mainbox .imagesBox li").each(function(i){
																if ((i>0) && (i%page_num==(page_num-1)) &&(i+1<ex_total))
																{																	
																	//$(this).html($(this).html()+"</ul><ul>");					
																	$(this).after("<ul>tmp</ul>");
																}
																});
		$(".ex_live_page .mainbox .imagesBox").html($(".ex_live_page .mainbox .imagesBox").html().replace(/<ul>tmp<\/ul>/gi,"</ul><ul>"));
		var ex_page_total=$(".ex_live_page .imagesBox ul").length;
		$(".ex_live_page .pageBox").append("<ul></ul>");
		for (var i=1;i<=ex_page_total; i++)
		{
			$(".ex_live_page .pageBox ul").append("<li>"+i+"</li>");
		}
		$(".ex_live_page .pageBox ul").append("<div class=\"clear\"></div>");
		$(".ex_live_page .pageBox ul li").click(function(){
														var index=$(this).index();
														$(this).addClass("Current").siblings(".Current").removeClass("Current");
														$(".ex_live_page .imagesBox ul").eq(index).addClass("Current").siblings(".Current").removeClass("Current");
														});
		$(".ex_live_page .pageBox ul li").eq(0).click();
		
		$("a[rel='example3']").colorbox();
		
	}
	
	//导航栏
	if (G_nav_index>=0){
		$("nav .level_1 li").eq(G_nav_index).addClass("Current");
		var $thisImg=$("nav .level_1 li").eq(G_nav_index).find("img")
		$thisImg.attr("src",$thisImg.attr("data-img2"));
	}
	if (G_nav_index_2>0){
		$(".level_2").show();
		G_nav_index_2--;
		$("nav .level_2 li").eq(G_nav_index_2).addClass("Current");
		var $thisImg=$("nav .level_2 li").eq(G_nav_index_2).find("img")
		$thisImg.attr("src",$thisImg.attr("data-img2"));
	}
	else{
		$(".level_2").hide();
		$("nav .level_1 li").eq(2).hover(function(){
												  $(".level_2").show();
												  },
												  function(){
													  $(".level_2").hide();
													  }
												  );
		$("nav .level_2").hover(function(){
												  $(".level_2").show();
												  },
												  function(){
													  $(".level_2").hide();
													  }
												  );
	}
	$("[data-hover]").hover(function(){
									 if (!$(this).parent().parent().hasClass("Current")){
									 	$(this).attr("src",$(this).attr("data-img2"));
									 }
									 },
									 function(){
										 if (!$(this).parent().parent().hasClass("Current")){
										 	$(this).attr("src",$(this).attr("data-img1"));
										 }
										 });
	
	
	
	
	//展区抢先看
	var ex_1_total=$(".sub_ex_page .imagesBox li").length;
	if (ex_1_total>0){
		
		$(".sub_ex_page .pageBox").append("<ul></ul>");
		for (var i=1;i<=ex_1_total; i++)
		{
			$(".sub_ex_page .pageBox ul").append("<li>"+i+"</li>");
		}
		$(".sub_ex_page .pageBox ul").append("<div class=\"clear\"></div>");
		
		$(".sub_ex_page .pageBox ul li").click(function(){
														var index=$(this).index();
														$(this).addClass("Current").siblings(".Current").removeClass("Current");
														$(".sub_ex_page .imagesBox li").eq(index).addClass("Current").siblings(".Current").removeClass("Current");
														});
		$(".sub_ex_page .pageBox ul li").eq(0).click();
	}
	
	
	//8大理由
	if ($(".reason_page .reason_choose_box ul li").length>0){
		$(".reason_page .reason_choose_box ul li").hover(function(){$(this).addClass("hover");},
																  function(){$(this).removeClass("hover");});
		$(".reason_page .reason_choose_box ul li").click(function(){
														var index=$(this).index();
														var x=$(this).attr("data-postion");
														$(".reason_page .imageBox .arrow").stop().animate({left: x+"px"});
														$(this).addClass("Current").siblings(".Current").removeClass("Current");
														$(".reason_page .imageBox li").eq(index).addClass("Current").siblings(".Current").removeClass("Current");
														});
		$(".reason_page .reason_choose_box ul li").eq(0).click();
	}
	
	//安心喝好水
	if ($(".anxin_page .itemChoose .item").length>0){
		$(".anxin_page .itemChoose .item").hover(function(){$(this).addClass("hover");},
																  function(){$(this).removeClass("hover");});
		$(".anxin_page .itemChoose .item").click(function(){
														var index=$(this).index(".anxin_page .itemChoose .item");
														var x=$(this).attr("data-postion");
														$(".anxin_page .imagesBox .arrow").stop().animate({left: x+"px"});
														//$(this).parent().addClass
														$(this).addClass("Current").siblings(".Current").removeClass("Current");
														$(".anxin_page .imagesBox ul li").eq(index).addClass("Current").siblings(".Current").removeClass("Current");
														});
		$(".anxin_page .itemChoose .item").eq(0).click();
	}
	
	
	//视频
	if ($("#flash").length>0){
		insertFlash('flash', 'flash/video_player.swf', 432, 244);
	}
});