$('.Show').click(function() {
    $('#target').show(800);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});


// Simple slider
var $swiperSelector = $('.swiper-container');

$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass("swiper-slider-" + index);
    
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;

    var swiper = new Swiper(".swiper-slider-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: -85
        },
        992: {
      slidesPerView: 3,
             spaceBetween: -85
        },
        480: {
         slidesPerView: 3,
            spaceBetween: -85
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
 
  });
});