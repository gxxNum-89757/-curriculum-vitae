$(function () {
    // -----------------------------------
    // 导航距离滚动监听
    // ------------------------------------
    $(window).scroll(function () {
        const itemset = $(".nav-navigation").height();//获取元素高度
        const topset = $(document).scrollTop();//滚动条高度
        console.log(topset)
        if (topset > itemset) {
            $(".nav-style").addClass("nav-collapse-style");
        } else {
            $(".nav-style").removeClass("nav-collapse-style");
        }
    })
    // -----------------------------------
    // 锚点定位
    // ------------------------------------
    gotoTarget = function (target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }
    // -----------------------------------
    // 项目经验动态效果——isotope
    // ------------------------------------
    const $containear = $(".isotope-items");
    $containear.isotope();

    $(".detail-menu a").click(function () {
        $(".detail-menu a").removeClass("actives");
        $(this).addClass("actives");
        const selector = $(this).attr("data-filter");
        $containear.isotope({
            filter: selector
        });
    })
    // -----------------------------------
    // 导航栏
    // ------------------------------------
    var navigation = responsiveNav("#nav", {
        animate: true,
        transition: 400,
        label: "Menu",
        insert: "after",
        customToggle: "",
        openPos: "relative",
        jsClass: "js",
        debug: false,
        init: function () { },
        open: function () { },
        close: function () { }
    });
    // -----------------------------------
    // 轮播
    // ------------------------------------
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
    })
    // -----------------------------------
    // 计数
    // ------------------------------------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });

});