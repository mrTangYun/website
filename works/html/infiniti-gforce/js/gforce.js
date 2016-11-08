var G_Nav_index=0;
$(document).ready(function(){		   
			//好友列表
			//邀请好友的代码
			if ($(".sns-friend-box").length>0){
				if ($(".sns-avatar-m li").length>0){
						if ($(".sns-avatar-m li input").length>0){							
							$(".sns-avatar-m li input[type='submit']").click(function(){
																		var _yaoqingText='';
																		if ($(".sns-avatar-m li.item input:checked").length>0){
																			$(".sns-avatar-m li.item input:checked").each(function(i){
																								   _yaoqingText=_yaoqingText+"@"+$(this).val()+" ";
																								   });
																			
																		}
																		_yaoqingText+="http://www.sinquest.cn/index.php?r_id=2341234213 复选框发送连接测试";
																	    console.log(_yaoqingText);
																	   });
						}
					}
			}
			
			
			//弹层按钮
			if ($(".button li").length>0){
				//新用户报名
				$(".button li.pop_reg_div a").click(function(){
														   $(".reg_div").toggle();
														   return false;
														   });
			}
			
			//导航
			if ($(".header .nav .item").length>0){
				$(".header .nav .item").click(function(){
													   ViewByIndex($(this).index());
													   });
			}
			
			
			
			//报名注册
			if ($(".div_Btn_regAndGoon .btn .container .item").length>0){
				$(".div_Btn_regAndGoon .btn .container .item").click(function(){
																			  var target=$(this).attr("target-div");
																			  //$("#"+target).show();
																			  $(".popDiv").animate({marginTop: '0px'},"slow");
																			  });
			}
});

function ViewByIndex(index){
	var _w=(3197-1003)/5;
	var _x=_w*index*-1;
	$(".backgroundDiv").stop().animate({backgroundPosition: _x+'px 0px'},"slow");
	
	//$(".backgroundDiv").css("background-position",_x+"px");
}


						
