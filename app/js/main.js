$(function(){
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
  });

  var mixer = mixitup('.products__list');

  var mixer = mixitup('.products__list', {
   load:{
    filter:'.burgers'
   }
});

$('.reviews__slider').slick({
        
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
        variableWidth: true,
        


        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    
                }
            },
            {
                breakpoint: 846, 
                settings: {
                   
                }
            },
            {
                breakpoint: 586,
                settings: {
                   
                }
            },
        ]
    });

})
	