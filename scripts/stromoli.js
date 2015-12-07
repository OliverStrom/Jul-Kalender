
function stromoli_main() {
    //alert($(this).html());

    // skapa new DIV med klass "closable"
    var newDiv = $("<div>").attr("class", "closable");
    // lägg till den nya DIVen till kontainern
    $("#container").append(newDiv);
    // formatera
    newDiv.css({
        margin: "0 auto",
		position:"absolute",
		bottom:"0%",
        width: "90%",
        height: "90%",
        color: "black",
        padding: "20px",
		backgroundImage: "url(assets/pictures/yey.jpg)",
		backgroundSize: "cover"

    });

    // fylla på innehållet
    newDiv.html();
    newDiv.append("<p class='stromoli-text'>MERRY CHRISTMAS</p>");


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