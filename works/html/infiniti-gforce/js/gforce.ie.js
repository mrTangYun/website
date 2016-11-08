$(document).ready(function(){
	$("input[placeholder][type!=password]").each(function(){
										   var text=$(this).attr("placeholder");
										   $(this).val(text);
										   });
	
});