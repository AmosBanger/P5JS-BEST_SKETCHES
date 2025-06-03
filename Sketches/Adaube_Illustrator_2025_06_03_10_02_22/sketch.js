function setup() {
  createCanvas(400, 400);
}

let chaton = []; // clique = nouvel ligne


function mousePressed() {
  chaton.push({x: mouseX, y: mouseY});
}


function draw() {
  background(255);
  stroke(0);
  //noFill();

  // lignes
  beginShape();
  for (let p of chaton) {
    vertex(p.x, p.y);
  }
  endShape();

  // points
  for (let p of chaton) {
    fill(20);
    circle(p.x, p.y, 5);
  }
}