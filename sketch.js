let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // Remove particles that are fully transparent
  particles = particles.filter(particle => particle.opacity > 0);
  
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function mousePressed() {
  for (let i = 0; i < 20; i++) { // Create 20 particles on each click
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.opacity = 255; // Initialize opacity
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    
    let bounced = false;

    // Bounce off edges and reduce opacity
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
      bounced = true;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
      bounced = true;
    }

    if (bounced) {
      this.opacity -= 25; // Decrease opacity on bounce
      this.opacity = max(this.opacity, 0); // Ensure opacity doesn't go below 0
    }
  }

  display() {
    fill(0, this.opacity);
    ellipse(this.x, this.y, 10, 10);
  }
}
