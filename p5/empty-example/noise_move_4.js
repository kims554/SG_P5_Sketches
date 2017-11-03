// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let columns = 5;
let rows = 5;

let x = window.innerWidth/columns;
let y = window.innerHeight/rows;

let r = 100;
let xoff = [];
let yoff = [];
let incriment = .01;
let roff = [];
let boff = [];
let goff = [];

function setup(){
  createCanvas($(window).width(),$(window).height());

  for (var i =0; i<rows*columns; i++){
  	xoff[i] = noise(i);
  	yoff[i] = noise(i+100);
  	roff[i] = noise(i+200);
  	goff[i] = noise(i*50+300);
  	boff[i] = noise(i+400);
  	// roff[i] = noise(i)
  }
  ellipseMode(CENTER);
}

function draw(){
	background(255);

	// row1
	

	for(var j = 0; j < rows; j++){

		for (var i =0; i <columns; i++){
			push()
			fill(
			255*noise(roff[i+columns*j]))
			noStroke();


			ellipse(

				x*i + 4*x*noise(xoff[i+columns*j]),
				y*j + 4*y*noise(yoff[i+columns*j]),
				// x*i,
				// y*j,
				// r+r*x*noise(xoff[i+columns*j])/10,
				// r+r*y*noise(yoff[i+columns*j])/10
				r*10
			);
			pop();
		}


	}

	// for (var i =0; i <columns; i++){
	// 	ellipse(
			
	// 		x*i + x*noise(xoff[i]),
			
	// 		y*0 + y*noise(yoff[i]),
	// 		r);
	// 	}


	
	// ellipse(x*0 + columns*noise(xoff[0]),
	// 	rows*0+ rows*noise(yoff[0]),
	// 	100);

	// ellipse(x*1 + columns*noise(xoff[1]),
	// 	rows*0 + rows*noise(yoff[1]),
	// 	100);

	// ellipse(x*2 + columns*noise(xoff[2]),
	// 	rows*0 + rows*noise(yoff[2]),
	// 	100);

	// ellipse(x*3 + columns*noise(xoff[3]),
	// 	rows*0 + rows*noise(yoff[3]),
	// 	100);
	// // row2

	// ellipse(x*0 + columns*noise(xoff[4]),
	// 	rows*1 + rows*noise(yoff[4]),
	// 	100);

	// ellipse(x*1 + columns*noise(xoff[5]),
	// 	rows*1 + rows*noise(yoff[5]),
	// 	100);

	// ellipse(x*2 + columns*noise(xoff[6]),
	// 	rows*1 + rows*noise(yoff[6]),
	// 	100);

	// ellipse(x*3 + columns*noise(xoff[7]),
	// 	rows*1 + rows*noise(yoff[7]),
	// 	100);
	

	// xoff[0] += incriment;
	// xoff[1] += incriment;
	// xoff[2] += incriment;
	// xoff[3] += incriment;

	// xoff[4] += incriment;
	// xoff[5] += incriment;
	// xoff[6] += incriment;
	// xoff[7] += incriment;

	// yoff[4] += incriment;
	// yoff[5] += incriment;
	// yoff[6] += incriment;
	// yoff[7] += incriment;

  // for (var i =0; i<rows*columns; i++){
  // 	xoff[i] += incriment;
  // 	yoff[i] += incriment;
  // }
 
  update();

}


function update(){
	  for (var i =0; i<rows*columns; i++){
  	xoff[i] += incriment*2;
  	yoff[i] += incriment;

  	roff[i] += incriment;
  	goff[i] += incriment;
  	boff[i] += incriment*2;
  }

}