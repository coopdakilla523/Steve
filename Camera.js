//Author: Corey Cooper
//Project: Prototype Steve
//Date: 6/12/2013 Last Updated

// Camera class for Prototype

"use strict";


function Camera(img,sx,sy,width,height){

	this.img = img;
	this.sx = sx;
	this.sy = sy;
	this.width = width;
	this.height = height;
}

Camera.prototype.move = function(amt){

	this.sx += amt;
	if(this.sx >= this.img.width-this.width){
	
		this.sx = 0;
		this.sy += this.img.height/10;
		if(this.sy >= this.img.height - this.height) this.sy = 0;
	}
}

Camera.prototype.draw = function(ctx){

	ctx.drawImage(this.img,this.sx,this.sy,this.width,this.height,0,0,768,600);
}
