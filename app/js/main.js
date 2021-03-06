$(function () {
  /*подключение меню*/
  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu__list--right').toggleClass('menu__list--right--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('hidden');
    $('.menu__link').toggleClass('menu__link--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.menu__list--right').removeClass('menu__list--right--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('body').removeClass('hidden');
    $('.menu__link').addClass('menu__link--active');
  });

  /*подключение лист меню - выпадашка*/
  /*клик вне элемента*/
  $(document).mouseup(function (e) {
    var container = $(".menulist");
    var ul = $(".menulist__list");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      /* alert('Клик снаружи.'); */

      $('.menulist').removeClass('menulist--active');
      $('.menulist__list').removeClass('menulist__list--active');
      $('.menulist__btn').removeClass('menulist__btn--active');
      $('.menulist-btn__icon-arrow').removeClass('menulist-btn__icon-arrow--active');

      /*  ul.hide(); */
    } else {
      /* alert('Клик внутри.'); */
      $('.menulist__btn').on('click', function () {
        $('.menulist').toggleClass('menulist--active');
        $('.menulist__list').toggleClass('menulist__list--active');
        $('.menulist__btn').toggleClass('menulist__btn--active');
        $('.menulist__link').toggleClass('menulist__link--active');
        $('.menulist-btn__icon-arrow').toggleClass('menulist-btn__icon-arrow--active');
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
  $('.cart-form__btn').on('click', function () {
    $(this).next('.cart-form__form').slideToggle();
    $(this).toggleClass('active');
  })

  /*подключение формы поиска - выпадашка*/
  $('.user__link--search').on('click', function () {
    $(this).next('.search-form').slideToggle();
    $(this).toggleClass('active');
  })

  /*подключение формы фильтра - выпадашка*/
  $('.mainpage__content-item--filter').on('click', function () {
    $('.mainpage__filter-top').toggleClass('mainpage__filter-top--active');
     $('.mainpage__btn-close').toggleClass('mainpage__btn-close--active');
     $('.mainpage__content-item--filter').toggleClass('mainpage__content-item--filter--active');
  })

  $('.productpage-delivery__btn').on('click', function () {
    $(this).next('.productpage-delivery__content-full').slideToggle();
    $(this).toggleClass('active');
    $('.productpage-delivery__content').toggleClass('productpage-delivery__content--active');
    $('.productpage-delivery').toggleClass('productpage-delivery--active');
  })

  /*подключение формы контакты - выпадашка*/
  /*клик вне элемента*/
  $('.menu__icon--tel').on('click', function () {
    $(this).next('.contact-form__form').slideToggle();
    $(this).toggleClass('active');
  })

  /*подключение mainepage карточек к кнопкам*/
  $('.mainpage__filter-sort').on('click', function () {
    $('.mainpage__filter-sort').removeClass('mainpage__filter-sort--active');
    $(this).addClass('mainpage__filter-sort--active');
  });

  $('.mainpage__filter-sort--three').on('click', function () {
     $('.mainpage-cardbox__full').removeClass('mainpage-cardbox__full--active');
    $('.mainpage-cardbox__item').removeClass('mainpage-cardbox__item--active');
    $('.mainpage-cardbox__content').removeClass('mainpage-cardbox__content--active');
    $('.card__subline--mainpage-cardbox').removeClass('card__subline--mainpage-cardbox--active');
    $('.card__box--mainpage-cardbox').removeClass('card__box--mainpage-cardbox--active');
    $('.card__link--mainpage-cardbox').removeClass('card__link--mainpage-cardbox--active');
    $('.card__link-img--mainpage-cardbox').removeClass('card__link-img--mainpage-cardbox--active');
    $('.card__link-icon--mainpage-cardbox').removeClass('card__link-icon--mainpage-cardbox--active');
    $('.card__kodprodukta--mainpage-cardbox').removeClass('card__kodprodukta--mainpage-cardbox--active');
    $('.card__content--mainpage-cardbox').removeClass('card__content--mainpage-cardbox--active');
    $('.card__text--mainpage-cardbox').removeClass('card__text--mainpage-cardbox--active');
    $('.card__discount--mainpage-cardbox').removeClass('card__discount--mainpage-cardbox--active');
    $('.card__summprice--mainpage-cardbox').removeClass('card__summprice--mainpage-cardbox--active');
    $('.card__availability--mainpage-cardbox').removeClass('card__availability--mainpage-cardbox--active');
    $('.card__stars-one--mainpage-cardbox').removeClass('card__stars-one--mainpage-cardbox--active');
    $('.card__stars-five--mainpage-cardbox').removeClass('card__stars-five--mainpage-cardbox--active');
    $('.card__btn-heart--mainpage-cardbox').removeClass('card__btn-heart--mainpage-cardbox--active');
    $('.card__btn-close--mainpage-cardbox').removeClass('card__btn-close--mainpage-cardbox--active');
    $('.card__pic--mainpage-cardbox').removeClass('card__pic--mainpage-cardbox--active');
    $('.card__btn-cart--mainpage-cardbox').removeClass('card__btn-cart--mainpage-cardbox--active');
    $('.card__middleline--mainpage-cardbox').removeClass('card__middleline--mainpage-cardbox--active');
    $('.card__bottomline--mainpage-cardbox').removeClass('card__bottomline--mainpage-cardbox--active');
    $('.card__price-info--mainpage-cardbox').removeClass('card__price-info--mainpage-cardbox--active');
    $('.card__iconbox--mainpage-cardbox').removeClass('card__iconbox--mainpage-cardbox--active');

    $('.mainpage-cardbox__item').addClass('mainpage-cardbox__item');
    /* alert('Клик внутри 3'); */
  });

  $('.mainpage__filter-sort--two').on('click', function () {
      $('.mainpage-cardbox__full').addClass('mainpage-cardbox__full--active');
    $('.mainpage-cardbox__item').addClass('mainpage-cardbox__item--active');
    $('.mainpage-cardbox__content').addClass('mainpage-cardbox__content--active');

    $('.card__subline--mainpage-cardbox').addClass('card__subline--mainpage-cardbox--active');
    $('.card__box--mainpage-cardbox').addClass('card__box--mainpage-cardbox--active');
    $('.card__link--mainpage-cardbox').addClass('card__link--mainpage-cardbox--active');
    $('.card__link-img--mainpage-cardbox').addClass('card__link-img--mainpage-cardbox--active');
    $('.card__link-icon--mainpage-cardbox').addClass('card__link-icon--mainpage-cardbox--active');
    $('.card__kodprodukta--mainpage-cardbox').addClass('card__kodprodukta--mainpage-cardbox--active');
    $('.card__content--mainpage-cardbox').addClass('card__content--mainpage-cardbox--active');
    $('.card__text--mainpage-cardbox').addClass('card__text--mainpage-cardbox--active');
    $('.card__discount--mainpage-cardbox').addClass('card__discount--mainpage-cardbox--active');
    $('.card__summprice--mainpage-cardbox').addClass('card__summprice--mainpage-cardbox--active');
    $('.card__availability--mainpage-cardbox').addClass('card__availability--mainpage-cardbox--active');
    $('.card__stars-one--mainpage-cardbox').addClass('card__stars-one--mainpage-cardbox--active');
    $('.card__stars-five--mainpage-cardbox').addClass('card__stars-five--mainpage-cardbox--active');
    $('.card__btn-heart--mainpage-cardbox').addClass('card__btn-heart--mainpage-cardbox--active');
    $('.card__btn-close--mainpage-cardbox').addClass('card__btn-close--mainpage-cardbox--active');
    $('.card__pic--mainpage-cardbox').addClass('card__pic--mainpage-cardbox--active');
    $('.card__btn-cart--mainpage-cardbox').addClass('card__btn-cart--mainpage-cardbox--active');
    $('.card__middleline--mainpage-cardbox').addClass('card__middleline--mainpage-cardbox--active');
    $('.card__bottomline--mainpage-cardbox').addClass('card__bottomline--mainpage-cardbox--active');
    $('.card__price-info--mainpage-cardbox').addClass('card__price-info--mainpage-cardbox--active');
    $('.card__iconbox--mainpage-cardbox').addClass('card__iconbox--mainpage-cardbox--active');
    /* alert('Клик внутри 2'); */
  });

  /*подключение tabs*/
  $('.productpage-tab__btn').on('click', function () {
    $('.productpage-tab__btn').removeClass('productpage-tab__btn--active');
    $(this).addClass('productpage-tab__btn--active');
  });

  $('.productpage-tab__btn--description').on('click', function () {
    $('.productpage-tab__content').removeClass('productpage-tab__content--active');
    $('.productpage-tab__content--description').addClass('productpage-tab__content--active');
    /* alert('Клик внутри 1'); */
  });

  $('.productpage-tab__btn--characteristic').on('click', function () {
    $('.productpage-tab__content').removeClass('productpage-tab__content--active');
    $('.productpage-tab__content--characteristic').addClass('productpage-tab__content--active');
    /* alert('Клик внутри 2'); */
  });

  $('.productpage-tab__btn--review').on('click', function () {
    $('.productpage-tab__content').removeClass('productpage-tab__content--active');
    $('.productpage-tab__content--review').addClass('productpage-tab__content--active');
    /* alert('Клик внутри 3'); */
  });

  /*подключение слайдера на главной странице*/
  $('.slider-list').slick({
    nextArrow: '<button type="button" class="slick-next slick-btn slick-btn-next"></button>',

    prevArrow: '<button type="button" class="slick-prev slick-btn slick-btn-prev"></button>',

    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,

    responsive: [{
      breakpoint: 1320.98,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpead: 2000
      }
    }]
  });

  /*подключение слайдера на странице карточка продуктов*/
  $('.slider__full').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
   /*  autoplay: true,
    autoplaySpead: 2000, */
    nextArrow: '<button type="button" class="slick-next slick-btn slick-productpage-btn slick-productpage-btn-next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn slick-productpage-btn slick-productpage-btn-prev"></button>',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpead: 2000,
          arrows:false,
          dots:true,
          dotsClass:'slick-dots productpage-slider-dots'
        }
      },
      {
        breakpoint: 479.98,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpead: 2000,
          arrows:false,
          dots:true,
          dotsClass:'slick-dots productpage-slider-dots'
        }
      }
    ]
  }); 

  $('.card__box--productpage-product').slick({
    nextArrow: '<button type="button" class="slick-next slick-btn slick-product-btn slick-product-btn-next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn slick-product-btn slick-product-btn-prev"></button>',
     responsive: [
      {
        breakpoint: 479.98,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpead: 2000,
          arrows:true,
          dots:true,
          dotsClass:'slick-dots productcart-slider-dots'
        }
      }
    ]
  });

  $('.brands__items').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1920.98,
        settings: {
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,

          autoplay: true,
          autoplaySpead: 2000
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpead: 2000
        }
      },
      {
        breakpoint: 479.98,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,

          autoplay: true,
          autoplaySpead: 2000
        }
      }
    ]
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

  /*скрытие списка карточек в карточке - кнопка показать еще*/
  $('.btn__visible').on('click', function () {
    $('.card__displaynone-btn').toggleClass('card__displaynone-btn--active');
    $('.card__btn-text').toggleClass('card__btn-text--active');
  });

  /*скрытие категорий в меню фильтров каталога*/
  $('.mainpage__filter-title--category').on('click', function () {
    $('.mainpage__filter-title--category').toggleClass('mainpage__filter-title--active');
    $('.mainpage__filter-list--category').toggleClass('mainpage__filter-list--active');
  });

  $('.mainpage__filter-title--offer').on('click', function () {
    $('.mainpage__filter-title--offer').toggleClass('mainpage__filter-title--active');
    $('.mainpage__filter-list--offer').toggleClass('mainpage__filter-list--active');
  });

  $('.mainpage__filter-title--brand').on('click', function () {
    $('.mainpage__filter-title--brand').toggleClass('mainpage__filter-title--active');
    $('.mainpage__filter-list--brand').toggleClass('mainpage__filter-list--active');
  });

  $('.mainpage__filter-title--price').on('click', function () {
    $('.mainpage__filter-title--price').toggleClass('mainpage__filter-title--active');
    $('.mainpage__filter-list--price').toggleClass('mainpage__filter-list--active');
    /*  alert('Клик внутри.'); */
  });

  /*звездный рейтинг*/
  $(".card__stars-one-1").rateYo({
    starWidth: "40px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spasing: "5px",
    readOnly: true,
    numStars: 1,
    "starSvg": '<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24"' +
      ' height="24" viewBox="0 0 24 24">' +
      ' <path d="M12.587l3.668 7.568 8.332 1.151-6.064' +
      ' 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828' +
      ' 8.332-1.151z" fill="#C1C1C1"/></svg>',
  });

  $(".productpage-tab__review-star").rateYo({
    starWidth: "16px",
    spacing: "5px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
    numStars: 5,
    "starSvg": '<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24"' +
      ' height="24" viewBox="0 0 24 24">' +
      ' <path d="M12.587l3.668 7.568 8.332 1.151-6.064' +
      ' 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828' +
      ' 8.332-1.151z" fill="#C1C1C1"/></svg>',
  });

  $(".form__star").rateYo({
    starWidth: "16px",
    spacing: "5px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
    numStars: 5,
    "starSvg": '<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24"' +
      ' height="24" viewBox="0 0 24 24">' +
      ' <path d="M12.587l3.668 7.568 8.332 1.151-6.064' +
      ' 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828' +
      ' 8.332-1.151z" fill="#C1C1C1"/></svg>',
  });

  /* <div class="card__stars-one-1"></div> */

  /* $(".card__stars-five").rateYo({
   /*  starWidth: "17px",
    spacing: "5px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spasing: "5px",
    readOnly: true,
    numStars: 5,
    "starSvg": '<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24"' +
      ' height="24" viewBox="0 0 24 24">' +
      ' <path d="M12.587l3.668 7.568 8.332 1.151-6.064' +
      ' 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828' +
      ' 8.332-1.151z" fill="#C1C1C1"/></svg>',
  }); */

  /*добавление товара в корзину*/


  /*фильтор цены*/
  $(".mainpage__form-slider").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.mainpage__form-to').text(data.to);
      $('.mainpage__form-from').text(data.from);
    },
    onChange: function (data) {
      $('.mainpage__form-to').text(data.to);
      $('.mainpage__form-from').text(data.from);
    },
  });

    /*подключение плагина для стилизации select*/
  $('.mainpage__content-select').styler();

  /*фильтр*/
  var Mixer = mixitup('.top__full');
  var Mixer = mixitup('.promo__full');

  $('.mixitup-control-active').on('click', function () {
    $('.card__displaynone-btn').addClass('card__displaynone-btn--active');
    $('.card__displaynone-btn--active').removeClass('card__displaynone-btn');
  });

  /*галерея фансибокс*/
  $("a.gallery-1, a.gallery-2, a.gallery-3, a.gallery-4, a.gallery-5, a.gallery-6, a.gallery-7, a.gallery-8, a.gallery-9, , a.gallery-10, a.gallery-11, a.gallery-12, a.gallery-13, a.gallery-14, a.gallery-15").fancybox();

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

/*подключение скролла*/
 /*  $(window).scroll(function () {
    var scroll = require('scroll');

    var scroll_page = $(window).scrollTop(),
      height = $('.slider__action').innerHeight();

    if ($(this).scrollTop() > (height + 1)) {

      $('.header').addClass('header--fixed');

    } else if ($(this).scrollTop() < height) {
      $('.header').removeClass('header--fixed');
    }
  }); */