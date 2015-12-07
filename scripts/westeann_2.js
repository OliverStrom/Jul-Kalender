/**
 * Created by parland on 11/21/15.
 */

function westeann_2_main (){


    function run() {
        var image = document.getElementById('dialog');
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
        image.src = 'assets/pictures/christmas-cookies.jpg';
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
                .append($('<img id="dialog"  alt="background" src="" crossorigin="anonymous">')
                    .css({
                        left: "0px",
                        top: "0px",
                        position: "absolute",
                        height:"560",
                        width:"960"
            })))
            .append($('<div id="jul">')
                .css({
						fontFamily:"Helvetica",
                        position:"absolute",
                        fontSize:"50px",
                        fontWeight: "400",
                        zOrder: "10",
                        left:"20%",
                        top: "30%"
                    })
                .append("Sommaren är kort..</br> Det mesta regnar bort...</br> GOD JUL!")
            )
    }
    $(this) 
        .parent() 
        .append( 
            window.ClosableDiv.init(getDivStructure()) 
                .css({
                    height:"220",
                    width:"520",
                    backgroundColor:"rgba(0, 0, 50, 0.1)"
                }) 
        );

    run();

}