/**
 * 详情页的功能
 */
//动态生成50张图片
let html="";
let count=52;
for(let i=1;i<=count;i++){
    html+=`<li>
                <a href="#">
                    <img src="../imgs/detail/img/o${i}.jpg" alt="">
                </a>
            </li>`;
}
$(".show_photo").html(html);
let d=0;//图片延时动效的时间
let tz,ry,s;//图片实现动画时的X轴Y轴、旋转的角度
//绑定点击事件
$(window).load(function(){
    //循环遍历
    $("ul.show_photo img").each(function(i,elem){
        var d=Math.random()*3000;//随机获取一个等待的时间
        $(this).delay(d).animate({opacity: 0}, {
            step: function(n){
                s=1-n;
                $(this).css("transform", "scale("+s+")");
            },
            duration: 2000
        }).promise().done(function(){
            storm();
        })
    })
});
//图片旋转出现的函数
function storm() {
    $(".floor1 img").each(function(){
        d = Math.random()*1000;
        $(this).delay(d).animate({opacity: 1}, {
            step: function(n){
                //rotating the images on the Y axis from 360deg to 0deg
                ry = (1-n)*360;
                //translating the images from 1000px to 0px
                tz = (1-n)*1000;
                //applying the transformation
                $(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
            },
            duration: 2000
        })
    })
}
//给每个图片绑定点击事件
$("ul.show_photo").on("click","img",function(){
    let $img=$(this);
    let src=$img.attr("src");
    let arr=src.split("/");
    var i=arr[4].split(".")[0].slice(1);
    $img.css("src","../imgs/detail/img/o"+i+".jpg");
    var html="";
    html=` <img src="../imgs/detail/img/IMG/o${i}.jpg" alt="">`;
    $("div.contain_show").html(html).animate({
        width:"1240px",
        height:"700px",
        opacity:1,
        borderRadius:"50%"
    }).promise().done(function(){
        $(".floor2").css("margin-top","420px");
    });
})
//点击div的每个图片，消失
$("div.contain_show").click(function(){
    $(this).css({
        width:0,
        height:0
    }).promise().done(function(){
        $(".floor2").css("margin-top","0px");
    });

})