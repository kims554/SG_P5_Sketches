// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions


class particle{
	
	constructor(){
		this.pos = createVector(random(width),random(height));
		this.vel = createVector(0,0);
		this.acc = createVector(0,0);
	}
	update(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	applyForce(force){
		this.acc.add(force);
	}

	show(){
		stroke(0);
		push();
		strokeWeight(10);
		point(this.pos.x,this.pos.y);
		pop();
	}

	edges(){
		if(this.pos.x>width) this.pos.x=0;
		if(this.pos.x<0) this.pos.x=width;
		if(this.pos.y>height) this.pos.y=0;
		if(this.pos.y<0) this.pos.y=height;
	}

	follow(vectors){

		let x = this.pos.x/scale;
		let y = this.pos.y/scale;

		let index = 0;
		let force = vectors[index];
		
		this.applyForce(force);

		}

}
