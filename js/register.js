/*//name为uname和pwd、email的文本框绑定获得焦点事件
获得表单对象: */
			var form=document.forms[0];
			var uname=form.uname;
			var upwd=form.upwd;
			var cpwd=form.cpwd;
			var email=form.email;
			//绑定获取焦点事件
			uname.onfocus=focus;
			upwd.onfocus=focus;
			cpwd.onfocus=focus;
			email.onfocus=focus;
			function focus(){
				//当前文本框边框加粗
				this.className="txt_focus";
			}
			//鼠标失去焦点事件
			function vali(txt,reg){
				//找到下面显示错误的p
				var p=txt.nextElementSibling.nextElementSibling;
				//找到右边显示正确的span
				var span=txt.nextElementSibling;
				//input的输入边框变回去
				txt.className="";
				if(reg.test(txt.value)){
					span.className="vali_success";
					p.style.display="none";
					document.getElementById("show").className="vali_info";
//					return true;
				}else{
					p.className="vali_fail";
					p.style.display="block";
					span.className="";
//					return false;
				}
			}
			//用户名失去焦点事件
			uname.onblur=function(){
				vali(this,/^\w{6,16}$/);
			}
			//密码失去焦点事件
			upwd.onblur=function(){
				vali(this,/^\w{6,16}$/);
			}
			//失去焦点，验证两次密码是否一致
			cpwd.onblur=function(){
				//找到下面显示错误的p
				var p=this.nextElementSibling.nextElementSibling;
				//找到右边显示正确的span
				var span=this.nextElementSibling;
				if((this.value==upwd.value)&&this.value!==""){  //两次密码一致
						span.className="vali_success";   
						p.style.display="none";
					}
				else{
						p.className="vali_fail";
						span.className="";
					}
			}
			//失去焦点，验证邮箱的格式是否正确
			email.onblur=function(){
				vali(this,/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/);
			}
var btn=document.getElementById("button");
btn.onclick=function(){
			var uname=document.getElementById("uname").value;
//			console.log(uname);
			ajax({
				    type:"get",
					url:"../php/check_uname.php",
					data:"uname="+uname
					}).then(data=>{
						var url="../index.html";
						if(data==1){
							form.submit();
							alert("恭喜注册成功");
						}else{
							document.getElementById("show").className="";
							document.getElementById("uname").nextElementSibling.className="";
						}
			})
}
//验证码模块

	var input=document.getElementById("code");
	var p=document.getElementById("code_show");
	var img=document.querySelector("#code_show>img");
	var msg=document.getElementById("msg");
	input.onfocus=function(){
		p.className="";
	}
	input.onblur=function(){
		if(this.value!==""){
			ajax({
					type:"get",
					url:"../php/check_code.php",
					data:"code="+this.value
				}).then(text=>{
					if(text=="true"){
						msg.className="vali_success";
					}else{
						msg.className="vali_fail";
					}
				})
			}else{
				msg.innerHTML="";
				msg.className="";
			}
		}
		img.onclick=function(){
			this.src="../php/getCode.php";
		}
