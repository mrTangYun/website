// JavaScript Document
function Dsy() 
{ 
this.Items = {}; 
} 
Dsy.prototype.add = function(id,iArray) 
{ 
this.Items[id] = iArray; 
} 
Dsy.prototype.Exists = function(id) 
{ 
if(typeof(this.Items[id]) == "undefined") return false; 
return true; 
} 

function change(v){ 
var str="0"; 
for(i=0;i <v;i++){ str+=("_"+(document.getElementById(s[i]).selectedIndex-1));}; 
var ss=document.getElementById(s[v]); 
with(ss){ 
  length = 0; 
  options[0]=new Option(opt0[v],opt0[v]); 
  if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v) 
  { 
  if(dsy.Exists(str)){ 
    ar = dsy.Items[str]; 
    for(i=0;i <ar.length;i++)options[length]=new Option(ar[i],ar[i]); 
    if(v)options[1].selected = true; 
  } 
  } 
  if(++v <s.length){change(v);} 
} 
} 

var dsy = new Dsy(); 
dsy.add("0",["北京","上海","成都","广州","石家庄","郑州","大连","沈阳","杭州","苏州","武汉","济南","长沙","中山","西安","重庆"]); 

dsy.add("0_0",["东城","西城","崇文","宣武","丰台","石景山","海淀","门头沟","房山","通州","顺义","昌平","大兴","平谷","怀柔","密云","延庆"]); 
dsy.add("0_1",["黄浦","卢湾","徐汇","长宁","静安","南汇","奉贤","崇明","嘉定","浦东","金山","松江","青浦","普陀","闸北","虹口","杨浦","闵行","宝山"]); 
dsy.add("0_2",["成都"]); 
dsy.add("0_3",["广州"]);
dsy.add("0_4",["石家庄"]); 
dsy.add("0_5",["郑州"]); 
dsy.add("0_6",["大连"]); 
dsy.add("0_7",["沈阳"]); 
dsy.add("0_8",["杭州"]); 
dsy.add("0_9",["苏州"]); 
dsy.add("0_10",["武汉"]);
dsy.add("0_11",["济南"]);  
dsy.add("0_12",["长沙"]);  
dsy.add("0_13",["中山"]);  
dsy.add("0_14",["西安"]);  
dsy.add("0_15",["万州","涪陵","渝中","大渡口","江北","沙坪坝","江津","合川","永川","南川","巫山","巫溪","石柱","秀山","酉阳","彭水","垫江","武隆","忠县","开县","云阳","奉节","大足","荣昌","壁山","梁平","城口","丰都","巴南","黔江","长寿","綦江","潼南","铜梁","九龙坡","南岸","北碚","万盛","双挢","渝北"]);  


dsy.add("0_0_0",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_1",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_2",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_3",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_4",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_5",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_6",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_7",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_8",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_9",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_10",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_11",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_12",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_13",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_14",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_15",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_16",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_0_17",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 




dsy.add("0_1_0",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_1",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_2",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_3",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_4",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_5",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_6",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_7",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_8",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_9",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_10",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_11",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_12",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_13",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_14",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_15",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_16",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_17",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_1_18",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 


dsy.add("0_2_0",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_1",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_2",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_3",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_4",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_5",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_6",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_7",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_8",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_9",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_10",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_11",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_12",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_13",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_14",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_15",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_16",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_17",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_18",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_2_19",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 

dsy.add("0_3_0",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_1",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_2",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_3",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_4",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_5",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_6",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_7",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_8",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_9",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_10",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_11",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_12",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]);  
dsy.add("0_3_13",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_14",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_15",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_16",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_17",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_18",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 
dsy.add("0_3_19",["Compass指南者 2.0L","Compass指南者 2.4L","patriot自由客 2.0L","patriot自由客 2.4L"]); 

