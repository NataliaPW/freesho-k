$(function () {

  /*подключение лист меню - выпадашка*/

  $('.menulist__btn').on('click', function () {
    $('.menulist').toggleClass('menulist--active');
    $('.menulist__list').toggleClass('menulist__list--active');
    $('.menulist__btn').toggleClass('menulist__btn--active');
    $('.menulist__link').toggleClass('menulist__link--active');
    $('.btn__icon-arrow').addClass('btn__icon-arrow--active');

  })

  $('.menulist__link').on('click', function () {
    $('.menulist').removeClass('menulist--active');
    $('.menulist__list').removeClass('menulist__list--active');
    $('.menulist__btn').removeClass('menulist__btn--active');
    $('.menulist__link').addClass('menulist__link--active');
    $('.btn__icon-arrow').removeClass('btn__icon-arrow--active');
  });

  /*подключение слайдера*/

  $('.header__slaider').slick({
    nextArrow: '<button type="button" class="slick-next slick-btn"></button>',

    prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',

    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  });

  /*анимация сердца*/
  
$('.card__btn-heart').on('click', function() {
   $(this).toggleClass('card__btn-heart--active');
});

/*счетчик товара*/

$('.card__pic-btn--minus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.card__pic').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
    $input.val(value);
});
 
$('.card__pic-btn--plus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.card__pic').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});

});