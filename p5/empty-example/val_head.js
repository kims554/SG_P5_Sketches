var pos,targetX,targetY,vel,ctx,r,drag,strength,dragSlider, strengthSlider;
var bubble = [];
function setup() {
  ctx = createCanvas(windowWidth, windowHeight);  
  // frameRate(5); // if you want to see it in slloowwmmoo
  noStroke();
  background(0,0,0); 
  
  r = 60; 
  pos = 0;
  target = 0;
  vel =0;

  for(var i = 0; i <50; i++)
  {
    bubble[i] = new Bubble();
  }
  
}

function draw() { //draw is called every frame


  background(255);  

  for(var i = 0; i <50; i++){

  bubble[i].display(mouseX);

  }

 
}

class Bubble{
  constructor(){
    this.x;
    this.y = 300;
    this.r = random(50);
    this.drag = random(1);
    this.strength = random(1);
  }

  display(mouseX){
    fill(0,10);


    target = mouseX;
    var force = target - pos;
    force *= this.strength;
    vel *= this.drag;
    vel = force;

    pos += vel;


    ellipse(pos,this.y,this.r);

  }

}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}