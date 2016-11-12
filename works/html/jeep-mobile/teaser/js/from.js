/*验证表单*/
function checkForm() {
var b=true;
//document.getElementById("msg_name").innerHTML="";
document.getElementById("msg_email").innerHTML="";
document.getElementById("msg_province").innerHTML="";
document.getElementById("msg_mobilePhone").innerHTML="";
document.getElementById("msg_carecartype").innerHTML="";
var obj=document.getElementById("creator2");
var is_focuse=false;

//姓名 验证
if ((obj.name.value=="")||(obj.name.length == 0)||(obj.name.value=="姓名")){
        document.getElementById("msg_name").innerHTML="请填入您的姓名";
        if(!is_focuse){
		  obj.name.focus();
		  is_focuse=true;
		  }
        b=false;
    }
//电子邮箱 验证
if ((obj.email.value=="")||(obj.email.length == 0)||(obj.email.value=="E-mail"))
  {
   document.getElementById("msg_email").innerHTML="请填写您的电子邮箱";
	if(!is_focuse){
		obj.email.focus();
		is_focuse=true;
		}
	b=false;
  }
//电子邮箱格式 验证
var ValidEmail = new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_.-]+\\@[a-zA-Z0-9\\-\\._]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  if (!ValidEmail.test(obj.email.value)) {
	  if(document.getElementById("msg_email").innerHTML=="") 
	  document.getElementById("msg_email").innerHTML="请正确填写电子邮箱地址";
	  if(!is_focuse){
		obj.email.focus();
		is_focuse=true;
		}
	b=false;
}

 //手机号码 验证
if ((obj.phone.value=="")||(obj.phone.length == 0)||(obj.phone.value=="手机号码"))
{
   document.getElementById("msg_mobilePhone").innerHTML="请填写您的手机号码";
	if(!is_focuse){
		obj.phone.focus();
		is_focuse=true;
		}
	b=false;
  }
//手机号码格式 验证
var ValidPhone =new RegExp(/(^(13|15|18|14)(\d){9}$)|(^189\d{8}$)/);
if(!ValidPhone.test(obj.phone.value)){
	if(document.getElementById("msg_mobilePhone").innerHTML=="") 
	   document.getElementById("msg_mobilePhone").innerHTML="请您提供正确的手机号码";
	if(!is_focuse){
		obj.phone.focus();
		is_focuse=true;
		}
	b=false;
}

//置换车型 验证
if (obj.carecartype.value=='' || obj.carecartype.value.indexOf("请选择")>=0){	
	document.getElementById("msg_carecartype").innerHTML="请选择您置换的车型";
	if(!is_focuse){
			obj.carecartype.focus();
			is_focuse=true;
			}
	b=false;
}

//所在城市 验证
if (obj.province.value=='' || obj.province.value.indexOf("请选择")>=0){	
	document.getElementById("msg_province").innerHTML="请选择您所在城市";
	if(!is_focuse){
			obj.city.focus();
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

//提交
function submit2(){
if(checkForm()){
//	var SourceRemark = "现有车型："+$("#fctbox").find("option:selected").text()+"|"+$("#brbox").find("option:selected").text()+"|"+$("#spbox").find("option:selected").text();
//	

var selectIndex1 = document.getElementById("fctbox").selectedIndex;

var selectText1 = document.getElementById("fctbox").options[selectIndex1].text;

var selectIndex2 = document.getElementById("brbox").selectedIndex;

var selectText2 = document.getElementById("brbox").options[selectIndex2].text;

var selectIndex3 = document.getElementById("spbox").selectedIndex;

var selectText3 = document.getElementById("spbox").options[selectIndex3].text;

var SourceRemark = "现有车型："+selectText1+"|"+selectText2+"|"+selectText3;

document.getElementById("SourceRemark").value = SourceRemark.replace(/\ /g,"").replace(/\s/g,"");
   // $('#formloading').show();
    /*** GlobalID ***/
    var GlobalID1 = getGlobalID();
    document.getElementById("GlobalID1").value = GlobalID1;
	//alert(document.getElementById("GlobalID1").value);
	
    /*** GlobalID End ***/

   //var name = document.getElementById("name").value; 
   //var email = document.getElementById("email").value; 
   var province = document.getElementById('province').value;
   var city = document.getElementById('city').value;

	
    var carecartype = document.getElementById('buymode').value;
    var phonevalue = document.getElementById('phone').value;
		var phonestar = phonevalue.slice(3,7);
		var phone = phonevalue.replace(phonestar,"****");
		var ActionName = document.getElementById('actionname').value;
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

	

	

    if (window._gsTracker) {
		var orderid = GlobalID1;
        _gsTracker.addOrder(orderid, 1, "");
		_gsTracker.addProduct(orderid, location.pathname, location.pathname, 1, 1, "Page");
       // _gsTracker.addProduct(orderid, zhihuan, zhihuan, 1, 1, "FormName");
        _gsTracker.addProduct(orderid, gender,gender, 1, 1, "gender");
        _gsTracker.addProduct(orderid, province, province, 1, 1, "province");
        _gsTracker.addProduct(orderid, city, city, 1, 1, "City");
        _gsTracker.addProduct(orderid, carecartype, carecartype, 1, 1, "carecartype");
        _gsTracker.addProduct(orderid, ActionName, ActionName, 1, 1, "ActionName");
        _gsTracker.addProduct(orderid, phone, phone, 1, 1, "Phone");
        _gsTracker.trackECom();
        _gsTracker.track("/targetpage/formsubmit/2014scheme");
}
    //document.getElementById('creator2').submit();  
    setTimeout(function(){
                document.getElementById('creator2').submit();   
               }, 1000);
    
    }
}// JavaScript Document