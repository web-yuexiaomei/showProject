(()=>{  //加载页尾
	ajax({
		type:"get",
		url:"html/footer.html"
	}).then(html=>{
		document.getElementById("footer").innerHTML=html;
	})
})();