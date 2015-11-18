/**
 * Created by andrej on 18/11/15.
 */
$(document).ready(function () {

    function newShutter(paramX, paramY) {
        var newDiv = $('<div>').addClass("shutter");
        return newDiv.css({top: paramY + "px", left: paramX + "px"});
    }


    for (var i = 0; i < 30; i++) {
        var x = Math.random() * 30 - Math.random() * 15;
        var y = Math.random() * 30 - Math.random() * 15;
        $(".container").append(newShutter(x, y));
    }
});