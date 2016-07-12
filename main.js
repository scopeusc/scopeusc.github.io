// function to handle text typing animation
$(function(){
    $("#animatetext").typed({
        strings: ["Learn new things.", "Build cool projects.", "Join an awesome community.", "Impress interviewers.", "Learn. Build. Code."],
        typeSpeed: 0,
        callback: function() {
        },
    });
});

$('#learn-more-button').click(function() {
    $('html, body').animate({scrollTop: $(".about").offset().top}, 1000);
})
