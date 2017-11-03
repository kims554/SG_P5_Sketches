// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let particle = [];
let particleN = 2;
let a;
function setup(){
	createCanvas($(window).width(),$(window).height());
	for (let i = 0 ; i < particleN; i++){
	particle[i] = new noiseParticle();
	particle[i].angleUpdate();
	}
	frameRate(10);
}

function draw(){
	translate(width/2,height/2);
	for(var i =0; i < particleN; i++){
	particle[i].update();
	particle[i].display();

	}

}

// function draw(){
// 	background(255);
// 	noStroke();
// 	fill(0);

// 	let translateNoise = 0;


// 			beginShape();

// 			push();



// 			let xoff = 0;
// 			for(let i = 0; i<dots; i++){

// 				let ang = TWO_PI/dots*i;
// 				let radius = height/2 * noise(xoff*0.1);
// 				let x = radius*sin(ang) + width*noise(translateX);
// 				let y = radius*cos(ang) + height * noise(translateY);
// 				curveVertex(x,y);
// 				xoff+=incriment;
// 			}
// 			endShape();


// 	pop();

	// }

	class noiseParticle{
		
		constructor(){
			this.xoff = random(100);
			this.yoff = random(100);
			this.dots = random(100,200);
			this.angle = [];
			this.roff = 0;
			this.x;
			this.y;
			this.radius = 300;
			this.incriment = .1;
			this.translateX;
			this.translateY;
			
			this.r;
			this.g;
			this.b;
			
			this.roff = random(1000);
			this.goff = random(1000);
			this.boff = random(1000);

	}

		angleUpdate(){
	
			for (let i = 0; i <this.dots; i++){
				this.angle.push(TWO_PI/this.dots*i);
			}
	
		}

		display(){

			noStroke();
			fill(this.r,this.g,this.b,50);
			stroke(this.r,this.g,this.b,100);
			// this.xoff = 0;

			beginShape();
			for (let i = 0 ; i<this.dots; i++){
				 this.radius = width*1/2 * noise(this.xoff);
				 // this.x = this.radius * sin(this.angle[i]) + width*2 * noise(this.yoff);				
				 // this.y = this.radius * cos(this.angle[i]) + height*2 * noise(this.yoff+10);
				 this.x = this.radius * sin(this.angle[i]);				
				 this.y = this.radius * cos(this.angle[i]);
				 curveVertex(this.x,this.y);
				 this.xoff += this.incriment*.1;

			}
			endShape();
		}

		update(){

			this.r = noise(this.roff)*255;
			this.g = noise(this.goff)*255;
			this.b = noise(this.boff)*255;

			// this.xoff += this.incriment;
			this.yoff += this.incriment;
			this.roff += this.incriment;
			this.goff += this.incriment;
			this.boff += this.incriment;

		}

}

