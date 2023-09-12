$(function() {

  /*-----------------------WOW-------*/
  new WOW().init();
/*-------------------Mobile Button-------Close when page is back---------------*/
$(window).focus(function() {
  $(document).removeClass('overlay-close');
    $('.menu-mobile__list').removeClass('menu-mobile__list--active');
    $('.menu__btn-line1').removeClass('menu__btn-lineclose1');
      $('.menu__btn-line2').removeClass('menu__btn-lineclose2');
      $('.menu__btn-line3').removeClass('menu__btn-lineclose3');
});

/*-------------------Mobile Button-----Open/close-----------------*/
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

  /*--------HeaderMenuScroll------------*/
  $(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
      $('.header__menu-item__link').addClass('black-menu');
      $('.header__menu').css("background", "white");
      $('.menu__logo--white').css("display", "none");
      $('.menu__logo--black').css("display", "block");
      $('.menu__mobile-btn').addClass('btn-black');
    }
    if ($(window).scrollTop() < 200) {
      $('.header__menu-item__link').removeClass('black-menu');
      $('.header__menu').css("background", "none");
      $('.menu__logo--white').css("display", "block");
      $('.menu__logo--black').css("display", "none");
      $('.menu__mobile-btn').removeClass('btn-black');
    }
  });

  /*---------------Add Active Link--------------------*/
  $('.tablinks').on("click", function(){
    $(this).addClass("active");
  });
  /*------------Slick Slider--------------------*/
    $('#js-slider').slick({
      dots: false,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
    });

  /*-------------RateYo-------------------------*/
  $('.rate').rateYo({
    starWidth: '20px',
    ratedFill: '#FFB55F',
    normalFill: '#c4c4c4',
    spacing: '5px',
    readOnly: true

  });

 });
