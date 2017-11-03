// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble;

function setup(){

  createCanvas($(window).width(),$(window).height());
  bubble = new Bubbles();


}

function draw() {

	background(255);
	bubble.display();
	bubble.cometothecenter();

}


class Bubbles{

	constructor(){
		this.dots = 2;
		this.location = [];
		this.r = 100;

		this.rand = new p5.Vector(random(width),random(height));
		this.center = new p5.Vector(width/2,height/2);
		this.velocity = new p5.Vector();
	}

	randomLocation(){

	}


	display(){
		ellipse(this.rand.x,this.rand.y,this.r);
	}


	cometothecenter(){
		this.center.set(width/2,height/2);
		this.velocity = this.center.sub(this.rand);
		this.velocity.mult(.1);
		this.rand.add(this.velocity);
	}

}
