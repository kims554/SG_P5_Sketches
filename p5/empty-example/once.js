var callMethod = true;
var myArray = [];
var angle ={
  x : 0,
  y : 10,
};

var x = 1;


function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 frameRate(5);
 background(255);

}

function draw() {

  // myArray.push("1");
  // console.log(myArray);

  // myArray.splice(0);
  // console.log(myArray);
  // var r = new myMethod;
  // angle.x += 1;
  // myFunction(1,2,10); 
  // // noLoop();
  // x = milesTokilos(x);

  // console.log(milesTokilos(x));

}

function myMethod(){
  console.log(angle.x);
}

function myFunction(x,y,z){
  console.log(x);
  console.log(y);
  console.log(z);

}

function milesTokilos(miles){
  var s = miles * 1.6;
  return s;

}