function setup() {
  createCanvas(400, 400);
  background(220, 100, 30);

  for (let x = 0; x <= 500; x += 50) {
  for (let y = 0; y <= 500; y += 100) {
      fill(100, 50, 255, 10);
      circle(width / 2, height / 2, x);
    
     fill( 30, 30, 30, 255);
      circle(width / 2, y, 20);
      circle(y, height / 2, 20);
    }
  }
}

function draw() {}
