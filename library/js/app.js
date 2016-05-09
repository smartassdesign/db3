
jQuery(document).ready(function($){
$('.db-slider').each(function() {
  var id = $(this).attr('id');
    var next = '#'+id+'-next';
    var prev = '#'+id+'-prev';
  $(this).slick({
    arrows: true,
    dots: false,
    // appendArrows: '.qa2nav',
    prevArrow: prev,
    nextArrow: next,
    autoplay: false
    // autoplaySpeed: 6000
  });
});
});