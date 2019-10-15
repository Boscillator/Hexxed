
var source  = "<p>Hexxed</p>"+
    "<div id='color-square'></div>" +
    "<div>" +
    "   <div class='color-slider'></div>" +
    "   <div class='color-slider'></div>" +
    "   <div class='color-slider'></div>" +
    "   <button id='check' class=\"ui-button ui-widget ui-corner-all\">Check!</button>" +
    "</div>";

(function($) {
    var check = function() {
        console.log('check')
    }

    var scaffold = function(element) {
        $(element).html(source);
        $(".color-slider").slider({
            max: 255,
        });
        $('#check').click(check);
    }


    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        scaffold(this);
    }
})(jQuery);