
var source  = "<p>Hexxed</p>"+
    "<div id='color-square'></div>" +
    "<div>" +
    "   <div id='r' class='color-slider'></div>" +
    "   <div id='g' class='color-slider'></div>" +
    "   <div id='b' class='color-slider'></div>" +
    "   <button id='check' class=\"ui-button ui-widget ui-corner-all\">Check!</button>" +
    "</div>";

(function($) {

    var getColorInSliders = function() {
        return {
            'r': $('#r').slider("option","value"),
            'g': $('#g').slider("option","value"),
            'b': $('#b').slider("option","value")
        }
    }

    var check = function() {
        var color = getColorInSliders();
        console.log(color);
    };

    var scaffold = function(element) {
        $(element).html(source);
        $(".color-slider").slider({
            max: 255,
        });
        $('#check').click(check);
    };


    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        scaffold(this);
    }
})(jQuery);