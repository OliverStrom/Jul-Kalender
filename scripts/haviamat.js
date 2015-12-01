
function haviamat_main() {
    //alert($(this).html());

    // skapa new DIV med klass "closable"
    var newDiv = $("<div>").attr("class", "closable");
    // lägg till den nya DIVen till kontainern
    $("#container").append(newDiv);
    // formatera
    newDiv.css({
        position: "absolute",
        top: "100px",
        left: "300px",
        width: "604px",
        height: "398px",
        color: "white",
        padding: "20px",
        backgroundImage: 'url("pictures/john_cena_christmas.jpg")'
    });

    // fylla på innehållet
    newDiv.html("Detta är lucka för den " + $(this).html() + " december.<br><br>");
    newDiv.append("John Cena whises a Merry X-mas!");

    bgImage.src = "pictures/john_cena_christmas.jpg";

    function closeDiv() {
        $(".closable").remove();
    }

    // koppla till avstägningsfunktion
    $("body").keydown(function (e) {
        if (e.which === 27)closeDiv();
    });

    // skapa avstägningsknapp
    newDiv.append($("<div>").attr("id", "close").html("X").click(closeDiv));
}