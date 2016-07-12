// scrolls to learn mroe
$('#learn-more').click(function() {
    $('html, body').animate({scrollTop: $("#page").offset().top}, 2000);
})

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
    $('.learn').removeClass('hidden');
    $('.build').removeClass('hidden');
    $('.code').removeClass('hidden');
    $('.friendship').removeClass('hidden');
    $('html, body').animate({scrollTop: $(".learn").offset().top}, 1000);
})
