var myArray = ["bluejay", "cardinal", "chick"];
var birdColor = "red";
var birdDisplayed;

function setup() {
  createCanvas(400, 400);
  print(myArray[3])
}

function draw() {
  background(255);
  fill(birdColor);
  ellipse(200, 200, 50, 50); // body
  ellipse(200, 180, 30, 30); // head
  fill(0);
  ellipse(195, 175, 5, 5); // left eye
  ellipse(205, 175, 5, 5); // right eye
  fill(255, 0, 0);
  triangle(200, 180, 190, 190, 210, 190); // beak
  fill(0)
  textSize(32);

  if (birdColor == "blue") {
    birdDisplayed = myArray[0];
  }
  if (birdColor == "red") {
    birdDisplayed = myArray[1];
  }
  if (birdColor == "yellow") {
    birdDisplayed = myArray[2];
  }

  text(birdDisplayed, width/2-50, 250);
}