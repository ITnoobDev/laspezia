$(function() {

    //Active Page
     $('.js-menu [href]').each(function() {
       if (this.href == window.location.href) {
         $(this).addClass('menu-active');
       }
     });

     //Slick Slider
     $('#js-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,


      prevArrow:'<a class="slider__btn slider__arrow-prev" href="#"><img src="img/arrowButtonLeft.png" alt=""></a>',
      nextArrow:'<a class="slider__btn slider__arrow-next" href="#"><img src="img/arrowButtonRight.png" alt=""></a>',

      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,

          }

        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },

        {
          breakpoint: 535,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },


      ]
  });

    $('#js-menu-btn').click(function(){
       $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
       $('.menu__btn-line1').toggleClass('menu__btn-lineclose1');
       $('.menu__btn-line2').toggleClass('menu__btn-lineclose2');
       $('.menu__btn-line3').toggleClass('menu__btn-lineclose3');
       $('.menu__mobile-overlay').toggleClass('overlay-close');

     });

     $('.menu__mobile-overlay').click(function(){
       $(this).removeClass('overlay-close');
       $('.menu-mobile__list').removeClass('menu-mobile__list--active');
         $('.menu__btn-line1').toggleClass('menu__btn-lineclose1');
         $('.menu__btn-line2').toggleClass('menu__btn-lineclose2');
         $('.menu__btn-line3').toggleClass('menu__btn-lineclose3');
     });

     $(document).ready(function(){
        $('.content__buttons-item').hover(
           function() {
            $( this ).toggleClass('animate__animated');
            $( this ).toggleClass('animate__headShake');
          }
        );
      });

     $('.rate-yo').rateYo({
       ratedFill: '#275570',
       normalFill: '#c4c4c4',
       spacing: '5px',
       starWidth: '30px',
       readOnly: true

     });
   });
