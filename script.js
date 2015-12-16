/**
 * Created by andrej on 18/11/15.
 */
$(document).ready(function () {
    var studentID = [
        "backluma",
        "backstjo",
        "bergheme",
        "butschmi",
        "glasberj",
        "gronroga",
        "gronstri",
        "gullichf",
        "hagglunk",
        "haviamat",
        "heikelma",
        "janssmau",
        "ristanij",
        "ropponet",
        "parland",
        "sippones",
        "sjoberra",
        "stromjoe",
        "stromoli",
        "westeann",
        "westeann_2",
        "persona_1",
        "persona_2",
        "persona_3",
        "persona_4"
    ];
    studentID = shuffle(studentID);
    console.log(studentID.length);
    function newShutter(paramX, paramY, authorID) {
        var newDiv = $('<div>').addClass("shutter").attr("id", authorID).attr("title", authorID);
        loadCustomCss(authorID);
        loadAndExecuteStudentScript(newDiv);
        return newDiv.css({top: paramY + "px", left: paramX + "px"});
    }

    function shuffle(o) {
        for (var j, x, i = o.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            x = o[i];
            o[i] = o[j];
            o[j] = x;
        }
        return o;
    }

    function rotateRandom(obj) {
        return obj.css({transform: "rotate(" + 90 * Math.floor(Math.random() * 4) + "deg)"});
    }

    function createRandomDivs() {
        var dates = [];
        for (var j = 0; j < 24; j++) {
            dates.push(j + 1);
        }
        shuffle(dates);
        for (var i = 0; i < 24; i++) {
            var x = Math.random() * 30 - Math.random() * 15;
            var y = Math.random() * 30 - Math.random() * 15;
            $("#container").append(rotateRandom(newShutter(x, y, studentID[i]).html(dates[i])));
            if (i % 6 === 5)$("#container").append('<br/>');
        }
    }

    function drop(obj) {
        return $(obj).css({zIndex: '2'}).animate({top: '2000px'}, 'slow', 'swing');
    }

    function fileNotFoundWarning() {
        drop(this);
        var id = $(this).attr('id');
        setTimeout(function () {
            alert("Can not find file \"scripts/" + id + ".js\"");
        }, 500);
    }

    function loadCustomCss(authorID) {
        var fileref = $("<link>")
            .attr("rel", "stylesheet")
            .attr("type", "text/css")
            .attr("href", "css/" + authorID + ".css");
        $("head").append(fileref);
    }

    function loadAndExecuteStudentScript(domObj) {
        var authorID = $(domObj).attr("id");
        $.getScript("scripts/" + authorID + ".js")
            .done(function () {
                var fn = window[authorID + "_main"];
                if (typeof fn === "function") {
                    $(domObj).click(fn);
                }
                else {
                    $(domObj).click(
                        function () {
                            alert("Can not find function \"" + authorID + "_main\" in the file \"scripts/" + authorID + ".js\"")
                        }
                    );
                }
            })
            .fail(function () {
                $(domObj).click(fileNotFoundWarning);
            });
    }

    window.removeClosables = function () {
        if (window.cleanUp) {
            window.cleanUp();
            window.cleanUp = null;
        }
        $(".closable").children('canvas').toArray().forEach(cleanCanvas);
        function cleanCanvas(elm) {
            console.log('cleanCanvas ' + elm);
            clearInterval(window.animation);
        }

        $(".closable").remove();
    };
    window.onkeydown = function (e) {
        if (e.which === 27)removeClosables();
    };

    window.ClosableDiv = {
        div: null,
        init: function (obj) {
            removeClosables();
            this.div = null;
            if (!this.div) {
                this.div = $("<div>")
                    .attr("class", "closable")
                    .css(this.css)
                    .append(obj)
                    .append($("<div>")
                        .attr("id", "close")
                        .html("X").click(removeClosables)
                        .css({zIndex: "100"})
                    );
            }
            return this.div;
        },
        // lägg till den nya DIVen till kontainern
        insertInto: function (basket) {
            basket.append(this.div);
            return
        },
        // formatera
        css: {
            position: "absolute",
            top: "100px",
            left: "300px",
            width: "500px",
            height: "220px",
            color: "white",
            backgroundColor: "black",
            padding: "20px"
        },

        append: function (obj) {
            $(this.div).append(obj);
            return this.div
        }

    }

    createRandomDivs();


});