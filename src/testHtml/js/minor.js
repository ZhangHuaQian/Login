// 中英文页面的切换代码开始


    var titleText=$(document.body).attr("data-text");
    if(titleText==='zh'){
        var langText_en='english';
        $("#header .container .nav-menu .language").text(langText_en);
    }
    if(titleText==='en'){
        var langText_zh='CHINESE';
        $("#header .container .nav-menu .language").text(langText_zh);
    }


// 中英文页面的切换代码结束

//鼠标点击声音代码开始

// 创建一个audio标签
    var audio=document.createElement("audio");
// src引入
    audio.src=" https://zhanghuaqian.github.io/AUDIO/mis.wav";
// 把audio标签加到body中
    document.querySelector('body').appendChild(audio);
//创建点击事件
    document.onclick=function () {
        audio.play();
    };

//鼠标点击声音代码结束


//第一个开始
var div_one=$(".feature-inner .div_a");
div_one.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_a').stop(true).show(230,"linear");
    $('.feature-inner .i_a').stop(true).hide(230,"linear");
    $('.feature-inner .p_a').stop(true).hide(230,"linear");
    $('.feature-inner .h_a').stop(true).hide(230,"linear")

});


div_one.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_a').stop(true).hide(230,"linear");
    $('.feature-inner .i_a').stop(true).show(230,"linear");
    $('.feature-inner .p_a').stop(true).show(230,"linear");
    $('.feature-inner .h_a').stop(true).show(230,"linear")
});



//第一个结束

//第二个开始

var div_two=$(".feature-inner .div_b");
div_two.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_b').stop(true).show(230,"linear");
    $('.feature-inner .i_b').stop(true).hide(230,"linear");
    $('.feature-inner .p_b').stop(true).hide(230,"linear");
    $('.feature-inner .h_b').stop(true).hide(230,"linear")

});
div_two.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_b').stop(true).hide(230,"linear");
    $('.feature-inner .i_b').stop(true).show(230,"linear");
    $('.feature-inner .p_b').stop(true).show(230,"linear");
    $('.feature-inner .h_b').stop(true).show(230,"linear")
});

//第二个结束


//第三个开始

var div_three=$(".feature-inner .div_c");
div_three.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_c').stop(true).show(230,"linear");
    $('.feature-inner .i_c').stop(true).hide(230,"linear");
    $('.feature-inner .p_c').stop(true).hide(230,"linear");
    $('.feature-inner .h_c').stop(true).hide(230,"linear")

});
div_three.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_c').stop(true).hide(230,"linear");
    $('.feature-inner .i_c').stop(true).show(230,"linear");
    $('.feature-inner .p_c').stop(true).show(230,"linear");
    $('.feature-inner .h_c').stop(true).show(230,"linear")
});

//第三个结束

//第四个开始


var div_four=$(".feature-inner .div_d");
div_four.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_d').stop(true).show(230,"linear");
    $('.feature-inner .i_d').stop(true).hide(230,"linear");
    $('.feature-inner .p_d').stop(true).hide(230,"linear");
    $('.feature-inner .h_d').stop(true).hide(230,"linear")

});
div_four.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_d').stop(true).hide(230,"linear");
    $('.feature-inner .i_d').stop(true).show(230,"linear");
    $('.feature-inner .p_d').stop(true).show(230,"linear");
    $('.feature-inner .h_d').stop(true).show(230,"linear")
});
//第四个结束

//第五个开始

var div_five=$(".feature-inner .div_e");
div_five.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_e').stop(true).show(230,"linear");
    $('.feature-inner .i_e').stop(true).hide(230,"linear");
    $('.feature-inner .p_e').stop(true).hide(230,"linear");
    $('.feature-inner .h_e').stop(true).hide(230,"linear")

});
div_five.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_e').stop(true).hide(230,"linear");
    $('.feature-inner .i_e').stop(true).show(230,"linear");
    $('.feature-inner .p_e').stop(true).show(230,"linear");
    $('.feature-inner .h_e').stop(true).show(230,"linear")
});

//第五个结束


//第六个开始


var div_six=$(".feature-inner .div_f");
div_six.mouseenter(function () {
    console.log('那有什么岁月静好');

    $('.feature-inner .img_f').stop(true).show(230,"linear");
    $('.feature-inner .i_f').stop(true).hide(230,"linear");
    $('.feature-inner .p_f').stop(true).hide(230,"linear");
    $('.feature-inner .h_f').stop(true).hide(230,"linear")

});
div_six.mouseleave(function () {
    console.log('只不过是有人为我们负重前行');
    $('.feature-inner .img_f').stop(true).hide(230,"linear");
    $('.feature-inner .i_f').stop(true).show(230,"linear");
    $('.feature-inner .p_f').stop(true).show(230,"linear");
    $('.feature-inner .h_f').stop(true).show(230,"linear")
});

//第六个结束

$('#footer .container .row .margin-top-15 img').css({"height":" 200px","width":"170px"});
//点赞模块开始


$(function () {


    $("#btn1").click(function(){
        var x = 100;
        var y = 900;
        var num = Math.floor(Math.random() * 3 + 1);
        var index=$('.demo').children('img').length;
        // $('.demo img').addClass('img_dz');
        var rand = parseInt(Math.random() * (x - y + 1) + y);

        $(".demo").append("<img src='' alt='' class='img_dz' >");
        $('.demo img:eq(' + index + ')').attr('src','images/'+num+'.png');
        $(".img_dz").animate({
            bottom:"800px",
            opacity:"0",
            left: rand,
        },3000)

    })
});

