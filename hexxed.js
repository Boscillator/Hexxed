
var source  = "<p>Hexxed</p>"+
    "<div id='color-square'></div>" +
    "<div>" +
    "   <div id='r' class='color-slider'></div>" +
    "   <div id='g' class='color-slider'></div>" +
    "   <div id='b' class='color-slider'></div>" +
    "   <button id='check' class=\"ui-button ui-widget ui-corner-all\">Check!</button>" +
    "</div>";

(function($) {

    var start_time = null;
    var r,g,b;
    var difficulty;

    var getColorInSliders = function() {
        return {
            'r': $('#r').slider("option","value"),
            'g': $('#g').slider("option","value"),
            'b': $('#b').slider("option","value")
        }
    };

    var check = function() {
        var deltaTime = (new Date()) - start_time;

        var color = getColorInSliders();
        var score = score_calc([r,g,b],[color.r, color.g, color.b], difficulty, deltaTime);
        console.log(score);
    };

    var scaffold = function(element) {
        $(element).html(source);
        $(".color-slider").slider({
            max: 255,
        });
      
        $('#check').click(check);

    };

    var reset = function() {
        start_time = new Date();

        r = Math.floor((Math.random()*255)+1);
        g = Math.floor((Math.random()*255)+1);
        b = Math.floor((Math.random()*255)+1);
        $('#color-square').css({
            "background-color": "rgb("+r+" "+g+" "+b+")",
            "width": "100px",
            "height": "100px"
        });
    };


    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        difficulty = settings.difficulty;
        scaffold(this);
        reset();
    }
})(jQuery);