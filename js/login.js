(()=>{
	var form=$("form");
	var btn=$("input[type=button]"); 
	btn.click(function(e){
		e.preventDefault();
		var uname=$("#uname").val();
		var upwd=$("#upwd").val();
		if(uname!==null && upwd!==null){
			ajax({
				type:"get",
				url:"../php/login.php",
				data:"uname="+uname+"&&upwd="+upwd
			}).then(data=>{
					var url="../index.html";
					if(data==1)
						window.location.href=url;
					else{
						$("form>div>p").removeClass("vali_info");
					}

				})
		}
	})
})();

	

//btn.onclick=function(){
//	if(!vali(txtName,/^\w{1,10}$/)){
//			console.log(vali(txtName,/^\w{1,10}$/));
//			txtName.focus();
//		}
//	else if(!vali(txtPwd,/^\d{6}$/))
//		txtPwd.focus();
//	else
//		form.submit();
//}