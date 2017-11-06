// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let height = $(window).height();
let width = $(window).width();

let scl = 50;
let cols;
let rows;

let xoff = 0;
let yoff = 0;
let zoff = 0;
let incriment = 0.1;

let particles = [];
let particlesN = 100;

let flowfield = [];

function setup(){

	createCanvas($(window).width(),$(window).height());
	cols = floor(width/scl);
	rows = floor(height/scl);
	for(let i = 0; i< particlesN; i++){
		particles[i] = new particle();
	}

}

function draw(){
	// background(255);
	yoff = 0;

	for(let i = 0; i< particlesN; i++){
		particles[i].show();
		particles[i].update();
		particles[i].edges();
		particles[i].follow(flowfield);
	}

	for(let y = 0; y < rows+1; y++){
		xoff = 0;

		for(let x = 0; x < cols+1; x++){
			// let noiseV = noise(xoff,yoff);

			let index = x + y * cols;
			let angle = noise(xoff,yoff,zoff)*TWO_PI*4;
			let v = p5.Vector.fromAngle(angle);
			v.setMag(1);
			flowfield[index] = v;

			// fill(noiseV*255);
			// rect(x*scl, y*scl, scl, scl);
			push();
				// translate(x*scl, y*scl);
				// rotate(v.heading());
				// line(0,0,scl,0);
			pop();


			xoff+=incriment*.1;

		}

		yoff += incriment*.1;
	
	}

	// console.log(flowfield);
	// noLoop();

		zoff += incriment*.1 ;

}

class particle{
	constructor(){
		this.pos = new p5.Vector(random(width),random(height));
		// this.vel = new p5.Vector(0,0);
		this.vel = createVector(0,0);
		this.acc = createVector(0,0);
	}

	update(){
		this.vel.add(this.acc);
		this.vel.limit(10);
		this.pos.add(this.vel);

		this.acc.mult(0);
	}

	applyForce(force){
		this.acc.add(force);
		this.acc.mag(.1);
	}

	show(){
		push();
		stroke(0,10);
		strokeWeight(10);
		point(this.pos.x,this.pos.y);
		
		pop();
	}

	edges(){
		if (this.pos.x >= width) this.pos.x = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y >= height) this.pos.y = 0;
		if (this.pos.y < 0) this.pos.y = height;
	}

	follow(vectors){
		let x = floor(this.pos.x/scl);
		let y = floor(this.pos.y/scl);
		
		let index = x + y * cols;
		let force = vectors[index];
		this.applyForce(force);


	
	}
}