
var source  = "<p>Hexxed</p>"+
    "<div id='color-square'></div>" +
    "<div>" +
    "   <div class='color-slider'></div>" +
    "   <div class='color-slider'></div>" +
    "   <div class='color-slider'></div>" +
    "</div>";

(function($) {
    var scaffold = function(element) {
        $(element).html(source);
        $(".color-slider").slider();
    }

    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        scaffold(this);
    }
})(jQuery);