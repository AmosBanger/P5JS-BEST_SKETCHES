function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  let hue = frameCount % 360;
  background(hue, 50, 100); // saturation, luminosité
}
