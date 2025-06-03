function setup() {
  createCanvas(400, 400);
  background(220);
  noFill();
  stroke(0);
  translate(200, 200,);
  
  beginShape();
  for (let a = 0; a < TWO_PI * 5; a += 1) {
    let r = 5 * a;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}

function draw() {}
