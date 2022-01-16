$(function () {
  /*подключение меню*/
  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
   /*  $('.menu__list--right').toggleClass('menu__list--right--active'); */
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('hidden');
    $('.menu__link').toggleClass('menu__link--active');
     $('.contact-form__form').toggleClass('contact-form__form--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active');
  /*   $('.menu__list--right').removeClass('menu__list--right--active'); */
    $('.menu__btn').removeClass('menu__btn--active');
    $('body').removeClass('hidden');
    $('.menu__link').addClass('menu__link--active');
  $('.contact-form__form').removeClass('contact-form__form--active');
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
  //$('.menu__icon--tel').on('click', function () {
    //$(this).next('.contact-form__form').slideToggle();
    /* $(this).toggleClass('active');
  })  */

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
    autoplay: true,
    autoplaySpead: 2000,
    nextArrow: '<button type="button" class="slick-next slick-btn slick-productpage-btn slick-productpage-btn-next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn slick-productpage-btn slick-productpage-btn-prev"></button>',
    responsive: [{
        breakpoint: 991.98,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpead: 2000,
          arrows: false,
          dots: true,
          dotsClass: 'slick-dots productpage-slider-dots'
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
          arrows: false,
          dots: true,
          dotsClass: 'slick-dots productpage-slider-dots'
        }
      }
    ]
  });

  $('.card__box--productpage-product').slick({
    nextArrow: '<button type="button" class="slick-next slick-btn slick-product-btn slick-product-btn-next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn slick-product-btn slick-product-btn-prev"></button>',
    responsive: [{
      breakpoint: 479.98,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpead: 2000,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots productcart-slider-dots'
      }
    }]
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
  $(".card__stars-one").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
    numStars: 1,
   starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
  });


  $('.productpage-tab__review-star').rateYo({
     starWidth: "16px",
    spacing: "2px",
    normalFill: "#C1C1C1",
    ratedFill: '#ffc000',
    readOnly: true,
     numStars: 5,
            /* normalFill: 'transparent', */
            starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
  });

   /*  $('.card__stars-five').rateYo({
    starWidth: "16px",
    spacing: "2px",
    ratedFill: '#ffc000',
    normalFill: "#C1C1C1",
     numStars: 5,
    readOnly: true,
         
            starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
  }); */

  $(".form__star").rateYo({
    starWidth: "16px",
    spacing: "2px",
    ratedFill: '#ffc000',
    normalFill: "#C1C1C1",
     numStars: 5,
    /* readOnly: true, */   /*блокирует изменение рейтинга*/
           /*  normalFill: 'transparent', */
            starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
  });
 
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
  var Mixer = mixitup('.top-product__list');
  var Mixer = mixitup('.promo-product__list');
/* 
  $("[data-mix]").each(function(){
  var $self = $(this), // Element with buttons
      $filt = $self.find("[data-filter]"), // data-filter buttons
      $sort = $self.find("[data-sort]"),   // data-sort buttons
      $mix  = $($self.data("mix")); // Container to mix
  $mix.mixItUp({ 
    selectors: {
      filter: $filt,
      sort: $sort
    }
  });
}); */

  /*  $('#Container').mixItUp({
    selectors: {
      filter: '.filter1'
    }
  });

  $('#Container2').mixItUp({
    selectors: {
      filter: '.filter2'
    }
  });  */

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