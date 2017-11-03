// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions

var particle = [];
var maxDots;

function setup(){


	noStroke();
  createCanvas($(window).width(),$(window).height());

  	maxDots = 50;
		// particle[i].display();
		for(var i = 0; i < maxDots; i++){
			particle[i] = new circle_particle();
			particle[i].x = particle[i].r_dist*sin(TWO_PI/maxDots*i);
			particle[i].y = particle[i].r_dist*cos(TWO_PI/maxDots*i);
		}

}

function draw() {


	background(255);

	stroke(0);
	noFill(0);

	for(var i = 0; i < maxDots; i ++){

		particle[i].display(mouseX,mouseY);

	}



}

// function mousePressed(){
	
// 	for(var i = 0; i < maxDots; i++){
// 		particle[i].x = 0;
// 		particle[i].y = 0;
// 	}

// }


class circle_particle{

	
	constructor(){
		this.x = 0;
		this.y = 0;
		this.r = random(5,10);
		this.r_dist = 500;
	}





	display(mouseX,mouseY){
		this.x = mouseX;
		this.y = mouseY;

		ellipse(this.x, this.y, this.r, this.r);
	}


}