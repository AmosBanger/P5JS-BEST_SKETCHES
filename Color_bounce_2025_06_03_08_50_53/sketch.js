function setup() {
  createCanvas(500, 500);
  frameRate(120);
  
  for (let i = 0; i < 30; i++) {
    mesBouncies[i] = new bouncy(50, 250, 250, random(-5, 5), random(-5, 5));
  }
}

class bouncy {
  constructor(size, posX, posY, vitX, vitY) {
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
    this.couleur = color(random(255), random(255), random(255));
  }
  
   bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }
  
  rebondir() {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
      this.couleur = color(random(255), random(255), random(255));
    }

    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
      this.couleur = color(random(255), random(255), random(255));
    }
  }
  
  afficher() {
    stroke(0);
    fill(this.couleur); // Appliquer la couleur
    if (this.isCircle) {
    }
    square(this.posX, this.posY, this.size);
  }
  
  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
  
} 

let mesBouncies = [];



function draw() {
  background(255);

  
  for (let i = 0; i < mesBouncies.length; i++) {
    mesBouncies[i].update();
  }
}