var flashdata = 
[
	{
		"flashTitle":"chukong",
		"playerName":"1",
		"uniqueID":"1",
		"parentURL": document.location.pathname ,
		"linkHref":"http://sale.suning.com/images/advertise/007/SNintel/index.html",
		"tabName":"touch"
	},
	{
		"flashTitle":"bianxing",
		"playerName":"2",
		"uniqueID":"2",
		"parentURL": document.location.pathname ,
		"linkHref":"http://sale.suning.com/images/advertise/007/SNintel/index.html",
		"tabName":"convertible"
	},
	{
		"flashTitle":"xingneng",
		"playerName":"3",
		"uniqueID":"3",
		"parentURL": document.location.pathname ,
		"linkHref":"http://sale.suning.com/images/advertise/007/SNintel/index.html",
		"tabName":"performance"
	},
	{
		"flashTitle":"xiangying",
		"playerName":"4",
		"uniqueID":"4",
		"parentURL": document.location.pathname ,
		"linkHref":"http://sale.suning.com/images/advertise/007/SNintel/index.html",
		"tabName":"responsive"
	},
	{
		"flashTitle":"qingbo",
		"playerName":"5",
		"uniqueID":"5",
		"parentURL": document.location.pathname ,
		"linkHref":"http://sale.suning.com/images/advertise/007/SNintel/index.html",
		"tabName":"sleek"
	}
];
function GetData(curNum){
	curNum = curNum.replace(/"/g,'');
	var i = parseInt(curNum);
	var data = flashdata[i];
	return data;
}

function impVideoPlay(curNum){
	var data = GetData(curNum);
	waTrackAsLink('prc:cn-zh:links', 'o', 'wa_events=event6,event7&wa_eCustom10=video:ump:start&wa_prop13=video:'+ data["flashTitle"] +':start&wa_eCustom18=video:'+data["flashTitle"]+'&wa_action=video:start&wa_eAction=video:start&wa_custom60=video:'+ data["playerName"] +'&wa_eCustom60=video:'+ data["playerName"] +'&wa_custom61='+data["uniqueID"]+'&wa_eCustom61='+data["uniqueID"]+'&wa_custom62=video:'+data["playerName"]+':'+data["uniqueID"]+'&wa_eCustom62=video:'+data["playerName"]+':'+data["uniqueID"]+'&wa_custom63='+ data["parentURL"] +'&wa_eCustom58='+data["parentURL"]);
}

function impVideoPause(curNum){
	var data = GetData(curNum);
	waTrackAsLink('prc:cn-zh:links', 'o', 'wa_events=event6,event7&wa_eCustom10=video:ump:pause&wa_prop13=video:'+ data["flashTitle"] +':pause&wa_eCustom18=video:'+data["flashTitle"]+'&wa_action=video:pause&wa_eAction=video:pause&wa_custom60=video:'+ data["playerName"] +'&wa_eCustom60=video:'+ data["playerName"] +'&wa_custom61='+data["uniqueID"]+'&wa_eCustom61='+data["uniqueID"]+'&wa_custom62=video:'+data["playerName"]+':'+data["uniqueID"]+'&wa_eCustom62=video:'+data["playerName"]+':'+data["uniqueID"]+'&wa_custom63='+ data["parentURL"] +'&wa_eCustom58='+data["parentURL"]);
}

function impShop(curNum){
	var data = GetData(curNum);
	waTrackAsLink('intc:links', 'o', 'wa_events=event70,event2,event6&wa_eCustom10=buy:cpp_info&wa_action=third-party-clickout&wa_eAction=third-party-clickout&wa_custom60=prc_appzone-1&wa_eCustom60=prc_appzone-1&wa_custom61='+data["linkHref"]+'&wa_eCustom61='+data["linkHref"]+'&wa_custom62=prc_appzone-1:'+data["linkHref"]+'&wa_eCustom62=prc_appzone-1:'+data["linkHref"]);
}

function impTab(curNum){
	var data = GetData(curNum);
	waTrackAsLink('intc:links', 'o', 'wa_events=event70,event6&wa_action=click&wa_eAction=click&wa_eCustom10=ssc:nav&wa_custom60=prc_appzone-1&wa_eCustom60=prc_appzone-1&wa_custom61='+data["tabName"]+'&wa_eCustom61='+data["tabName"]+'&wa_custom62=prc_appzone-1:'+data["tabName"]+'&wa_eCustom62=prc_appzone-1:'+data["tabName"]);
}
