$(document).ready(function () {
    // show category by three dots
    $(".three-dots").on("click", function () {
        $(".all-category").toggle();
        if ($(".all-category").is(":visible")) {
            $(".category-header-container").css({ backgroundColor: "#eee" });
            $(".btn-close-category").show();
            $(".three-dots").hide();
        } else {
            $(".category-header-container").css({ backgroundColor: "#fff" });
            $(".btn-close-category").hide();
        }
    });

    $(".btn-close-category").on("click", function () {
        $(".btn-close-category").hide();
        $(".all-category").hide();
        $(".three-dots").show();
        $(".category-header-container").css({ backgroundColor: "#fff" });
    });
    // end show category by three dots

    // scroll to top button
    $(".scroll-top").on("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    $(window).on("scroll", function () {
        let scroll = this.scrollY;
        if (scroll !== 0) {
            $(".scroll-top").css({ display: "flex" });
        } else {
            $(".scroll-top").css({ display: "none" });
        }
    });
    // end scroll to top button
});
