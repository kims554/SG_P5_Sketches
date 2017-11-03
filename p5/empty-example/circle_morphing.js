// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions
let bubble;

function setup(){

  createCanvas($(window).width(),$(window).height());
  bubble = new Bubbles();



	for (var i = 0; i < 10000; i ++){
		point(width/2+300*sin(TWO_PI/10000*i),height/2+300*cos(TWO_PI/10000*i))

	} 


}


class Bubbles{

	constructor(){
		this.r_dist;
		this.r;
		this.location = [];

	}

	update(){
	}


	display(){


	}


}
