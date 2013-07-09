// Author: Corey Cooper
// Date: 6/12/2013
//
// Buttons for GUI

"use strict";

function Buttons(img,img2,x,y,width,height){

	this.img = img;
	this.img2 = img2;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Buttons.prototype.pressed = function(mx,my){

	if(mx >= this.x && mx <= this.x + this.width && my >= this.y && 
			my <= this.y + this.height) return true;

}

Buttons.prototype.draw = function(ctx){

	ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

Buttons.prototype.hover = function(mx,my,ctx){

	if(mx >= this.x && mx <= this.x + this.width && my >= this.y && 
			my <= this.y + this.height){
		ctx.drawImage(this.img2,this.x,this.y,this.width,this.height);
	}
}