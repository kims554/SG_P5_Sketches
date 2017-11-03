// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble;
let pnoise = 0;
let incriment = .1;
let start = 0;
function setup(){

  createCanvas($(window).width(),$(window).height());


}

function draw(){
	background(255);
	stroke(0);
	noFill();
	beginShape();

	// background(255);
	
	var xoff = start;

	for(var x= 0; x<width; x++){
		vertex(x, noise(xoff)*height);
		xoff += incriment;
	}

	endShape();
	start += incriment;

}


class Bubbles{


}
