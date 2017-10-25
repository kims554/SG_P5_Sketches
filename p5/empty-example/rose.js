var p = 7;
var k = 0;
function setup() {
   createCanvas(window.innerWidth,window.innerHeight);
   frameRate(5);
   background(255);

}

function draw() {
	background(255);
	translate(width/2, height/2);

	beginShape();

 	rotate(k);
 	noStroke();
 	fill(0,125,125,50);

  for ( var a = 0; a < TWO_PI; a += 0.01){

  	var r = 1200 * cos((p+4)*a);
  	var x = r* cos(a);
  	var y = r* sin(a);
  	vertex(x,y);
  }
  endShape(CLOSE);


	beginShape();
  for ( var a = 0; a < TWO_PI; a += 0.01){

  	var r = 400 * cos((p)*a);
  	var x = r* cos(a);
  	var y = r* sin(a);
  	vertex(x,y);
  	rotate(k+10);
  }
  endShape(CLOSE);


	beginShape();
  for ( var a = 0; a < TWO_PI; a += 0.01){

  	var r = 800 * cos((p+2)*a);
  	var x = r* cos(a);
  	var y = r* sin(a);
  	vertex(x,y);
  	rotate(k+10);
  }
  endShape(CLOSE);


  k++;

}