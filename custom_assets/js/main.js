$(function () {
    // function to handle text typing animation
    $('#animatetext').typed({
        strings: ["Learn new things.", "Build cool projects.", "Join an awesome community.", "Impress interviewers.", "Learn. Build. Code."],
        typeSpeed: 10,
        callback: function () {}
    });

    // smooth scroll
    $('[data-smooth-scroll="true"]').click(function () {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });
    /*var particleConfig = {
        "particles": {
            "number": {
                "value": 15,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#6734d1", "#ffcc00", "#97040c"]
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0.1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 15,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.1,
                    "size_min": 3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#555555",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 300,
                    "line_linked": {
                        "opacity": 0.4
                    }
                },
                "repulse": {
                    "distance": 300,
                    "duration": 0.4
                }
            }
        },
        "retina_detect": true
    };
    particlesJS('particles-bg', particleConfig);*/
});