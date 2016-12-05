/**
 * Created by aiyoule on 16/12/2.
 */

$(function(){
    //导航栏选项卡切换
    $(".main-nav-list>li").mouseenter(function () {
        $(".main-nav-list>li").children(".cb-big-menu").slideUp();
        $(this).children(".cb-big-menu").slideDown();
    });
    $(".main-nav-list>li").click(function () {
        //$(".main-nav-list>li").removeClass("hover");
        $(this).addClass("hover");
    })
    //cb-article 特色cb-featured 最近 中的图片鼠标移入有涂层效果 用鼠标移入降低图片透明度显示背景颜色实现
    $(".cb-article").mouseenter(function(){
        $(this).find("img").css({"transform":"scale(1.1)","transition":"1s","opacity":".7"});
    });
    $(".cb-article").mouseleave(function(){
        $(this).find("img").css({"transform":"scale(1.0)","transition":"1s","opacity":"1"});
    });

    //导航栏旁边的列表图片鼠标移入添加紫色涂层
    $(".cb-mask").hover(function(){
        $(this).children().children("img").css("opacity",".7");
    },function(){
        $(this).children().children("img").css("opacity","1");
    })

})