

function accordion(){
    $(".set .menu-content").slideUp();
    $(".set > h3").click(function(){
        if($(this).hasClass('active')){
            $(".home-sponsors").fadeTo( "fast",1)
            $(this).removeClass("active");
            $(this).siblings('.menu-content').slideUp(200);
            $(".set > h3 span").removeClass("icon-up").addClass("icon-down");

        }else{
            $(".home-sponsors").fadeTo( "fast",0.1 );
            $(".set > h3 span").removeClass("icon-up").addClass("icon-down");
            $(this).find("span").removeClass("icon-down").addClass("icon-up");
            $(".set > h3").removeClass("active");
            $(this).addClass("active");
            $('.menu-content').slideUp(200);
            $(this).siblings('.menu-content').slideDown(200);

        }

    });

window.addEventListener('push', accordion);    

$(document).ready(
    accordion()
)   


