// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let scale = 500;
let cols;
let rows;
let noiseV;
let start = 0;
function setup(){

	createCanvas($(window).width(),$(window).height());
	cols = window.innerWidth/scale;
	rows = window.innerHeight/20;

}

function draw(){
	noFill();

	let strokeValue = 0;

	for(let j = 0; j < rows; j++){

		noiseV = start;

		beginShape()

		strokeWeight(noise(strokeValue)*j/2);
		stroke(noise(strokeValue)*255,noise(strokeValue+10)*255,noise(strokeValue+20)*255);

		noiseV = j*.001;
		
		for (let i =0; i < scale; i++){

			curveVertex(i*cols+3,noise(noiseV)*j+ j*j/2.5);
			noiseV += .0005*j;
		}
		endShape()

		strokeValue+= 0.1;

	}

	start +=100;
	

}
