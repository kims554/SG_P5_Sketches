// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble;

function setup(){

  createCanvas($(window).width(),$(window).height());
  bubble = new Bubbles();

  bubble.randomLocation();
  frameRate(60);


}

function draw() {

	background(0);
	bubble.display();
	bubble.cometothecenter();

}


class Bubbles{

	constructor(){
		this.dots = 200;
		this.location = [];
		this.r = 100;

		this.rand;
		this.center = new p5.Vector();

		this.velocity = new p5.Vector();
	}

	randomLocation(){
		for (var i = 0; i < this.dots; i ++){
			this.rand = new p5.Vector(random(width),random(height));
			this.location.push(this.rand);
		}
	}


	display(){
		noStroke();
		fill(255,25);

		for (var i = 0; i < this.dots; i++){

		ellipse(this.location[i].x,this.location[i].y,this.r);

		}
	}


	cometothecenter(){


		for (var i = 0; i< this.dots; i ++){

			this.center = new p5.Vector(width/2,height/2);

			this.velocity = this.center.sub(this.location[i]);
			this.velocity.mult(.05);
			this.location[i].add(this.velocity);

		}
	}

}
