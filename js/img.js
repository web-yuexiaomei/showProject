function draws(op,width,height,mrgtop,mrgright,xcount,ycount,mcount){
		function drawcanva(){//画布的实现
			//op	画布的大小
			//width	小图的宽度
			//height	小图的高度
			//mrgtop	图片的上边距
			//mrgright	图片的右边距
			//xcount	一行图片的个数
			//ycount	一列图片的个数
			//mcount	一张图片的分割数
			op.style.width=width*xcount*mcount+(xcount-1)*mrgright+"px";
			op.style.height=height*ycount*mcount+(ycount-1)*mrgtop+"px";
		}
		function randoms(min,max){//获取随机值，用来分配图片位置
			return Math.random()*(max-min)+min;
		}		
		function drawImgs(){	//画上图片
			var html=``;
			for (var i=1;i<=54 ;i++ )
				{
				html+=`<img src="imgs/index/guest/o${i}.png" class="os${i}" style="top:${randoms(1,height*2)}px;left:1px;width:${width}px;height:${height}px" alt="">`;
				}
				op.innerHTML=html;
		}		
		drawcanva();
		drawImgs();
	}
	window.onload=function(){
			var op=document.querySelector(".guest-photos");
			draws(op,133,90,30,30,3,2,3);
		}
		function move(op,width){
			for (var i=0;i<op.length ;i++ )
			{
				var j=i+1;
				var nu=j%9;
				if(nu>=1&&nu<=3){
					var num=Math.ceil(j/9);
					if(num<=3&&num>=1){						
						op[i].style.top=`${-(num-1)*94}px`;
						op[i].style.left=`${(num-1)*(width*3+30)}px`;
					}
					else{
						op[i].style.top=`${-(num-3-1)*94}px`;
						op[i].style.left=`${(num-3-1)*(width*3+30)}px`;
					}
				}
				else if(nu>=4&&nu<=6){
					var num=Math.ceil(j/9);
					if(num<=3&&num>=1){
						op[i].style.top=`${num==1?90:num==2?-6:-99}px`;
						op[i].style.left=`${num==1?(num-2)*(width*3):(num-2)*(width*3+30)+30}px`;
					}
					else{
						op[i].style.top=`${num==4?90:num==5?-6:-99}px`;
						op[i].style.left=`${num==4?(num-5)*(width*3):(num-5)*(width*3+30)+30}px`;
					}
				}
				else{
					var num=Math.ceil(j/9);
					if(num<=3&&num>=1){
						op[i].style.top=`${num==1?(3-num)*90:num==2?(3-num)*84:-10}px`;
						op[i].style.left=`${num==1?(num-3)*(width*3):num==2?(num-3)*(width*3)+30:(num-3)*(width*3)+60}px`;
					}
					else{
						op[i].style.top=`${num==4?(6-num)*90:num==5?(6-num)*84:-10}px`;
						op[i].style.left=`${num==4?(num-6)*(width*3):num==5?(num-6)*(width*3)+30:(num-6)*(width*3)+60}px`;
					}
				}
				op[i].style.opacity=1;
			}
		}
		function show1(){
			var promise=new Promise(function(open){
				var op=$("div.guest-photos>img");
				move(op,133);
				open();
            })
            return promise;
		}
		function show2() {
			var promise = new Promise(function (open) {
				setTimeout(function(){
					var contain = $("div.floor3>div.show_contain");
					contain.css("opacity",1);
					$("div.guest-photos").css("opacity",0);
					open();
				},3000);
			})
			return promise;
		}