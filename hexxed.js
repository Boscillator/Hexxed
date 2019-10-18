
var source  = "<p>Hexxed</p>"+
    "<div id='color-square'></div>" + "<div id='second-color-square'></div>" +
    "<div>" +
    "   <div id='r' class='color-slider'></div>" +
    "   <div id='r_out'>0</div>" +
    "   <div id='g' class='color-slider'></div>" +
    "   <div id='g_out'>0</div>" +
    "   <div id='b' class='color-slider'></div>" +
    "   <div id='b_out'>0</div>" +
    "   <button id='check' class='ui-button ui-widget ui-corner-all'>Check!</button>" +
    "   <button id='next' class='ui-button ui-widget ui-corner-all'>Next!</button>" +
    "   <div id='score'></div>" +
    "   <div id='last-score'></div>" +
    "</div>";

(function($) {

    var start_time = null;
    var r,g,b;
    var r2,g2,b2;
    var difficulty;
    var current_turn;
    var total_score = 0;

    var onSliderChange = function() {
        var myId = this.id;
        console.log(myId);
        $('#' + myId + '_out').text($(this).slider("option","value"));
    };

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
        total_score += score;
        total_score = Math.max(0, total_score);

        $('#last-score').show().text(score.toFixed(2));
        $('#score').text(total_score.toFixed(2));

        current_turn--;

        if(current_turn <= 0) {
            $('#check').attr('disabled','true');
        }

        goNext();
    };

    var scaffold = function(element) {
        $(element).html(source);
        $(".color-slider").slider({
            max: 255,
            change: onSliderChange
        });
      
        $('#check').click(check);
        $('#next').click(reset);
    };

    var goNext = function() {
        $('#check').hide();
        $('#next').show()
    };

    var reset = function() {
        start_time = new Date();

        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);

        console.log(r,g,b);

        $('#color-square').css({
            "background-color": "rgb("+r+" "+g+" "+b+")",
            "width": "100px",
            "height": "100px"
        });
        $('#second-color-square').css({
            "background-color": "rgb("+0+" "+0+" "+0+")",
            "width": "100px",
            "height": "100px"
        });


        $('#check').show();
        $('#next').hide();
        $('#last-score').hide();
    };


    $.fn.hexxed = function(settings) {
        console.log("New hexxed", settings);
        difficulty = settings.difficulty;
        current_turn = settings.turns;
        scaffold(this);
        reset();
    }
})(jQuery);