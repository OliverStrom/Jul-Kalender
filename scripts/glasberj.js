/**
 * Created by parland on 11/21/15.
 */
function glasberj_main() {
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
        width: "1000px",
        height: "500px",
        color: "#EDBE26",
		fontSize : "20px",
		backgroundColor : "#000000",
		backgroundImage: 'url("assets/pictures/santa.gif")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
        padding: "20px"
    });

    // fylla på innehållet
    newDiv.html($(this).html() + " december.<br><br>");
    newDiv.append("En röd, glad liten gubbe, <br>" +
        "vad kan det vara för snubbe.<br>" +
        "Kommer till dig när du varit snäll,<br>" +
		"och inte på ett år hört något gnäll.");

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