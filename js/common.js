 // var JTURL = "http://192.168.1.166:9091/";
 // var JTURL = "http://192.168.1.7:9091/";
 // var JTURL = "http://132.232.11.63:9091/";
 // var JTURL = "http://106.54.92.42:9091/";
 var JTURL = "http://47.105.183.106:9091/";
 // var JTURL = "http://47.105.183.106:9092/";
 //广宗县访问地址

 
 function reloadIndex() {
 	//获得列表界面的webview
	var index_ =plus.webview.getWebviewById("index_");
 	var pollutionControl = plus.webview.getWebviewById("pollutionControl");
 	var alarm = plus.webview.getWebviewById("alarm");
 	var production = plus.webview.getWebviewById("production");
 	var own = plus.webview.getWebviewById("own");
 	//触发列表界面的自定义事件（refresh）,从而进行数据刷新
	mui.fire(index_, "refresh");
 	mui.fire(pollutionControl, "refresh");
 	mui.fire(alarm, "refresh");
 	mui.fire(production, "refresh");
 	mui.fire(own, "refresh");
 }