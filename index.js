
function instantiate() {
    var settings = {
        difficulty: $("#difficulty").val(),
        turns: $("#turns").val()
    };
    $("#target").hexxed(settings);
}

$(document).ready(function() {
    $("#difficulty").selectmenu({
        change: instantiate
    });
    $("#turns").spinner({
        change: instantiate,
        spin: instantiate
    });
    instantiate();
});