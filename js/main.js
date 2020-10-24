/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Md. Fahim (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign



------------------------------------------- */
$(function() {

    "use strict";

    // swup js
    const options = {
        containers: ["#swup", "#swupMenu"],
        animateHistoryBrowsing: true,
    };

    const swup = new Swup(options);

    // scrollbar
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
    });

    // page loading
    $(document).ready(function() {
        anime({
            targets: '.ft-preloader .ft-preloader-content',
            opacity: [0, 1],
            delay: 200,
            duration: 600,
            easing: 'linear',
            complete: function(anim) {

            }
        });
        anime({
            targets: '.ft-preloader',
            opacity: [1, 0],
            delay: 2200,
            duration: 400,
            easing: 'linear',
            complete: function(anim) {
                $('.ft-preloader').css('display', 'none');
            }
        });
    });

    var bar = new ProgressBar.Line(preloader, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 750,
        trailWidth: 1.7,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(1);

    // counters
    anime({
        targets: '.ft-counter-frame',
        opacity: [0, 1],
        duration: 800,
        delay: 2300,
        easing: 'linear',
    });

    anime({
        targets: '.ft-counter',
        delay: 1300,
        opacity: [1, 1],
        complete: function(anim) {
            $('.ft-counter').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    // progressbars
    var bar = new ProgressBar.Circle(circleprog1, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2500,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(1);

    var bar = new ProgressBar.Circle(circleprog2, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2600,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(0.9);

    var bar = new ProgressBar.Circle(circleprog3, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2700,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(0.7);

    var bar = new ProgressBar.Line(lineprog1, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2800,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.80);

    var bar = new ProgressBar.Line(lineprog2, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2900,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.70);

    var bar = new ProgressBar.Line(lineprog3, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3000,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.40);

    var bar = new ProgressBar.Line(lineprog4, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3100,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.85);

    var bar = new ProgressBar.Line(lineprog5, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3200,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.80);

    // Contact form
    $('.ft-input').keyup(function() {
        if ($(this).val()) {
            $(this).addClass('ft-active');
        } else {
            $(this).removeClass('ft-active');
        }
    });

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {

            var tl = anime.timeline({
                easing: 'easeOutExpo',
            });

            tl
                .add({
                    targets: '.ft-submit',
                    opacity: 0,
                    scale: .5,
                })
                .add({
                    targets: '.ft-success',
                    scale: 1,
                    height: '45px',
                })
        });
        return false;
    });

    // portfolio filter
    $('.ft-filter a').on('click', function() {
        $('.ft-filter .ft-current').removeClass('ft-current');
        $(this).addClass('ft-current');

        var selector = $(this).data('filter');
        $('.ft-grid').isotope({
            filter: selector
        });
        return false;
    });

    // masonry Grid
    $('.ft-grid').isotope({
        filter: '*',
        itemSelector: '.ft-grid-item',
        transitionDuration: '.6s',
    });

    // slider testimonials
    var swiper = new Swiper('.ft-testimonial-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: false,
        autoplaySpeed: 5000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.ft-testi-swiper-next',
            prevEl: '.ft-testi-swiper-prev',
        },
        breakpoints: {
            1500: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        },
    });

    // slider works
    var swiper = new Swiper('.ft-works-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: {
            delay: 4000,
        },
        autoplaySpeed: 5000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.ft-works-swiper-next',
            prevEl: '.ft-works-swiper-prev',
        },
        breakpoints: {
            1500: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        },
    });

    // slider blog
    var swiper = new Swiper('.ft-blog-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: {
            delay: 4000,
        },
        autoplaySpeed: 5000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.ft-blog-swiper-next',
            prevEl: '.ft-blog-swiper-prev',
        },
        breakpoints: {
            1500: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        },
    });

    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "thumbs",
            "close"
        ],
    });

    $('[data-fancybox="diplome"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close",
        ],
    });

    $('[data-fancybox="avatar"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
            "zoom",
            "close"
        ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close",
        ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().appendTo('.ft-current-page');

    $('.ft-map-overlay').on('click', function() {
        $(this).addClass('ft-active');
    });

    $('.ft-info-bar-btn').on('click', function() {
        $('.ft-info-bar').toggleClass('ft-active');
        $('.ft-menu-bar-btn').toggleClass('ft-disabled');
    });

    $('.ft-menu-bar-btn').on('click', function() {
        $('.ft-menu-bar-btn , .ft-menu-bar').toggleClass("ft-active");
        $('.ft-info-bar-btn').toggleClass('ft-disabled');
    });

    $('.ft-info-bar-btn , .ft-menu-bar-btn').on('click', function() {
        $('.ft-content').toggleClass('ft-active');
    });

    $('.ft-curtain , .ft-mobile-top-bar').on('click', function() {
        $('.ft-menu-bar-btn , .ft-menu-bar , .ft-info-bar , .ft-content , .ft-menu-bar-btn , .ft-info-bar-btn').removeClass('ft-active , ft-disabled');
    });

    $('.menu-item').on('click', function() {
        if ($(this).hasClass('menu-item-has-children')) {
            $(this).children('.sub-menu').toggleClass('ft-active');
        } else {
            $('.ft-menu-bar-btn , .ft-menu-bar , .ft-info-bar , .ft-content , .ft-menu-bar-btn , .ft-info-bar-btn').removeClass('ft-active , ft-disabled');
        }
    });

    // reinit
    document.addEventListener("swup:contentReplaced", function() {

        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.querySelector('#scrollbar'), {
            damping: 0.05,
            renderByPixel: true,
            continuousScrolling: true,
        });
        Scrollbar.init(document.querySelector('#scrollbar2'), {
            damping: 0.05,
            renderByPixel: true,
            continuousScrolling: true,
        });

        $("#form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {

                var tl = anime.timeline({
                    easing: 'easeOutExpo',
                });

                tl
                    .add({
                        targets: '.ft-submit',
                        opacity: 0,
                        scale: .5,
                    })
                    .add({
                        targets: '.ft-success',
                        scale: 1,
                        height: '45px',
                    })
            });
            return false;
        });

        // Masonry Grid
        $('.ft-grid').isotope({
            filter: '*',
            itemSelector: '.ft-grid-item',
            transitionDuration: '.6s',
        });

        $('.ft-filter a').on('click', function() {
            $('.ft-filter .ft-current').removeClass('ft-current');
            $(this).addClass('ft-current');

            var selector = $(this).data('filter');
            $('.ft-grid').isotope({
                filter: selector
            });
            return false;
        });

        anime({
            targets: '.ft-counter-frame',
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'linear',
        });

        $('.ft-counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'linear',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        // slider testimonials
        var swiper = new Swiper('.ft-testimonial-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1400,
            autoplay: false,
            autoplaySpeed: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ft-testi-swiper-next',
                prevEl: '.ft-testi-swiper-prev',
            },
            breakpoints: {
                1500: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                }
            },
        });

        // slider works
        var swiper = new Swiper('.ft-works-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1400,
            autoplay: {
                delay: 4000,
            },
            autoplaySpeed: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ft-works-swiper-next',
                prevEl: '.ft-works-swiper-prev',
            },
            breakpoints: {
                1500: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 1,
                },
            },
        });

        // slider blog
        var swiper = new Swiper('.ft-blog-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1400,
            autoplay: {
                delay: 4000,
            },
            autoplaySpeed: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ft-blog-swiper-next',
                prevEl: '.ft-blog-swiper-prev',
            },
            breakpoints: {
                1500: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 1,
                },
            },
        });

        $('[data-fancybox="gallery"]').fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 600,
            transitionDuration: 1200,
            buttons: [
                "zoom",
                "slideShow",
                "thumbs",
                "close"
            ],
        });

        $('[data-fancybox="diplome"]').fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 600,
            transitionDuration: 1200,
            buttons: [
                "zoom",
                "slideShow",
                "thumbs",
                "close",
            ],
        });

        $('[data-fancybox="recommendation"]').fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 600,
            transitionDuration: 1200,
            buttons: [
                "zoom",
                "slideShow",
                "thumbs",
                "close",
            ],
        });

        $.fancybox.defaults.hash = false;

        $('.current-menu-item a').clone().prependTo('.ft-current-page');

        $('.menu-item').on('click', function() {
            if ($(this).hasClass('menu-item-has-children')) {
                $(this).children('.sub-menu').toggleClass('ft-active');
            } else {
                $('.ft-menu-bar-btn , .ft-menu-bar , .ft-info-bar , .ft-content , .ft-menu-bar-btn , .ft-info-bar-btn').removeClass('ft-active , ft-disabled');
            }
        });

    })

    /* -------------------------------------------

    demo

    ------------------------------------------- */
    var demo = '<style>.color-change{}.active-changer{right: 0;}.swapColor{height: 40px; width: 40px; display: block; margin-bottom: 5px; border-radius: 1px; filter: brightness(100%); -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}.swapColor:hover{filter: brightness(110%);}.swapOverlay{height: 40px; width: 40px; display: block; margin-bottom: 10px; border-radius: 1px;}.green{background-color: #2F9E61;}.red{background-color: #f44336;}.blue{background-color: #64B5F6;}.orange{background-color: #FFC107;}.open-changer{cursor: pointer; position: absolute; background-color: rgb(36 37 48); height: 40px; width: 40px; top: 0; left: -40px; color: rgba(32,32,42,1); display: flex; justify-content: center;}.open-changer i{font-size:16px; align-self: center; animation: rotate 2s infinite linear;}@keyframes rotate{0%{transform: rotate(0);}100%{transform: rotate(360deg);}}.demo-card{width: 100%;}.demo-frame{margin: 0;}@media (max-width: 768px){.demo-frame{margin-left: -15px; margin-right: -15px;}}</style> <div class="color-change"> <div class="open-changer"><i class="fa fa-cog"></i></div><a href="javascript:void(0)" class="swapColor orange" data-theme="orange"></a> <a href="javascript:void(0)" class="swapColor red" data-theme="red"></a> <a href="javascript:void(0)" class="swapColor green" data-theme="green"></a> <a href="javascript:void(0)" class="swapColor blue" data-theme="blue"></a></div>';

    $('body').prepend(demo);

    var sheets = {
        orange: $('<link rel="stylesheet" href="css/color-1.css">'),
        red: $('<link rel="stylesheet" href="css/color-2.css">'),
        green: $('<link rel="stylesheet" href="css/color-3.css">'),
        blue: $('<link rel="stylesheet" href="css/color-4.css">'),
    };

    var sheets2 = {
        blueoverlay: $('<link rel="stylesheet" href="css/overlay-color/blue.css">'),
        violetoverlay: $('<link rel="stylesheet" href="css/overlay-color/violet.css">'),
    };

    var currentSheet = sheets.orange.appendTo($("head"));

    $("a.swapColor").click(function() {
        currentSheet.detach();
        currentSheet = (sheets[$(this).attr("data-theme")]).appendTo($("head"));
    });

    $('.open-changer').click(function() {
        $('.color-change').toggleClass("active-changer");
    });

    $('.ft-resume').click(function() {
        $('.color-change').removeClass("active-changer");
    });

    /* -------------------------------------------

    demo end

    ------------------------------------------- */

});