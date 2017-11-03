// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions

let cols, rows;
let scale = 20;
let incriment = .1;
let inc = .1;
let zoff = 0;
let particles = [];
let particleN = 10;
let flowfield = [];


function setup(){

  createCanvas($(window).width(),$(window).height());

  cols = width/scale;
  rows = height/scale;
  for (let i = 0; i<particleN; i++){
	  particles[i] = new particle();
  }

}

function draw(){


	background(255);
	noStroke();
	
	let yoff = 0;

	for ( let y =0; y < scale+1; y++){

	let xoff = 0;
	for(let x = 0; x < scale+1; x++){

		let index = x + y * cols;
		// rect(x*cols,y*rows,cols,rows);
		let r = TWO_PI*noise(xoff,yoff,zoff);
		let v = p5.Vector.fromAngle(r);
		v.setMag(.1);
		flowfield[index] = v; 
		// fill(r);
	
		stroke(0);

		push();
			translate(x*cols,y*rows);
			rotate(v.heading());
			line(0,0,cols,0);
		pop();


		xoff += inc;


	}
		yoff += inc;
	}
	 zoff+=.01;

  for (let i = 0; i<particleN; i++){
  		particles[i].follow(flowfield);
  		particles[i].update();
			particles[i].show();
			particles[i].edges();
  }

}


class Bubbles{


}
