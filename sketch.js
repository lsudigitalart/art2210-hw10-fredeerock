let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  // Create new particles when mouse is pressed
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  // Update and show all particles
  for (let i = particles.length - 1; i >= 0; i--) { // Looping backwards to safely remove particles
    particles[i].display();

    // Remove particles that move off screen
    if (particles[i].x < 0 || particles[i].x > width || particles[i].y < 0 || particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Random speed for each particle
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    
    // Draw the particle as a black circle
    noStroke();
    fill(0);
    ellipse(this.x, this.y, 10);

    // Update the particle's position
    this.x += this.speedX;
    this.y += this.speedY;
  }
}