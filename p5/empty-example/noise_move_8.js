// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let scale;
let cols;

let rows = 20;
let columns = 20;

let incrimentX = window.innerWidth/columns;
let incrimentY = window.innerHeight/rows;
let incriment = .1;
let xoff;
let yoff;
let strokeOff;


let start =0;


let noiseV;
function setup(){

	createCanvas($(window).width(),$(window).height());


}

function draw(){
	noFill();
		yoff = start + 10;

	background(100+noise(xoff+100,yoff+100)*155,100+noise(xoff+200,yoff+200)*155,100+noise(xoff+300,yoff+300)*155);
	for(let j = 0; j < rows+1; j++){

		xoff = start;

		for (let i = 0; i < columns+1; i++){
 		
 		strokeWeight(noise(xoff,yoff)*incrimentX*1.25);


 		stroke(noise(xoff,yoff)*255,noise(xoff+10,yoff+10)*255,noise(xoff+20,yoff+20)*255);

		// strokeWeight(2+noise(yoff+10)*j*j);
	
			point(
				i*incrimentX, 
				j*incrimentY);

		xoff+=incriment;

		}

		yoff+=incriment;


		// endShape();

	}

	start+=incriment*.3;
	

}
