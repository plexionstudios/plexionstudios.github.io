$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 25) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});