let angle = 0;
let playing = false;
let brasAngle = -90;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(50, 50, 200);

  translate(200, 200);

  if (playing) {
    angle += 1;
    if (brasAngle < 270) {
      brasAngle += 0.5; // rotation
    }
  }

  rotate(angle);

  // vinyle
  noStroke();
  fill(10);
  ellipse(0, 0, 250);
  fill(200, 50, 50);
  ellipse(0, 0, 60);
  fill(0);

  // rotation ligne
  resetMatrix();
  translate (200, 200);
  rotate(brasAngle);

  // ligne
  stroke(225);
  strokeWeight(10);
  line(125, 0, 0, 0);
  noStroke();

  // texte
  resetMatrix();
  fill(255);
  textSize(16)
  text("Timer for extremely fast pasta", 95, 360);
}

function mousePressed() {
  playing = !playing;
}
