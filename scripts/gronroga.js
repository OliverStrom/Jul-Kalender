/**
 * Created by parland on 11/21/15.
 */

function gronroga_main (){


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
        image.src = 'assets/pictures/fatherski.gif';
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
                        width:"560"
            })))
            .append($('<div>')
                .css({
                        position:"absolute",
                        fontSize:"40px",
                        fontWeight: "600",
                        zOrder: "10",
                        left:"120px",
                        top: "30px",
						color:"rgba(255, 255, 255, 1)",
						fontFamily:"Indie Flower"
                    })
                .append("SE UPP I BACKEN!")
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