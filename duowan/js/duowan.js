//定于nav-bottom部分鼠标进入li以及子元素div属性变化
$('.nav-bottom-left1>li').mouseenter(function(e) {
	$(this).addClass('normal1').siblings('.normal1').removeClass("normal1");
	if(!$(this).children("div").hasClass("block")){ 
		$(this).siblings("li").children(".block").removeClass("block");
		$(this).children("div").addClass('block')
	 }
})
//点击触发div切换效果
$('#bbs1-1>li').mouseenter(function() {
	$(this).addClass('normal2').siblings('.normal2').removeClass("normal2");
	if(!$(this).children("div").hasClass("block")){
		$(this).siblings("li").children
    (".block").removeClass("block");
		$(this).children("div").addClass('block')
	}
})
//定义新闻部分点击切换新闻内容
$('#group1-ul>li').mouseenter(function(){
  $(this).addClass("normal3").siblings(".normal3").removeClass("normal3");
  if(!$(this).children("div").hasClass("block")){
  $(this).siblings("li").children(".block").removeClass("block");
  $(this).children("div").addClass('block');
  }
});
//歪弟日报区域的鼠标移动切换效果
$('#section3-top-ul>li').mouseenter(function(){
 $(this).addClass("normal3").siblings(".normal3").removeClass("normal3");
  if(!$(this).children("div").hasClass("block")){
  $(this).siblings("li").children(".block").removeClass("block");
  $(this).children("div").addClass('block');
  }
})
$("#section-top-ul2>li").mouseover(function(){
  if(!$(this).find("div").eq(1).hasClass("block")){
    $(this).find("div").eq(1).addClass("block");
    $(this).find("div").eq(0).removeClass("block")
    $(this).siblings("li").find("div:first-child").addClass("block");
    $(this).siblings("li").find("div:nth-child(2)").removeClass("block");
  };
})
//游戏说部分的图片切换
$(".gametalk>ul").on("mouseenter","a",function(e){
  var $target=$(e.target);
  $($target.attr("href")).stop(true).show().siblings(".block").stop(true).hide();
})
$(".gametalk>ul").on("mouseleave","a",function(e){
  var $target=$(e.target);
  $($target.attr("href")).stop(true).hide();
  $("#zero").stop(true).show();
})
//开始定义综合游戏部分鼠标移入切换事件
$('.zhgame-top>li').mouseenter(function(){
 $(this).addClass("normal2").siblings(".normal2").removeClass("normal2");
  if(!$(this).children("ul").hasClass("block")){
  $(this).siblings("li").children(".block").removeClass("block");
  $(this).children("ul").addClass('block');
  }
})
//开始定义虎牙直播切换部分
$(".webgame>li").mouseenter(function(){
 $(this).addClass("normal2").siblings(".normal2").removeClass("normal2");
  if(!$(this).children("ul").hasClass("block")){
    $(this).children("ul").addClass('block');
 $(this).siblings("li").children(".block").removeClass("block");
  }
})
$(".gamezhibo>li").mouseenter(function(){
 $(this).addClass("normal2").siblings(".normal2").removeClass("normal2");
})
//开始定义明星直播鼠标划入事件
$("#starzhibo>div").mouseover(function(){
  $(this).find("s").css("display","block");
  $(this).find("#p-two").css("width","170px")
})
$("#starzhibo>div").mouseleave(function(){
  $(this).find("s").css("display","none");
  $(this).find("#p-two").css("width","220px")
})
//开始定义游戏榜单的事件
$(".group1-ul>li>ul>li").mouseover(function(){
  if(!$(this).find("div").eq(1).hasClass("block")){
    $(this).find("div").eq(1).addClass("block");
    $(this).siblings("li").children(".block").removeClass("block");
  }
})
//开始定义注册模态框显示隐藏
$("#zhuce").click(function(e){
  e.preventDefault();
  $("#login").attr("class","block");
})
$(".login-container>img").click(function(){
  $("#login").attr("class","none");
})
//开始定义轮播
var index=1,
    $sliders=$(".slider-container .slide"),
    sliderW=$sliders.first().width(),
    mouse = false;
settime(1,4000);
function settime(i,time){
  $(".progress").animate({"width":"435px"},time,"linear",function(){
    $(".progress").css("width",0);
    i=== $sliders.length?i = 0 : null;
    $(".slider-container").animate({"margin-left":i*sliderW*-1});
    index=i+1;
    if(!mouse) {
    settime(index,4000);
    }
  })
}
$("#slider").on("mouseenter",function(){
  mouse = true;
  $(".progress").stop();
  $("#next").css("opacity",0.8);
  $("#prev").css("opacity",0.8);
})
$("#slider").on("mouseleave",function(){
  mouse = false;
  $("#next").css("opacity",0.2);
  $("#prev").css("opacity",0.2);
  var process=$(".progress").width()/sliderW;
  settime(index,parseInt(4000*(1-process)));
})
$("#next").click(function(){
      // console.log(index);//1
    index1=index-1;//将图片数量强行变成下标0
    index2 = (index1 < $sliders.length-1) ? (index++) : 0;
//    console.log(index2)
      // console.log($sliders.length)
    settime(index2,0)
  });
