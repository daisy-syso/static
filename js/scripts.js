$(document).ready(function() {

    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var slideIndex = 1;

    $('.filtering').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var filtered = false;
    $('.js-filter').on('click', function() {
        if (filtered === false) {
            $('.filtering').slickFilter(':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slickUnfilter();
            $(this).text('Filter Slides');
            filtered = false;
        }
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 166) {
            $('.fixed-header').show();
        } else {
            $('.fixed-header').hide();
        }
    });


});