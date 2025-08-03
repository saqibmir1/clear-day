// Configuration - UPDATE THIS WITH YOUR START DATE
const startDate = new Date('2025-08-02T07:12:08.275Z'); // Change this to your quit date
const cigarettesPerDay = 4;
const pricePerPack = 100; // in rupees

const cigarettesPerPack = 10;

function flipCard() {
    const card = document.getElementById('mainCard');
    card.classList.toggle('flipped');
}

function updateDisplay() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Calculate streak
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    // Calculate savings
    const cigarettesAvoided = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) * cigarettesPerDay);
    const packsAvoided = cigarettesAvoided / cigarettesPerPack;
    const moneySaved = Math.round(packsAvoided * pricePerPack);

    // Update display
    document.getElementById('daysCount').textContent = days;
    document.getElementById('timeDetails').textContent = `${hours} hours, ${minutes} minutes`;
    document.getElementById('moneySaved').textContent = moneySaved.toLocaleString();
    document.getElementById('cigarettesAvoided').textContent = cigarettesAvoided.toLocaleString();
}

// Enhanced particle system
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerHTML = ['✨', '💫', '⭐', '🌟', '💎'][Math.floor(Math.random() * 5)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.fontSize = (Math.random() * 16 + 12) + 'px';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 10000);
}

// Initialize everything
function init() {
    updateDisplay();

    // Initialize Feather icons
    feather.replace();

    // Update time every minute
    setInterval(updateDisplay, 60000);

    // Create particles periodically
    setInterval(createParticle, 4000);

    // Initial burst of particles
    for (let i = 0; i < 3; i++) {
        setTimeout(createParticle, i * 800);
    }
}

// Start when page loads
document.addEventListener('DOMContentLoaded', init);