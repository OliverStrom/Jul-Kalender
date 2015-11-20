/**
 * Created by andrej on 18/11/15.
 */
$(document).ready(function () {

    function newShutter(paramX, paramY) {
        var newDiv = $('<div>').addClass("shutter");
        return newDiv.css({top: paramY + "px", left: paramX + "px"});
    }

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    function createRandomDivs() {
        var dates = [];
        for (var i = 0; i < 24; i++) {
            dates.push(i + 1);
        }
        shuffle(dates);


        for (var i = 0; i < 24; i++) {
            var x = Math.random() * 30 - Math.random() * 15;
            var y = Math.random() * 30 - Math.random() * 15;
            $(".container").append(newShutter(x, y).html(dates[i] + 1));
        }
    }
    createRandomDivs();
});