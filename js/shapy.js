/*
*********************************************
	Shapy.js
	Main logic for the game Shapes On Shapes.
	Tommy Doyle
*********************************************
*/

shapy = {} //Global store for the app

window.onload = initGame;

/*
	initGame
	Handles the set up of the game and basic variables
*/
function initGame() {
	var canvas = document.getElementsByClassName('gameCanvas')[0];
	var context = canvas.getContext('2d');
	canvas.style.webkitFontSmoothing="antialiased"; 
	shapy.canvas = canvas;
	shapy.canvas.width = 1024;
	shapy.canvas.height = 680;
	shapy.ctx = context;
	shapy.width = canvas.clientWidth;
	shapy.height = canvas.clientHeight;
	shapy.state = "startScreen";

	setInterval(handleTimerFired, 1000/60);
}

/*
	Main Game Loop :o
	Handles updating objects in the scene as well as
	drawing all the graphics to the canvas.
*/
function handleTimerFired() {
	update();
	drawAll();
}

function update() {
	if(shapy.state == "startScreen") {

	} else {

	}
}

function drawAll() {
	if(shapy.state == "startScreen") return drawStartScreen();
}

function drawStartScreen() {
	shapy.ctx.fillStyle = "#c8edff"; //Sky Color
	shapy.ctx.fillRect(0,0,shapy.width,shapy.height);

	shapy.ctx.font = "30px Helvetica, sans-serif";
	shapy.ctx.fillStyle = "black";
	shapy.ctx.fillText("Shapes on Shapes",shapy.width/2 - 125,shapy.height/2);
}