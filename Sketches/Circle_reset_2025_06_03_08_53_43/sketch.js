let compteur = 0;
let direction = 0.2; // 1 = avance, -1 = recule

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);

  // cercles
  for (let i = 0; i < compteur; i++) {
    let x = i * 50;
    fill(x / 1.41);
    circle(x, height / 2, 50);
  }

  
  compteur += direction;

  // Inverse
  if (compteur >= 12) {
    direction = -1;
  }
  if (compteur <= -3) {
    direction = 0.2;
  }
}
