/**
 * Created by bergheme on 12/1/15.
 */


function bergheme_main() {

    //$(this).attr("data", $(this).html());
    var y = $(this).offset().top;
    var x = $(this).offset().left;
    var w = getDimension(this, "width");
    var h = getDimension(this, "height");
    var showRoom = $("<div>").attr("id", "dialog")
        .css({
            zIndex: 2,
            position: "absolute",
            top: y,
            left: x,
            width: w,
            height: h
            //backgroundColor: jQuery.Color($(this), ("backgroundColor"))
        });
    $(this).parent().append(showRoom);
    $("body").keydown(function (e) {
        if (e.which === 27)removeMainShutterDiv();
    });
    centerDivWithAnimation(showRoom, 50, 100, 500, null);
    $(showRoom).animate({opacity: "1"}, 500);
    $(showRoom).append($('<div>').attr('id', 'landscape_pic')
        .css({
            backgroundImage: 'url("assets/pictures/old_paper_texture_.png")',
            /*backgroundColor: '#000',*/
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 80,
            fontFamily: '"Cookie", cursive',
            fontSize: '16px',
            color: '#000'
        })
        .delay(1000)
        .animate({opacity: "1"}, 1000)
        .append('A Christmas Wish<br><br>' +
            'I\'d like a stocking made for a giant,<br>' +
            'And a meeting house full of toys,<br>' +
            'Then I\'d go out in a happy hunt<br>' +
            'For the poor little girls and boys;<br>' +
            'Up the street and down the street,<br>' +
            'And across and over the town,<br>' +
            "I'd search and find them everyone,<br>" +
            'Before the sun went down.<br><br>' +
            'Written by Eugene Field')
    );
    $(showRoom).append($("<div>").attr("id", "close").html("X").click(removeMainShutterDiv));

    //$(showRoom).append($("<div>").css(
    //    {
    //        position: 'absolute',
    //        top: 150,
    //        left: 400,
    //        width: 400,
    //        height: 600,
    //        color: '#fff',
    //        fontFamily: '"Courier New", Courier, monospace',
    //        fontSize: '14px'
    //    }
    //)

    //startFireworks(showRoom);

    // --------- functions ------------- //
    function removeMainShutterDiv() {
        $("#dialog").remove();
    }

    function getDimension(obj, dim) {
        var w = $(obj).css(dim).substring(0, $(obj).css(dim).length - 2);
        var p = $(obj).css("padding").substring(0, $(obj).css("padding").length - 2);
        return (1 * w + 2 * p) + "px";
    }


    var canvasW, canvasH, canvasT, canvasL;

    function centerDivWithAnimation(obj, top, left, msec, callback) {
        var parent = $(obj).parent();
        var newW = 1 * parent.css("width").substring(0, parent.css("width").length - 2) - 2 * left;
        var newH = 1 * parent.css("height").substring(0, parent.css("height").length - 2) - 2 * top;
        canvasW = newW;
        canvasH = newH;
        var offset = $("#container").offset();
        canvasT = top + offset.top;
        canvasL = left + offset.left;
        $(obj).animate({
            top: top + "px",
            left: left + "px",
            width: 600 + "px",
            height: 484 + "px"
        }, msec, callback);
    }

/*
    function startFireworks(obj) {
        // code by Jack Rugile from http://thecodeplayer.com/

        // prepare canvas
        $(obj).append($("<canvas>").attr("id", "canvas").html("Canvas is not supported in your browser."));

        // when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
        // not supported in all browsers though and sometimes needs a prefix, so we need a shim
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        // now we will setup our basic variables
        var canvas = $('#canvas')[0],
            ctx = canvas.getContext('2d'),
        // full screen dimensions
            cw = canvasW,
            ch = canvasH + 100,
        // firework collection
            fireworks = [],
        // particle collection
            particles = [],
        // starting hue
            hue = 120,
        // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
            limiterTotal = 5,
            limiterTick = 0,
        // this will time the auto launches of fireworks, one launch per 80 loop ticks
            timerTotal = 80,
            timerTick = 0,
            mousedown = false,
        // mouse x coordinate,
            mx,
        // mouse y coordinate
            my;

        // set canvas dimensions
        canvas.width = cw;
        canvas.height = ch;

        // now we are going to setup our function placeholders for the entire demo

        // get a random number within a range
        function random(min, max) {
            return Math.random() * ( max - min ) + min;
        }

        // calculate the distance between two points
        function calculateDistance(p1x, p1y, p2x, p2y) {
            var xDistance = p1x - p2x,
                yDistance = p1y - p2y;
            return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
        }

        // create firework
        function Firework(sx, sy, tx, ty) {
            // actual coordinates
            this.x = sx;
            this.y = sy;
            // starting coordinates
            this.sx = sx;
            this.sy = sy;
            // target coordinates
            this.tx = tx;
            this.ty = ty;
            // distance from starting point to target
            this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
            this.distanceTraveled = 0;
            // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
            this.coordinates = [];
            this.coordinateCount = 3;
            // populate initial coordinate collection with the current coordinates
            while (this.coordinateCount--) {
                this.coordinates.push([this.x, this.y]);
            }
            this.angle = Math.atan2(ty - sy, tx - sx);
            this.speed = 2;
            this.acceleration = 1.05;
            this.brightness = random(50, 70);
            // circle target indicator radius
            this.targetRadius = 1;
        }

        // update firework
        Firework.prototype.update = function (index) {
            // remove last item in coordinates array
            this.coordinates.pop();
            // add current coordinates to the start of the array
            this.coordinates.unshift([this.x, this.y]);

            // cycle the circle target indicator radius
            if (this.targetRadius < 8) {
                this.targetRadius += 0.3;
            } else {
                this.targetRadius = 1;
            }

            // speed up the firework
            this.speed *= this.acceleration;

            // get the current velocities based on angle and speed
            var vx = Math.cos(this.angle) * this.speed,
                vy = Math.sin(this.angle) * this.speed;
            // how far will the firework have traveled with velocities applied?
            this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);

            // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
            if (this.distanceTraveled >= this.distanceToTarget) {
                createParticles(this.tx, this.ty);
                // remove the firework, use the index passed into the update function to determine which to remove
                fireworks.splice(index, 1);
            } else {
                // target not reached, keep traveling
                this.x += vx;
                this.y += vy;
            }
        };

        // draw firework
        Firework.prototype.draw = function () {
            ctx.beginPath();
            // move to the last tracked coordinate in the set, then draw a line to the current x and y
            ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
            ctx.stroke();

            ctx.beginPath();
            // draw the target for this firework with a pulsing circle
            ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
            ctx.stroke();
        };

        // create particle
        function Particle(x, y) {
            this.x = x;
            this.y = y;
            // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
            this.coordinates = [];
            this.coordinateCount = 5;
            while (this.coordinateCount--) {
                this.coordinates.push([this.x, this.y]);
            }
            // set a random angle in all possible directions, in radians
            this.angle = random(0, Math.PI * 2);
            this.speed = random(1, 10);
            // friction will slow the particle down
            this.friction = 0.95;
            // gravity will be applied and pull the particle down
            this.gravity = 1;
            // set the hue to a random number +-20 of the overall hue variable
            this.hue = random(hue - 20, hue + 20);
            this.brightness = random(50, 80);
            this.alpha = 1;
            // set how fast the particle fades out
            this.decay = random(0.015, 0.03);
        }

        // update particle
        Particle.prototype.update = function (index) {
            // remove last item in coordinates array
            this.coordinates.pop();
            // add current coordinates to the start of the array
            this.coordinates.unshift([this.x, this.y]);
            // slow down the particle
            this.speed *= this.friction;
            // apply velocity
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed + this.gravity;
            // fade out the particle
            this.alpha -= this.decay;

            // remove the particle once the alpha is low enough, based on the passed in index
            if (this.alpha <= this.decay) {
                particles.splice(index, 1);
            }
        };

        // draw particle
        Particle.prototype.draw = function () {
            ctx.beginPath();
            // move to the last tracked coordinates in the set, then draw a line to the current x and y
            ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
            ctx.stroke();
        };

        // create particle group/explosion
        function createParticles(x, y) {
            // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
            var particleCount = 30;
            while (particleCount--) {
                particles.push(new Particle(x, y));
            }
        }

        // main demo loop
        function loop() {
            // this function will run endlessly with requestAnimationFrame
            requestAnimFrame(loop);

            // increase the hue to get different colored fireworks over time
            hue += 0.5;

            // normally, clearRect() would be used to clear the canvas
            // we want to create a trailing effect though
            // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
            ctx.globalCompositeOperation = 'destination-out';
            // decrease the alpha property to create more prominent trails
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, cw, ch);
            // change the composite operation back to our main mode
            // lighter creates bright highlight points as the fireworks and particles overlap each other
            ctx.globalCompositeOperation = 'lighter';

            // loop over each firework, draw it, update it
            var i = fireworks.length;
            while (i--) {
                fireworks[i].draw();
                fireworks[i].update(i);
            }

            // loop over each particle, draw it, update it
            var j = particles.length;
            while (j--) {
                particles[j].draw();
                particles[j].update(j);
            }

            // launch fireworks automatically to random coordinates, when the mouse isn't down
            if (timerTick >= timerTotal) {
                if (!mousedown) {
                    // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
                    fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
                    timerTick = 0;
                }
            } else {
                timerTick++;
            }

            // limit the rate at which fireworks get launched when mouse is down
            if (limiterTick >= limiterTotal) {
                if (mousedown) {
                    // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
                    fireworks.push(new Firework(cw / 2, ch, mx, my));
                    limiterTick = 0;
                }
            } else {
                limiterTick++;
            }
        }

        // mouse event bindings
        // update the mouse coordinates on mousemove
        canvas.addEventListener('mousemove', function (e) {
            mx = e.pageX - canvasL;
            my = e.pageY - canvasT;
        });

        // toggle mousedown state and prevent canvas from being selected
        canvas.addEventListener('mousedown', function (e) {
            e.preventDefault();
            mousedown = true;
        });

        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            mousedown = false;
        });

        setTimeout(loop, 500);
    }*/

}