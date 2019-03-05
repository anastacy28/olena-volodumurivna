
    $('.menu').click(function(){
       $('.level2').slideToggle("show");
    });
  
    $('.contacts').click(function(){
       $('.contacts-list').slideToggle("active");
    });
         
   $('.slaider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
       autoplaySpeed: 2000,
      });
       $('.slick-3').slick({
      infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      });
    

      $('.slick-show').slick({
  cssEase: 'ease-in',
  adaptiveHeight: true,
  asNavFor: '.slaider-nav'
});
$('.slaider-nav').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-show',
  centerMode: true,
  focusOnSelect: true,
  vertical: true
});
    