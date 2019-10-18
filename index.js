
function instantiate() {
    var settings = {
        difficulty: $("#difficulty").val(),
        turns: $("#turns").val()
    };
    $("#target").hexxed(settings);
}

$(document).ready(function() {
    $("#difficulty").selectmenu();
    $("#turns").spinner();
    $('#begin').click(function() {
        $('#begin').hide();
        instantiate();
    })
});