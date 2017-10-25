var n = 0;
var k = 0;
var c = 20;
function setup() {
   createCanvas(window.innerWidth,window.innerHeight);
   angleMode(DEGREES);
   frameRate(80);
   background(255);

  stroke(0,100);
  noFill();
  
}

function draw() {





  beginShape();

  var r = c * sqrt(n);
  var r2 = c * sqrt(n+1);
  var a = n * 137.5; 
  var a2 = (n+1) * 137.5;
  var x1 = r * cos(a) + width/2;
  var y1 = r * sin(a) + height/2;
  var x2 = r2 * cos(a2) + width/2;
  var y2 = r2 * sin(a2) + height/2;
  ellipse(x1,y1,c/20,c/20);
  ellipse(x2,y2,c/20,c/20);

  beginShape();
  vertex(x1,y1);

  vertex(x2,y2);
  endShape(CLOSE);

  n++;
  c+=.2;
  strokeWeight(c/5);

}