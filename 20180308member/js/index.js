import helper from "./lib/helper";
import envi from "./lib/envi";
import share from "./lib/share";


// import getSignFn from "./lib/signHelper";
// options {signFn: getSignFn(0x193)}

let nowLine = "line-1"

// 
$(".hylc_btn").click(()=>{
    console.log(123);
})


// ----工具类函数----

let timeGet = function(){
    let date = new Date().getHours();
    if(date < 8) return "line-1";
    else if(date>=8 && date < 10) return "line-2";
    else if(date>10 && date < 14) return "line-3";
    else return "line-4";
}

let lineChange = function(target){

    $(".xsq-line_item1").removeClass(nowLine);
    $('.xsq-line_item1').addClass(target);
    nowLine = target;
}

let scrolltop = function(){
    let scrollTop = document.documentElement.scrollTop;
    return scrollTop;
}

let slideBar = function () {
    $('.slide-bar_item').eq(0).addClass("on-slide-bar");

    $('.slide-bar').click(function (e) {
        
        let index = $(e.target).attr("data-slide-index");
        $('.slide-bar_item').removeClass("on-slide-bar");
        $('.slide-bar_item').eq(index).addClass("on-slide-bar");


    })
}


slideBar();

lineChange(timeGet());

