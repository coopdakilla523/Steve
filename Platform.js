// Platform Class for Prototype
// Author: Corey Cooper
// Date: 11/18/2012

function Platform(x,y,width,height,img){
	
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.image = new Image();
	this.image.src = img;
}

Platform.prototype.draw = function(ctx){

	ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
}

Platform.prototype.hitD = function(x,y,w,h){
	
	if (x + w > this.x && x  < (this.x + this.width) && y + h >= this.y && y + h <= (this.y + this.height)){
		return true;
	}
}

// Platform.img = new Image();
// Platform.img.src = "Environment/snail.png";