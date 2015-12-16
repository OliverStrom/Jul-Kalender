/**
 * Created by parland on 11/21/15.
 */
function persona_4_main() {
    //alert($(this).html());

    // skapa new DIV med klass "closable"
    var newDiv = $("<div>").attr("class", "closable");
    // l�gg till den nya DIVen till kontainern
    $("#container").append(newDiv);
    // formatera
    newDiv.css({
        position: "absolute",
        top: "100px",
        left: "300px",
        width: "500px",
        height: "220px",
        color: "white",
        backgroundColor: "black",
        padding: "20px"
    });

    // fylla p� inneh�llet
    newDiv.html("Detta �r lucka f�r den " + $(this).html() + " december.<br><br>");
    newDiv.append("Designa och koda din egen lucka. " +
        "Dvs skriv en <code>.js</code> fil och en <code>.css</code> fil som best�mmer vad luckan ska g�ra " +
        "och hur ska den se ut.<br><br>" +
        'Ladda upp dina filer p� GitHub: "Commit Changes" <br>' +
        'Du ska namnge dina <code>.js</code> och <code>.css</code> filer med din <i>arcadaID</i> ' +
        'och placera dem i respektive mapp i projektet f�r att allt ska fungera. <br><br>' +
        'Titta p� modellen <code>persona_4.js</code> eller p� min <code>parland.js</code> ');


    function closeDiv() {
        $(".closable").remove();
    }

    // koppla till avst�gningsfunktion
    $("body").keydown(function (e) {
        if (e.which === 27)closeDiv();
    });

    // skapa avst�gningsknapp
    newDiv.append($("<div>").attr("id", "close").html("X").click(closeDiv));
}