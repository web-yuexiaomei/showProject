function createXhr(){
    var xhr=null;
	if(window.XMLHttpRequest){
	   xhr=new XMLHttpRequest(); //标准创建
	}else{
		//IE8以下创建
	   xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
    return xhr;
}
function $(id){
    return document.getElementById(id);
}