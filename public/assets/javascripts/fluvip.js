$(function() {

    var header = $("#principal-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.removeClass('navbar-transparent').addClass("navbar-slide");
        } else {
            header.removeClass("navbar-slide").addClass('navbar-transparent');
        }
    });

    $(".fancybox").click(function(){
        $("#fancybox").show("fast");
    });

    $("#fancybox .close").click(function(){
        $("#fancybox").hide("fast");
        location.reload(true);
    });
});
