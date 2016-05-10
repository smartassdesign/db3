
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


// AFFIX NAV JS




// BURGER JS


var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {
  
  if(clickDelayTimer === null) {
  
    var $burger = $(this);
    $burger.toggleClass('active');
    $burger.parent().toggleClass('is-open');

    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});





