let particles = [];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(200);

  if(mouseIsPressed) {
    particleArray.push(new Particle(mouseX, mouseY));
  }

  for(let i = particles.length - 1; i >= 0; i--) { // Looping backwards to safely remove particles
    particles[i].display();
    if (particles[i].x < 0 || particles[i].x > width || particles[i].y < 0 || particles[i].y > height) {
      particles.splice(i, 1);
    }
  }

}

class Particle {

  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, 10);
    this.x += this.speedX;
    this.y += this.speedY;
  }

}

