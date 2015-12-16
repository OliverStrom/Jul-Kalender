function hagglunk_main() {
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
        backgroundColor: "black",
        padding: "20px"
    });
	 function run() {
        var image = document.getElementById('background');
        image.onload = function() {
            console.log(this);
            var engine = new RainyDay({
                image: this,
                parentElement: document.getElementById('test'),
                top: 0,
                left: 0
            });
            engine.rain([ [1, 2, 8000] ]);
            engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'assets/pictures/';
    }

 function getDivStructure(){
        return $('<div>')
            .css({
                opacity:"0"
            })
            .animate({
                opacity:"1"
            }, 1000)
            .append($('<div id="test">')
                .append($('<img id="background"  alt="background" src="" crossorigin="anonymous">')
                    .css({
                        left: "0px",
                        top: "0px",
                        position: "absolute",
                        height:"460",
                        width:"600"
                    })))
            .append($('<div>')
                .css({
                    position:"absolute",
                    fontSize:"40px",
                    fontWeight: "600",
                    fontFamily:"Helvetica",
                    zOrder: "10",
                    top: "380px",
                    color:"rgba(255, 255, 255, 0.8)",
                    textShadow: "0 0 14px #000"
                })
                .append("Merry Christmas wishes from Jokerit Fan Nr1")
            )
    }

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
run();