<?php
	@$uname=$_REQUEST["uname"];
	if($uname==null||$uname==""){
		die("用户名不能为空！");
	}
	@$upwd=$_REQUEST["upwd"];
	if($upwd==null||$upwd==""){
		die("密码不能为空！");
	}
	require("init.php");
	$sql="SELECT * FROM wv_user WHERE uname='$uname' AND binary upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		echo "用户登录失败！！<br>";
		echo "请检查SQL语句：$sql";
	}else{
		$row=mysqli_fetch_assoc($result);
		if($row===null)
			echo 0;  
		else{
			echo 1;
//			$url="../index.html";
//			echo "<script language='javascript' type='text/javascript'>";
//			echo "window.location.href='$url'";
//			echo "</script>";
		}
	}
?>