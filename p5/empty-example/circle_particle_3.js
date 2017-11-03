// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
var Bubble;

function setup(){
  createCanvas($(window).width(),$(window).height());
  Bubble = new bubble();

	for(var i=0; i<Bubble.dots; i++){
	
		Bubble.r.push(random(10));
		Bubble.updateX.push(random(200,300)*sin((TWO_PI/Bubble.dots)*i));
		Bubble.updateY.push(random(200,300)*cos((TWO_PI/Bubble.dots)*i));

		// Bubble.updateX.push(100*cos(TWO_PI/Bubble.dots*i));
	}


}

function draw() {

	background(255);

	Bubble.display(mouseX,mouseY);

}


class bubble{

	constructor(){
		this.location = new p5.Vector(0,0);
		this.mouse = new p5.Vector(0,0);
		this.r = [];
		this.dots = 100;
		this.updateX = [];
		this.updateY = [];
		this.velocity = new p5.Vector(0,0);
	}

	display(mouseX,mouseY){



		noFill();

		this.location.set(mouseX,mouseY);


		for(var i=0; i<this.dots; i++){

			ellipse(this.location.x+this.updateX[i], this.location.y+this.updateY[i], this.r[i]);
		
		}


	}

	move(){
		

		
	}


}