//点赞模块结束


//时间代码开始




var div_a=document.createElement("div");
var span_a=document.createElement('span');
var span_b=document.createElement('span');
var span_c=document.createElement('span');
var span_d=document.createElement('span');
var span_e=document.createElement('span');
var span_f=document.createElement('span');


span_a.setAttribute('style','color:red');
span_b.setAttribute('style','color:chocolate');
span_c.setAttribute('style','color:brown');
span_d.setAttribute('style','color: chartreuse;');
span_e.setAttribute('style','color:#21759b;');
span_f.setAttribute('style','color:#219624;');

document.body.appendChild(div_a);

div_a.appendChild(span_a);
div_a.appendChild(span_b);
div_a.appendChild(span_c);
div_a.appendChild(span_d);
div_a.appendChild(span_e);
div_a.appendChild(span_f);


setInterval(function () {
    var today=new Date();
    var y=today.getFullYear();
    var M=today.getMonth()+1;
    var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);



    span_a.innerText=y+'年';
    span_b.innerText=M+'月';
    span_c.innerText=d+'日';
    span_d.innerText=h+'时';
    span_e.innerText=m+'分';
    span_f.innerText=s+'秒';


},100);

function checkTime(i) {
    if(i<10){
        i='0'+i;
        return i;
    }else{
        return i;
    }

}


//代码结束

//素材来源解释开始


$('.img-fluid').attr("title","素材来源百度图库或者见图片水印");

//素材来源解释结束

//加属性开始

$('.courses-area .row .offset-lg-1 .courses-list li').css("text-align","center");

//加属性结束

// logo变大

// $('#header .container #logo a img').css("width","180px").css("height","60px");
$('#header .container #nav-menu-container .nav-menu a').css('fontsize','14px');

// div_one.on("taphold",function () {
//     console.log('那有什么岁月静好');
//
//     $('.feature-inner .img_a').stop(true).show(3000,"linear");
//     $('.feature-inner .i_a').stop(true).hide(3000,"linear");
//     $('.feature-inner .p_a').stop(true).hide(3000,"linear");
//     $('.feature-inner .h_a').stop(true).hide(3000,"linear")
// });

// div_one.vmouseover(function () {
//
//     console.log('只不过是有人为我们负重前行');
//     $('.feature-inner .img_a').stop(true).hide(1000,"linear");
//     $('.feature-inner .i_a').stop(true).show(1000,"linear");
//     $('.feature-inner .p_a').stop(true).show(1000,"linear");
//     $('.feature-inner .h_a').stop(true).show(1000,"linear")
// });

//标题跑马
function init(){
    //获取标题
    var title=document.title;
    //分割字符串--->字符数组
    var arr=title.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle=arr.join(" ");
    //返回给浏览器
    document.title=lastTitle;
    //定时一直执行
    window.setTimeout("init()",500);
}
window.onload=init;
//标题跑马结束



if(titleText==='en'){

function init_a(){
    //获取标题
    var text_a=$('.pm_a');
    var tit=text_a.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_a=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_a').innerHTML=lastTitle_a;
    console.log(lastTitle_a);
    //定时一直执行
    window.setTimeout("init_a()",500);
}
init_a();

function init_b(){
    //获取标题
    var text_b=$('.pm_b');
    var tit=text_b.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_b=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_b').innerHTML=lastTitle_b;

    console.log(lastTitle_b);
    //定时一直执行
    window.setTimeout("init_b()",500);
}
init_b();

function init_c(){
    //获取标题
    var text_c=$('.pm_c');
    var tit=text_c.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_c=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_c').innerHTML=lastTitle_c;
    console.log(lastTitle_c);
    //定时一直执行
    window.setTimeout("init_c()",500);
}
init_c();

function init_d(){
    //获取标题
    var text_d=$('.pm_d');
    var tit=text_d.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_d=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_d').innerHTML=lastTitle_d;
    console.log(lastTitle_d);
    //定时一直执行
    window.setTimeout("init_d()",500);
}
init_d();

function init_e(){
    //获取标题
    var text_e=$('.pm_e');
    var tit=text_e.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_e=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_e').innerHTML=lastTitle_e;
    console.log(lastTitle_e);
    //定时一直执行
    window.setTimeout("init_e()",500);
}
init_e();

function init_f(){
    //获取标题
    var text_e=$('.pm_f');
    var tit=text_e.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_f=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_f').innerHTML=lastTitle_f;
    console.log(lastTitle_f);
    //定时一直执行
    window.setTimeout("init_f()",500);
}
init_f();

function init_g(){
    //获取标题
    var text_e=$('.pm_g');
    var tit=text_e.text();
    //分割字符串--->字符数组
    var arr=tit.split(" ");
    //删除第一个元素并返回该元素
    var e=arr.shift();
    //把一个对象添加到数组末尾
    arr.push(e);
    //把数组转换成字符串
    var lastTitle_g=arr.join(" ");
    //返回给浏览器
    document.querySelector('.pm_g').innerHTML=lastTitle_g;
    console.log(lastTitle_g);
    //定时一直执行
    window.setTimeout("init_g()",500);
}
init_g();
}






