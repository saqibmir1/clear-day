// Configuration - UPDATE THIS WITH YOUR START DATE
const startDate = new Date('2025-08-02T07:12:08.275Z'); // Change this to your quit date
const cigarettesPerDay = 5;
const pricePerPack = 100; // in rupees
const cigarettesPerPack = 10;

// Achievements configuration
const achievements = [
    { 
        id: 'ember', 
        name: 'Ember', 
        days: 1, 
        color: '#ff4444', 
        colorClass: 'coin-ember',
        symbol: '🔥',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#ff4444" stroke="#cc2222" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#ff6666" opacity="0.8"/>
            <path d="M25 35c0-5 3-8 5-12 2 4 5 7 5 12-2 3-8 3-10 0z" fill="#ffcccc"/>
        </svg>`,
        themeColors: { primary: '#ff4444', secondary: '#cc2222' }
    },
    { 
        id: 'flint', 
        name: 'Flint Coin', 
        days: 3, 
        color: '#ff8800', 
        colorClass: 'coin-flint',
        symbol: '⚡',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#ff8800" stroke="#dd6600" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#ffaa33" opacity="0.8"/>
            <path d="M32 18l-8 14h6l-2 10 8-14h-6l2-10z" fill="#fff5cc"/>
        </svg>`,
        themeColors: { primary: '#ff8800', secondary: '#dd6600' }
    },
    { 
        id: 'iron', 
        name: 'Iron Coin', 
        days: 7, 
        color: '#888888', 
        colorClass: 'coin-iron',
        symbol: '⚙️',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#888888" stroke="#555555" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#aaaaaa" opacity="0.8"/>
            <circle cx="30" cy="30" r="8" fill="#cccccc"/>
            <circle cx="30" cy="30" r="4" fill="#888888"/>
            <rect x="26" y="15" width="8" height="4" fill="#cccccc"/>
            <rect x="26" y="41" width="8" height="4" fill="#cccccc"/>
            <rect x="15" y="26" width="4" height="8" fill="#cccccc"/>
            <rect x="41" y="26" width="4" height="8" fill="#cccccc"/>
        </svg>`,
        themeColors: { primary: '#888888', secondary: '#555555' }
    },
    { 
        id: 'bronze', 
        name: 'Bronze Sigil', 
        days: 30, 
        color: '#cd7f32', 
        colorClass: 'coin-bronze',
        symbol: '🥉',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#cd7f32" stroke="#b8691a" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#e6944d" opacity="0.8"/>
            <circle cx="30" cy="20" r="6" fill="#fff5cc"/>
            <rect x="24" y="26" width="12" height="8" rx="2" fill="#fff5cc"/>
            <text x="30" y="34" text-anchor="middle" fill="#cd7f32" font-size="8" font-weight="bold">3</text>
        </svg>`,
        themeColors: { primary: '#cd7f32', secondary: '#b8691a' }
    },
    { 
        id: 'silver', 
        name: 'Silver Crest', 
        days: 90, 
        color: '#c0c0c0', 
        colorClass: 'coin-silver',
        symbol: '🥈',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#e0e0e0" opacity="0.8"/>
            <circle cx="30" cy="20" r="6" fill="#333333"/>
            <rect x="24" y="26" width="12" height="8" rx="2" fill="#333333"/>
            <text x="30" y="34" text-anchor="middle" fill="#c0c0c0" font-size="8" font-weight="bold">2</text>
        </svg>`,
        themeColors: { primary: '#c0c0c0', secondary: '#a0a0a0' }
    },
    { 
        id: 'gold', 
        name: 'Gold Seal', 
        days: 180, 
        color: '#ffd700', 
        colorClass: 'coin-gold',
        symbol: '🥇',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#ffd700" stroke="#e6c200" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#ffef80" opacity="0.8"/>
            <circle cx="30" cy="20" r="6" fill="#333333"/>
            <rect x="24" y="26" width="12" height="8" rx="2" fill="#333333"/>
            <text x="30" y="34" text-anchor="middle" fill="#ffd700" font-size="8" font-weight="bold">1</text>
        </svg>`,
        themeColors: { primary: '#ffd700', secondary: '#e6c200' }
    },
    { 
        id: 'platinum', 
        name: 'Platinum Mark', 
        days: 365, 
        color: '#e5e4e2', 
        colorClass: 'coin-platinum',
        symbol: '💎',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#e5e4e2" stroke="#d0cfcc" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#f5f4f2" opacity="0.8"/>
            <path d="M20 25h20l-6 15h-8l-6-15z" fill="#333333"/>
            <path d="M24 25h12l-3 8h-6l-3-8z" fill="#e5e4e2"/>
        </svg>`,
        themeColors: { primary: '#e5e4e2', secondary: '#d0cfcc' }
    },
    { 
        id: 'obsidian', 
        name: 'Obsidian Token', 
        days: 1095, 
        color: '#0b0b0b', 
        colorClass: 'coin-obsidian',
        symbol: '🖤',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#0b0b0b" stroke="#333333" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#1a1a1a" opacity="0.8"/>
            <circle cx="30" cy="30" r="15" fill="#333333"/>
            <circle cx="30" cy="30" r="8" fill="#666666"/>
            <circle cx="30" cy="30" r="3" fill="#ffffff"/>
        </svg>`,
        themeColors: { primary: '#333333', secondary: '#1a1a1a' }
    },
    { 
        id: 'titanium', 
        name: 'Titan Medallion', 
        days: 1825, 
        color: '#8a2be2', 
        colorClass: 'coin-titanium',
        symbol: '👑',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#8a2be2" stroke="#6a1fa2" stroke-width="2"/>
            <circle cx="30" cy="30" r="22" fill="#a555ea" opacity="0.8"/>
            <path d="M20 35l10-15 10 15-5-25h-10l-5 25z" fill="#ffd700"/>
            <circle cx="22" cy="18" r="2" fill="#ffd700"/>
            <circle cx="30" cy="15" r="2" fill="#ffd700"/>
            <circle cx="38" cy="18" r="2" fill="#ffd700"/>
        </svg>`,
        themeColors: { primary: '#8a2be2', secondary: '#6a1fa2' }
    },
    { 
        id: 'eclipse', 
        name: 'Eclipse Coin', 
        days: 3650, 
        color: 'linear-gradient(45deg, #000000, #ffd700, #000000)', 
        colorClass: 'coin-eclipse',
        symbol: '🌌',
        coinIcon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="eclipse-grad" cx="50%" cy="50%">
                    <stop offset="0%" stop-color="#ffd700"/>
                    <stop offset="50%" stop-color="#333333"/>
                    <stop offset="100%" stop-color="#000000"/>
                </radialGradient>
            </defs>
            <circle cx="30" cy="30" r="28" fill="url(#eclipse-grad)" stroke="#666666" stroke-width="2"/>
            <circle cx="20" cy="20" r="8" fill="#000000"/>
            <circle cx="35" cy="35" r="3" fill="#ffd700"/>
            <circle cx="40" cy="25" r="2" fill="#ffffff"/>
            <circle cx="15" cy="35" r="1" fill="#ffffff"/>
        </svg>`,
        themeColors: { primary: '#ffd700', secondary: '#333333' }
    }
];

