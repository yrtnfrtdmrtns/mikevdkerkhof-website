$(document).ready(function() {
  $('#album-slider').slick({
    variableWidth: true,
    draggable: false,
    arrows: true,
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
