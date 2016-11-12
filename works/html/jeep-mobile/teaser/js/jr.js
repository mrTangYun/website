var thislink = window.location.href;
var linkh = thislink.split("?")[1];
var V_MODEL = {
	
	initEvent : function(){
		//画廊scroll
		//var wgScroll = new MyScroll('gallery-wg');
		//var nsScroll = new MyScroll('gallery-ns');
		var colorScroll = new MyScroll('gallery-style');
		//var styleScroll = new MyScroll('gallery-style','style','stylet','stylelist');
		//画廊事件
		if(linkh&&linkh=="duidu"){
			colorScroll.scrollToPage('next', 0);
			
			}
		
		$("#btn-style-pre").click(function(){
			colorScroll.scrollToPage('prev', 0);
		});
		$("#btn-style-next").click(function(){
			colorScroll.scrollToPage('next', 0);
		});	
		
		
	}
};
$(function(){
	if (window.GridsumWebDissector) {
		
        	window.GridsumSnapshotID = 1; //对应第二个场景
 		//alert(window.GridsumSnapshotID)
    	}

				
	});
//自定义iScroll构造函数
function MyScroll(sid){ 
	
    return new iScroll(sid, {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
		    //$ol.find('li').removeClass('active').eq(this.currPageX).addClass('active');
			//if(colorID){
		 if (window.GridsumWebDissector) {
			
        	window.GridsumSnapshotID = parseInt(this.currPageX+1); //对应第二个场景
 		//alert(window.GridsumSnapshotID)
    }

   		 
		 $("#wzcont .active").hide().eq(this.currPageX).show();
	

			//}
		}
	 });
}
$(function(){
	
	V_MODEL.initEvent();
	
});// JavaScript Document