function setup () {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  //trait noir
  fill(0, 0, 0)
  stroke(0);
  rect (0, 300, 400, 15);
  rect (300, 0, 20, 400);
  rect (150, 0, 10, 400);
  rect (0, 200, 400, 5);
  rect (0, 150, 160, 5);
  
  fill(255, 0, 0); // rouge
  rect(160, 0, 140, 200); // zone entre le petit et grand rectangle vertical

  fill(0, 0, 255); // bleu
  rect(0, 205, 400, 100); // zone entre les deux rectangles horizontaux
  
  fill(255, 255, 0); // rouge
  rect(310, 315, 140, 400); // zone entre le petit et grand rectangle vertical
}

// faire function -> rectangle couleur (la couelur ){}
// 3 cond -> if coueleur = jaune, fill rouge, valeurs rectangle
// autre idées faire liste avec couleur puis choose aléat