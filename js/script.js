$('.violet_box').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false
});
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('active');
    });
});