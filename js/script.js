$('.counter').counterUp({
    delay: 10,
    time: 10000
});


$('.about-area').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'<span><i class="fas fa-angle-left prev"></i></span>',
    nextArrow:'<span><i class="fas fa-angle-right next"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });


  var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)