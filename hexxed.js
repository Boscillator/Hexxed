
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

        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        $('#color-square').css({
            "background-color": "rgb("+r+" "+g+" "+b+")",
            "width": "100px",
            "height": "100px"
        });
    };


    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        scaffold(this);
    }
})(jQuery);