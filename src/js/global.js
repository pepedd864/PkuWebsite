$(function () {
    //配置slick
    const slide = $(".slide-group").slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
    });
    $(".slide-dots .slide-dot:last").click(function () {
        $(".slide-group").slick("slickNext")
    })
    $(".slide-group").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".slide-dot").eq(nextSlide).addClass("active").siblings().removeClass("active");
    })
    //设置子选项的悬浮位置
    let sto_nav;
    $(".nav_main a").hover(
        function () {
            clearTimeout(sto_nav);
            $(".nav_child .item").removeClass("show");
            $(".nav_main a").removeClass("hover");
            let c = $(this).parents(".navbar").find(".nav_child").find(".item").eq($(this).index());
            let ol = $(this).parents(".navbar").offset().left;
            let al = $(this).offset().left + $(this).outerWidth() * 0.5;
            let fl = al - ol;
            let cl = fl - c.outerWidth() * 0.5;
            if (cl < 0) {
                c.css("left", 0);
            }
            else if (cl + c.outerWidth() > $(this).parents(".navbar").outerWidth()) {
                c.css("right", 0);
            }
            else {
                c.css("left", cl);
            }
            $(this).addClass("hover");
            c.addClass("show");
        },
        function () {
            sto_nav = setTimeout(() => {
                $(".nav_child .item").removeClass("show");
                $(".nav_main a").removeClass("hover");
            }, 100);
        }
    );
    $(".nav_child .item").hover(
        function () {
            clearTimeout(sto_nav);
        },
        function () {
            $(".nav_child .item").removeClass("show");
            $(".nav_main a").removeClass("hover");
        }
    );
})