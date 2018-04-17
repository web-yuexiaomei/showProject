$(()=>{
	//banner部分
  var banenr2 = new FragmentBanner({
		container : "#banner2",//选择容器 必选
		imgs : ['images/b1.jpg','images/b2.jpg','images/b3.jpg','images/b4.jpg','images/b5.jpg','images/b6.jpg','images/b7.jpg'],//图片集合 
	});
	//秒杀活动倒计时
 function task1(){
 	var end=new Date("2018/06/12 17:00:00");
 	var now=new Date();
 	var s=parseInt((end-now)/1000);
 	//距离下一个假期还有: ?天?小时?分?秒
 	var day=$("#day");
 	var hour=$("#hour");
 	var minute=$("#minute");
 	var second=$("#second");
//	var span=$();
 	if(s>0){
 		var d=parseInt(s/3600/24);
 		if(d<10) d="0"+d;
 		//s/3600/24,再下取整
 		var h=parseInt(s%(3600*24)/3600);
 		if(h<10) h="0"+h;
 		//s/(3600*24)的余数,再/3600,再下去整
 		var m=parseInt(s%3600/60);
 		if(m<10) m="0"+m;
 		//s/3600的余数,再/60，再下取整
 		s%=60;//s/60的余数
 		if(s<10) s="0"+s;
 		day.html(d);
 		hour.html(h);
 		minute.html(m);
 		second.html(s);
 	}else{
 		clearInterval(timer);
 		timer=null;
// 		span.html("活动结束啦！！！");
 	}
 }
 task1();
 var timer=setInterval(task1,1000);
$(()=>{
	//分类栏目的手风琴
 //查找class为tree的ul下的span，保存在spans中
 var $ul=$("ul.tree");
 //遍历spans中每个span
 $ul.on("click","a",function(e){
	 e.preventDefault();
//	 alert("nihap");
	var $a=$(e.target);
//	console.log(e);
	if($a.is(".open")){
		$a.removeClass("open");
	}else{
		$a.addClass("open");
		$("ul.tree>li>a.open").removeClass("open");
		$a.addClass("open");
	}
	});
})
//视频部分
	var v1=$("div.video"); //获取视频区域
	var v2=document.querySelector("div.video>video.v2");
	var ad=$("div.video>img.ad"); //广告区域
	var ctrl=$("div.video>span.ctrl"); //播放控制按钮
	var ctrlImg=$("div.video>span.ctrl>img");
	// 鼠标移入和移除
	v1.hover(function(){
		ctrl.css("opacity",1);
	},function(){
		ctrl.css("opacity",0);
	});
	//控制播放
	ctrl.click(function(){
		if(v2.paused){  //暂停
            ad.css("opacity",0);
            v2.play();  //播放
            ctrlImg.attr("src","imgs/index/pause.png");
		}
		else{
            v2.pause();//暂停
            ad.css("opacity",1);
            ctrlImg.attr("src","imgs/index/play.png");
		}
	});
});

