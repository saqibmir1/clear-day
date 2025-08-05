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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ember-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff6666"/>
                    <stop offset="50%" stop-color="#ff4444"/>
                    <stop offset="100%" stop-color="#cc2222"/>
                </linearGradient>
                <filter id="ember-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#ember-grad)" stroke="#cc2222" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#ff6666" opacity="0.6"/>
            <circle cx="60" cy="60" r="32" fill="#ff8888" opacity="0.4"/>
            <path d="M50 70c0-10 6-16 10-24 4 8 10 14 10 24-4 6-16 6-20 0z" fill="#ffcccc" filter="url(#ember-glow)"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#ffcccc" font-size="6">DAY 1</text>
            <circle cx="60" cy="25" r="3" fill="#ffcccc" opacity="0.8"/>
            <circle cx="75" cy="35" r="2" fill="#ffcccc" opacity="0.6"/>
            <circle cx="45" cy="35" r="2" fill="#ffcccc" opacity="0.6"/>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="flint-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffaa33"/>
                    <stop offset="50%" stop-color="#ff8800"/>
                    <stop offset="100%" stop-color="#dd6600"/>
                </linearGradient>
                <filter id="flint-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#flint-grad)" stroke="#dd6600" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#ffaa33" opacity="0.6"/>
            <circle cx="60" cy="60" r="32" fill="#ffcc66" opacity="0.4"/>
            <path d="M64 36l-16 28h12l-4 20 16-28h-12l4-20z" fill="#fff5cc" filter="url(#flint-glow)"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#fff5cc" font-size="6">DAY 3</text>
            <circle cx="40" cy="30" r="2" fill="#fff5cc" opacity="0.8"/>
            <circle cx="80" cy="30" r="1.5" fill="#fff5cc" opacity="0.6"/>
            <circle cx="35" cy="50" r="1" fill="#fff5cc" opacity="0.7"/>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="iron-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#aaaaaa"/>
                    <stop offset="50%" stop-color="#888888"/>
                    <stop offset="100%" stop-color="#555555"/>
                </linearGradient>
                <filter id="iron-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#iron-grad)" stroke="#555555" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#aaaaaa" opacity="0.6"/>
            <circle cx="60" cy="60" r="16" fill="#cccccc"/>
            <circle cx="60" cy="60" r="8" fill="#888888"/>
            <rect x="52" y="30" width="16" height="8" rx="2" fill="#cccccc"/>
            <rect x="52" y="82" width="16" height="8" rx="2" fill="#cccccc"/>
            <rect x="30" y="52" width="8" height="16" rx="2" fill="#cccccc"/>
            <rect x="82" y="52" width="8" height="16" rx="2" fill="#cccccc"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#cccccc" font-size="6">WEEK 1</text>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bronze-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#e6944d"/>
                    <stop offset="50%" stop-color="#cd7f32"/>
                    <stop offset="100%" stop-color="#b8691a"/>
                </linearGradient>
                <filter id="bronze-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#bronze-grad)" stroke="#b8691a" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#e6944d" opacity="0.6"/>
            <circle cx="60" cy="40" r="12" fill="#fff5cc"/>
            <rect x="48" y="52" width="24" height="16" rx="4" fill="#fff5cc"/>
            <text x="60" y="68" text-anchor="middle" fill="#cd7f32" font-size="16" font-weight="bold">3</text>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#fff5cc" font-size="6">1 MONTH</text>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#e0e0e0"/>
                    <stop offset="50%" stop-color="#c0c0c0"/>
                    <stop offset="100%" stop-color="#a0a0a0"/>
                </linearGradient>
                <filter id="silver-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#silver-grad)" stroke="#a0a0a0" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#e0e0e0" opacity="0.6"/>
            <circle cx="60" cy="40" r="12" fill="#333333"/>
            <rect x="48" y="52" width="24" height="16" rx="4" fill="#333333"/>
            <text x="60" y="68" text-anchor="middle" fill="#c0c0c0" font-size="16" font-weight="bold">2</text>
            <text x="60" y="100" text-anchor="middle" fill="#333" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#333333" font-size="6">3 MONTHS</text>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffef80"/>
                    <stop offset="50%" stop-color="#ffd700"/>
                    <stop offset="100%" stop-color="#e6c200"/>
                </linearGradient>
                <filter id="gold-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#gold-grad)" stroke="#e6c200" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#ffef80" opacity="0.6"/>
            <circle cx="60" cy="40" r="12" fill="#333333"/>
            <rect x="48" y="52" width="24" height="16" rx="4" fill="#333333"/>
            <text x="60" y="68" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">1</text>
            <text x="60" y="100" text-anchor="middle" fill="#333" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#333333" font-size="6">6 MONTHS</text>
            <circle cx="45" cy="25" r="2" fill="#ffef80" opacity="0.8"/>
            <circle cx="75" cy="25" r="2" fill="#ffef80" opacity="0.8"/>
            <circle cx="60" cy="20" r="1.5" fill="#ffef80" opacity="0.9"/>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="platinum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f5f4f2"/>
                    <stop offset="50%" stop-color="#e5e4e2"/>
                    <stop offset="100%" stop-color="#d0cfcc"/>
                </linearGradient>
                <filter id="platinum-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#platinum-grad)" stroke="#d0cfcc" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#f5f4f2" opacity="0.6"/>
            <path d="M40 50h40l-12 30h-16l-12-30z" fill="#333333"/>
            <path d="M48 50h24l-6 16h-12l-6-16z" fill="#e5e4e2"/>
            <text x="60" y="100" text-anchor="middle" fill="#333" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#333333" font-size="6">1 YEAR</text>
            <circle cx="45" cy="30" r="2" fill="#f5f4f2" opacity="0.8"/>
            <circle cx="75" cy="30" r="2" fill="#f5f4f2" opacity="0.8"/>
            <circle cx="60" cy="25" r="1.5" fill="#f5f4f2" opacity="0.9"/>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="obsidian-grad" cx="50%" cy="30%">
                    <stop offset="0%" stop-color="#333333"/>
                    <stop offset="50%" stop-color="#1a1a1a"/>
                    <stop offset="100%" stop-color="#0b0b0b"/>
                </radialGradient>
                <filter id="obsidian-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#obsidian-grad)" stroke="#333333" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#1a1a1a" opacity="0.8"/>
            <circle cx="60" cy="60" r="30" fill="#333333"/>
            <circle cx="60" cy="60" r="16" fill="#666666"/>
            <circle cx="60" cy="60" r="6" fill="#ffffff"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#666666" font-size="6">3 YEARS</text>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="titanium-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#a555ea"/>
                    <stop offset="50%" stop-color="#8a2be2"/>
                    <stop offset="100%" stop-color="#6a1fa2"/>
                </linearGradient>
                <filter id="titanium-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#titanium-grad)" stroke="#6a1fa2" stroke-width="3"/>
            <circle cx="60" cy="60" r="44" fill="#a555ea" opacity="0.6"/>
            <path d="M40 70l20-30 20 30-10-50h-20l-10 50z" fill="#ffd700" filter="url(#titanium-glow)"/>
            <circle cx="44" cy="36" r="4" fill="#ffd700"/>
            <circle cx="60" cy="30" r="4" fill="#ffd700"/>
            <circle cx="76" cy="36" r="4" fill="#ffd700"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#ffd700" font-size="6">5 YEARS</text>
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
        coinIcon: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="eclipse-grad" cx="50%" cy="50%">
                    <stop offset="0%" stop-color="#ffd700"/>
                    <stop offset="30%" stop-color="#ffaa00"/>
                    <stop offset="60%" stop-color="#333333"/>
                    <stop offset="100%" stop-color="#000000"/>
                </radialGradient>
                <filter id="eclipse-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#eclipse-grad)" stroke="#666666" stroke-width="3"/>
            <circle cx="40" cy="40" r="16" fill="#000000"/>
            <circle cx="70" cy="70" r="6" fill="#ffd700" filter="url(#eclipse-glow)"/>
            <circle cx="80" cy="50" r="4" fill="#ffffff" opacity="0.8"/>
            <circle cx="30" cy="70" r="2" fill="#ffffff" opacity="0.6"/>
            <circle cx="90" cy="35" r="3" fill="#ffd700" opacity="0.7"/>
            <circle cx="25" cy="30" r="1.5" fill="#ffffff" opacity="0.5"/>
            <text x="60" y="100" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">SAQIB MIR</text>
            <text x="60" y="110" text-anchor="middle" fill="#ffd700" font-size="6">10 YEARS</text>
        </svg>`,
        themeColors: { primary: '#ffd700', secondary: '#333333' }
    }
];

function downloadCoin(achievement, currentDays) {
    if (currentDays < achievement.days) {
        // Show a message that the coin is not yet unlocked
        alert(`🔒 This coin will be unlocked after ${achievement.days} days smoke-free. Keep going!`);
        return;
    }

    // Create a temporary canvas to render the SVG
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 400; // High resolution for download
    canvas.width = size;
    canvas.height = size;

    // Create an image from the SVG
    const img = new Image();
    const svgBlob = new Blob([achievement.coinIcon], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(svgBlob);

    img.onload = function() {
        // Clear canvas with transparent background
        ctx.clearRect(0, 0, size, size);
        
        // Draw the SVG image
        ctx.drawImage(img, 0, 0, size, size);
        
        // Convert to PNG and download
        canvas.toBlob(function(blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${achievement.name.replace(/\s+/g, '_')}_SaqibMir_Day${achievement.days}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up URLs
            URL.revokeObjectURL(downloadUrl);
            URL.revokeObjectURL(url);
        }, 'image/png');
    };

    img.src = url;
}

function showCoinDetails(achievement, currentDays, isUnlocked) {
    const modal = document.createElement('div');
    modal.className = 'coin-modal';
    modal.innerHTML = `
        <div class="coin-modal-content">
            <div class="coin-modal-header">
                <h3>${achievement.name}</h3>
                <button class="coin-modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="coin-modal-body">
                <div class="coin-display-large ${isUnlocked ? '' : 'locked'}">
                    ${isUnlocked ? achievement.coinIcon : `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="56" fill="#444444" stroke="#666666" stroke-width="3"/>
                        <circle cx="60" cy="60" r="44" fill="#555555" opacity="0.6"/>
                        <path d="M40 50h40v20c0 10-10 20-20 20s-20-10-20-20v-20z" fill="#666666"/>
                        <rect x="54" y="40" width="12" height="16" rx="6" fill="none" stroke="#888888" stroke-width="3"/>
                        <text x="60" y="100" text-anchor="middle" fill="#999" font-size="8" font-weight="bold">LOCKED</text>
                    </svg>`}
                </div>
                <div class="coin-info">
                    <p><strong>Achievement:</strong> ${achievement.days} day${achievement.days !== 1 ? 's' : ''} smoke-free</p>
                    <p><strong>Status:</strong> ${isUnlocked ? '✅ Unlocked!' : `🔒 ${achievement.days - currentDays} days remaining`}</p>
                    ${isUnlocked ? '<p><strong>Congratulations!</strong> You\'ve earned this milestone coin.</p>' : '<p>Keep going strong! This coin will be yours soon.</p>'}
                </div>
                ${isUnlocked ? `
                    <div class="coin-actions">
                        <button class="download-btn" onclick="downloadCoin(achievements.find(a => a.id === '${achievement.id}'), ${currentDays})">
                            📥 Download Coin
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

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
            <div class="achievement-coin ${isUnlocked ? achievement.colorClass : 'locked'}" 
                 onclick="showCoinDetails(achievements.find(a => a.id === '${achievement.id}'), ${currentDays}, ${isUnlocked})"
                 style="cursor: pointer;">
                ${isUnlocked ? achievement.coinIcon : `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="56" fill="#444444" stroke="#666666" stroke-width="3"/>
                    <circle cx="60" cy="60" r="44" fill="#555555" opacity="0.6"/>
                    <path d="M40 50h40v20c0 10-10 20-20 20s-20-10-20-20v-20z" fill="#666666"/>
                    <rect x="54" y="40" width="12" height="16" rx="6" fill="none" stroke="#888888" stroke-width="3"/>
                    <text x="60" y="100" text-anchor="middle" fill="#999" font-size="8" font-weight="bold">LOCKED</text>
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

// Enhanced particle system - Liquid glass theme
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Create elegant glass-like shapes instead of emojis
    const shapes = [
        'circle', 'diamond', 'hexagon', 'triangle', 'oval'
    ];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    particle.classList.add(`particle-${shape}`);
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.fontSize = (Math.random() * 16 + 12) + 'px';
    particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
    particle.style.animationDelay = Math.random() * 3 + 's';

    document.body.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 14000);
}

// Initialize everything
function init() {
    updateDisplay();

    // Initialize Feather icons
    feather.replace();

    // Update time every minute
    setInterval(updateDisplay, 60000);

    // Create particles periodically (less frequent for elegance)
    setInterval(createParticle, 6000);

    // Initial subtle burst of particles
    for (let i = 0; i < 2; i++) {
        setTimeout(createParticle, i * 1200);
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