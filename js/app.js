$("nav ul li a").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
        targetOffset = $(id).offset().top - 100;
    $("html, body").animate(
        {
            scrollTop: targetOffset,
        },
        600
    );
});
