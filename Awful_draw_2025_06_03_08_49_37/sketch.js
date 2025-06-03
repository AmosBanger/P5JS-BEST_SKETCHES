let x = 185;
let y = 185;
let vitesseX;
let vitesseY;

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);

  
  vitesseX = random(-3, 5);
  vitesseY = random(3, 5);
}

function draw() {
  noFill();
  square(x, y, 30);

  
  x += vitesseX;
  y += vitesseY;

  // Rebonds sur les bords
  if (x <= 0 || x >= width - 30) {
    vitesseX = -vitesseX;
  }
  if (y <= 0 || y >= height - 30) {
    vitesseY = -vitesseY;
  }
}
