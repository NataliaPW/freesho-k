$(function () {

  /*подключение лист меню - выпадашка*/
  /*клик вне элемента*/
  $(document).mouseup(function (e) {
    var container = $(".menulist");
    var ul = $(".menulist__list");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      /*  alert('Клик снаружи.'); */
      ul.hide();

      $('.menulist').removeClass('menulist--active');
      $('.menulist__list').removeClass('menulist__list--active');
      $('.menulist__btn').removeClass('menulist__btn--active');
      $('.menulist__link').addClass('menulist__link--active');
      $('.menulist-btn__icon-arrow').removeClass('menulist-btn__icon-arrow--active');

    } else {
      /* alert('Клик внутри.'); */
      $('.menulist__btn').on('click', function () {
        $('.menulist').toggleClass('menulist--active');
        $('.menulist__list').toggleClass('menulist__list--active');
        $('.menulist__btn').toggleClass('menulist__btn--active');
        $('.menulist__link').toggleClass('menulist__link--active');
        $('.menulist-btn__icon-arrow').addClass('menulist-btn__icon-arrow--active');
      });

      $('.menulist__link').on('click', function () {
        $('.menulist').removeClass('menulist--active');
        $('.menulist__list').removeClass('menulist__list--active');
        $('.menulist__btn').removeClass('menulist__btn--active');
        $('.menulist__link').addClass('menulist__link--active');
        $('.menulist-btn__icon-arrow').removeClass('menulist-btn__icon-arrow--active');
      });
    }
  });

  /*подключение формы корзина - выпадашка*/
  /*клик вне элемента*/
  $('.cart-form__btn').on('click', function () {
    $('.cart-form').toggleClass('cart-form--active');
    $('.cart-form__form').toggleClass('cart-form__form--active');
  });

  $('.cart__btn-close').on('click', function () {
    $('.cart-form__form').hide();
  });


  /*подключение слайдера*/

  $('.slider-list').slick({
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
    $('.card__displaynone-btn').toggleClass('card__displaynone-btn--active');
  });

  $('.mixitup-control-active').on('click', function () {
    $('.card__displaynone-btn--active').addClass('card__displaynone-btn--active');
    $('.card__displaynone-btn--active').removeClass('card__displaynone-btn');
  });

  var Mixer = mixitup('.top__full');
  var Mixer = mixitup('.promo__full');

  /*галерея фансибокс*/
  $("a.gallery-1, a.gallery-2, a.gallery-3, a.gallery-4, a.gallery-5, a.gallery-6, a.gallery-7, a.gallery-8, a.gallery-9, , a.gallery-10, a.gallery-11, a.gallery-12, a.gallery-13, a.gallery-14, a.gallery-15").fancybox();

  /*звездный рейтинг*/

  $(".card__stars-five").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: '#CCCCCE',
    ratedFill: "#E74C3C"
  });



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