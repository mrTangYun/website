// JavaScript Document
/*验证表单*/
function checkFormfr() {
var b=true;
document.getElementById("msg1_name").innerHTML="";
document.getElementById("msg1_mobilePhone").innerHTML="";
document.getElementById("msg1_email").innerHTML="";
document.getElementById("msg1_province").innerHTML="";

document.getElementById("msg_carecartype1").innerHTML="";	

var obj=document.getElementById("creator1");
var is_focuse=false;
//obj.telephone.value=obj.bb.value+"-"+obj.cc.value+"-"+obj.rrr.value;

//姓名 验证
if ((obj.name1.value=="")||(obj.name1.length == 0)||(obj.name1.value=="姓名")){
	document.getElementById("msg1_name").innerHTML="请填入您的姓名";
	if(!is_focuse){
		obj.name.focus();
		is_focuse=true;
		}
	b=false;
}


//手机号码 验证
if ((obj.phone1.value=="")||(obj.phone1.length == 0)||(obj.phone1.value=="手机号码"))
{
   document.getElementById("msg1_mobilePhone").innerHTML="请填写您的手机号码";
	if(!is_focuse){
		obj.phone.focus();
		is_focuse=true;
		}
	b=false;
  }
//手机号码格式 验证
var ValidPhone =new RegExp(/(^(13|15|18|14)(\d){9}$)|(^189\d{8}$)/);
if(!ValidPhone.test(obj.phone.value)){
	if(document.getElementById("msg1_mobilePhone").innerHTML=="") 
	   document.getElementById("msg1_mobilePhone").innerHTML="请您提供正确的手机号码";
	if(!is_focuse){
		obj.phone.focus();
		is_focuse=true;
		}
	b=false;
}
//电子邮箱 验证
if ((obj.email1.value=="")||(obj.email1.length == 0)||(obj.email1.value=="E-mail"))
  {
   document.getElementById("msg1_email").innerHTML="请填写您的电子邮箱";
	if(!is_focuse){
		obj.phone.focus();
		is_focuse=true;
		}
	b=false;
  }
//电子邮箱格式 验证
var ValidEmail = new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_.-]+\\@[a-zA-Z0-9\\-\\._]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  if (!ValidEmail.test(obj.email1.value)) {
	  if(document.getElementById("msg1_email").innerHTML=="") 
	  document.getElementById("msg1_email").innerHTML="请正确填写电子邮箱地址";
	  if(!is_focuse){
		obj.email.focus();
		is_focuse=true;
		}
	b=false;
}

//所在省 / 直辖市 验证
if (obj.province1.value=='' || obj.province1.value.indexOf("请选择")>=0) {
	  document.getElementById("msg1_province").innerHTML="请选择您的常驻省份";
	  if(!is_focuse){
		  obj.province.focus();
		  is_focuse=true;
		  }
        b=false;
}
//置换车型 验证
if (obj.carecartype1.value=='' || obj.carecartype1.value.indexOf("请选择")>=0){	
	document.getElementById("msg_carecartype1").innerHTML="请选择您置换的车型";
	
	if(!is_focuse){
			obj.carecartype1.focus();
			is_focuse=true;
			}
	b=false;
}
         
    
/*是否接收来自克莱斯勒(中国)市场和活动信息*/
if(document.getElementById("isacceptmarketinfo").checked==true){
	  document.getElementById("isacceptmarketinfo").value="yes";
	  }else{
	 document.getElementById("isacceptmarketinfo").value="no";
	  }
