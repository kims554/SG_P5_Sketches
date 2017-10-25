var myMethod = true;
var q = 0;
var myArray = [];
function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 frameRate(30);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  rotate(q);


  fill(255,0,0,100);
  stroke(255,0,0);
  strokeWeight(2);

  Rose(5,1);
  Rose(5,4);
  Rose(5,6);
  // outerRose();


  q+=0.0174533*1.5;

}

function Rose(n,d){

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += .01){
    var r = window.innerWidth/4 *cos(n/d*a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);
  }
  endShape();

}

function middleRose(){
  fill(255,0,0,80);
  stroke(255,0,0);
  strokeWeight(2);
  beginShape();
  for (var a = 0; a < TWO_PI * 4; a += .05){

    var r = window.innerWidth/4 *cos(5/4*a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);

  }
  endShape();


}

function outerRose(){
  fill(255,0,0,80);
  stroke(255,0,0);
  strokeWeight(2);

  beginShape();
  for (var a = 0; a < TWO_PI * 3; a += .05){

    var r = window.innerWidth/4 *cos(5/3*a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);

  }
  endShape();

}