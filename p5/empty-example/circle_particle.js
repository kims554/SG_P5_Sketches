// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
var particle = [];
var r_dist = [];


function setup(){


	noStroke();

  createCanvas($(window).width(),$(window).height());

  for (var i = 0; i < 1000; i++){
  	particle[i] = new circle_particle();
  }

}

function draw() {

	background(0);

	for ( var i = 0; i< particle.length; i++){

		fill(255,random(255));

		ellipse(
			particle[i].x + particle[i].r_dist*sin((TWO_PI/particle.length)*i),
			particle[i].y + particle[i].r_dist*cos((TWO_PI/particle.length)*i),
			particle[i].r,
			particle[i].r
		);

		// particle[i].display();
	}


}

class circle_particle{

	
	constructor(){
		this.x = $(window).width()/2;
		this.y = $(window).height()/2;
		this.r = (random(20)+random(20))/2;
		this.r_dist = random(350,400);
	}

	display(){
		var probability = random(1);
		if (probability>.5){
			this.x += min(random(20),random(20));
				}
		else{
			this.x -= min(random(20),random(20));
		
		}

	}





}