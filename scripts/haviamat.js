
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
    newDiv.append("Designa och koda din egen lucka. " +
        "Dvs skriv en <code>.js</code> fil och en <code>.css</code> fil som bestämmer vad luckan ska göra " +
        "och hur ska den se ut.<br><br>" +
        'Ladda upp dina filer på GitHub: "Commit Changes" <br>' +
        'Du ska namnge dina <code>.js</code> och <code>.css</code> filer med din <i>arcadaID</i> ' +
        'och placera dem i respektive mapp i projektet för att allt ska fungera. <br><br>' +
        'Titta på modellen <code>persona_4.js</code> eller på min <code>parland.js</code> ');


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