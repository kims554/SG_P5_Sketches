// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let y = window.innerHeight/8;
let columns = window.innerWidth/8;
let rows = window.innerHeight/8;
let r = 100;
let xoff = [];
let yoff = [];
let incriment = .01;
function setup(){
  createCanvas($(window).width(),$(window).height());

	xoff[0] = random(100);
	xoff[1] = random(100);
	xoff[2] = random(100);
	xoff[3] = random(100);
	xoff[4] = random(100);
	xoff[5] = random(100);
	xoff[6] = random(100);
	xoff[7] = random(100);

	yoff[0] = random(100);
	yoff[1] = random(100);
	yoff[2] = random(100);
	yoff[3] = random(100);

	yoff[4] = random(100);
	yoff[5] = random(100);
	yoff[6] = random(100);
	yoff[7] = random(100);

}

function draw(){
	background(255);
	// row1

	ellipse(columns*0 + columns*noise(xoff[0]),
		rows*0+ rows*noise(yoff[0]),
		100);

	ellipse(columns*1 + columns*noise(xoff[1]),
		rows*0 + rows*noise(yoff[1]),
		100);

	ellipse(columns*2 + columns*noise(xoff[2]),
		rows*0 + rows*noise(yoff[2]),
		100);

	ellipse(columns*3 + columns*noise(xoff[3]),
		rows*0 + rows*noise(yoff[3]),
		100);
	// row2

	ellipse(columns*0 + columns*noise(xoff[4]),
		rows*1 + rows*noise(yoff[4]),
		100);

	ellipse(columns*1 + columns*noise(xoff[5]),
		rows*1 + rows*noise(yoff[5]),
		100);

	ellipse(columns*2 + columns*noise(xoff[6]),
		rows*1 + rows*noise(yoff[6]),
		100);

	ellipse(columns*3 + columns*noise(xoff[7]),
		rows*1 + rows*noise(yoff[7]),
		100);
	

	xoff[0] += incriment;
	xoff[1] += incriment;
	xoff[2] += incriment;
	xoff[3] += incriment;

	xoff[4] += incriment;
	xoff[5] += incriment;
	xoff[6] += incriment;
	xoff[7] += incriment;

	yoff[4] += incriment;
	yoff[5] += incriment;
	yoff[6] += incriment;
	yoff[7] += incriment;

}
