class bouncy {
  
  constructor(size, posX, posY, vitX, vitY) {
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
    this.isCircle = false;
  } 
  
  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }
  
  rebondir() {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
      this.isCircle = true;
    }
    
    //if (this.posX + this.size < width || this.posX < 0){}
    
    
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
      this.isCircle = false;
    }
  }
  
  afficher() {
    stroke(0);
    if (this.isCircle) {
      
      circle(this.posX + this.size / 2, this.posY + this.size / 2, this.size);
    } else {
      square(this.posX, this.posY, this.size);
    }
    // else = soit l'un soit l'autre
    
    noStroke();
  }
  
  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
  
} 

let mesBouncies = [];

function setup() {
  createCanvas(500, 500);
  frameRate(120);
  
  for (let i = 0; i < 100; i++) {
    mesBouncies[i] = new bouncy(50, 250, 250, random(-2, 2), random(-2, 2));
  }
}

function draw() {
  background(255);

  
  for (let i = 0; i < mesBouncies.length; i++) {
    mesBouncies[i].update();
  }
}
