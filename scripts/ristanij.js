/**
 * Created by parland on 11/21/15.
 */
function ristanij_main() {
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
        backgroundColor: "green",
        padding: "20px"
    });

    // fylla på innehållet
    newDiv.html("GOOOOOOD JUUUUUUUL! " + $(this).html() + " december.<br><br>");
    newDiv.append("HOOOO HOOOO FINNS DET NÅ SNÄLLA BARN ?? Vill du se något häftigt? Spana in länken! <br><br>");
	newDiv.append("http://www.miniclip.com/games/sugar-sugar-xmas/en/" );
	

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