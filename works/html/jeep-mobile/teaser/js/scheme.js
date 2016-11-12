$(function(){

var Selmenu = {

elem : {
  $car : $("#selmenu-car"),
  $model : $("#selmenu-model"),
  $bank : $("#selmenu-bank"),
  $bili : $("#selmenu-bili"),
  $qixian : $("#selmenu-qixian"),
  $result : $("#cal-price"),
  $weiku  : $("cal-rweikuan")
},
rightElem : {
  $box : $("#rightWrap"),
  $lay : $("#right-lay"),
  $mask : $("#leftmask"),
  $frerimg : $("#frerimg")
},
showSelect : function(){
  this.rightElem.$box.show();
  this.rightElem.$mask.show();
  this.rightElem.$lay.animate({translate:'0,0'}, 200, 'ease-out');
},
hideSelect : function(){ 
  this.rightElem.$mask.hide();
  //卸载事件
  this.rightElem.$lay.off("click", "li");
  this.rightElem.$lay.animate({translate:'250px,0'}, 
							   200, 
							   'ease-out',
							   function(){
								   Selmenu.rightElem.$box.hide();
								   Selmenu.rightElem.$lay.find("h3").empty();
								   Selmenu.rightElem.$lay.find("ul").empty();
							   }
							  );
},
//重置选择配置包
resetModel : function(){
  var def = this.elem.$model.attr("data-def");
  this.elem.$model.attr("data-value", "")
				  .find("span").html(def);
  this.resetBank();
},
//重置银行方案
resetBank : function(){
  var def = this.elem.$bank.attr("data-def");
  this.elem.$bank.attr("data-value", "")
				  .find("span").html(def); 
  this.resetBili();
  this.resetQixian();
},
//重置首付比例
resetBili : function(){
  var def = this.elem.$bili.attr("data-def");
  this.elem.$bili.attr("data-value", "")
				 .find("span").html(def);   
},
//重置期限
resetQixian : function(){
  var def = this.elem.$qixian.attr("data-def");
  this.elem.$qixian.attr("data-value", "")
				  .find("span").html(def);   
},
//event
bindLayEvent : function($forElem, callback){
  this.rightElem.$lay.on("click", "li", function(){
		 var val = $(this).attr("data-value"),
			 name = $(this).text();
			 $forElem.attr("data-value", val).find("span").html(name);
		  
		  
		 Selmenu.hideSelect();
		 callback && callback(); 
		 //计算
		 Selmenu.compute();
  });
},
//设置选择车型
setCarSelect : function(){
  var html = "";
  var title = this.elem.$car.attr("data-def");
  
//  for(var i in Jeep_finance){
//	  html += '<li data-value="'+ i +'">'+ Jeep_finance[i].name +'</li>';
//  }
   html += "<li data-value='wk'>Grand Cherokee 全新大切诺基</li>";
  this.rightElem.$lay.find("h3").html(title);
  this.rightElem.$lay.find("ul").html(html);
  
  this.bindLayEvent(Selmenu.elem.$car, function(){ Selmenu.resetModel(); });
  return true;
},
//设置选择配置包
setModelSelect : function(){
  var html="", title = this.elem.$model.attr("data-def");
  var carVal = this.elem.$car.attr("data-value");

  if(!carVal){
	  alert("请先选择车型");
	  return false;
  }else{
	  var obj = Jeep_finance[carVal].model;
	  for(var i in obj){
		  html += '<li data-value="'+ obj[i].id +'">'+ obj[i].name +'</li>';
	  }
	  this.rightElem.$lay.find("h3").html(title);
	  this.rightElem.$lay.find("ul").html(html);
  }
  this.bindLayEvent(Selmenu.elem.$model, function(){ Selmenu.resetBank(); });
  return true;
},
//设置选择银行方案
setBankSelect : function(){
  var html="", title = this.elem.$bank.attr("data-def");
  var carVal = this.elem.$car.attr("data-value"),
	  modelVal = this.elem.$model.attr("data-value");

  if(!modelVal){
	  alert("请先选择车型和配置包");
	  return false;
  }else{
	  var bankArr = Jeep_finance[carVal].model[modelVal].bank;
	  var t;
	  for(var i=0,len=bankArr.length; i<len; i++){
		  t = Jeep_finance[carVal].bank[bankArr[i]];
		  html += '<li data-value="'+ bankArr[i] +'">'+ t.name + '<br> - ' + t.subname +'</li>';
	  }
	  this.rightElem.$lay.find("h3").html(title);
	  this.rightElem.$lay.find("ul").html(html);
	  this.bindLayEvent(Selmenu.elem.$bank, function(){ Selmenu.resetBili(); Selmenu.resetQixian(); });
	  return true;
  }
},
//设置选择首付比例
setBiliSelect : function(){
  var html="", title = this.elem.$bili.attr("data-def");
  var carVal = this.elem.$car.attr("data-value"),
	  modelVal = this.elem.$model.attr("data-value"),
	  bankVal = this.elem.$bank.attr("data-value");

  if(!bankVal){
	  alert("请先选择银行方案");
	  return false;
  }else{
	  var sf = Jeep_finance[carVal].bank[bankVal].sf;
	  var t;
	  //if(Jeep_finance[carVal].bank[bankVal].id=="CNCB_p50_1"){
//					html += '<li data-value="50">'+ sf + '%' + '</li>';
//				}else if(Jeep_finance[carVal].bank[bankVal].id=="FYT2_p45_1"||Jeep_finance[carVal].bank[bankVal].id=="FYT_p45_1"){
//						
//					html += '<li data-value="90">'+ sf + '%' + '</li>';	
//				}else if(Jeep_finance[carVal].bank[bankVal].id=="CNCB_p50_18"){
//							
//					html += '<li data-value="'+ sf +'">'+ sf + '%' + '</li>';			
//							}else{
	  for(var i=sf; i<60; i+=10){
		  html += '<li data-value="'+ i +'">'+ i + '%' + '</li>';
	  }
		  //}
	  this.rightElem.$lay.find("h3").html(title);
	  this.rightElem.$lay.find("ul").html(html);
	  this.bindLayEvent(Selmenu.elem.$bili);
	  return true;
  }
},
//设置选择期限
setQixianSelect : function(){
  var html="", title = this.elem.$qixian.attr("data-def");
  var carVal = this.elem.$car.attr("data-value"),
	  modelVal = this.elem.$model.attr("data-value"),
	  bankVal = this.elem.$bank.attr("data-value");

  if(!bankVal){
	  alert("请先选择银行方案");
	  return false;
  }else{
	  var finance = Jeep_finance[carVal].bank[bankVal].finance;
	  var t;
	  for(var i=0,len=finance.length; i<len; i++){
		  html += '<li data-value="'+ finance[i].month +'">'+ finance[i].month + '个月' + '</li>';
	  }
	  this.rightElem.$lay.find("h3").html(title);
	  this.rightElem.$lay.find("ul").html(html);
	  this.bindLayEvent(Selmenu.elem.$qixian);
	  return true;
  }
},

//计算
compute : function(){
  var carVal = this.elem.$car.attr("data-value"),//车型
	  modelVal = this.elem.$model.attr("data-value"),//配置
	  bankVal = this.elem.$bank.attr("data-value"),//银行方案
	  biliVal = this.elem.$bili.attr("data-value"),//首付比例
	  qixianVal = this.elem.$qixian.attr("data-value");//还款期限
  
  if(!carVal || !modelVal || !bankVal || !biliVal || !qixianVal){
	  this.elem.$result.html("").parent().removeClass("cal-price-show");
	  return false;
  }  
  var obj = Jeep_finance[carVal],
	  arr = obj.bank[bankVal].finance;
  var price = obj.model[modelVal].price,
	  bili = biliVal,
	  qixian = qixianVal,
	  wk = obj.bank[bankVal].wk,
	  lilv;
  for(var i=0,len=arr.length; i<len; i++){
	  if(arr[i].month == qixian)
		  lilv = arr[i].rate;
  }
  

//总价格 price 
//利率   lilv
var lil=lilv/100;
//月份
var month=qixianVal;
//获取首付比例百分之
var b=biliVal/100; 
//首付金额
var d = parseInt(price*biliVal)/100; 
//是否为特殊算法 wk
//36期弹性尾款产品
var f = Math.round(price*0.3);


//普通算法  每月金额=（贷款金额*利率+贷款金额-应付尾款）/贷款期限
var e = Math.round((price-d)*lilv/100+(price-d));

// 每月金额=（贷款金额+贷款金额*利率-应付尾款）/贷款期限[注：有尾款的 后面"0"改为减尾款(尾款即贷款)，无尾款的减"0"]
var mOne=parseInt((price-d)*lil+(price-d)-0);//无尾款
var mTwo=parseInt((price-d)*lil+(price-d)-(price-d));//有尾款
var mThree=parseInt((price-d)*lil+(price-d)-f); //36期弹性尾款产品
var mFour=parseInt((price-d)*lil+(price-d)-d);//有尾款 尾款和首付相同


if(wk && wk =="1"){
			 var result = Math.round(mOne/month);
	  }else if(wk && wk =="2"){
			 var result = Math.round(mTwo/month);
	  }else if(wk && wk =="3"){
			var result = Math.round(mThree/month);
	  }else if(wk && wk =="4"){
			var result = Math.round(mFour/month);
	  }else{
			$(".cal-result h3").text("每月还款金额");
		     var result = Math.round(e/qixian);
	  }
        this.elem.$result.html(formatMoney(result, 0)).parent().addClass("cal-price-show");
},

//初始化事件
initEvent : function(){
this.elem.$car.click(function(){
 Selmenu.setCarSelect();
 Selmenu.showSelect();
 if(_gsTracker){ _gsTracker.track('/targetpage/click/MOBILE/footer_sel_cartype_btn'+location.pathname); };
});
this.elem.$model.click(function(){
 Selmenu.setModelSelect() && Selmenu.showSelect();
 if(_gsTracker){ _gsTracker.track('/targetpage/click/MOBILE/footer_sel_special_btn'+location.pathname); };
});
this.elem.$bank.click(function(){
 Selmenu.setBankSelect() && Selmenu.showSelect();
 if(_gsTracker){ _gsTracker.track('/targetpage/click/MOBILE/footer_sel_bank_btn'+location.pathname); };
});
this.elem.$bili.click(function(){
 Selmenu.setBiliSelect() && Selmenu.showSelect();
 if(_gsTracker){ _gsTracker.track('/targetpage/click/MOBILE/footer_sel_payment_btn'+location.pathname); };
});
this.elem.$qixian.click(function(){
 Selmenu.setQixianSelect() && Selmenu.showSelect();
 if(_gsTracker){ _gsTracker.track('/targetpage/click/MOBILE/footer_sel_deadline_btn'+location.pathname); };
});
this.rightElem.$mask.click(function(){
 Selmenu.hideSelect();
});
},

init : function(){
this.initEvent();
}

}; 

Selmenu.init();   

});

function formatMoney(s, type) {
if (/[^0-9\.]/.test(s)) return "0";
if (s == null || s == "") return "0";
s = s.toString().replace(/^(\d*)$/, "$1.");
s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
s = s.replace(".", ",");
var re = /(\d)(\d{3},)/;
while (re.test(s))
s = s.replace(re, "$1,$2");
s = s.replace(/,(\d\d)$/, ".$1");
if (type == 0) {// 不带小数位(默认是有小数位)
var a = s.split(".");
if (a[1] == "00") {
s = a[0];
}
}
return s;
}