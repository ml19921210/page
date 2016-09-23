/**
 * Created by 孟磊 on 2016/8/25.
 */

//左上角点击
var flag=true
$(".gsb").click(function(){
    if(flag){
        $(".gsb .top").css("transform","translate(0,6px) rotate(45deg)")
        $(".gsb .bottom").css("transform","translate(0,-3px) rotate(-45deg)")
        $("#myMenu1 .nav").css({"visibility":"visible","height":220,"padding-top":20})
        $("#myMenu1 .nav li a").each(function(index,obj){
            $(obj).css("transition","all 0.4s ease "+index*0.3+"s").css("opacity",1).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=false
    }else{
        $(".gsb .top").css("transform","translate(0,0px) rotate(0deg)")
        $(".gsb .bottom").css("transform","translate(0,0px) rotate(0deg)")
        $("#myMenu1 .nav").css({"height":0,"padding-top":0})
        $("#myMenu1 .nav li a").each(function(index,obj){
            $(obj).css("transition","all 0s ease ").css("opacity",0).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=true;
    }
})

//第一屏头像
$(".photo-box").hover(function(){
    $(".photo-box .photo").css("transform","translate(160px,0) rotate(360deg)")
},function(){
    $(".photo-box .photo").css("transform","translate(0px,0) rotate(0deg)")
})

//第二屏小屏轮播
var num=0;
function lun(){
    num++
    if(num>$(".two-small .schpho").length-1){
        num=0
    }
    $(".two-small .schpho").animate({opacity:0})
    $(".two-small .schpho").eq(num).finish()
    $(".two-small .schpho").eq(num).animate({opacity:1})
}
var t=setInterval(function(){
    lun()
},2500)
$(".two-small .schpho").hover(function(){
    clearInterval(t)
},function(){
    t=setInterval(function(){
        lun()
    },2500)
})




//第三屏
var flag=true
$(".htmlcss").click(function(){
    var index=$(".htmlcss").index(this)
    if(index<3){
        if(flag){
            $(".htmlcss").eq(index+3).css("opacity",0)
            $(".ferris .introduce").eq(index).css("opacity",1)
            flag=false
        }else{
            $(".htmlcss").eq(index+3).css("opacity",1)
            $(".ferris .introduce").eq(index).css("opacity",0)
            flag=true
        }
    }
})


$(".htmlcss:eq(3)").click(function(){
    if(flag){
        $(".htmlcss:eq(0)") .css("opacity",0)
        $(this).css("transform","translate(0,-300px)")
        setTimeout(function(){
            $(".boots").css("opacity",1)
        },1000)
        flag=false
    }else{
        $(".htmlcss:eq(0)") .css("opacity",1)
        $(this).css("transform","translate(0,0px)")
        $(".boots").css("opacity",0)
        flag=true
    }

})

$(".htmlcss:eq(4)").click(function(){
    if(flag){
        $(".htmlcss:eq(1)") .css("opacity",0)
        $(this).css("transform","translate(0,-300px)")
        setTimeout(function(){
            $(".node-js").css("opacity",1)
        },1000)
        flag=false
    }else{
        $(".htmlcss:eq(1)") .css("opacity",1)
        $(this).css("transform","translate(0,0px)")
        $(".node-js").css("opacity",0)
        flag=true
    }
})

$(".htmlcss:eq(5)").click(function(){
    if(flag){
        $(".htmlcss:eq(2)") .css("opacity",0)
        $(this).css("transform","translate(0,-300px)")
        setTimeout(function(){
            $(".angular-js").css("opacity",1)
        },1000)
        flag=false
    }else{
        $(".htmlcss:eq(2)") .css("opacity",1)
        $(this).css("transform","translate(0,0px)")
        $(".angular-js").css("opacity",0)
        flag=true
    }
})



//第四瓶
var xm;
var ym;

/* ==== onmousemove event ==== */
document.onmousemove = function(e){
    if(window.event) e=window.event;
    xm = (e.x || e.clientX);
    ym = (e.y || e.clientY);
}

/* ==== window resize ==== */
function resize() {
    if(diapo)diapo.resize();
}
onresize = resize;

/* ==== opacity ==== */
setOpacity = function(o, alpha){
    if(o.filters)o.filters.alpha.opacity = alpha * 100; else o.style.opacity = alpha;
}


////////////////////////////////////////////////////////////////////////////////////////////
/* ===== encapsulate script ==== */
diapo = {
    O : [],
    DC : 0,
    img : 0,
    txt : 0,
    N : 0,
    xm : 0,
    ym : 0,
    nx : 0,
    ny : 0,
    nw : 0,
    nh : 0,
    rs : 0,
    rsB : 0,
    zo : 0,
    tx_pos : 0,
    tx_var : 0,
    tx_target : 0,

    /////// script parameters ////////
    attraction : 2,
    acceleration : .9,
    dampening : .1,
    zoomOver : 2,
    zoomClick : 6,
    transparency : .8,
    font_size: 18,
    //////////////////////////////////

    /* ==== diapo resize ==== */
    resize : function(){
        with(this){
            nx = DC.offsetLeft;
            ny = DC.offsetTop;
            nw = DC.offsetWidth;
            nh = DC.offsetHeight;
            txt.style.fontSize = Math.round(nh / font_size) + "px";
            if(Math.abs(rs-rsB)<100) for(var i=0; i<N; i++) O[i].resize();
            rsB = rs;
        }
    },

    /* ==== create diapo ==== */
    CDiapo : function(o){
        /* ==== init variables ==== */
        this.o        = o;
        this.x_pos    = this.y_pos    = 0;
        this.x_origin = this.y_origin = 0;
        this.x_var    = this.y_var    = 0;
        this.x_target = this.y_target = 0;
        this.w_pos    = this.h_pos    = 0;
        this.w_origin = this.h_origin = 0;
        this.w_var    = this.h_var    = 0;
        this.w_target = this.h_target = 0;
        this.over     = false;
        this.click    = false;

        /* ==== create shadow ==== */
        this.spa = document.createElement("span");
        this.spa.className = "spaDC";
        diapo.DC.appendChild(this.spa);

        /* ==== create thumbnail image ==== */
        this.img = document.createElement("img");
        this.img.className = "imgDC";
        this.img.src = o.src;
        this.img.O = this;
        diapo.DC.appendChild(this.img);
        setOpacity(this.img, diapo.transparency);

        /* ==== mouse events ==== */
        this.img.onselectstart = new Function("return false;");
        this.img.ondrag = new Function("return false;");
        this.img.onmouseover = function(){
            diapo.tx_target=0;
            diapo.txt.innerHTML=this.O.o.alt;
            this.O.over=true;
            setOpacity(this,this.O.click?diapo.transparency:1);
        }
        this.img.onmouseout = function(){
            diapo.tx_target=-diapo.nw;
            this.O.over=false;
            setOpacity(this,diapo.transparency);
        }
        this.img.onclick = function() {
            if(!this.O.click){
                if(diapo.zo && diapo.zo != this) diapo.zo.onclick();
                this.O.click = true;
                this.O.x_origin = (diapo.nw - (this.O.w_origin * diapo.zoomClick)) / 2;
                this.O.y_origin = (diapo.nh - (this.O.h_origin * diapo.zoomClick)) / 2;
                diapo.zo = this;
                setOpacity(this,diapo.transparency);
            } else {
                this.O.click = false;
                this.O.over = false;
                this.O.resize();
                diapo.zo = 0;
            }
        }

        /* ==== rearrange thumbnails based on "imgsrc" images position ==== */
        this.resize = function (){
            with (this) {
                x_origin = o.offsetLeft;
                y_origin = o.offsetTop;
                w_origin = o.offsetWidth;
                h_origin = o.offsetHeight;
            }
        }

        /* ==== animation function ==== */
        this.position = function (){
            with (this) {
                /* ==== set target position ==== */
                w_target = w_origin;
                h_target = h_origin;
                if(over){
                    /* ==== mouse over ==== */
                    w_target = w_origin * diapo.zoomOver;
                    h_target = h_origin * diapo.zoomOver;
                    x_target = diapo.xm - w_pos / 2 - (diapo.xm - (x_origin + w_pos / 2)) / (diapo.attraction*(click?10:1));
                    y_target = diapo.ym - h_pos / 2 - (diapo.ym - (y_origin + h_pos / 2)) / (diapo.attraction*(click?10:1));
                } else {
                    /* ==== mouse out ==== */
                    x_target = x_origin;
                    y_target = y_origin;
                }
                if(click){
                    /* ==== clicked ==== */
                    w_target = w_origin * diapo.zoomClick;
                    h_target = h_origin * diapo.zoomClick;
                }

                /* ==== magic spring equations ==== */
                x_pos += x_var = x_var * diapo.acceleration + (x_target - x_pos) * diapo.dampening;
                y_pos += y_var = y_var * diapo.acceleration + (y_target - y_pos) * diapo.dampening;
                w_pos += w_var = w_var * (diapo.acceleration * .5) + (w_target - w_pos) * (diapo.dampening * .5);
                h_pos += h_var = h_var * (diapo.acceleration * .5) + (h_target - h_pos) * (diapo.dampening * .5);
                diapo.rs += (Math.abs(x_var) + Math.abs(y_var));

                /* ==== html animation ==== */
                with(img.style){
                    left   = Math.round(x_pos) + "px";
                    top    = Math.round(y_pos) + "px";
                    width  = Math.round(Math.max(0, w_pos)) + "px";
                    height = Math.round(Math.max(0, h_pos)) + "px";
                    zIndex = Math.round(w_pos);
                }
                with(spa.style){
                    left   = Math.round(x_pos + w_pos * .1) + "px";
                    top    = Math.round(y_pos + h_pos * .1) + "px";
                    width  = Math.round(Math.max(0, w_pos * 1.1)) + "px";
                    height = Math.round(Math.max(0, h_pos * 1.1)) + "px";
                    zIndex = Math.round(w_pos);
                }
            }
        }
    },

    /* ==== main loop ==== */
    run : function(){
        diapo.xm = xm - diapo.nx;
        diapo.ym = ym - diapo.ny;
        /* ==== caption anim ==== */
        diapo.tx_pos += diapo.tx_var = diapo.tx_var * .9 + (diapo.tx_target - diapo.tx_pos) * .02;
        diapo.txt.style.left = Math.round(diapo.tx_pos) + "px";
        /* ==== images anim ==== */
        for(var i in diapo.O) diapo.O[i].position();
        /* ==== loop ==== */
        setTimeout("diapo.run();", 16);
    },

    /* ==== load images ==== */
    images_load : function(){
        // ===== loop until all images are loaded =====
        var M = 0;
        for(var i=0; i<diapo.N; i++) {
            if(diapo.img[i].complete) {
                diapo.img[i].style.position = "relative";
                diapo.O[i].img.style.visibility = "visible";
                diapo.O[i].spa.style.visibility = "visible";
                M++;
            }
            resize();
        }
        if(M<diapo.N) setTimeout("diapo.images_load();", 128);
    },

    /* ==== init script ==== */
    init : function() {
        diapo.DC = document.getElementById("diapoContainer");
        diapo.img = diapo.DC.getElementsByTagName("img");
        diapo.txt = document.getElementById("caption");
        diapo.N = diapo.img.length;
        for(i=0; i<diapo.N; i++) diapo.O.push(new diapo.CDiapo(diapo.img[i]));
        diapo.resize();
        diapo.tx_pos = -diapo.nw;
        diapo.tx_target = -diapo.nw;
        diapo.images_load();
        diapo.run();
    }
}
function dom_onload() {
    if(document.getElementById("diapoContainer")) diapo.init(); else setTimeout("dom_onload();", 128);
}
dom_onload();


//第五屏大
//$(".item-5 a").hover(function(){
//    var index=$(".item-5 a").index(this)
//    $(".item-5 a .shape").eq(index).css({left:0,top:0})
//},function(){
//    $(".item-5 .box1 .shape").css("top","100%")
//    $(".item-5 .box2 .shape").css("top","-100%")
//    $(".item-5 .box3 .shape").css({left:"100%",top:"100%"})
//})
////中
//$(".item-5 .small-box .bottoms .lunbo a").hover(function(){
//    var index=$(".item-5 .small-box .bottoms .lunbo a").index(this)
//    $(".item-5 .small-box .bottoms .lunbo a .shapes").eq(index).css("opacity",1)
//},function(){
//    var index=$(".item-5 .small-box .bottoms .lunbo a").index(this)
//    $(".item-5 .small-box .bottoms .lunbo a .shapes").eq(index).css("opacity",0)
//})
//
//
//var widths=$(".item-5 .small-box .bottoms .lunbo a")[0].offsetWidth
//var flag=true
//$(".btnleft").click(function(){
//    if(!flag){
//        return
//    }
//    flag=false
//    $(".item-5 .small-box .bottoms .lunbo").stop().animate({left:-widths},function(){
//       $(".item-5 .small-box .bottoms .lunbo a:first").appendTo($(".item-5 .small-box .bottoms .lunbo"))
//        $(this).css("left",0)
//        flag=true
//    })
//
//})
//
//$(".btnright").click(function(){
//    if(!flag){
//        return
//    }
//    flag=false
//    $(".item-5 .small-box .bottoms .lunbo a:last").insertBefore($(".item-5 .small-box .bottoms .lunbo a:first"))
//    $(".item-5 .small-box .bottoms .lunbo").css("left",-widths)
//    $(".item-5 .small-box .bottoms .lunbo").stop().animate({left:0},function(){
//        flag=true
//    })
//
//})
//
//var t=setInterval(function(){
//    $(".item-5 .small-box .bottoms .lunbo a:last").insertBefore($(".item-5 .small-box .bottoms .lunbo a:first"))
//    $(".item-5 .small-box .bottoms .lunbo").css("left",-widths)
//    $(".item-5 .small-box .bottoms .lunbo").stop().animate({left:0})
//},3000)
//$(".boxx").hover(function(){
//    clearInterval(t)
//},function(){
//    t=setInterval(function(){
//        $(".item-5 .small-box .bottoms .lunbo a:last").insertBefore($(".item-5 .small-box .bottoms .lunbo a:first"))
//        $(".item-5 .small-box .bottoms .lunbo").css("left",-widths)
//        $(".item-5 .small-box .bottoms .lunbo").stop().animate({left:0})
//    },3000)
//})



$(".item5 a").hover(function(){
    var index=$(".item5 a").index(this)

    $(this).find("div").css("bottom",0)
    $(".item5 .box div").css("opacity",0).eq(index).css("opacity",1)
},function(){
    $(this).find("div").css("bottom",-75)
    $(".item5 .box div").css("opacity",0)
})

var clock=document.getElementsByClassName("clocks")[0]
function dsb(){
    for(var i=0;i<60;i++){
        if(i%5==0){
            var w=4;h=10;
        }else{
            var w= 2;h=6;
        }
        var div=document.createElement("div")
        div.style.cssText="width:"+w+"px;height:"+h+"px;position:absolute;left:0;top:0;background:#000";
        div.style.transform="translate("+(200-w)/2+"px) rotate("+i*6+"deg)";
        div.style.transformOrigin="center 100px";
        clock.appendChild(div)
    }
}
dsb()


//    创建指针
dsd()
var time=new Date();

var h=dsd(60,6,"#000",(time.getHours()*30-90)+(time.getMinutes()*6)/12)
var m=dsd(80,4,"#000",time.getMinutes()*6-90)
var s=dsd(100,2,"red",time.getSeconds()*6-90)
setInterval(function(){
    var time=new Date();
    h.style.transform="translate(100px,"+(200-6)/2+"px) rotate("+((time.getHours()*30-90)+(time.getMinutes()*6)/12)+"deg)"
    m.style.transform="translate(100px,"+(200-4)/2+"px) rotate("+(time.getMinutes()*6-90)+"deg)"
    s.style.transform="translate(100px,"+(200-2)/2+"px) rotate("+(time.getSeconds()*6-90)+"deg)"
},1000)

function dsd(w,h,c,a){
    var  div=document.createElement("div");
    div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";transform:translate(100px,"+(200-h)/2+"px) rotate("+a+"deg);transform-origin:left center;position:absolute;left:0;top:0;"
    clock.appendChild(div);
    return div;
}


$(".bg5 .click").click(function(){
    $(".clock").css({"display":"block","opacity":1})
})
$(".clock").click(function(){
    $(this).css({"display":"none"})
})
$(".bg8 .click").click(function(){
    $(".wangyi").css({"display":"block","opacity":1})
})
$(".wangyi").click(function(){
    $(this).css({"display":"none"})
})



var H=0;
$(document).on('mousemove',function(e) {
    e.preventDefault();
    var drawSize = 55;
    var floatTypes = ['floatOne','floatTwo','floatThree','floatFour','floatFive'];
    var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
    var xPos = e.originalEvent.pageX+50;
    var yPos = e.originalEvent.pageY;

    $('.wujiao').eq(0).append('<div class="draw" style="font-size:'+drawSize+'px;left:'+xPos+'px;top:'+yPos+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:hsla('+H+',100%,70%,1)">✮</div>');
    $('.draw').each(function() {
        var div = $(this);
        setTimeout(function() {
            $(div).remove();
        },800);
    });
});

setInterval(function() {
    if(H<=360) {
        H++;
    } else {
        H=0;
    }
},10);
