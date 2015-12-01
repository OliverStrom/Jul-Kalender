
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
        width: "500px",
        height: "220px",
        color: "white",
        backgroundColor: "red",
        padding: "20px"
    });

    // fylla på innehållet
    newDiv.html("Detta är lucka för den " + $(this).html() + " december.<br><br>");
    newDiv.append(document.getElementById("dialog").innerHTML="<p class='cena_text'>I got a Nintendo 64!</p>" +
        "<div id='john_cena_picture' style='position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; background-image: url(http://localhost:63342/Jul-Kalender/assets/pictures/john-cenas-christmas.jpg); background-position: 50% 50%; background-repeat: no-repeat;'></div>");




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