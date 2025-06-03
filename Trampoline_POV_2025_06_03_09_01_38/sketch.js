let size = 0;
let sizecentre = 0;
let tomber = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50, 200, 50);
  fill(0)
  ellipse(200, 200, size, size);
  
  fill(200)
   ellipse(200, 200, sizecentre, sizecentre);
  
  
  if (tomber) {
    size += 5;
    if (size > 200) tomber = false;
  } else {
    size -= 5;
    if (size < 0) tomber = true;
  }
  
  if (tomber) {
    sizecentre += 1;
    if (size > 200) tomber = false;
  } else {
    sizecentre -= 1;
    if (size < 0) tomber = true;
  }
}
