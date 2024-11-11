let pokemonArray = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    pokemonArray.push(new Pokemon(random(width), random(height)));
  }
}

function draw() {
  background(255);
  for (let pokemon of pokemonArray) {
    pokemon.display();
  }
}

function mousePressed() {
  for (let pokemon of pokemonArray) {
    if (pokemon.isClicked(mouseX, mouseY)) {
      pokemon.turnIntoPokeball();
    }
  }
}

class Pokemon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isPokeball = false;
  }

  display() {
    if (this.isPokeball) {
      this.drawPokeball();
    } else {
      this.drawSquirtle();
    }
  }

  isClicked(mx, my) {
    return dist(mx, my, this.x, this.y) < 25;
  }

  turnIntoPokeball() {
    this.isPokeball = true;
  }

  drawSquirtle() {
    fill(0, 191, 255);
    ellipse(this.x, this.y, 50, 50); // Body
    fill(255);
    ellipse(this.x - 10, this.y - 10, 10, 10); // Left eye
    ellipse(this.x + 10, this.y - 10, 10, 10); // Right eye
    fill(0);
    ellipse(this.x - 10, this.y - 10, 5, 5); // Left pupil
    ellipse(this.x + 10, this.y - 10, 5, 5); // Right pupil
    fill(255, 165, 0);
    ellipse(this.x, this.y + 10, 30, 20); // Shell
  }

  drawPokeball() {
    fill(255, 0, 0);
    arc(this.x, this.y, 50, 50, PI, 0); // Top half
    fill(255);
    arc(this.x, this.y, 50, 50, 0, PI); // Bottom half
    fill(0);
    ellipse(this.x, this.y, 10, 10); // Center button
  }
}
