const particleContainer = document.getElementById('particles-container');
const particleEmojis = ['🎀','✨']; 
const spawnInterval = 1800; 
const maxParticlesPerBatch = 1;

function spawnParticles() {
    const batchCount = Math.floor(Math.random() * maxParticlesPerBatch) + 1;

    for(let i = 0; i < batchCount; i++) {
        const span = document.createElement('span');
        span.classList.add('particle');
        const emoji = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
        span.textContent = emoji;

        span.style.left = Math.random() * (window.innerWidth - 80) + 'px';
        span.style.top = window.innerHeight + (i * 60) + 'px';
        span.style.fontSize = (Math.random() * 30 + 50) + 'px';
        span.style.opacity = (Math.random() * 0.15 + 0.75);

        particleContainer.appendChild(span);
    }
}

function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
        let currentTop = parseFloat(p.style.top);
        const speed = Math.random() * 0.8 + 0.4; 
        p.style.top = (currentTop - speed) + 'px';

        if(currentTop < -100) p.remove(); 
    });

    requestAnimationFrame(animateParticles);
}
enterBox.addEventListener('click', () => {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "page2.html";
    }, 800);
});
document.addEventListener("DOMContentLoaded", () => {
    const enterBox = document.getElementById('enterBox');

    enterBox.addEventListener('click', () => {
        // Redirect to page 2
        window.location.href = "index2.html"; // make sure this is the correct name of Page 2
    });
});


// Staggered initial spawn
setTimeout(spawnParticles, 1000);
setTimeout(spawnParticles, 3000);
setTimeout(spawnParticles, 5000);

animateParticles();
setInterval(spawnParticles, spawnInterval);

