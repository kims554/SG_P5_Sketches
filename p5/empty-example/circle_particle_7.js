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
  bubble2 = new Bubbles();

  bubble.update(1000,1200);
 	bubble2.update(500,700);
 	frameRate(30);

}

function draw() {

	background(0);
	bubble.display();
	bubble2.display();
	bubble.cometothecenter();
	bubble2.cometothecenter();

}


class Bubbles{

	constructor(){
		this.dots = 100;
		this.location = [];
		this.r = 100;
		this.rand;
		this.center = new p5.Vector();

		this.velocity = new p5.Vector();
	}

	update(num1, num2){

		for (var i = 0; i < this.dots; i ++){
			this.r_dist = random(num1,num2);
			this.rand = new p5.Vector(width/2+this.r_dist*sin((TWO_PI/this.dots)*i),height/2+this.r_dist*cos((TWO_PI/this.dots)*i));
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
			this.velocity = this.velocity.mult(.1);
			this.location[i].add(this.velocity);


		}
	}

}
