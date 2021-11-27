$(function () {

  /*подключение лист меню - выпадашка*/

  $('.menulist__btn').on('click', function () {
    $('.menulist').toggleClass('menulist--active');
    $('.menulist__list').toggleClass('menulist__list--active');
    $('.menulist__btn').toggleClass('menulist__btn--active');
    $('.menulist__link').toggleClass('menulist__link--active');
    $('.btn__icon-arrow').addClass('btn__icon-arrow--active');

  });

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

  $('.card__btn-heart').on('click', function () {
    $(this).toggleClass('card__btn-heart--active');
  });

  /*счетчик товара*/

  $('.card__pic-btn--minus').on('click', function (e) {
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

  $('.card__pic-btn--plus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('.card__pic').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });



  /*скрытие списка*/

  $('.btn__visible').on('click', function () {
    $('.top__invisible').toggleClass('top__invisible--active');
  });

  var Mixer = mixitup('.top__content');

  /*кнопка показать еще*/
  /* size_li = $("#myList li").size();
      x=3;
      $('#myList li:lt('+x+')').show();
      $('#loadMore').click(function () {
          x= (x+5 <= size_li) ? x+5 : size_li;
          $('#myList li:lt('+x+')').show();
      });
      $('#showLess').click(function () {
          x=(x-5<0) ? 3 : x-5;
          $('#myList li').not(':lt('+x+')').hide();
      }); */


  /*добавление товара в корзину*/




});
/*?  http://jsfiddle.net/cse_tushar/6FzSb/*/
/* $(document).ready(function () { */
/* $(function () {
    size_li = $("#myList li").size();
    x=3;
    $('#myList li:lt('+x+')').show();

    $('#loadMore').on('click',function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
    });
    $('#showLess').on('click',function () {
        x=(x-5<0) ? 3 : x-5;
        $('#myList li').not(':lt('+x+')').hide();
    });
}); */