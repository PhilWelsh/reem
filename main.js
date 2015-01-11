
$(function () {
    var currentpage
    $(".menu li a").on("click", function () {
        currentpage = $(this).attr("class");
        $("body").removeClass("home about portfolio contact");
        $("body").addClass(currentpage);
        $(".stripe").removeClass("open close");
        if (currentpage == "portfolio") {
            $("body").css("position", "absolute");
        }
        else {
            $("body").css("position", "fixed");
        };
    });

    $(".project-button").on("click", function () {
        $(this).parent().parent().addClass("open");
        $(this).parent().parent().siblings().addClass("close");
    });

    //////////////TESTING////////////////
    //$(".menu li a").hover(
    //    function () {
    //    alert(currentpage);
    //    }
    //);
    //$('.freetile').freetilediv({
    //    animate: true,
    //    elementDelay: 30
    //});


});