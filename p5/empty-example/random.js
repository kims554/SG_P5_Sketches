// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let squigglyControl = [];



function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  for (var i = 0; i < 50; i++){
  squigglyControl[i] = new squiggly(random(window.innerWidth),random(window.innerHeight));
  }
}

function draw() {
	
  
  for (var i = 0; i < squigglyControl.length; i++){
  squigglyControl[i].display();

  }
	// if (count > ){
	// 	noLoop();
	// }
}

class squiggly{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}


	display(){

			var probability = random(1);

			if (probability<0.5)
			{	
			var nextX = this.x + random(window.innerWidth/8);
			var nextY = this.y + random(window.innerHeight/8); 
			}
			else{

			var nextX = this.x - random(window.innerWidth/8);
			var nextY = this.y - random(window.innerHeight/8); 

			}

			stroke(floor(random(0,255)),100);
			strokeWeight(random(1,10));
			curve(random(0,window.innerWidth),random(0,window.innerHeight),this.x,this.y,nextX,nextY,random(0,window.innerWidth),random(0,window.innerHeight));
			this.x = nextX;
			this.y = nextY;
	}

	addTranslation(){

	}

	
}






