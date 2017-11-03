// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let start = 0;
let incriment = .1;

function setup(){
	frameRate(1);
  createCanvas($(window).width(),$(window).height());


}

function draw(){
	background(255);
	noFill();
	let xoff = start;
	let yoff = start;

	let xy = noise(xoff,yoff)*width;

	// ellipse(x,y/2,100,100);
	console.log(xy);
	start += incriment;

}


