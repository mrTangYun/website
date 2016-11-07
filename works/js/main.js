var works = [

	//cargo6000,宠优,copico,daliyuan,
	//file:///H:/wwwroot/web/deeplyImpressive/index.htm#Info
	//达利园
	//durex
	//新鲜人
	//haier
	//蒙牛
	//风电商情
	//unilever
	//surface
	//ricola
	//office
	//marlboro
	//lebao
	//keluoen
	//jiaduobao
	//intel
	//infiniti_jx
	//萨菲尔
	//青山能源
	//立美
	//朗泰
	//yutong
	//yueqingsh
	//upg
	//timesartmuseum
	//sanlitun
	//peigon
	//infiniti_f1
	//gforce
	//f1.infiniti.com.cn
	//ex
	//chaomatuan
	//amway
	//heqizheng
	//mbmenuprice
	//benz
	// {
	// 	name : "",
	//	brand : "",
	// 	year : "",
	// 	folder : "",
	// 	job : "前端|后端", //职责
	// 	url : "",
	// 	isOnline : false,		//是否在线
	// 	point : ["php","mysql","css","js"],		//技术
	// 	images: [],
	// 	desc : "",
	//	exp : ""
	// },
	{
		name : "抗癌在线",
		brand : "抗癌在线",
		year : "2006",
		job : "后端", //职责
		url : "http://www.wd999.com",
		isOnline : true,		//是否任然在线
		point : ["asp"],		//技术
		folder : "",
		images: 0,
		desc : "项目小组为2人配置，本人负责所有后端",
		exp : "了解了SEO相关知识"
	},
	{
		name : "国道黄金",
		brand : "国道黄金",
		year : "2008",
		folder : "china24k.com",
		job : "前端|后端", //职责
		url : "http://www.china24k.com/",
		isOnline : true,
		point : ["asp","js","falsh"],
		images: 5,
		desc : "项目小组为2人配置，本人负责所有前端和后端",
		exp : "自学了flash的as2.0并完成项目"
	},
	{
		name : "运通官网",
		brand : "北京运通",
		year : "2011",
		folder : "wintop",
		job : "前端|后端", //职责
		url : "",
		isOnline : true,		//是否在线
		point : ["flash"],		//技术
		images: 10,
		desc : "项目小组为2人配置，本人负责所有前端和后端",
		exp : "自学了flash的as3.0并完成项目"
	},
	{
		name : "蒙牛真果粒",
		brand : "蒙牛",
		year : "2013",
		folder : "mn-zhenguoli",
		job : "前端", //职责
		url : "./html/html-20131220/index.html",
		isOnline : false,		//是否在线
		point : ["css","js"],		//技术
		images: 2,
		desc : "页面特效为视差动画，本人负责所有的页面制作工作",
		exp : ""
	},
	{
		name : "世纪互联中英文官网",
		brand : "世纪互联",
		year : "2014",
		folder : "21vianet",
		job : "前端|后端", //职责
		url : "http://www.ch.21vianet.com/",
		isOnline : true,		//是否在线
		point : ["php","mysql","css","js"],		//技术
		images: 2,
		desc : "网站基于wordpress进行开发;项目小组为2人配置，本人负责所有前端和后端",
		exp : ""
	},
	{
		name : "曼恩TCO",
		brand : "曼恩",
		year : "2014",
		folder : "man-tco",
		job : "前端|后端", //职责
		url : "http://www.tco-manchina.com.cn/",
		isOnline : true,		//是否在线
		point : ["css","js"],		//技术
		images: 5,
		desc : "页面特效为视差动画，并用js制作图表。本人负责所有的页面制作工作",
		exp : ""
	},
	{
		name : "太平盛世",
		brand : "太平盛世",
		year : "2014",
		folder : "taipingshenshi",
		job : "前端", //职责
		url : "./html/taipingshenshi/index.htm",
		isOnline : true,		//是否在线
		point : ["css","js"],		//技术
		images: 5,
		desc : "页面特效为视差动画，本人负责所有的页面制作工作",
		exp : ""
	},
];

jQuery(document).ready(function($) {
	console.log(works);
	var _html = [];
	for (var i = 0; i < works.length; i++) {
		_html.push("<li class=\"project\">");

			_html.push("<div class=\"name\">");
			_html.push(works[i].name);
			_html.push("</div>");

			_html.push("<div class=\"tips\">");
				_html.push("<span class=\"brand\">");
				_html.push("品牌：");
				_html.push(works[i].brand);
				_html.push("</span>");
				_html.push("<span class=\"year\">");
				_html.push("年份：");
				_html.push(works[i].year);
				_html.push("</span>");
			_html.push("</div>");
			if (works[i].images > 0){
			_html.push("<ul class=\"images\">");
				for (var _i = 1; _i <= works[i].images; _i++) {
					_html.push("<li>");
						_html.push("<img src=\"./images/"+works[i].folder+"/"+_i+".jpg\" width=\"100%\"/>");
					_html.push("</li>");
				}
				
			_html.push("</ul>");
			}

		_html.push("</li>");
	}
	$("#works").html(_html.join(""));

	$(".project .name").click(function(event) {
		/* Act on the event */
		$(this).next().next().toggle();
	});
});