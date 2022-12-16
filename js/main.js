$(function () {

    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        arrows: true,

        autoplaySpeed: 4000,
        pauseOnFocus: false,
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
    $("#top_btn").scrollTop(0);

    $(window).scroll(function () {

        if ($(this).scrollTop() < 3600) {
            $("#top_btn").css('visibility', 'hidden');
        }
        else {
            $("#top_btn").css('visibility', 'visible');
        }
    });
});