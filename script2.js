// Particle Setup
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 200;
    this.size = 3 + Math.random() * 4; 
    this.speed = 0.5 + Math.random() * 1;
    this.opacity = 0.2 + Math.random() * 0.3;
  }
  update() {
    this.y -= this.speed;
    if(this.y < -10) this.reset();
  }
  draw() {
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = [];
const particleCount = 100;
for(let i=0; i<particleCount; i++){
  particles.push(new Particle());
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

// Cloud Movement
const clouds = [
  document.getElementById('cloud1'),
  document.getElementById('cloud2'),
  document.getElementById('cloud3')
];

// Initial horizontal positions
const cloudPositions = [-300, -600, -900];
clouds.forEach((cloud, i) => {
  cloud.style.left = cloudPositions[i] + 'px';
  cloud.style.top = (i*150 + 100) + 'px';
  // Click events redirect to pages
  cloud.addEventListener('click', () => {
    window.location.href = `cloud${i+1}.html`;
  });
});

function moveClouds(){
  clouds.forEach((cloud, i) => {
    let left = parseFloat(cloud.style.left);
    left += 0.3 + Math.random()*0.5; // drift speed
    if(left > window.innerWidth + 300) left = -300;
    cloud.style.left = left + 'px';
  });
  requestAnimationFrame(moveClouds);
}

moveClouds();

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});  requestAnimationFrame(moveClouds);
}

moveClouds();

// Resize handling
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
