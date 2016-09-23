/**
 * Created by 孟磊 on 2016/9/4.
 */
var H=0;
$(document).on('mousemove',function(e) {
    e.preventDefault();
    var drawSize = 55;
    var floatTypes = ['floatOne','floatTwo','floatThree','floatFour','floatFive'];
    var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
    var xPos = e.originalEvent.pageX+50;
    var yPos = e.originalEvent.pageY;

    $('.infor').append('<div class="draw" style="font-size:'+drawSize+'px;left:'+xPos+'px;top:'+yPos+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:hsla('+H+',100%,70%,1)">✮</div>');

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




jQuery(document).ready(function($){

    $(".word1").lbyl({
        content: "我叫孟磊",
        speed: 100,
        type: 'show',
        finished: function(){
            $('.word2').lbyl({
                content:"欢迎来到我的个人主页",
                speed: 150,
                type: 'fade',
                fadeSpeed: 500
            })
        } // Finished Callback
    });


    $(".word3").lbyl({
        content: "My  name   is    MengLei",
        speed: 100,
        type: 'show',
        finished: function(){
            $('.word4').lbyl({
                content:"Welecome    to    my   personal    page ",
                speed: 150,
                type: 'fade',
                fadeSpeed: 500
            })
        } // Finished Callback
    });

});