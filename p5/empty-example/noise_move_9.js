// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let scale;
let cols;

let rows = 8;
let columns = 8;

let incrimentX = window.innerWidth/columns;
let incrimentY = window.innerHeight/rows;
let incriment = .3;
let xoff;
let yoff;
let strokeOff;
let r = 0;

let start =0;


let noiseV;
function setup(){

	createCanvas($(window).width(),$(window).height());
	rectMode(CENTER);
	frameRate(10);
}

function draw(){
	translate(incrimentX/2,incrimentY/2);
	noFill();
	background(255);

		yoff = start + 10;

	background(noise(xoff,yoff)*255);
	for(let j = 0; j < rows; j++){

		xoff = start;
		// rotate(noise(yoff));
		for (let i = 0; i < columns; i++){
 		
 		strokeWeight(noise(xoff,yoff)*incrimentX/3);


 		stroke(noise(xoff,yoff)*255,noise(xoff+10,yoff+10)*255,noise(xoff+20,yoff+20)*255);
  		fill(noise(xoff,yoff)*255,noise(xoff+10,yoff+10)*255,noise(xoff+20,yoff+20)*255);

 		// fill(noise(xoff,yoff)*255);
		// strokeWeight(2+noise(yoff+10)*j*j);
			rect(
				i*incrimentX, 
				j*incrimentY,
				noise(xoff+1000,yoff+1000)*incrimentX/2,
				noise(xoff+1000,yoff+1000)*incrimentX/2);

		xoff+=incriment;

		}

		yoff+=incriment;


		// endShape();

	}

	start+=incriment*.15;

	save('myCanvas'+'_'+frameCount+'.png');


}