if(!b){
	//document.getElementById("msg").style.display="block";
	return false;
}

  //_trackManager._trackPage("Jeep_official_site_Leads_Forms");
  
  return true;
}
/*省市联动 start */
var where = new Array(32); 
function comefrom(loca,locacity) { this.loca = loca; this.locacity = locacity; } 
where[0]= new comefrom("请选择","请选择");
where[1] = new comefrom("天津","和平|东丽|河东|西青|河西|津南|汉沽|大港|宁河|静海|宝坻|蓟县|南开|北辰|河北|武清|红挢|塘沽");
where[2] = new comefrom("河北","邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水"); 
where[3] = new comefrom("山西","太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城"); 
where[4] = new comefrom("内蒙古","呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟|鄂尔多斯|通辽|东胜"); 
where[5] = new comefrom("辽宁","鞍山|抚顺|盘锦|铁岭|朝阳|葫芦岛|本溪|丹东|锦州|营口|阜新|辽阳"); 
where[6] = new comefrom("吉林","长春|吉林|四平|辽源|通化|白山|松原|白城|延边"); 
where[7] = new comefrom("黑龙江","哈尔滨|齐齐哈尔|牡丹江|大兴安岭|伊春|七台河|鹤岗|鸡西|黑河|双鸭山|佳木斯|大庆|绥化"); 
where[8] = new comefrom("江苏","南京|镇江|南通|常熟|昆山|张家港|太仓|无锡|宿迁|泰州|淮安|扬州|盐城|徐州|连云港|常州"); 
where[9] = new comefrom("浙江","宁波|温州|嘉兴|湖州|余慈|乐清|绍兴|金华|衢州|舟山|台州|丽水"); 
where[10] = new comefrom("安徽","合肥|芜湖|蚌埠|马鞍山|淮北|淮南|巢湖|阜阳|六安|宣城|亳州|铜陵|安庆|黄山|滁州|宿州|池州"); 
where[11] = new comefrom("福建","福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德"); 
where[12] = new comefrom("江西","南昌|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶"); 
where[13] = new comefrom("山东","青岛|德州|聊城|滨州|菏泽|日照|莱芜|临沂|德州|潍坊|济宁|泰安|威海|淄博|枣庄|东营|烟台"); 
where[14] = new comefrom("河南","开封|洛阳|平顶山|安阳|济源|三门峡|南阳|商丘|信阳|周口|驻马店|鹤壁|新乡|焦作|濮阳|许昌|漯河"); 
where[15] = new comefrom("湖北","宜昌|荆州|襄樊|天门|仙桃|随州|咸宁|孝感|鄂州|黄石|荆门|黄冈|十堰|恩施|潜江");
where[16] = new comefrom("湖南","常德|株洲|湘潭|衡阳|岳阳|湘西|张家界|邵阳|益阳|娄底|怀化|郴州|永州"); 
where[17] = new comefrom("广东","深圳|珠海|汕头|东莞|潮州|揭阳|云浮|惠州|梅州|汕尾|河源|阳江|清远|佛山|韶关|江门|湛江|茂名|肇庆"); 
where[18] = new comefrom("广西","南宁|柳州|桂林|梧州|北海|防城港|来宾|崇左|钦州|贵港|玉林|贺州|百色|河池"); 
where[19] = new comefrom("海南","海口|三亚|琼北|琼南|昌江|东方|儋州|定安|陵水|文昌|白沙"); 
where[20] = new comefrom("四川","巴中|阿坝|遂宁|资阳|达川|雅安|眉山|甘孜|凉山|泸州|广元|内江|乐山|南充|宜宾|广安|绵阳|德阳|自贡|攀枝花|"); 
where[21] = new comefrom("贵州","贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南"); 
where[22] = new comefrom("云南","昆明|大理|曲靖|玉溪|昭通|德宏|丽江|怒江|迪庆|临沧|普洱|楚雄|红河|文山|思茅|西双版纳|保山");
where[23] = new comefrom("西藏","拉萨|日喀则|山南|林芝|昌都|阿里|那曲"); 
where[24] = new comefrom("陕西","宝鸡|咸阳|安康|商洛|榆林|汉中|渭南|延安|铜川"); 
where[25] = new comefrom("甘肃","兰州|嘉峪关|金昌|白银|天水|酒泉|临夏|甘南|张掖|武威|定西|陇南|平凉|庆阳"); 
where[26] = new comefrom("宁夏","银川|石嘴山|吴忠|固原|中卫"); 
where[27] = new comefrom("青海","西宁|海东|海南|海北|黄南|玉树|果洛|海西"); 
where[28] = new comefrom("新疆","乌鲁木齐|石河子|克拉玛依|伊犁|阿拉尔|米泉|五家渠|阿克苏|塔城|阿勒泰|吐鲁番|哈密|喀什|和田|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉"); 
where[29] = new comefrom("香港",""); 
where[30] = new comefrom("澳门",""); 
where[31] = new comefrom("台湾","台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖"); 

