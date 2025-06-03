function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  stroke(0);
}

function draw() {
  background(220);
  line(200, 200, mouseX, mouseY);
  circle(mouseX, mouseY, 10);
  fill(0)
}
