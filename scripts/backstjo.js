
 

function backstjo_main() {
    
    function run() {
        var image = document.getElementById('background');
        image.onload = function() {
            console.log(this);
            var engine = new RainyDay({
                image: this,
                parentElement: document.getElementById('daniel'),
                top: 0,
                left: 0
            });
            engine.rain([ [1, 2, 210] ]);
            engine.rain([ [2, 2, 0.24], [4, 3, 0.6], [2, 1, 1] ], 10);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'assets/pictures/HOL.jpg';
    }


    function getDivStructure(){
        return $('<div>')
            .css({
                opacity:"0"
            })
            .animate({
                opacity:"1"
            }, 400)
            .append($('<div id="daniel">')
                .append($('<img id="background"  alt="background" src="" crossorigin="anonymous">')
                    .css({
                        left: "0px",
                        top: "0px",
                        position: "absolute",
                        height:"460",
                        width:"600"
                    })))
            .append($('<div>')
                .append("<p class='backstjo-text'>Merry virtual christmas!</p>")
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