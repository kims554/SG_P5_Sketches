// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble = [];
let dots = 50;
function setup(){
	
	createCanvas($(window).width(),$(window).height());
	for ( let i = 0; i < dots; i ++){
		bubble[i] = new Bubbles();
	}

}

function draw(){

	for (let i = 0; i < dots; i ++){
		bubble[i].display();
	}

}


class Bubbles{
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.r = random(height-100);
		this.sW = random(10);
	}
	display(){
		stroke(0);
		strokeWeight(this.sW);
		noFill();
		ellipse(this.x,this.y,this.r);
	}
}
