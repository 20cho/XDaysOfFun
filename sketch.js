let x = 0; //coordonnées 
let y = 0 ;
let diameter = 10; 


function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  strokeWeight (4);
  stroke(0);
  fill (242,60,19);
  if (random (1) < 0.5) {
    circle(x + diameter, y, diameter);
  }else{
    strokeWeight (0.5);
    stroke(0);
    fill (242,89,75); 
    circle(x, y, diameter);
  }

  if (random (1) < 0.2) {
    strokeWeight (6);
    stroke(0);
    fill (255,255,0);
    circle(x + diameter, y, diameter);
  }



  if (random (1)< 0.5) {
    x = x + diameter;
  }else{
    x = x + diameter + y/2 ;
  }

  if (x > width) { 
    x = 0;
    y = y + diameter;
  }  
}