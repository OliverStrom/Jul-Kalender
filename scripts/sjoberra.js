
function sjoberra_main() {

    //$(this).attr("data", $(this).html());
    var y = $(this).offset().top;
    var x = $(this).offset().left;
    var w = getDimension(this, "width");
    var h = getDimension(this, "height");
    var showRoom = $("<div>").attr("id", "dialog")
        .css({
            zIndex: 2,
            position: "absolute",
            top: y,
            left: x,
            width: w,
            height: h,
            backgroundColor: jQuery.Color($(this), ("backgroundColor"))
        });
    $(this).parent().append(showRoom);
    $("body").keydown(function (e) {
        if (e.which === 27)removeMainShutterDiv();
    });
    centerDivWithAnimation(showRoom, 50, 100, 500, null);
    $(showRoom).animate({backgroundColor: "rgb(0, 0, 0)"}, 500);
    $(showRoom).append($('<div>').attr('id', 'landscape_pic')
        .css({
            backgroundImage: 'url("assets/pictures/riku.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })
        .delay(1000)
        .animate({opacity: "1"}, 1000)
    );
    $(showRoom).append($("<div>").attr("id", "close").html("X").click(removeMainShutterDiv));

    startFireworks(showRoom);

    // --------- functions ------------- //
    function removeMainShutterDiv() {
        $("#dialog").remove();
    }

    function getDimension(obj, dim) {
        var w = $(obj).css(dim).substring(0, $(obj).css(dim).length - 2);
        var p = $(obj).css("padding").substring(0, $(obj).css("padding").length - 2);
        return (1 * w + 2 * p) + "px";
    }

    var canvasW, canvasH, canvasT, canvasL;

    function centerDivWithAnimation(obj, top, left, msec, callback) {
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
            width: 450 + "px",
            height: 450 + "px"
        }, msec, callback);
    }


}