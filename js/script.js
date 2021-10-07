$(function(){
    //lightbox
     $('.venobox').venobox();
    
    //wow js
    new WOW().init();
    
    //filtar
    $('.filtr-container').filterizr();
    
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.about_slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
        arrows:true,
        autoplay:true,
        nextArrow:".nxtbtn",
        prevArrow:".prevbtn",
        autoplaySpeed:2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
});