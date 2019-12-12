$(function () {
    $("#sideNavToggler").click(function () {
        $("#mySidenav").toggleClass("sidenavvisible");
    });

    $("#sideNavTogglerInner").click(function () {
        $("#mySidenav").removeClass("sidenavvisible");
    });

    $("#sideNavTogglerRight").click(function () {
        $("#mySidenavRight").toggleClass("sidenavvisibleright");
    });

    $("#sideNavTogglerInnerRight").click(function () {
        $("#mySidenavRight").removeClass("sidenavvisibleright");
    });

    $(window).scroll(function () {
        $("#mySidenav").removeClass("sidenavvisible");
        $("#mySidenavRight").removeClass("sidenavvisibleright");
    });

    if ($(window).width() < 575) {
        $("#mobileFooterContentLeft").addClass("mobileFooterContentLeft");
    };
    $('[data-toggle="tooltip"]').tooltip();
});