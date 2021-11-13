$(".head .head-lins li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $("body,html").animate({scrollTop:$($(this).data("target")).offset().top},1000)
})
$(".head .big-nav .small-hd a").click(function(){
    $(".head .big-nav .head-nav").slideToggle("slow");
})