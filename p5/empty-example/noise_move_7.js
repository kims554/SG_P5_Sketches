// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let scale;
let cols;

let rows = 10;
let columns = 20;

let incrimentX = window.innerWidth/columns;
let incrimentY = window.innerHeight/rows;

let xoff;
let yoff;
let strokeOff;


let start =0;


let noiseV;
function setup(){

	createCanvas($(window).width(),$(window).height());


}

function draw(){
	translate(0,incrimentY*1.5);
	background(255);
	yoff = start;
	// yoff = 0;
	strokeOff = 0;
	noFill();
	for(let j = 0; j < rows+1; j++){
		
 		// beginShape();
		for (let i = 0; i < columns+1; i++){
 
 		stroke(noise(yoff)*255,noise(yoff+10)*255,noise(yoff+20)*255);
		strokeWeight(2+noise(yoff+10)*j*j);
	
			point(
				i*incrimentX, 
				j*j*3 + j*j*3*noise(yoff));

			yoff += .1;
		}

		// endShape();

	}

	start += .05;
	

}