var $lift=$(".lift");
    $(()=>{//楼层滚动
    var $floors=$(".floor");
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop
            ||document.documentElement.scrollTop;
        //鼠标滚动的距离
        var offsetTop1=$(".show").offset().top; //元素相对于网页距离
        //console.log(scrollTop, offsetTop1);
        if(offsetTop1<=scrollTop+innerHeight/2) //inner
            $lift.show();
        else
            $lift.hide();
        $floors.each(function(i,floor){
            var $floor=$(floor);//转化为JQuery对象
            var offsetTop=$floor.offset().top;  //每个楼层相对于页面的固定距离
            if(offsetTop<=scrollTop+innerHeight/2){
                $lift.children(":eq("+i+")").addClass("hover")
                    .siblings().removeClass("hover");
            }
        })
        var viewBottom=scrollTop+innerHeight-80;//看到的底部
        //增加滚动事件触发的特效
        var floor1=$("div.show");//<!--2.2 特别推荐栏目-->
        var floor2=$("div.style");//<!--2.3 近期推荐-->
        var floor3=$("div.floor1");//<!--2.4 楼层一:在线订单-->
        var floor4=$("div.floor2");//<!--2.5 楼层二:全国各店-->
        var floor5=$("div.floor3");//<!--2.6 楼层三:客照欣赏-->
        if(floor1.offset().top<=viewBottom){
            floor1.css({"width":"1440px"});
			$("div.title1").css("opacity",1);
			floor("title1");

        }
        if(floor2.offset().top<=viewBottom){
            $("div.style li.side>div img").css({
                "opacity":1,
                "left":0
            });
			$("div.style li.center div>img").css({
                "opacity":1,
                "left":0
            });
			$("div.title2").css("opacity",1);
			floor("title2");
        }
        if(floor3.offset().top<=viewBottom){
            $("div.floor1>div.order").css({"height":"970px"});
			$("div.title3").css("opacity",1);
			floor("title3");
        }
        if(floor4.offset().top<=viewBottom){
			$("div.title4").css("opacity",1);
			floor("title4");
			$(".b_map").css({
				"height":"549px",
				"opacity":0.5
				});
        }
        if(floor5.offset().top<=viewBottom){
			$("div.title5").css("opacity",1);
			floor("title5");
			show1().then(show2);
        }
    });
})
//楼层导航的点击事件
$(()=>{
		$lift.children().click(function(e){
		e.preventDefault();
		var $li=$(this);
		var i=$li.index();  //获取当前li的下标
		var offsetTop=$(".floor:eq("+i+")").offset().top;
		$("html").stop(true).animate({
			scrollTop:offsetTop
		},1000);
	})
})
	//用canvas画首页的背景
$(function(){
  var canvas = document.querySelector('canvas'),//获得画布
      ctx = canvas.getContext('2d'); //获得画笔
  canvas.width = window.innerWidth;  //画布的宽度
  canvas.height = window.innerHeight;//画布的高度
  //console.log(canvas.height);
  //console.log($("footer").offset().top);
  ctx.lineWidth = .3;   //描边宽度
  ctx.strokeStyle = (new Color(150)).style;  //描边颜色（随机的）

  var mousePosition = {  //鼠标的位置
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  };

  var dots = {  //创建点对象
    nb: 700,  //一个数组里面保持700个点
    distance: 50,  //规定的点与点之间的可连接范围
    d_radius: 20, 
    array: []  //保存点的数组
  };

  function colorValue(min) { //随机生成一个数
    return Math.floor(Math.random() * 255 + min);
  }
  
  function createColorStyle(r,g,b) {  //随机生成颜色
	return `rgb(${r},${g},${b})`;
  }
  
  function mixComponents(comp1, weight1, comp2, weight2) {  //两个点之间的关系处理
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }
  
  function averageColorStyles(dot1, dot2) {  //两个连接的点之间的线的颜色
    var color1 = dot1.color,
        color2 = dot2.color;
    
    var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
  }
  
  function Color(min) {  //颜色的构造函数
    min = min || 0;
    this.r = colorValue(min);
    this.g = colorValue(min);
    this.b = colorValue(min);
    this.style = createColorStyle(this.r, this.g, this.b);
  }

  function Dot(){  //点的构造函数
    this.x = Math.random() * canvas.width;  //点的横坐标
    this.y = Math.random() * canvas.height; //点的纵坐标

    this.vx = -.5 + Math.random();   //点随机移动的横坐标（有正有负）
    this.vy = -.5 + Math.random();   //点随机移动的纵坐标

    this.radius = Math.random() * 2;  //点的半径

    this.color = new Color();    //点的颜色随机生成
   // console.log(this);
  }

  Dot.prototype = {  //点的原型对象（画点）
    draw: function(){
      ctx.beginPath();  //开始新的路径
      ctx.fillStyle = this.color.style;  //填充的颜色
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //画圆圈
      ctx.fill();  //填充
    }
  };

  function createDots(){  //创建点的个数的函数，以数组为单位
    for(i = 0; i < dots.nb; i++){
      dots.array.push(new Dot());  //创建的点保存在数组里
    }
  }

  function moveDots() {  //点的移动函数
    for(i = 0; i < dots.nb; i++){

      var dot = dots.array[i];

      if(dot.y < 0 || dot.y > canvas.height){ //如果该点的纵坐标超出屏幕
        dot.vx = dot.vx;
        dot.vy = - dot.vy;
      }
      else if(dot.x < 0 || dot.x > canvas.width){  //如果该点的横坐标超出屏幕
        dot.vx = - dot.vx;
        dot.vy = dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }

  function connectDots() {   //点与点之间连接的函数
    for(i = 0; i < dots.nb; i++){  //一个点与该数组里面所有的点对比关系，然后在连接，所有要用到两次循环
      for(j = 0; j < dots.nb; j++){
        i_dot = dots.array[i];
        j_dot = dots.array[j];
		//判断两个点之间的距离是否在规定范围之内
        if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
			//判断这个点是否在鼠标指定的范围
          if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
            ctx.beginPath();
            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }

  function drawDots() {  //画点
    for(i = 0; i < dots.nb; i++){
      var dot = dots.array[i];
      dot.draw();
    }
  }

  function animateDots() {  //添加动画
    ctx.clearRect(0, 0, canvas.width, canvas.height); //移动之前先清除
    moveDots(); //移动
    connectDots(); //连接
    drawDots(); //画

    requestAnimationFrame(animateDots);	//智能定时器
  }

  $('canvas').on('mousemove', function(e){ //鼠标移动的话跟着点的位置移动
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  });

  $('canvas').on('mouseleave', function(e){//鼠标离开的话，默认在屏幕的中间
    mousePosition.x = canvas.width / 2;
    mousePosition.y = canvas.height / 2;
  });

  createDots();  //调用创建点的函数
  requestAnimationFrame(animateDots);	//调用创建动画的函数
});
function floor(floor){
	function text1(){
		var promise=new Promise(function(open){
			$("."+floor+">div>.span1").css("animation","down 1.5s ease both");
			open();
		})
		return promise;
	}
	function text2(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				$("."+floor+">div>.span2").css("animation","down 1.5s ease both");
				open();
			},500)
		})
		return promise;
	}
	function text3(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				$("."+floor+">div>.span3").css("animation","down 1.5s ease both");
				open();
			},600)
		})
		return promise;
	}
	function text4(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				$("."+floor+">div>.span4").css("animation","down 1.5s ease both");
				open();
			},600)
		})
		return promise;
	}
