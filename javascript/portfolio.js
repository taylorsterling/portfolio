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





    // $('.knock-btn').click(function () {

    //     if ($('.knock-btn').hasClass('whothere')) {
    //         $(".buttonhtml").text("Wah Who?");
    //         $(".knocksequence").text("Wah");
    //         $(".knock-btn").addClass('wahwho');
    //         $('.knock-btn').removeClass('whothere');

    //     } else if ($('.knock-btn').hasClass('wahwho')) {
    //         $(".buttonhtml").text("Wahoo!");
    //         $(".buttonhtml").append("<a href='https://www.linkedin.com/in/taylor-sterling-668894114/'><br>Click Here to Contact Me!</a>")
    //         $(".knocksequence").text("Wow, you seem really excited to hire me!");
    //     }
    //     else {
    //         $(".knock").hide();
    //         $(".knocksequence").show();
    //         $(".buttonhtml").text("Who's There?");
    //         $('.knock-btn').addClass('whothere');
    //     }
    // });

    $(".knock-btn").on("mousedown", function () {
        $(this).attr("src", "assets/images/pushed.png");
    });

    $(".knock-btn").on("mouseup", function () {
        $(this).attr("src", "assets/images/notpushed.png");
    });


    // $(".knock-btn").hover( 
    //     function() {
    //         $(this).attr("src", "assets/images/pushed.png");
    //     },
    //     function() {
    //         $(this).attr("src", "assets/images/notpushed.png");
    //     }    
    // );

});
