function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  fill(0);
  
  let chaton = 40;
  for (let x = chaton; x < width; x += 40) {
    for (let y = chaton; y < height; y += 40) {
      ellipse(x, y, 20, 20);
    }
  }
}