$(document).ready(function(){
    $('.slider').slick({
        'autoplay': true,
        'arrows': false,
        'autoplaySpeed': 5000
    });

    $('.left-arrow-slider').click(function(){
        $('.slider').slick('slickPrev');
    })

    $('.right-arrow-slider').click(function(){
        $('.slider').slick('slickNext');
    })
});