function select1() {
with(document.getElementById("creator1").province) { 
var loca2 = options[selectedIndex].value; }
for(i = 0;i < where.length;i ++) {
if (where[i].loca == loca2) {
loca3 = (where[i].locacity).split("|");
for(j = 0;j < loca3.length;j++) {
	
with(document.getElementById("creator1").city) { 
length = loca3.length; 

options[j].text = loca3[j]; 

options[j].value = loca3[j]; 
var loca4=options[selectedIndex].value;

 }
}
break;
}}
}


//提交
function submitMyfrom(){
if(checkFormfr()){

var selectIndex1 = document.getElementById("fc2fctbox").selectedIndex;

var selectText1 = document.getElementById("fc2fctbox").options[selectIndex1].text;

var selectIndex2 = document.getElementById("fc2brbox").selectedIndex;

var selectText2 = document.getElementById("fc2brbox").options[selectIndex2].text;

var selectIndex3 = document.getElementById("fc2spbox").selectedIndex;

var selectText3 = document.getElementById("fc2spbox").options[selectIndex3].text;

var SourceRemark = "现有车型："+selectText1+"|"+selectText2+"|"+selectText3;

document.getElementById("SourceRemark").value = SourceRemark.replace(/\ /g,"").replace(/\s/g,"");  
    //$('#formloading').show();
    /*** GlobalID ***/
    var GlobalID = getGlobalID();
    document.getElementById("GlobalID").value = GlobalID;
    /*** GlobalID End ***/

    //var email = document.getElementById("email1").value; 
   // var phone = document.getElementById("phone1").value; 
    var gender = document.getElementsByName("gender"); 
    var salutation = ""; 
    if(gender[0].checked)
    {

        salutation = gender[0].value;
    }
    else
    {
        salutation = gender[1].value;
    }
    //var name = document.getElementById("name1").value; 
	//var email = document.getElementById("email1").value; 
    var province = document.getElementById('province1').value;
    var city = document.getElementById('city1').value;
	var phonevalue = document.getElementById('phone1').value;
		var phonestar = phonevalue.slice(3,7);
		var phone = phonevalue.replace(phonestar,"****");
		var ActionName = document.getElementById('actionname').value;
	
	
    //var caytype = document.getElementById('careCarType').value;	
    var carecartype1 = document.getElementById('carecartype1').value;
	

   if (window._gsTracker) {
		var orderid = GlobalID;
        _gsTracker.addOrder(orderid, 1, "");
		_gsTracker.addProduct(orderid, location.pathname, location.pathname, 1, 1, "Page");
        //_gsTracker.addProduct(orderid, zhihuan, zhihuan, 1, 1, "FormName");
        _gsTracker.addProduct(orderid, gender,gender, 1, 1, "gender");
        _gsTracker.addProduct(orderid, province, province, 1, 1, "province");
        _gsTracker.addProduct(orderid, city, city, 1, 1, "City");
        _gsTracker.addProduct(orderid, carecartype1, carecartype1, 1, 1, "carecartype");
        _gsTracker.addProduct(orderid, ActionName, ActionName, 1, 1, "ActionName");
        _gsTracker.addProduct(orderid, phone, phone, 1, 1, "Phone");
        _gsTracker.trackECom();
        _gsTracker.track("/targetpage/formsubmit/zhihuan");
}

    setTimeout(function(){
                document.getElementById('creator1').submit();   
               }, 1000);
    
    }
}