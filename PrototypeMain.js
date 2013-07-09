// Main Program for Prototype
// Author: Corey Cooper
// Date: 11/18/2012
// All images courtesy of Reiner's Tileset
// www.reinerstilesets.de/

"use strict";

var StartButton,ctx,mode,mx,my;

function main(){

	var cvs = document.getElementById("cvs");
	ctx = cvs.getContext("2d");	
	
	// Create modes for start screen
	// have it start at 0 indicating the start screen
	mode = 0;
	
	// Create Start screen background and scene
	var StartScreen = new Image();
	StartScreen.src = "StartScreen.png";
	// Start button not highlighted
	
	var StartButtonReg = new Image();
	StartButtonReg.src = "Gui/playgame.png";
	
	// Start Button highlighted
	var StartButtonHigh = new Image();
	StartButtonHigh.src = "Gui/playgamehigh.png";
	
	// Creation of actual button
	StartButton = new Buttons(StartButtonReg,StartButtonHigh,250,450,80,40);
	ctx.drawImage(StartScreen,0,0,768,600);
	
	// Create Background image
	//var dx = 0;
	//var dy = 0;
	var background = new Image();
	background.src = "sky.jpg";
	
	// Create Camera
	var camera = new Camera(background,0,0,150,150);
	
	
	// Create Player
	var player = new Player(25,200, 60, 60);
	var speed = 20;
	var gravity = 3.7;

	
	// Create Platforms
	var P1 = new Platform(25,300, 200, 30,"Environment/snail.png");
	var P2 = new Platform(300, 300, 200, 30,"Environment/snail.png");
	var P3 = new Platform(475,250,200,30,"Environment/snail.png");
	var Plats = [];
	Plats.push(P1); Plats.push(P2); Plats.push(P3);

	
	
	// Create Event Listeners
	document.addEventListener("keydown", function(ev){ keysdown[ev.keyCode] = true;});
	document.addEventListener("keyup", function(ev){ keysdown[ev.keyCode] = false;});
	document.addEventListener("mousedown", MouseDown);
	document.addEventListener("mousemove", MouseMotion);
	
	// Keys
	var keysdown = {};
	
	var vertS = -25;
	var last = Date.now();
	// Update for Key presses
	function update(){
		console.log(mode);
		var now = Date.now();
		var Elapsed = now - last;
		Elapsed = Elapsed/60;
		last = now;
			

		
		if(mode == 0){
			ctx.drawImage(StartScreen,0,0,768,600);
			StartButton.draw(ctx)
			StartButton.hover(mx,my,ctx);
		}
		
		else if(mode == 1){
			
			
			for(var i=0;i<Plats.length;i++){
					if(Plats[i].hitD(player.x,player.y,player.width,player.height)){
						player.floor = true;
						player.jumping = false;
						vertS = -25;
					}
				}
		
			if(keysdown[65])
			{
				if(player.x <= 0) player.x = 7;
				player.walk(-speed * Elapsed);
			}		
			if(keysdown[68])
			{
				if(player.x + player.width >= cvs.width) player.x = cvs.width - player.width; 		
				player.walk(speed * Elapsed);
			}

			if(keysdown[32] && player.jumping !== true && player.floor)
			{
				player.jumping = true;
			}
			// Jumping
			
			if(player.jumping){
				player.floor = false;
				vertS += 5 * Elapsed;
				player.jump(vertS);
			}
			
			// Gravity
			if(!player.floor) player.y += gravity * Elapsed;

			
			if(player.x + player.width >= cvs.width/2){
				camera.move(2 * Elapsed,false);
				// Camera.sx += 2 * Elapsed;
				// if(Camera.sx >= background.width-10) dx = 0;
			}		
			
			Draw(ctx);
			player.floor = false;
		}
	}
	setInterval(update, 25);
	function Draw(ctx){

		camera.draw(ctx);
		
		for(var i=0;i<Plats.length;i++){ Plats[i].draw(ctx);}
		player.draw(ctx);
	}
}

// Create Mousedown function to handle button presses
function MouseDown(ev){

	mx = ev.clientX-cvs.offsetLeft+window.pageXOffset;
	my = ev.clientY-cvs.offsetTop+window.pageYOffset;

	if(ev.button ==0 && StartButton.pressed(mx,my) && mode == 0){
		console.log("hi");
		mode = 1;
	}
}

function MouseMotion(ev){

	
	
	if(mode == 0){
		mx = ev.clientX-cvs.offsetLeft+window.pageXOffset;
		my = ev.clientY-cvs.offsetTop+window.pageYOffset;
		StartButton.hover(mx,my,ctx);
	}
}
	




	