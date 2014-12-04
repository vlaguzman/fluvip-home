$(function() {
    removeit();
    validate_navegation();

    $(".fancybox").click(function(){
        $("#fancybox").show("fast");
    });

    $("#fancybox .close").click(function(){
        $("#fancybox").hide("fast");
        location.reload(true);
    });
});


function removeit() {
    if ($(window).width() < 600) {
        $('.video').remove();
    }
}

function validate_navegation(){
    var header = $("#principal-nav");
    if ($(window).width() > 400) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                header.removeClass('navbar-transparent').addClass("navbar-slide");
            } else {
                header.removeClass("navbar-slide").addClass('navbar-transparent');
            }
        });
    }
    else{
        header.removeClass('navbar-transparent').addClass("navbar-slide");
    }
}