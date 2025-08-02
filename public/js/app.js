// Clear Day - Frontend JavaScript
class ClearDayApp {
    constructor() {
        this.data = null;
        this.updateInterval = null;
        this.init();
    }

    async init() {
        this.bindEvents();
        await this.loadData();
        this.startRealTimeUpdates();
    }

    bindEvents() {
        // Start journey button
        document.getElementById('startJourney').addEventListener('click', () => this.startJourney());

        // Settings modal
        document.getElementById('settingsBtn').addEventListener('click', () => this.openSettingsModal());
        document.getElementById('closeModal').addEventListener('click', () => this.closeSettingsModal());
        document.getElementById('saveSettings').addEventListener('click', () => this.saveSettings());
        document.getElementById('cancelSettings').addEventListener('click', () => this.closeSettingsModal());

        // Reset modal
        document.getElementById('resetBtn').addEventListener('click', () => this.openResetModal());
        document.getElementById('closeResetModal').addEventListener('click', () => this.closeResetModal());
        document.getElementById('confirmReset').addEventListener('click', () => this.resetStreak());
        document.getElementById('cancelReset').addEventListener('click', () => this.closeResetModal());

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });

        // Handle form submissions with Enter key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (document.getElementById('settingsModal').style.display === 'block') {
                    this.saveSettings();
                } else if (document.getElementById('welcomeScreen').style.display !== 'none') {
                    this.startJourney();
                }
            } else if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    async loadData() {
        try {
            document.getElementById('loading').style.display = 'block';
            document.getElementById('mainContent').style.display = 'none';

            const response = await fetch('/api/data');
            const result = await response.json();

            this.data = result;
            this.updateUI();

        } catch (error) {
            console.error('Error loading data:', error);
            this.showError('Failed to load data. Please try again.');
        } finally {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        }
    }

    updateUI() {
        if (!this.data) return;

        const isActive = this.data.isActive && this.data.startDate;

        if (isActive) {
            this.showDashboard();
            this.updateDashboardData();
        } else {
            this.showWelcomeScreen();
        }
    }

    showWelcomeScreen() {
        document.getElementById('welcomeScreen').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';

        // Pre-fill form with current settings
        document.getElementById('cigarettesPerDay').value = this.data.cigarettesPerDay || 20;
        document.getElementById('pricePerPack').value = this.data.pricePerPack || 10;
        document.getElementById('cigarettesPerPack').value = this.data.cigarettesPerPack || 20;
    }

    showDashboard() {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('dashboard').classList.add('fade-in');
    }

    updateDashboardData() {
        if (!this.data?.metrics) return;

        const metrics = this.data.metrics;

        // Update streak display
        document.getElementById('daysCount').textContent = metrics.daysStreak;
        document.getElementById('timeDetails').textContent =
            `${metrics.hoursStreak} hours, ${metrics.minutesStreak} minutes`;

        // Update stats
        document.getElementById('moneySaved').textContent = metrics.moneySaved.toFixed(2);
        document.getElementById('cigarettesAvoided').textContent = metrics.cigarettesAvoided;

        // Update health progress with animations
        this.updateHealthProgress('heartRate', metrics.healthProgress.heartRate);
        this.updateHealthProgress('lungFunction', metrics.healthProgress.lungFunction);
        this.updateHealthProgress('circulation', metrics.healthProgress.circulation);
        this.updateHealthProgress('energyLevel', metrics.healthProgress.energyLevel);

        // Update achievements
        this.updateAchievements(metrics.achievements);
    }

    updateHealthProgress(type, value) {
        const percentage = Math.round(value);
        document.getElementById(type).textContent = percentage;

        const progressBar = document.querySelector(`.progress-fill.${type.replace('Rate', '').replace('Function', '').replace('Level', '').toLowerCase()}`);
        if (progressBar) {
            // Animate progress bar
            setTimeout(() => {
                progressBar.style.width = `${percentage}%`;
            }, 100);
        }
    }

    updateAchievements(achievements) {
        const container = document.getElementById('achievementsList');

        if (!achievements || achievements.length === 0) {
            container.innerHTML = '<div class="no-achievements"><p>Complete your first day to unlock achievements! 🎯</p></div>';
            return;
        }

        container.innerHTML = achievements.map(achievement =>
            `<div class="achievement">
                <span>${achievement.icon}</span>
                <span>${achievement.title}</span>
            </div>`
        ).join('');
    }

    async startJourney() {
        try {
            const cigarettesPerDay = parseInt(document.getElementById('cigarettesPerDay').value);
            const pricePerPack = parseFloat(document.getElementById('pricePerPack').value);
            const cigarettesPerPack = parseInt(document.getElementById('cigarettesPerPack').value);

            if (!this.validateSettings(cigarettesPerDay, pricePerPack, cigarettesPerPack)) {
                return;
            }

            const response = await fetch('/api/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cigarettesPerDay,
                    pricePerPack,
                    cigarettesPerPack
                })
            });

            const result = await response.json();

            if (response.ok) {
                this.data = result.data;
                this.showSuccessMessage('Journey started! You\'ve got this! 🚀');
                this.updateUI();
            } else {
                this.showError(result.error || 'Failed to start journey');
            }
        } catch (error) {
            console.error('Error starting journey:', error);
            this.showError('Failed to start journey. Please try again.');
        }
    }

    openSettingsModal() {
        if (!this.data) return;

        // Pre-fill current settings
        document.getElementById('settingsCigarettesPerDay').value = this.data.cigarettesPerDay;
        document.getElementById('settingsPricePerPack').value = this.data.pricePerPack;
        document.getElementById('settingsCigarettesPerPack').value = this.data.cigarettesPerPack;

        document.getElementById('settingsModal').style.display = 'block';
    }

    closeSettingsModal() {
        document.getElementById('settingsModal').style.display = 'none';
    }

    async saveSettings() {
        try {
            const cigarettesPerDay = parseInt(document.getElementById('settingsCigarettesPerDay').value);
            const pricePerPack = parseFloat(document.getElementById('settingsPricePerPack').value);
            const cigarettesPerPack = parseInt(document.getElementById('settingsCigarettesPerPack').value);

            if (!this.validateSettings(cigarettesPerDay, pricePerPack, cigarettesPerPack)) {
                return;
            }

            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cigarettesPerDay,
                    pricePerPack,
                    cigarettesPerPack
                })
            });

            const result = await response.json();

            if (response.ok) {
                this.data = result.data;
                this.closeSettingsModal();
                this.showSuccessMessage('Settings updated successfully! 📋');
                this.updateDashboardData();
            } else {
                this.showError(result.error || 'Failed to update settings');
            }
        } catch (error) {
            console.error('Error saving settings:', error);
            this.showError('Failed to save settings. Please try again.');
        }
    }

    openResetModal() {
        document.getElementById('resetModal').style.display = 'block';
    }

    closeResetModal() {
        document.getElementById('resetModal').style.display = 'none';
    }

    async resetStreak() {
        try {
            const response = await fetch('/api/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                this.data = result.data;
                this.closeResetModal();
                this.showSuccessMessage('Streak reset. Remember, every setback is a setup for a comeback! 💪');
                this.updateUI();
            } else {
                this.showError(result.error || 'Failed to reset streak');
            }
        } catch (error) {
            console.error('Error resetting streak:', error);
            this.showError('Failed to reset streak. Please try again.');
        }
    }

    closeAllModals() {
        this.closeSettingsModal();
        this.closeResetModal();
    }

    validateSettings(cigarettesPerDay, pricePerPack, cigarettesPerPack) {
        if (!cigarettesPerDay || cigarettesPerDay < 1 || cigarettesPerDay > 100) {
            this.showError('Please enter a valid number of cigarettes per day (1-100)');
            return false;
        }

        if (!pricePerPack || pricePerPack < 0.01 || pricePerPack > 100) {
            this.showError('Please enter a valid price per pack ($0.01-$100)');
            return false;
        }

        if (!cigarettesPerPack || cigarettesPerPack < 10 || cigarettesPerPack > 30) {
            this.showError('Please enter a valid number of cigarettes per pack (10-30)');
            return false;
        }

        return true;
    }

    showSuccessMessage(message) {
        this.showToast(message, 'success');
    }

    showError(message) {
        this.showToast(message, 'error');
    }

    showToast(message, type = 'info') {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'error' ? '#ff6b6b' : '#4facfe'};
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-weight: 500;
            animation: toastSlideIn 0.3s ease;
            max-width: 90%;
            text-align: center;
        `;

        toast.textContent = message;
        document.body.appendChild(toast);

        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes toastSlideIn {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'toastSlideIn 0.3s ease reverse';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
                style.remove();
            }, 300);
        }, 4000);
    }

    startRealTimeUpdates() {
        // Update every minute to keep the timer current
        this.updateInterval = setInterval(() => {
            if (this.data?.isActive && this.data?.startDate) {
                this.calculateRealTimeMetrics();
            }
        }, 60000); // Update every minute
    }

    calculateRealTimeMetrics() {
        if (!this.data?.startDate || !this.data?.isActive) return;

        const startTime = new Date(this.data.startDate);
        const now = new Date();
        const timeDiff = now - startTime;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        // Update display
        document.getElementById('daysCount').textContent = days;
        document.getElementById('timeDetails').textContent = `${hours} hours, ${minutes} minutes`;

        // Recalculate other metrics
        const cigarettesAvoided = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) * this.data.cigarettesPerDay);
        const packsAvoided = cigarettesAvoided / this.data.cigarettesPerPack;
        const moneySaved = packsAvoided * this.data.pricePerPack;

        document.getElementById('moneySaved').textContent = (Math.round(moneySaved * 100) / 100).toFixed(2);
        document.getElementById('cigarettesAvoided').textContent = cigarettesAvoided;
    }

    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
    }
}

// Motivational quotes array
const motivationalQuotes = [
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    }
];

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Set random motivational quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');

    if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = `"${randomQuote.text}"`;
        quoteAuthorElement.textContent = `- ${randomQuote.author}`;
    }

    // Initialize the app
    const app = new ClearDayApp();

    // Store app instance globally for debugging
    window.clearDayApp = app;

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        app.destroy();
    });
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
