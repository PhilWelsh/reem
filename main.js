
$(function () {

    var currentpage

    //Click menu
    $(".menu li a").on("click", function () {

        //change page to what was clicked
        currentpage = $(this).attr("class");
        $("body").removeClass("home about portfolio photography graphic-design life-drawing contact");
        $("body").addClass(currentpage);

        //individual project page open
        $(".stripe").removeClass("open close");

        //make page scrollable if has content
        if (currentpage !== "home" && currentpage !== "contact") {
            $("body").css("position", "absolute");
        }
        else {
            $("body").css("position", "fixed");
        };
    });

    $(".project-button").on("click", function () {
        $(this).parent().parent().parent().addClass("open");
        $(this).parent().parent().parent().siblings().addClass("close");
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