// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble;
let bubble2;
function setup(){

  createCanvas($(window).width(),$(window).height());
  bubble = new Bubbles();

  bubble.update(width*2);
 	frameRate(30);

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
		this.r = 500;
		this.rand;
		this.force = new p5.Vector();
		this.center = new p5.Vector();
		this.velocity = new p5.Vector();
		this.strength = .025;
		this.drag = .95;

	}

	update(num1){

		for (var i = 0; i < this.dots; i ++){
			this.r_dist = random(num1);
			this.rand = new p5.Vector(width/2+this.r_dist*sin((TWO_PI/this.dots)*i),height/2+this.r_dist*cos((TWO_PI/this.dots)*i));
			this.location.push(this.rand);
		}
	}


	display(){
		noStroke();
		fill(255,10);

		for (var i = 0; i < this.dots; i++){

		ellipse(this.location[i].x,this.location[i].y,this.r);

		}
	}


	cometothecenter(){


		for (var i = 0; i< this.dots; i ++){

			this.center = new p5.Vector(width/2,height/2);

			this.force = this.center.sub(this.location[i]);
			this.force = this.force.mult(this.strength);

			this.velocity = this.velocity.mult(this.drag);
			this.velocity = this.velocity.add(this.force);

			this.location[i].add(this.velocity);


		}
	}

}
