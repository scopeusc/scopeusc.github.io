// function to handle text typing animation
$(function() {
    $("#animatetext").typed({
        strings: ["Learn new things.", "Build cool projects.", "Join an awesome community.", "Impress interviewers.", "Learn. Build. Code."],
        typeSpeed: 0,
        callback: function() {}
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var navbar = $('.navbar');
        if ($(this).scrollTop() > 400) {
            if (navbar.css("display") === 'block') {
                navbar.fadeOut(200, function() {
                    navbar.css({
                        'display': 'none'
                    });
                });
            }
        } else {
            if (navbar.css("display") === 'none') {
                navbar.fadeIn(200, function() {
                    navbar.css({
                        'display': 'block'
                    });
                });
            }
        }
    });
});


$('#learn-more-button').click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$('#sponsor-button').click(function() {
    $('html, body').animate({
        scrollTop: $("#purple").offset().top
    }, 1000);
});

var images = [];

function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
    "assets/logo-red.png",
    "assets/logo-purp.png"
);
