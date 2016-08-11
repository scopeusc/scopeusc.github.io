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

$('.page-apply').click(function() {
    $('html, body').animate({scrollTop: $(".typeform-widget").offset().top}, 1000);
})

$('#apply-button').click(function() {
    $('html, body').animate({scrollTop: $(".typeform-widget").offset().top}, 1000);
})

/* @deprecated for now
function hover(element) {
    element.setAttribute('src', 'assets/logo-red.png');
}
function unhover(element) {
    element.setAttribute('src', 'assets/logo-purp.png');
}
*/

<!--//--><![CDATA[//><!--
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "assets/logo-red.png",
    "assets/logo-purp.png"
)
//--><!]]>

