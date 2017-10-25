let bubble = [];


function setup(){
  createCanvas(window.innerWidth,window.innerHeight);

  for (var i = 0; i < 25; i++){
  bubble[i] = new Bubble(random(window.innerWidth),random(window.innerHeight), 50);
  }
  // bubble2 = new Bubble(100,100);
  // bubble3 = new Bubble(50,50);
  // bubble4 = new Bubble(100,50);
  noStroke();
}

function draw(){

  for (var i = 0; i < bubble.length; i++){
    bubble[i].show();

    for (var j = 0; j < bubble.length; j++){
      if (i != j && bubble[i].intersects(bubble[j])){  
        bubble[i].changeColor();
        bubble[j].changeColor();
      }
    }
  }


  // bubble[1].show();
  // bubble[0].show();
  // // bubble2.show();
  // // bubble3.show();
  // // bubble4.show();
  // if (bubble[0].intersects(bubble[1])){

  //   bubble[0].changeColor();
  //   bubble[1].changeColor();
  //   console.log((bubble[0].r+bubble[1].r)/2);
  //   console.log(dist(bubble[0].x,bubble[0].y,bubble[1].x,bubble[1].y));
  // } 
  
}

function mousePressed(){
  // bubble[0].changeColor();
}
class Bubble {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(255,0,0);
  }
  
  show(){
      // strokeWeight(r);
      fill(this.col);
      ellipse(this.x,this.y,this.r);
  }

  changeColor(){
      this.col = color(0,0,random(255));
  }

  intersects(other){
 
    let d = dist(this.x,this.y,other.x,other.y);
 
    if (d < (this.r+other.r)/2)
    {
      return true;
    }

    else{
      return false;
    }


  }

}
