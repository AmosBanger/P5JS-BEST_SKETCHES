let alpha = 255;

function setup() {
  createCanvas(400, 400);
  textFont('monospace');
  textStyle(BOLD);
  textSize(32);
  background(220);
}

function draw() {
}

function mousePressed() {
  let mot = "Hello World";
  let x = mouseX;
  let y = mouseY;


  fill(0, alpha);
  stroke(0, alpha);

  noStroke();
  text(mot, x, y);

  // Réduire opacité
  alpha = max(alpha - 80, 10);
}
