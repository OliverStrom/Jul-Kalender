function backluma_main() {
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
        width: "512px",
        height: "480px",
        color: "white",
    });

    // fylla på innehållet
    newDiv.html("Detta är lucka för den " + $(this).html() + " december.<br><br>");
    newDiv.append("Designa och koda din egen lucka. " +
        "Dvs skriv en <code>.js</code> fil och en <code>.css</code> fil som bestämmer vad luckan ska göra " +
        "och hur ska den se ut.<br><br>" +
        'Ladda upp dina filer på GitHub: "Commit Changes" <br>' +
        'Du ska namnge dina <code>.js</code> och <code>.css</code> filer med din <i>arcadaID</i> ' +
        'och placera dem i respektive mapp i projektet för att allt ska fungera. <br><br>' +
        'Titta på modellen <code>persona_4.js</code> eller på min <code>parland.js</code> ');


		
		// Create the canvas
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.width = 512;
		canvas.height = 480;
		document.body.appendChild(canvas);
		$('canvas').css({
			zIndex: 200
		}).attr('id', 'can');
		newDiv.html($('#can'));
		
		// Background image
		var bgReady = false;
		var bgImage = new Image();
		bgImage.onload = function () {
			bgReady = true;
		};
		bgImage.src = "images/background.png";
		
		// Hero image
		var heroReady = false;
		var heroImage = new Image();
		heroImage.onload = function () {
			heroReady = true;
		};
		heroImage.src = "images/hero.png";
		
		// Monster image
		var monsterReady = false;
		var monsterImage = new Image();
		monsterImage.onload = function () {
			monsterReady = true;
		};
		monsterImage.src = "images/monster.png";
		
		// Game objects
		var hero = {
			speed: 256 // movement in pixels per second
		};
		var monster = {};
		var monstersCaught = 0;
		
		// Handle keyboard controls
		var keysDown = {};
		
		addEventListener("keydown", function (e) {
			keysDown[e.keyCode] = true;
		}, false);
		
		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
		
		// Reset the game when the player catches a monster
		var reset = function () {
			hero.x = canvas.width / 2;
			hero.y = canvas.height / 2;
		
			// Throw the monster somewhere on the screen randomly
			monster.x = 32 + (Math.random() * (canvas.width - 64));
			monster.y = 32 + (Math.random() * (canvas.height - 64));
		};
		
		// Update game objects
		var update = function (modifier) {
			if (38 in keysDown) { // Player holding up
				hero.y -= hero.speed * modifier;
			}
			if (40 in keysDown) { // Player holding down
				hero.y += hero.speed * modifier;
			}
			if (37 in keysDown) { // Player holding left
				hero.x -= hero.speed * modifier;
			}
			if (39 in keysDown) { // Player holding right
				hero.x += hero.speed * modifier;
			}
		
			// Are they touching?
			if (
				hero.x <= (monster.x + 32)
				&& monster.x <= (hero.x + 32)
				&& hero.y <= (monster.y + 32)
				&& monster.y <= (hero.y + 32)
			) {
				++monstersCaught;
				reset();
			}
		};
		
		// Draw everything
		var render = function () {
			if (bgReady) {
				ctx.drawImage(bgImage, 0, 0);
			}
		
			if (heroReady) {
				ctx.drawImage(heroImage, hero.x, hero.y);
			}
		
			if (monsterReady) {
				ctx.drawImage(monsterImage, monster.x, monster.y);
			}
		
			// Score
			ctx.fillStyle = "rgb(0, 0, 0)";
			ctx.font = "24px Helvetica";
			ctx.marginTop = "50px";
			ctx.fillText("Presents retrieved: " + monstersCaught, 32, 32);
		};
		
		// The main game loop
		var main = function () {
			var now = Date.now();
			var delta = now - then;
		
			update(delta / 1000);
			render();
		
			then = now;
		
			// Request to do this again ASAP
			requestAnimationFrame(main);
		};
		
		// Cross-browser support for requestAnimationFrame
		var w = window;
		requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
		
		// Let's play this game!
		var then = Date.now();
		reset();
		main();
		
		
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
