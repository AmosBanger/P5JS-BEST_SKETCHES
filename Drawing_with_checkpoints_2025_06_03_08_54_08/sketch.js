function setup() {
  createCanvas(400, 400);
  
  let R = random(255);
  let V = random(255);
  let B = random(255);
  background(100,100,100);
  
  
  fill(255);
  textSize(12);
  text("Click and set a checkpoint", 130, 350);
}

function draw() {
  circle(mouseX,mouseY,15);
}

function mouseClicked(){
  
  
  square (mouseX, mouseY, 30);
  let R = random(255);
  let V = random(255);
  let B = random(255);
  fill(R,V,B);
}