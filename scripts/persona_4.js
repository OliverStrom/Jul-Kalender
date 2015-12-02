/**
 * Created by parland on 11/21/15.
 */
function persona_4_main() {
    //alert($(this).html());


    // skapa new DIV
    // fylla på innehållet
    var newDiv = $('<div>').html("Detta är lucka för den " + $(this).html() + " december.<br><br>");
    newDiv.append("Designa och koda din egen lucka. " +
        "Dvs skriv en <code>.js</code> fil och en <code>.css</code> fil som bestämmer vad luckan ska göra " +
        "och hur ska den se ut.<br><br>" +
        'Ladda upp dina filer på GitHub: "Commit Changes" <br>' +
        'Du ska namnge dina <code>.js</code> och <code>.css</code> filer med din <i>arcadaID</i> ' +
        'och placera dem i respektive mapp i projektet för att allt ska fungera. <br><br>' +
        'Titta på modellen <code>persona_4.js</code> eller på min <code>parland.js</code> ');

    // placera din div i en div som man kan stänga
    $(this)
        .parent()
        .append(
        window.ClosableDiv.init(newDiv)
            .css({
                // här kan du bestämma storleken mm
                width: "500px",
                height: "220px",
                backgroundColor:"darkblue"
            })
    );
}