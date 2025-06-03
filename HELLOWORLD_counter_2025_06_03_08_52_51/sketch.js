let clics = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (0);
  textSize(24);
  text("Hello world button :", 100, 100);
  text("Total : " + clics, 160, 250);
 
  
  
  fill(255, 0, 0);
  noStroke();
  
  square (180, 120, 50);
}

function mousePressed() {
  clics++;
}

