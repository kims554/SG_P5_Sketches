// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
var particle = [];


function setup(){


	noStroke();

  createCanvas($(window).width(),$(window).height());

  for (var i = 0; i< 10; i++){
  	particle[i] = new circle_particle();
  }

	background(0);
	fill(255,50);
	for ( var i =0; i<particle.length; i++){
		particle[i].display();
	}


}

function draw() {



}


class circle_particle{

	
	constructor(){

		this.x = $(window).width()/2;
		this.y = $(window).height()/2;
		this.r = random(200);
		this.r_dist = random(350,400);
		this.dots;
		this.angle;
		this.updateX = this.r_dist*sin(this.angle*this.dots);
		this.updateY = this.r_dist*cos(this.angle*this.dots);
	}


	display(){

		this.dots = particle.length;
		// ellipse(this.x + this.updateX,
		// // 				this.y + this.updateY,
		// // 				this.r,
		// // 				this.r);

		ellipse(this.x,this.y,this.r,this.r);

	}

	wiggle(){
		this.x += random(-2,2);
		this.y += random(-2,2);
	}

	concentrate(){

		for (var i = 0; i < this.r_dist; i++){
				this.r_dist -= .1;
		}

	}





}