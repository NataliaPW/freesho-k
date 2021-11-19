$(function () {
  
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

});