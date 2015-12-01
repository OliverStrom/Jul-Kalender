
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
        width: "560px",
        height: "350px",
        color: "black",
        padding: "20px",
        backgroundImage: 'url("assets/pictures/john-cenas-christmas.jpg")'
    });

        .delay(1000)
        .animate({opacity: "1"}, 1000)

    // fylla på innehållet
    newDiv.html();
    newDiv.append("<p class='john'>Nintendo 64!!!</p>");


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