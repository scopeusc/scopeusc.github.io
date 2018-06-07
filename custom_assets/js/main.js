$(function() {
    // function to handle text typing animation
    $('#animatetext').typed({
        strings: ["Learn new things.", "Build cool projects.", "Join an awesome community.", "Impress interviewers.", "Learn. Build. Code."],
        typeSpeed: 10,
        callback: function() {}
    });

    // smooth scroll
    $('[data-smooth-scroll="true"]').click(function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });
});