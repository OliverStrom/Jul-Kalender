/**
 * Created by parland on 11/21/15.
 Edited by westeann
 */
function westeann_main() {

    $(this).attr("data", $(this).html());
    var y = $(this).offset().top;
    var x = $(this).offset().left;
    //var w = $(this).css("width");
    var w = getDimension(this, "width");
    var h = getDimension(this, "height");
    var dialog = $("<div>").attr("id", "dialog").css({
        zIndex: 2,
        position: "absolute",
        top: y,
        left: x,
        width: w,
        height: h,
        backgroundColor: jQuery.Color($(this), ("backgroundColor"))
    });
    $(this).parent().append(dialog);
    $("body").keydown(function (e) {
        if (e.which === 27)closeStuffhappens();
    });
    centerWithAnimation(dialog, 50, 100, 500, null);
    $(dialog).animate({backgroundColor: "rgb(0, 0, 0)"}, 500);
    Stuffhappens(dialog);

    $(dialog).append($("<div>").attr("id", "closewesteann").html("X").click(closeStuffhappens));

    function closeStuffhappens() {
        $("#dialog").remove();
    }

    function getDimension(obj, dim) {
        var w = $(obj).css(dim).substring(0, $(obj).css(dim).length - 2);
        var p = $(obj).css("padding").substring(0, $(obj).css("padding").length - 2);
        return (1 * w + 2 * p) + "px";
    }

    function centerWithAnimation(obj, top, left, msec, callback) {
        var parent = $(obj).parent();
        var newW = 1 * parent.css("width").substring(0, parent.css("width").length - 2) - 2 * left;
        var newH = 1 * parent.css("height").substring(0, parent.css("height").length - 2) - 2 * top;
        canvasW = newW;
        canvasH = newH;
        var offset = $("#container").offset();
        canvasT = top + offset.top;
        canvasL = left + offset.left;
        $(obj).animate({
            top: top + "px",
            left: left + "px",
            width: newW + "px",
            height: newH + "px"
        }, msec, callback);
    }

    function Stuffhappens(obj) {
		
        // prepare canvas
        $(obj).html("<canvas id='canvas'>Canvas is not supported in your browser.</canvas>");
        // when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
        // not supported in all browsers though and sometimes needs a prefix, so we need a shim
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

     	
document.getElementById("dialog").innerHTML="<p class='godjulwesteann'>GOD JUL!</p>";
	  
    }

	
}