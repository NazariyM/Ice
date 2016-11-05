$(document).ready(function() {

    // animation
    wow = new WOW({
        mobile: false
    });
    wow.init();

    (function () {
        var header = $('.js-header');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                header.addClass('is-fixed');
            } else {
                header.removeClass('is-fixed');
            }
        });
    })();

    // screen slider
    (function() {
        $('.js-screen-slider').slick({
            dots: true,
            arrows: false,
            speed: 1000
        });
    })();

    // assortment slider
    (function() {
        $('.js-assortment-slider').slick({
            dots: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    })();

    (function() {
        var toggle = $('.js-hamburger'),
            nav = $('.js-nav');

        toggle.click(function() {
            $(this).toggleClass('is-active');
            nav.toggleClass('is-active');
        });
    })();

    (function () {

           var show = true;
           var countbox = ".about";
           $(window).on("scroll load resize", function() {

               if (!show) return false;

               var w_top = $(window).scrollTop();
               var e_top = $(countbox).offset().top;

               var w_height = $(window).height();
               var d_height = $(document).height();

               var e_height = $(countbox).outerHeight();

               if (w_top + 650 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".js-number").spincrement({
                        duration: 2300,
                        thousandSeparator: false,
                        decimalPlaces: 0,
                        decimalPoint:','
                    });

                    show = false;
               }
           });
    })();
});
