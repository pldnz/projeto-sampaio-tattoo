$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 2,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1280: {
                items: 3,
            },
        },
    });
});
