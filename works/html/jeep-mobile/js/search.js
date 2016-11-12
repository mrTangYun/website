function searchSubmit(home)
{
	valid = true;
	var txtSearch = document.getElementById('q').value;
	var DefaultSearchVal = document.getElementById('default_svalue').value;
//		if (txtSearch == "" || (!checkemptystring(txtSearch)))
		if (txtSearch == DefaultSearchVal  || txtSearch.replace(/^\s+|\s+$/g,'') == "")
		{
			document.search.q.value="";
			alert(document.getElementById('emptykeyword').value);
			document.search.q.focus();
			return false;
		}
		else
		{
			gsasearch(home);
			return true;
		}
}
function checkemptystring(strText)
{
		var flag=false;
		//alert(strText.length);
		if (strText!="") 
		{ 
			var strArr = new Array();
			strArr = strText.split(" "); 
			for(var i = 0; i < strArr.length ; i++) 
			{
				if(strArr[i] != "") 
				{ 
					flag=true;
				} 
			}  
		}
		return flag;
}
var req;
function callback() {
	  if (req.readyState == 4) {
        //if (req.status == 200) {
            // update the HTML DOM based on whether or not message is valid
			parseMessage();
       // }
    }
}

function ajaxcall(url) {
   if (typeof XMLHttpRequest != "undefined") {
       req = new XMLHttpRequest();
   } else if (window.ActiveXObject) {
       req = new ActiveXObject("Microsoft.XMLHTTP");
   }
   req.open("GET", url, true);
   req.onreadystatechange = callback;
   req.send(null);
   
}


function parseMessage() {
 var message = req.responseText;
	//alert("inside Parse Message" + 	message);
	 setMessage(message);
}

function setMessage(message) {
    var mdiv = document.getElementById("searchresults");
	//alert("inside set message--------->" + message);
    mdiv.innerHTML = message; 
}

function get_search_results(collection,client,count,lang) {
			
			//alert(window.location.hostname); 

		var domainname=window.location.hostname;
		//alert(getParameter("q"));
		if(getParameter("q") != "") {
					
					// poulate the form if there was a value called
					document.forms.mainsearch.q.value =decodeURI(getParameter("q"));

					// send the query to the search appliance
					var requestString="http://";
					requestString+= domainname;
					requestString += "/search?";
					requestString += "q="+getParameter("q")+"&start="+getParameter("start");
					requestString += "&site=" + escape(collection);
					requestString += "&client=" + client;
					requestString += "&output=xml_no_dtd";
					requestString += "&num="  + escape(count);
					requestString += "&proxystylesheet=" + client;
					requestString += "&filter=0";
					requestString += "&proxyreload=1";
					requestString += "&ie=UTF-8";
					requestString += "&oe=UTF-8";
					requestString += "&inlang=" +lang;
					requestString += "&ie=utf8";
					requestString += "&oe=utf8";
					//alert("requestString" +requestString);
					
					// call the xml load
					ajaxcall(requestString);
					

		}
}
function gsasearch(home){
		var q=document.search.q.value;
		//alert(q);
		if (home == ""  || home =="none" )
		{
				document.search.action="/results/";
				document.search.submit();
		}
		else
		{
				document.search.action="/results/";
				document.search.submit();
	    }
}
function submitGoogleSearch(lid,lpos,form_object){
	var search_form = form_object;
	var searchTerm = search_form.q.value;
	searchTerm = searchTerm.replace(/[\'\"]/g, "");
		//lid += "/search." + searchTerm;
	//linkTrack(lid, lpos);
	if(search_form.q.value == "" || (!checkemptystring(search_form.q.value)))
	{
		document.mainsearch.q.value="";
		alert(document.getElementById('emptykeyword').value);
		document.mainsearch.q.focus();
		return false;
	}
	else
	{
	search_form.submit();
	return true;
	}
}
function set_search_query(query,home) {
	// set clean query string
	if (home == ""  || home =="none" )
	{
		var queryString = "/results/?q=" + encodeURI(query);
		queryString += "&start=0";
	}
	else
	{
	var queryString = "/results/?q=" + encodeURI(query);
	queryString += "&start=0";
	}
	window.location.replace(queryString);
}

function getParameter(aP){
	var qS = new String(location.search.substring(1,location.search.length));
	var p = qS.split("&");
	var val = "";
	if(aP){
		for(i=0;i<p.length;i++)
		{
			if(p[i].split( "=" )[0] == aP)
				{
					val = p[i].split( "=" )[1];
					break;
				}
		}
		if(aP == "q")
		{
			return val;
		}
		if(aP == "start")
		{
			return (val == "")?0:val;
		}
	}
}