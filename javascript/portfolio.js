$(document).ready(function () {
    // For smooth scrolling from top to portfolio
    $("#forwardBtn").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#navBar").offset().top
        }, 'slow');

    });

    // For smooth scrolling from portfolio to hangman
    $("#toHangman").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#hangman").offset().top
        }, 'slow');

    });
    // For smooth scrolling from portfolio to rpg
    $("#toRPG").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#rpg").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toTrivia").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#trivia").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toRPS").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#rps").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toAPI").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#apis").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toBamazon").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#mysqlnode").offset().top
        }, 'slow');

    });

    $('#paw').click(function () {

        if ($('#site').hasClass('cursorCat')) {
            $('#site').removeClass('cursorCat');
        } else {
            $('#site').addClass('cursorCat');
        }
    });

    $(".knocksequence").hide();










    $("#html5").on("mouseenter", function() {
        $("#html5").addClass("hoverbounce");
    });

    $("#html5").on("mouseleave", function() {
        $("#html5").removeClass("hoverbounce");
    });

    $(".hoverhtml").on("mouseenter", function() {
        $("#html5").addClass("hoverbounce");
    });

    $(".hoverhtml").on("mouseleave", function() {
        $("#html5").removeClass("hoverbounce");
    });

    

    
    $("#css").on("mouseenter", function() {
        $("#css").addClass("hoverbounce");
    });

    $("#css").on("mouseleave", function() {
        $("#css").removeClass("hoverbounce");
    });

    $(".csshover").on("mouseenter", function() {
        $("#css").addClass("hoverbounce");
    });

    $(".csshover").on("mouseleave", function() {
        $("#css").removeClass("hoverbounce");
    });




    
    $("#javascript").on("mouseenter", function() {
        $("#javascript").addClass("hoverbounce");
    });

    $("#javascript").on("mouseleave", function() {
        $("#javascript").removeClass("hoverbounce");
    });

    $(".hoverjavascript").on("mouseenter", function() {
        $("#javascript").addClass("hoverbounce");
    });

    $(".hoverjavascript").on("mouseleave", function() {
        $("#javascript").removeClass("hoverbounce");
    });



    
    $("#node").on("mouseenter", function() {
        $("#node").addClass("hoverbounce");
    });

    $("#node").on("mouseleave", function() {
        $("#node").removeClass("hoverbounce");
    });

    $(".hovernode").on("mouseenter", function() {
        $("#node").addClass("hoverbounce");
    });

    $(".hovernode").on("mouseleave", function() {
        $("#node").removeClass("hoverbounce");
    });



    
    $("#angular").on("mouseenter", function() {
        $("#angular").addClass("hoverbounce");
    });

    $("#angular").on("mouseleave", function() {
        $("#angular").removeClass("hoverbounce");
    });

    $(".hoverangular").on("mouseenter", function() {
        $("#angular").addClass("hoverbounce");
    });

    $(".hoverangular").on("mouseleave", function() {
        $("#angular").removeClass("hoverbounce");
    });



    
    $("#react").on("mouseenter", function() {
        $("#react").addClass("hoverbounce");
    });

    $("#react").on("mouseleave", function() {
        $("#react").removeClass("hoverbounce");
    });

    $(".hoverreact").on("mouseenter", function() {
        $("#react").addClass("hoverbounce");
    });

    $(".hoverreact").on("mouseleave", function() {
        $("#react").removeClass("hoverbounce");
    });












    $('#angular').click(function() {
        window.location = 'http://www.pepperfig.com/home'
    });

    $('.hoverangular').click(function() {
        window.location = 'http://www.pepperfig.com/home'
    });

    $('#react').click(function() {
        window.location = 'https://www.12coffees.com/'
    });
    $('.hoverreact').click(function() {
        window.location = 'https://www.12coffees.com/'
    });




    $('.knock-btn').click(function () {

        if ($('.knock-btn').hasClass('whothere')) {
            $(".knock-btn").attr("src", "./assets/images/wahwho.png");
            $(".knocksequence").text("Wah");
            $(".knock-btn").addClass('wahwho');
            $('.knock-btn').removeClass('whothere');

        } else if ($('.knock-btn').hasClass('wahwho')) {
            $(".knock-btn").attr("src", "./assets/images/wahoo.png");
            $(".knock-btn").addClass('link');
            $(".knocksequence").text("Wow, you seem really excited to hire me!");
            if ($('.knock-btn').hasClass('link')) {
                $('.knock-btn').click(function () {
                    window.location = 'https://www.linkedin.com/in/taylor-sterling-668894114/';
                });
            }
        }
        else {
            $(".knock").hide();
            $(".knocksequence").show();
            $(".knock-btn").attr("src", "./assets/images/whosthere.png");
            $('.knock-btn').addClass('whothere');
        }
    });

    $(".knock-btn").on("mousedown", function () {
        $(this).attr("src", "assets/images/pushed.png");
    });

    $(".knock-btn").on("mouseup", function () {
        $(this).attr("src", "assets/images/notpushed.png");
    });

});
