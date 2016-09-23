//阻止页面选中
document.onmousedown=function () {
    document.onmousemove=function () {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
    document.onmouseup=function () {
        document.onmousemove = null;
    }
}


var arr=["#2C80CB","#2C80CB","#2C80CB","#2C80CB","#2C80CB","#2C80CB","#2C80CB"]


$('#fullpage').fullpage({
    menu:true,
    navigationPosition:"right bottom",
    navigationColor:"red",
    loopHorizontal:false,
    anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
    sectionsColor: ['#1bbc9b', '#eee', '#05A4C2', '#eee','','#eee',''],
    navigation:true,
    navigationTooltips:["首页","基本资料","专业技能","PS作品","网页作品","游戏及其他","联系我"],
    afterLoad: function(anchorLink, index){
        $("#myMenu li").css("background","")
        $("#myMenu li").eq(index-1).css("background",arr[index-1])
        $("#myMenu1 li a").css("background","")
        $("#myMenu1 li a").eq(index-1).css("background",arr[index-1])
        if(index==1){
            $(".zhuye").css({"transform":"translate(0px,0px) scale(1,1)","opacity":1})
            setTimeout(function(){
                $(".photo-box").css("opacity",1)
                $(".shade h3").css("opacity",1)
            },2000)

        }else if(index==2){
            $(".box-left").css({"transform":"translate(0px,0px)","opacity":1})
            $(".box-right").css({"transform":"translate(0px,0px)","opacity":1})
        }else if(index==3){
            $(".htmlcss:eq(0) .rightcircle").css("animation","circleProgressLoad_right 5s linear")
            $(".htmlcss:eq(0) .leftcircle").css("animation","circleProgressLoad_left 5s linear")
            $(".htmlcss:eq(1) .rightcircle").css("animation","circleProgressLoad_right2 5s linear ")
            $(".htmlcss:eq(1) .leftcircle").css("animation","circleProgressLoad_left2 5s linear ")
            $(".htmlcss:eq(2) .rightcircle").css("animation","circleProgressLoad_right3 5s linear ")
            $(".htmlcss:eq(2) .leftcircle").css("animation","circleProgressLoad_left3 5s linear ")
            $(".htmlcss:eq(3) .rightcircle").css("animation","circleProgressLoad_right4 5s linear ")
            $(".htmlcss:eq(3) .leftcircle").css("animation","circleProgressLoad_left4 5s linear ")
            $(".htmlcss:eq(4) .rightcircle").css("animation","circleProgressLoad_right5 5s linear ")
            $(".htmlcss:eq(4) .leftcircle").css("animation","circleProgressLoad_left5 5s linear ")
            $(".htmlcss:eq(5) .rightcircle").css("animation","circleProgressLoad_right6 5s linear ")
            $(".htmlcss:eq(5) .leftcircle").css("animation","circleProgressLoad_left6 5s linear ")
        }else if(index==5){
            //$(".item-5 h3").css({left:"13%","opacity":1})
            //$(".item-5 .box1").css({top: "10%","opacity":1})
            //$(".item-5 .box2").css({top: "10%","opacity":1})
            //$(".item-5 .box3").css({top: "57%","opacity":1})
            $(".item5 .box").css("animation","box 22s ease")
            $(".item5 a").eq(0).css("animation","box1 2s ease forwards")
            $(".item5 a").eq(1).css("animation","box2 2s ease forwards 2s")
            $(".item5 a").eq(2).css("animation","box3 2s ease forwards 4s")
            $(".item5 a").eq(3).css("animation","box4 2s ease forwards 6s")
            $(".item5 a").eq(4).css("animation","box5 2s ease forwards 8s")
            $(".item5 a").eq(5).css("animation","box6 2s ease forwards 10s")
            $(".item5 a").eq(6).css("animation","box7 2s ease forwards 12s")
            $(".item5 a").eq(7).css("animation","box8 2s ease forwards 14s")
        }else if(index==6){
            //$("#myMenu").css("background","#999")
            //$("#myMenu1").css("background","#999")
            //$("#myMenu1 .nav").css("background","#999")
            //$("#myMenu1 .nav li a").css("color","#000")
            //$("#myMenu1 .gsb .top").css("background","#000")
            //$("#myMenu1 .gsb .bottom").css("background","#000")
            //$("#myMenu1 strong").css("color","#000")
            //$("#myMenu strong").css("color","#000")
            //$("#myMenu li a").css("color","#000")
            $(".box6-con").css({transform:"scale(1,1)",opacity:1})
        }

    },
    onLeave: function(index, nextIndex, direction){
        if(index==1){
            $(".zhuye").css({"transform":"translate(170px,40px) scale(0.1,0.1)","opacity":0})
            $(".photo-box").css("opacity",0)
            $(".shade h3").css("opacity",0)
        }else if(index==2){
            $(".box-left").css({"transform":"translate(-600px,0px)","opacity":0})
            $(".box-right").css({"transform":"translate(600px,0px)","opacity":0})
        }else if(index==3){
            $(".htmlcss:eq(0) .rightcircle").css("animation","")
            $(".htmlcss:eq(0) .leftcircle").css("animation","")
            $(".htmlcss:eq(1) .rightcircle").css("animation","")
            $(".htmlcss:eq(1) .leftcircle").css("animation","")
            $(".htmlcss:eq(2) .rightcircle").css("animation","")
            $(".htmlcss:eq(2) .leftcircle").css("animation","")
            $(".htmlcss:eq(3) .rightcircle").css("animation","")
            $(".htmlcss:eq(3) .leftcircle").css("animation","")
            $(".htmlcss:eq(4) .rightcircle").css("animation","")
            $(".htmlcss:eq(4) .leftcircle").css("animation","")
            $(".htmlcss:eq(5) .rightcircle").css("animation","")
            $(".htmlcss:eq(5) .leftcircle").css("animation","")

        }else if(index==5){
            //$(".item-5 h3").css({left:"-30%","opacity":0})
            //$(".item-5 .box1").css({top: "-10%","opacity":0})
            //$(".item-5 .box2").css({top: "-10%","opacity":0})
            //$(".item-5 .box3").css({top: "100%","opacity":0})
            $(".item5 .box").css("animation","")
            $(".item5  a").eq(0).css("animation","")
            $(".item5  a").eq(1).css("animation","")
            $(".item5  a").eq(2).css("animation","")
            $(".item5  a").eq(3).css("animation","")
            $(".item5  a").eq(4).css("animation","")
            $(".item5  a").eq(5).css("animation","")
            $(".item5  a").eq(6).css("animation","")
            $(".item5  a").eq(7).css("animation","")
        }else if(index==6){
            //$("#myMenu").css("background","rgba(0,0,0,.8)")
            //$("#myMenu1").css("background","rgba(0,0,0,.8)")
            //$("#myMenu1 .nav").css("background","rgba(0,0,0,.8)")
            //$("#myMenu1 .nav li a").css("color","#fff")
            //$("#myMenu1 .gsb .top").css("background","#fff")
            //$("#myMenu1 .gsb .bottom").css("background","#fff")
            //$("#myMenu1 strong").css("color","#fff")
            //$("#myMenu strong").css("color","#fff")
            //$("#myMenu li a").css("color","#fff")
            $(".box6-con").css({transform:"scale(0.1,0.1)",opacity:0})
        }
    }
})
//加载完成之后
$(function(){
    $(".photo-box").css("opacity",0)
    $(".shade h3").css("opacity",0)
    $(".box-left").css({"transform":"translate(-600px,0px)","opacity":0})
    $(".box-right").css({"transform":"translate(600px,0px)","opacity":0})
    $(".item-5 h3").css({left:"-30%","opacity":0})
    $(".item-5 .box1").css({top: "-10%","opacity":0})
    $(".item-5 .box2").css({top: "-10%","opacity":0})
    $(".item-5 .box3").css({top: "100%","opacity":0})
    $(".box6-con").css({transform:"scale(0.1,0.1)",opacity:0})
})