function flipCard() {
    const card = document.getElementById('mainCard');
    card.classList.toggle('flipped');
}

function getAchievementStatus(currentDays) {
    const unlocked = achievements.filter(a => currentDays >= a.days);
    const locked = achievements.filter(a => currentDays < a.days);
    const nextAchievement = locked.length > 0 ? locked[0] : null;
    const lastUnlocked = unlocked.length > 0 ? unlocked[unlocked.length - 1] : null;
    
    return { unlocked, locked, nextAchievement, lastUnlocked };
}

function updateTheme(lastUnlockedAchievement) {
    if (!lastUnlockedAchievement) return;
    
    const root = document.documentElement;
    const { primary, secondary } = lastUnlockedAchievement.themeColors;
    
    root.style.setProperty('--theme-primary', primary);
    root.style.setProperty('--theme-secondary', secondary);
    
    // Update ambient lighting effect
    const primaryRgb = hexToRgb(primary);
    const secondaryRgb = hexToRgb(secondary);
    
    if (primaryRgb && secondaryRgb) {
        root.style.setProperty('--theme-accent', `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.15)`);
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function formatTimeRemaining(daysRemaining) {
    if (daysRemaining === 0) return 'Unlocked!';
    if (daysRemaining === 1) return '1 day left';
    if (daysRemaining < 7) return `${daysRemaining} days left`;
    if (daysRemaining < 30) {
        const weeks = Math.floor(daysRemaining / 7);
        const days = daysRemaining % 7;
        return weeks === 1 ? 
            (days > 0 ? `1 week, ${days} days left` : '1 week left') :
            (days > 0 ? `${weeks} weeks, ${days} days left` : `${weeks} weeks left`);
    }
    if (daysRemaining < 365) {
        const months = Math.floor(daysRemaining / 30);
        const days = daysRemaining % 30;
        return months === 1 ? 
            (days > 0 ? `1 month, ${days} days left` : '1 month left') :
            (days > 0 ? `${months} months, ${days} days left` : `${months} months left`);
    }
    const years = Math.floor(daysRemaining / 365);
    const months = Math.floor((daysRemaining % 365) / 30);
    return years === 1 ? 
        (months > 0 ? `1 year, ${months} months left` : '1 year left') :
        (months > 0 ? `${years} years, ${months} months left` : `${years} years left`);
}

function openAchievements(event) {
    event.stopPropagation(); // Prevent card flip
    const popup = document.getElementById('achievementsPopup');
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Refresh achievements display
    updateAchievementsDisplay();
}

function closeAchievements() {
    const popup = document.getElementById('achievementsPopup');
    popup.classList.remove('show');
    document.body.style.overflow = '';
}

function updateAchievementsDisplay() {
    const now = new Date();
    const timeDiff = now - startDate;
    const currentDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    const { unlocked, locked } = getAchievementStatus(currentDays);
    
    // Update overall progress
    const totalAchievements = achievements.length;
    const unlockedCount = unlocked.length;
    const progressPercentage = (unlockedCount / totalAchievements) * 100;
    
    document.getElementById('overallProgress').style.width = `${progressPercentage}%`;
    document.getElementById('overallProgressText').textContent = `${unlockedCount} / ${totalAchievements} achievements`;
    
    // Populate achievements grid
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const isUnlocked = currentDays >= achievement.days;
        const progress = Math.min((currentDays / achievement.days) * 100, 100);
        const daysRemaining = Math.max(achievement.days - currentDays, 0);
        
        const achievementItem = document.createElement('div');
        achievementItem.className = `achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        achievementItem.innerHTML = `
            <div class="achievement-coin ${isUnlocked ? achievement.colorClass : 'locked'}">
                ${isUnlocked ? achievement.coinIcon : `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" fill="#444444" stroke="#666666" stroke-width="2"/>
                    <circle cx="30" cy="30" r="22" fill="#555555" opacity="0.6"/>
                    <path d="M20 25h20v10c0 5-5 10-10 10s-10-5-10-10v-10z" fill="#666666"/>
                    <rect x="27" y="20" width="6" height="8" rx="3" fill="none" stroke="#888888" stroke-width="2"/>
                </svg>`}
            </div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-requirement">${achievement.days} day${achievement.days !== 1 ? 's' : ''} smoke-free</div>
                <div class="achievement-progress-bar">
                    <div class="achievement-progress-fill" style="width: ${progress}%; background: ${isUnlocked ? achievement.color : 'var(--secondary-glass)'};"></div>
                </div>
                <div class="achievement-progress-text">
                    ${isUnlocked ? 'Unlocked!' : `${Math.round(progress)}% complete`}
                </div>
            </div>
            <div class="achievement-status ${isUnlocked ? 'unlocked' : 'locked'}">
                ${isUnlocked ? 'Unlocked' : formatTimeRemaining(daysRemaining)}
            </div>
        `;
        
        grid.appendChild(achievementItem);
    });
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

    // Update main display
    document.getElementById('daysCount').textContent = days;
    document.getElementById('timeDetails').textContent = `${hours} hours, ${minutes} minutes`;
    document.getElementById('moneySaved').textContent = moneySaved.toLocaleString();
    document.getElementById('cigarettesAvoided').textContent = cigarettesAvoided.toLocaleString();

    // Update achievements
    const { nextAchievement, lastUnlocked } = getAchievementStatus(days);
    
    if (nextAchievement) {
        const daysRemaining = nextAchievement.days - days;
        document.getElementById('nextAchievementName').textContent = nextAchievement.name;
        document.getElementById('nextAchievementTime').textContent = formatTimeRemaining(daysRemaining);
    } else {
        document.getElementById('nextAchievementName').textContent = 'All Unlocked!';
        document.getElementById('nextAchievementTime').textContent = 'Master achieved';
    }
    
    // Update theme based on last unlocked achievement
    if (lastUnlocked) {
        updateTheme(lastUnlocked);
    }
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
    
    // Close achievements popup when clicking outside
    document.getElementById('achievementsPopup').addEventListener('click', (e) => {
        if (e.target.id === 'achievementsPopup') {
            closeAchievements();
        }
    });
    
    // Close achievements popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('achievementsPopup').classList.contains('show')) {
            closeAchievements();
        }
    });
}

// Start when page loads
document.addEventListener('DOMContentLoaded', init);