//	倒影
	function text(){
		var promise=new Promise(function(open){
			$("."+floor+">div.text>span").css("animation","down2 1.5s ease both");
			open();
		})
		return promise;
	}
	text1().then(text2).then(text3).then(text4).then(text);
}



//全国各地
$(function(){
	$(".e_map_tags li").mouseover(function(){
		$(this).addClass("centers").siblings("li").removeClass("centers");
		var index=$(this).index();
		$(".m_content").eq(index).show().siblings(".m_content").hide();
	});
	//左右切换
	//点击左箭头
	$(".m_left").click(function(){
		//获取当前左切换 父亲的 index
		var sideindexL=$(this).parents(".m_content").index();
		//全部隐藏
		$(".m_content").hide();
		//父亲的上一个显示
		$(this).parents(".m_content").prev(".m_content").fadeIn();
		//地图对应index添加默认样式
		$(".e_map_tags li").eq(sideindexL-1).addClass("centers").siblings("li").removeClass("centers");
		//当左切换为第一个时候  第一个显示
		if(sideindexL==0){
			$(".m_content:first").show();
			alert("前面没有了！")
			$(".e_map_tags li").eq(0).addClass("centers").siblings("li").removeClass("centers");
		}
	});
	
	//点击右箭头
	$(".m_right").click(function(){
	     //获取页面全部.m_content 的数量
		var sideindexR=$(this).parents(".m_content").index();
		$(".m_content").hide();
		$(this).parents(".m_content").next(".m_content").fadeIn();
		$(".e_map_tags li").eq(sideindexR+1).addClass("centers").siblings("li").removeClass("centers");
		if(sideindexR==2){//这里的数字 是你地图的个数减去1
			$(".m_content:last").show();
			alert("最后一个了！")
			$(".e_map_tags li").eq(sidelenAll).addClass("centers").siblings("li").removeClass("centers");
		}
	});
	
});