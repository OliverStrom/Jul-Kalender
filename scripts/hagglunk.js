function hagglunk_main () {
   
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
        image.src = 'assets/pictures/jokerit_wall002.jpg';
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
                        height:"1920",
                        width:"1080"
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
    $(this)
        .parent()
        .append(
            window.ClosableDiv.init(getDivStructure())
                .css({
                    height:"420",
                    width:"520",
                    backgroundColor:"rgba(0, 0, 50, 0.1)"
                })
        );

    run();

}