/**
 * Created by parland on 11/21/15.
 */

function bergheme_main() {

    //Google fonts
    WebFontConfig = {
        google: {families: ['Cookie::latin']}
    };

    (function () {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();


    function run() {
        var image = document.getElementById('background');
        image.onload = function () {
            console.log(this);
            var engine = new RainyDay({
                image: this,
                parentElement: document.getElementById('test'),
                top: 0,
                left: 0,
                enableSizeChange: false
            });
            engine.rain([[1, 2, 8000]]);
            engine.rain([[0, 0, 0.88], [0, 0, 0.9], [5, 6, 20]], 100);
            //engine.glass.width = "100px";
            console.log("width:" + engine.glass.width);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'assets/pictures/old_paper_texture_.png';
    }


    function getDivStructure() {
        return $('<div>')
            .css({
                opacity: "0"
            })
            .animate({
                opacity: "1"
            }, 1000)
            .append($('<div id="test">')
                .append($('<img id="background"  alt="background" src="" crossorigin="anonymous">')
                    .css({
                        left: "0px",
                        top: "0px",
                        position: "absolute",
                        height: "484",
                        width: "600"
                    })))
            .append($('<div>')
                .css({
                    position: "absolute",
                    fontFamily: '"Cookie", cursive',
                    fontSize: "22px",
                    zOrder: "10",
                    left: "180px",
                    top: "80px",
                    color: '#000'
                })
            )
    }

    $(this)
        .parent()
        .append(
            window.ClosableDiv.init(getDivStructure())
                .css({
                    height: "420",
                    width: "520",
                    backgroundColor: "rgba(0, 0, 50, 0.1)"
                })
        );
    window.rainyText = {
        txt: 'A Christmas Wish\n\n' +
        'I\'d like a stocking made for a giant,\n' +
        'And a meeting house full of toys,\n' +
        'Then I\'d go out in a happy hunt\n' +
        'For the poor little girls and boys,\n' +
        'Up the street and down the street,\n' +
        'And across and over the town,\n' +
        "I'd search and find them everyone,\n" +
        'Before the sun went down.\n\n' +
        'Written by Eugene Field',
        x: 140,
        y: 70,
        color: '#000',
        rotation: 0,
        font: {
            fontFamily: "Cookie",
            fontSize: 32,
            fontStyle: 'italic',
            fontWeight: 'bolder',
            fontVariant: 'normal'
        }
    };

    window.glass = {
        x: 90,
        y: 50,
        w: 420,
        h: 390
    };

    window.cleanUp = function () {
        window.rainyText = null;
        window.glass = null;
    }

    run();

}