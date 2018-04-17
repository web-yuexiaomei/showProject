(()=>{  //加载页头
	ajax({type:"get",url:"html/header.html"}).then(html=>{document.getElementById("header").innerHTML=html;})
})();
//加载header的时的页面效果
$(function(){
	$("#header").css("height","93px");
})