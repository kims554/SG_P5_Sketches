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

		this.rand = new p5.Vector();
		this.center = new p5.Vector(width/2,height/2);
	}

	randomLocation(){

		for(var i = 0; i<this.dots; i++){
			this.rand = new p5.Vector(random(width),random(height));
			this.location.push(this.rand);
		}
	}


	display(){
		for (var i =0; i <this.dots; i++){
			ellipse(this.location[i].x,this.location[i].y,this.r);
		}
	}

	cometothecenter(){
		
		

	}

}
