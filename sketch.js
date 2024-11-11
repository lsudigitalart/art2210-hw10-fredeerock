// Create an empty array to store Pokémon objects
var pokemonArray = [];

// This function sets up the initial environment
function setup() {
  // Create a canvas of 400x400 pixels
  createCanvas(400, 400);
  
  // Add 100 Pokémon objects to the pokemonArray
  for (var i = 0; i < 100; i++) {
    // Create a new Pokémon at a random position and add it to the array
    var x = random(width);
    var y = random(height);
    var pokemon = new Pokemon(x, y);
    pokemonArray.push(pokemon);
  }
}

// This function is called repeatedly to draw the canvas
function draw() {
  // Set the background color to white
  background(255);
  
  // Loop through each Pokémon in the array and display it
  for (var i = 0; i < pokemonArray.length; i++) {
    var pokemon = pokemonArray[i];
    pokemon.display();
  }
}

// This function is called when the mouse is pressed
function mousePressed() {
  // Loop through each Pokémon in the array
  for (var i = 0; i < pokemonArray.length; i++) {
    var pokemon = pokemonArray[i];
    // Check if the Pokémon was clicked
    if (pokemon.isClicked(mouseX, mouseY)) {
      // Turn the clicked Pokémon into a Pokéball
      pokemon.turnIntoPokeball();
    }
  }
}

// Define a Pokémon class
function Pokemon(x, y) {
  // Initialize the Pokémon object
  this.x = x; // X-coordinate of the Pokémon
  this.y = y; // Y-coordinate of the Pokémon
  this.isPokeball = false; // Boolean to check if it's a Pokéball

  // Method to display the Pokémon
  this.display = function() {
    if (this.isPokeball) {
      this.drawPokeball(); // Draw a Pokéball if it is a Pokéball
    } else {
      this.drawSquirtle(); // Otherwise, draw a Squirtle
    }
  };

  // Method to check if the Pokémon was clicked
  this.isClicked = function(mx, my) {
    // Calculate the distance between the mouse and the Pokémon
    var distance = dist(mx, my, this.x, this.y);
    return distance < 25;
  };

  // Method to turn the Pokémon into a Pokéball
  this.turnIntoPokeball = function() {
    this.isPokeball = true;
  };

  // Placeholder method to draw a Pokéball
  this.drawPokeball = function() {
    fill(255, 0, 0);
    arc(this.x, this.y, 50, 50, PI, 0); // Top half
    fill(255);
    arc(this.x, this.y, 50, 50, 0, PI); // Bottom half
    fill(0);
    ellipse(this.x, this.y, 10, 10); // Center button
  };

  // Placeholder method to draw a Squirtle
  this.drawSquirtle = function() {
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
  };
}
