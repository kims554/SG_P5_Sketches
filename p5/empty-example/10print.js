let x = 0;
let y = 0;
let spacing = window.innerWidth/15;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  background(255);
  frameRate(15);
  noFill();
  strokeWeight(20);
}

function draw(){
  // arc(50,50,50,50,HALF_PI,HALF_PI+PI);
  // arc(100,100,50,50,HALF_PI+PI,HALF_PI);
  if (random(1) > 0.5){
  stroke("#00F6FF");
  arc(x+spacing/2, y+spacing/2,spacing,spacing,PI+HALF_PI,0);
 }else{
    stroke("#FF00EA");
   arc(x+spacing/2, y+spacing/2,spacing, spacing,HALF_PI,PI);
 }

  // if (random(1)<.5){
  //   line(x,y,x+spacing,y+spacing);
  // }
  // else{
  //   line(x,y+spacing,x+spacing,y);
  // }
x+=spacing;

  if (x>width){
    x=0;
    y += spacing;
  }
}