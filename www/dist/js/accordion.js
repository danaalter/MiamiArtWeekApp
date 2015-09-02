$(document).ready(function(){
    $(".set .menu-content").slideUp();
    $(".set > h3").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.menu-content').slideUp(200);
            $(".set > h3 span").removeClass("icon-up").addClass("icon-down");
        }else{
            $(".set > h3 span").removeClass("icon-up").addClass("icon-down");
            $(this).find("span").removeClass("icon-down").addClass("icon-up");
            $(".set > h3").removeClass("active");
            $(this).addClass("active");
            $('.menu-content').slideUp(200);
            $(this).siblings('.menu-content').slideDown(200);
        }

    });
});