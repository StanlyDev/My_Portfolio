document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 280;

  let particles = [];

  class Particle {
    constructor() {
      this.originalX = Math.random() * canvas.width;
      this.originalY = Math.random() * canvas.height;
      this.targetX = this.originalX;
      this.targetY = this.originalY;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > 1) {
        this.x += dx * 0.05;
        this.y += dy * 0.05;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#474747';
      ctx.fill();
    }

    resetPosition() {
      this.targetX = this.originalX;
      this.targetY = this.originalY;
    }
  }

  function init() {
    particles = [];
    const numParticles = 300;
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1f2428';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
  }

  init();
  animate();

  canvas.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;
    const threshold = 200;

    particles.forEach(particle => {
      const deltaX = mouseX - particle.x;
      const deltaY = mouseY - particle.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < threshold) {
        const angle = Math.random() * Math.PI * 2;
        const distanceFromMouse = Math.random() * threshold;
        particle.targetX = mouseX + Math.cos(angle) * distanceFromMouse;
        particle.targetY = mouseY + Math.sin(angle) * distanceFromMouse;
      } else {
        particle.resetPosition();
      }
    });
  });

  function resetParticlesPositions() {
    particles.forEach(particle => {
      particle.resetPosition();
    });
  }

  let timeout;
  canvas.addEventListener('mouseout', () => {
    clearTimeout(timeout);
    timeout = setTimeout(resetParticlesPositions, 10);
  });
});
