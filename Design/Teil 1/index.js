jQuery(document).ready(function($) {
    $("#toggle-mobile-nav").click(function(){
        $("#page").toggleClass("mobile-nav-opened");    // Das ist sozusagen ein Switch, der die Klasse an und ausmacht. Anschließend wird die Navigationsleiste sichtbar bzw. unsichtbar gemacht! Sie CSS Code Zeile 390.
    });

    $("#page").click(function(e){                       // diese Targetfunction ist richtig geil
        console.log(e);
        var target = e.target;

        var isMobileNavButtonClicked = $(target).hasClass("navbar-toggler")||$(target).hasClass("navbar-toggler-icon");
        if(isMobileNavButtonClicked){
            return;
        }
        $("#page").removeClass("mobile-nav-opened");
    })
})