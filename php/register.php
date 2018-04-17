<?php
	@$uname=$_REQUEST["uname"];
	if($uname==null||$uname==""){
		die("用户名不能为空！");
	}
	@$upwd=$_REQUEST["upwd"];
	if($upwd==null||$upwd==""){
		die("密码不能为空！");
	}
	@$email=$_REQUEST["email"];
	if($email==null||$email==""){
		die("邮箱不能为空！");
	}
	require("init.php");
	$sql="INSERT INTO wv_user(uname,upwd,email) VALUES('$uname','$upwd','$email')";
	$result=mysqli_query($conn,$sql);
	if($result==false){
		echo "注册失败";
	}else{
		$url="../index.html";
		echo "<script language='javascript' type='text/javascript'>";
		echo "window.location.href='$url'";
		echo "</script>";
	}
?>