function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(4);
  stroke(0);

  // Bords
  line(0, 0, width, 0);       // haut
  line(0, 0, 0, height);      // gauche
  line(width, 0, width, height); // droite
  line(0, height, width, height); // bas

  // verticaux
  line(50, 0, 50, 300);
  line(50, 300, 150, 300);
  line(150, 300, 150, 100);
  line(150, 100, 250, 100);
  line(250, 100, 250, 350);
  line(250, 350, 350, 350);
  line(350, 350, 350, 50);
  line(350, 50, 200, 50);
}

function draw() {
  
  let R = random(255);
  let V = random(255);
  let B = random(255);
  fill(R,V,B);
  strokeWeight (0);
  circle(mouseX,mouseY,20);
  
  fill (200, 0, 200)
  square (85, 250, 30);
  
  fill(0, 255, 0);
  textSize(12);
  text("END", 87, 270);
}