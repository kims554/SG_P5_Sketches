// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble = [];
let bubbleN = 10;
let offset;

function setup(){
  createCanvas($(window).width(),$(window).height());
 	for(let i = 0; i< bubbleN; i++){
  bubble[i] = new noiseParticle();

 	}
}

function draw(){
 	for(let i = 0; i< bubbleN; i++){

	bubble[i].update();
	bubble[i].display();

 	}

}

class noiseParticle{
	constructor(){
		this.xoff = random(0,1000);
		this.yoff = this.xoff+100;
		this.roff = this.xoff+200;
		this.goff = this.xoff+300;
		this.boff = this.xoff+400;
		this.incriment = 0.003;
		this.rad = 500;
		this.x;
		this.y;
		this.r;
		this.g;
		this.b;
	}

	update(){

		this.x = noise(this.xoff)*width*2;
		this.y = noise(this.yoff)*height*2;
		this.g = noise(this.goff)*255;
		this.r = noise(this.roff)*255;
		this.b = noise(this.boff)*255;

		this.xoff += this.incriment;
		this.yoff += this.incriment;
		this.roff += this.incriment;
		this.goff += this.incriment;
		this.boff += this.incriment;

	}

	display(){
		noStroke();
		push();
		translate(-width/2,-height/2);
		fill(this.r,this.g,this.b,5);
		ellipse(this.x,this.y,this.rad);
		pop();
	}

}