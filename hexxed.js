
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
        $(".color-slider").slider({
            max: 255,
        });
        var r = Math.floor((Math.random()*255)+1);
        var g = Math.floor((Math.random()*255)+1);
        var b = Math.floor((Math.random()*255)+1);
        $('#color-square').css({
            "background-color": "rgb("+r+" "+g+" "+b+")",
            "width": "100px",
            "height": "100px"
        });
    }

    $.fn.hexxed = function(settings) {
        scaffold(this);
    }
})(jQuery);