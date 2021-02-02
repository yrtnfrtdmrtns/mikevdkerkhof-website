$(document).ready(function() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  $('.scroll-down').click(function() {
    var slider = $('#slider').offset().top - 77;
      $('html').animate({
        scrollTop: slider
      }, 500)
  })

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
    if ($('.animate-left').each(function() {
      if($(this).isInViewport()) {
        $(this).addClass('animate__animated animate__fadeInLeft');
      }
    }));

    if ($('.animate-right').each(function() {
      if($(this).isInViewport()) {
        $(this).addClass('animate__animated animate__fadeInRight');
      }
    }));

    if ($('.animate-up').each(function() {
      if($(this).isInViewport()) {
        $(this).addClass('animate__animated animate__fadeInUp');
      }
    }));
  });


  $('#album-slider').slick({
    variableWidth: true,
    draggable: false,
    arrows: true,
    prevArrow: "<i class='fas fa-long-arrow-alt-left slick-prev'></i>",
    nextArrow: "<i class='fas fa-long-arrow-alt-right slick-next'></i>",
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    useTransform: false,
    responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
  })
})
