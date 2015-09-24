console.log("adding event listener");

var checkPage = function(){

    console.log("checkPage");
    var elm = document.getElementsByClassName("content")[0];
    var script = elm.id;
    console.log("script" + script);

    if(script) {
        $.getScript("dist/js/"+elm.id+".js")
        .done(function( script, textStatus ) {
           console.log( textStatus );
        })
        .fail(function( jqxhr, statusText, errorThrown ) {
            console.log(errorThrown);
            console.log(statusText);
            console.log(jqxhr);
        });
    }
};

window.addEventListener('push', checkPage);




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
}

window.addEventListener('push', accordion);    

$(document).ready(function(){
    accordion();
});   


