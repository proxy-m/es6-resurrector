var url = chrome.extension.getURL('toolbar.html');
var height= '35px';
//var iframe = "<iframe src='"+url+"' id='myOwnCustomToolBar_TT91' style='height:"+height+"'></iframe>";
//$('html').append(iframe);
//$('body').css('transform','translateY('+height+')');



///alert('body is clicked');

function addScript (scriptName, nextURL) {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(scriptName);
	(document.head||document.documentElement).appendChild(s);
	s.onload = function() {
		if (nextURL) {
			$.getScript(nextURL);
			console.log(nextURL);
		}
		s.remove();
	};
};

addScript("js/jquery-3.2.1.min.js"); ///, chrome.extension.getURL("js/es6-shim-polyfill.es5.js"));
addScript("js/es6-shim-polyfill.es5.js");
addScript("js/cross-fetch.js");