$("#prev").click(function(){
    index1=index-1;//0
      // console.log(1);
    index3 =(index1 > 0) ? (--index1):(4)
        // console.log(index3)
    settime(index3,0)
});
//这里开始定义电梯效果
n1 = {
  h1:$("#newgame").offset().top,
  h2:$("#game5253").offset().top,
  h3:$("#zonghegame").offset().top,
  h4:$("#huyazhibo01").offset().top,
  h5:$("#duowanpic").offset().top,
  h6:$("#gamebd").offset().top,
  
}
//这里开始电梯的点击跳转事件
 $("#dianti01").click(function(){
   $("body").animate({"scrollTop":"200px"},800,"linear")
 })
 $("#dianti02").click(function(){
   $("body").animate({"scrollTop":n1.h1-80},800,"linear")
 })
 $("#dianti03").click(function(){
   $("body").animate({"scrollTop":n1.h2-80},800,"linear")
 })
 $("#dianti04").click(function(){
   $("body").animate({"scrollTop":n1.h3-80},800,"linear")
 })
 $("#dianti05").click(function(){
   $("body").animate({"scrollTop":n1.h4-80},800,"linear")
 })
 $("#dianti06").click(function(){
   $("body").animate({"scrollTop":n1.h5-80},800,"linear")
 })
 $("#dianti07").click(function(){
   $("body").animate({"scrollTop":n1.h6-80},800,"linear")
 })
 $(".top").click(function(){
   $("body").animate({"scrollTop":"0px"},800,"linear")
 })
//滚动事件绑定
$(window).scroll(function(){
  var scroll1=$(window).scrollTop();
  var h1=n1.h1;
  var h2=n1.h2;
  var h3=n1.h3;
  var h4=n1.h4;
  var h5=n1.h5;
  var h6=n1.h6;
  if(scroll1<h1){
  $(".dianti>li:nth-child(1)").addClass("normal4");
  $(".dianti>li:nth-child(1)").children("a").removeClass("block");
  $(".dianti>li:nth-child(1)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(1))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(1))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(1))").children("b").removeClass("block")
}
  if(scroll1>h1-100&&scroll1<h2-200){
  $(".dianti>li:nth-child(2)").addClass("normal4");
  $(".dianti>li:nth-child(2)").children("a").removeClass("block");
  $(".dianti>li:nth-child(2)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(2))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(2))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(2))").children("b").removeClass("block")
}
if(scroll1>=h2-100&&scroll1<h3-200){
  $(".dianti>li:nth-child(3)").addClass("normal4");
  $(".dianti>li:nth-child(3)").children("a").removeClass("block");
  $(".dianti>li:nth-child(3)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(3))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(3))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(3))").children("b").removeClass("block")
}
  if(scroll1>=h3-100&&scroll1<h4-100){
  $(".dianti>li:nth-child(4)").addClass("normal4");
  $(".dianti>li:nth-child(4)").children("a").removeClass("block");
  $(".dianti>li:nth-child(4)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(4))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(4))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(4))").children("b").removeClass("block")
}
  if(scroll1>=h4-100&&scroll1<h5-200){
  $(".dianti>li:nth-child(5)").addClass("normal4");
  $(".dianti>li:nth-child(5)").children("a").removeClass("block");
  $(".dianti>li:nth-child(5)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(5))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(5))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(5))").children("b").removeClass("block")
}
  if(scroll1>=h5-100&&scroll1<h6-200){
  $(".dianti>li:nth-child(6)").addClass("normal4");
  $(".dianti>li:nth-child(6)").children("a").removeClass("block");
  $(".dianti>li:nth-child(6)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(6))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(6))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(6))").children("b").removeClass("block")
}
  if(scroll1>=h6-100){
  $(".dianti>li:nth-child(7)").addClass("normal4");
  $(".dianti>li:nth-child(7)").children("a").removeClass("block");
  $(".dianti>li:nth-child(7)").children("b").addClass("block");
  $(".dianti>li:not(:nth-child(7))").removeClass("normal4");
  $(".dianti>li:not(:nth-child(7))").children("a").addClass("block");
  $(".dianti>li:not(:nth-child(7))").children("b").removeClass("block")
}

});
//鼠标划入切换背景图效果
$(".dianti>li").mouseover(function(){
  $(this).children("a").removeClass("block");
  $(this).children("b").addClass("block")
})
$(".dianti>li").mouseleave(function(){
  if($(this).hasClass("normal4")){
  $(this).children("a").removeClass("block");
  $(this).children("b").addClass("block")
  }else{
    $(this).children("b").removeClass("block");
  $(this).children("a").addClass("block")
  }
})
///这里开始登陆验证
$('#bt-login').click(function(e){
  e.preventDefault();
  //读取用户的输入——表单序列化
 var inputData = $('#login-form').serialize();
//  var uname=$("[name=uname]").val();
//  var upwd=$("[name=upwd]").val();
  //异步提交请求，进行验证
//  console.log(inputData);
  $.ajax({
    type: 'POST',
    url: 'data/1_login.php',
    data: inputData,
    success: function(txt, msg, xhr){
      if(txt=='ok'){  //登录成功
        $('#login').fadeOut(300);
        var loginName = $('[name="uname"]').val();
        localStorage['loginName']= loginName;
        $('#zhuce a').html('欢迎回来：'+loginName); 
        $("#success").animate({"left":"0px"},1000,"linear",function(){
          setTimeout(function(){
            $("#success").animate({"left":"-150px"},1000,"linear")
          },1000)
        });
      }else { //登录失败
        $("#err").animate({"left":"0px"},1000,"linear",function(){
          setTimeout(function(){
            $("#err").animate({"left":"-150px"},1000,"linear")
          },1000)
        });
      }
    },
    error:function(){
    console.log("错误")
  }
  });
});
    



