/**
 * 背景图片的功能
 */
//用canvas画首页的背景
$(function(){
    var canvas = document.querySelector('canvas'),//获得画布
        ctx = canvas.getContext('2d')  //获得画笔
    canvas.width = window.innerWidth;  //画布的宽度
    canvas.height = window.innerHeight;//画布的高度
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