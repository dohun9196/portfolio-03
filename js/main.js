$(function () {

    $('.main_slide').slick({
        dots: true,
        autoplay: false,
        arrows: true,

        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: false,
        prevArrow: false,
        nextArrow: false,


        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear'
    });


    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() < 900) {
            $("#top_btn").css('visibility', 'hidden');
        }
        else {
            $("#top_btn").css('visibility', 'visible');
        }
    });
});