// Player Class for Prototype
// Author: Corey Cooper
// Date: 11/18/2012

function Player(x,y,width,height){

	this.x = x + width/2;
	this.y = y + height/2;
	this.width = width;
	this.height = height;
	this.floor = false;
	this.jumping = false;
}

Player.prototype.draw = function(ctx){

	ctx.drawImage(Player.img, this.x,this.y,this.width,this.height);
}

Player.prototype.walk = function(amt){
	
	this.x += amt;
}

Player.prototype.jump = function(amt){

	this.y += amt;
}

Player.img = new Image();
Player.img.src = "RedBoy/cheering e0000.bmp/";
