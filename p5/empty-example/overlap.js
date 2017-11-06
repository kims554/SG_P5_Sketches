// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProduction

let height = $(window).height();
let width = $(window).width();

let bubbles = [];
let bubblesN = 25;

function setup(){

	createCanvas($(window).width(),$(window).height());
	for (let i =0; i<bubblesN; i++){
		bubbles[i] = new bubble();
	}
}
	
function draw(){
	background(255);
	for (let i =0; i<bubblesN; i++){
		bubbles[i].show();
	}

	
}


class bubble{
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.r = random(100,300);

	}

	show(){
		ellipse(
			this.x,
			this.y,
			this.r);
	}

	update(){

	}



}