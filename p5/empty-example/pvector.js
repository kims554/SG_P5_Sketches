// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
var location;
var ball;  
var count;



function setup(){

  ball = new Ball();

  ball.location.x = window.innerWidth/2;
  ball.location.y = window.innerHeight/2;  

  ball.target.x = window.innerWidth/2;
  ball.target.y = window.innerHeight/2;  


  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
  background(255);
  fill(0);
  ball.display();
  ball.move();
}



function preload(){


}


class Ball{
  constructor(){
    this.location = new p5.Vector(width/2,height/2);
    this.velocity = new p5.Vector(1,1);
    this.target = new p5.Vector(width/2,height/2);
  }

  display(){

    ellipse(this.location.x,this.location.y,100);

  }

  move(){


    this.target.set(location);
    this.target.set(mouseX,mouseY);
    this.velocity = this.target.sub(this.location).mult(.1);


    // this.velocity = this.target.sub(this.location).mult(0.1);
    this.location.add(this.velocity);





  }
  
  


}