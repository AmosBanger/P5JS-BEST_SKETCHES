let pluie = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1000; i++) {
    pluie.push({x: random(width), y: random(-height, 0), speed: random(1, 15)});
  }
}

function draw() {
  background(20, 20, 50);
  stroke(100, 100, 255);
  strokeWeight(3);
  for (let drop of pluie) {
    line(drop.x, drop.y, drop.x, drop.y + 20);
    drop.y += drop.speed;
    if (drop.y > height) {
      drop.y = random(-100, 0);
      drop.x = random(width);
    }
  }
}
