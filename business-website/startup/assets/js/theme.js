$(document).ready(function(){

   //Toggle Nav for mobile  menu
    $('.open_bar').click(function(){
        $('nav').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('nav').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });

    //Counter Up Jquery
       $('.counter').counterUp({
             time: 1500
       });
       
    // Progress Bar
     if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
    };

    //Accordion
    $(function() {
        $( "#accordion-one" ).accordion({
            collapsible: true
        });
    });

    $(function() {
            $( "#accordion" ).accordion({
              collapsible: true
            });
    });
    $(function() {
            $( "#accordion-2" ).accordion({
              collapsible: true
            });
    });

    /*---------------------
    Nivo Slider active js
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 900000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    }); 

    // Animation Headline
    $('.hero-content').animatedHeadline({
        animationType: 'clip'
    }); 

        
    // Testimonial Carousel Active
    $('.testimonial-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: false,
         dotsEach: false,
         lazyLoad:true,
         smartSpeed: 1000,
         nav:false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 2
            }
        }
    });

    // Testimonial Carousel Two Active
    $('.testimonial-carousel-two').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad:true,
         smartSpeed: 1000,
         nav:false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1000: {
                 items: 3
             },
             1199: {
                 items: 3
             },
             1920: {
                 items: 3
            }
        }
    });
     // Testimonial Carousel Three Active
    $('.testimonial-carousel-three').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad:true,
         smartSpeed: 1000,
         nav:false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });


    // Carousel Slider Active
    $('.carousel-slider').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: false,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: true,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });

    // Case Study Carousel Slider Active
    $('.case-study-carousel').owlCarousel({
         loop: true,
         autoplay: false,
         margin: 30,
         autoplayTimeout: 10000,
         center: true,
         dots: true,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 2
            }
        }
    });

     // Blog Carousel Active
    $('.blog-carousel').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: true,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1000: {
                 items: 3
             },
             1199: {
                 items: 3
             },
             1920: {
                 items: 3
            }
        }
    });

     // Blog Carousel Active
    $('.blog-carousel-two').owlCarousel({
         loop: false,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: true,
         navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1000: {
                 items: 3
             },
             1199: {
                 items: 3
             },
             1920: {
                 items: 3
            }
        }
    });

     // Blog Carousel Active
    $('.blog-carousel-three').owlCarousel({
         loop: false,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: true,
         navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1000: {
                 items: 3
             },
             1199: {
                 items: 3
             },
             1920: {
                 items: 3
            }
        }
    });

    // Brand Carousel Active
    $('.brand-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         center: false,
         dots: false,
         dotsEach: false,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 2
             },
             768: {
                 items: 4
             },
             992: {
                 items: 4
             },
             1000: {
                 items: 5
             },
             1199: {
                 items: 5
             },
             1920: {
                 items: 5
            }
        }
    });

    // Service Carousel Active
    $('.service-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         center: false,
         dots: true,
         dotsEach: true,
         lazyLoad: true,
         smartSpeed: 1000,
         nav: false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 3
             },
             1920: {
                 items: 3
            }
        }
    });

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        }

    });
    
    


    // to top Jquery
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        })

        $("#to-top").click(function(){
            $('html , body').animate({scrollTop :0},800)
        });
       
    //wow Jquery
        new WOW().init();

    //Tabs
        $(function(){
            $("#tabs").tabs();
        });
        
    // Calender Jquery
        var curDate = (new Date()).getDate();
        var curMonth = (new Date()).getMonth();
        var curYear = (new Date()).getFullYear();
        var startDay = (new Date(curYear, curMonth, 1)).getDay();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var prevMonth = noofdays[curMonth - 1];
        if (curMonth == 11) {
          prevMonth = noofdays[0];
        } else if (curMonth == 0) {
          prevMonth = noofdays[11];
        }
        var totalDays = noofdays[curMonth];
        var counter = 0;
        var precounter = prevMonth - (startDay - 1);
        var rightbox = 6;
        var flag = true;

        jQuery('.curr-month b').text(months[curMonth]);
        for (var i = 0; i < 42; i++) {
          if (i >= startDay) {
            counter++;
            if (counter > totalDays) {
              counter = 1;
              flag = false;
            }
            if (flag == true) {
              jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
            } else {
              jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
            }
          } else {
            jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
            precounter++;
          }

          if (i == rightbox) {
            jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
            rightbox = rightbox + 7;
          }

          if (i > 34) {
            jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
          }

          if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
            jQuery(jQuery('.all-date ul li')[i]).css({
              "background-color": "#2513D1",
              "color": "#fff"
            });
          }
        }
    
    

        


});

$(document).ready(function(){
    //Swiper Slider Active 
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}); 

});