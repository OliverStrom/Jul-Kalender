/**
 * Created by parland on 11/21/15.
 */
function gronroga_main() {
    //alert($(this).html());

    // skapa new DIV med klass "closable"
    var newDiv = $("<div>").attr("class", "closable");
    // lägg till den nya DIVen till kontainern
    $("#container").append(newDiv);
    // formatera
    newDiv.css({
        position: "absolute",
        top: 150,
		left:600,
		right: 0,
		bottom: 0,
        width: "450px",
        height: "450px",
        color: "white",
        backgroundColor: "darkred",
        padding: "20px",
		backgroundImage: "url('assets/pictures/fatherski.gif')",
		backgroundRepeat: "no-repeat",
		backgroundPosition: 'center center',
		
    });

    // fylla på innehållet
    newDiv.html("Detta är Gabriellas lucka för den " + $(this).html() + " december.<br><br>");
   /* newDiv.append("Nu så kommer julen, <br>" +
					"nu är julen här,<br>" +
					"lite mörk och kulen<br>" +
					"men ändå så kär.<br>" +
					"Han i salen träder<br>" +
					"med så hjärtligt sinn<br>" +
					"och i högtidskläder<br>" +
					"dansar barnen in.<br>" +
					"Ljusen i lanternan<br>" +
					"glimmar högt kring dem,<br>" +
					"liksom klara stjärnan<br>" +
					"över Betlehem.<br>" +
					"Zacharias Topelius<br>");*/
	
	// EGET 
	
	

	//EGET SLUT
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