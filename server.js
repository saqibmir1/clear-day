const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize data file if it doesn't exist
async function initializeDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch (error) {
        const defaultData = {
            startDate: null,
            cigarettesPerDay: 20,
            pricePerPack: 150,
            cigarettesPerPack: 20,
            isActive: false
        };
        await fs.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2));
        console.log('Initialized data.json with default values');
    }
}

// Helper function to read data
async function readData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        throw error;
    }
}

// Helper function to write data
async function writeData(data) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
        throw error;
    }
}

function calculateMetrics(data) {
    if (!data.startDate || !data.isActive) {
        return {
            daysStreak: 0,
            hoursStreak: 0,
            minutesStreak: 0,
            moneySaved: 0,
            cigarettesAvoided: 0,
            achievements: []
        };
    }

    const startTime = new Date(data.startDate);
    const now = new Date();
    const timeDiff = now - startTime;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    const cigarettesAvoided = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) * data.cigarettesPerDay);
    const packsAvoided = cigarettesAvoided / data.cigarettesPerPack;
    const moneySaved = packsAvoided * data.pricePerPack;

    // Achievement system
    const achievements = [];
    const milestones = [
        { days: 1, title: "First Day Free", icon: "🌅" },
        { days: 3, title: "Three Days Strong", icon: "💪" },
        { days: 7, title: "One Week Wonder", icon: "⭐" },
        { days: 14, title: "Two Week Champion", icon: "🏆" },
        { days: 30, title: "Monthly Master", icon: "👑" },
        { days: 90, title: "Quarterly Queen/King", icon: "💎" },
        { days: 180, title: "Half-Year Hero", icon: "🦸" },
        { days: 365, title: "Annual Achiever", icon: "🎉" }
    ];

    milestones.forEach(milestone => {
        if (days >= milestone.days) {
            achievements.push(milestone);
        }
    });

    return {
        daysStreak: days,
        hoursStreak: hours,
        minutesStreak: minutes,
        moneySaved: Math.round(moneySaved * 100) / 100,
        cigarettesAvoided,
        achievements
    };
}// Routes

// GET /data - Returns user streak data
app.get('/api/data', async (req, res) => {
    try {
        const data = await readData();
        const metrics = calculateMetrics(data);

        res.json({
            ...data,
            metrics
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// POST /start - Starts or resets streak
app.post('/api/start', async (req, res) => {
    try {
        const data = await readData();

        data.startDate = new Date().toISOString();
        data.isActive = true;

        // Update settings if provided
        if (req.body.cigarettesPerDay) data.cigarettesPerDay = req.body.cigarettesPerDay;
        if (req.body.pricePerPack) data.pricePerPack = req.body.pricePerPack;
        if (req.body.cigarettesPerPack) data.cigarettesPerPack = req.body.cigarettesPerPack;

        await writeData(data);

        const metrics = calculateMetrics(data);

        res.json({
            message: 'Streak started successfully!',
            data: {
                ...data,
                metrics
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to start streak' });
    }
});

// POST /update - Updates settings
app.post('/api/update', async (req, res) => {
    try {
        const data = await readData();

        if (req.body.cigarettesPerDay) data.cigarettesPerDay = req.body.cigarettesPerDay;
        if (req.body.pricePerPack) data.pricePerPack = req.body.pricePerPack;
        if (req.body.cigarettesPerPack) data.cigarettesPerPack = req.body.cigarettesPerPack;

        await writeData(data);

        const metrics = calculateMetrics(data);

        res.json({
            message: 'Settings updated successfully!',
            data: {
                ...data,
                metrics
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update settings' });
    }
});

// POST /reset - Resets/stops the streak
app.post('/api/reset', async (req, res) => {
    try {
        const data = await readData();

        data.startDate = null;
        data.isActive = false;

        await writeData(data);

        const metrics = calculateMetrics(data);

        res.json({
            message: 'Streak reset successfully.',
            data: {
                ...data,
                metrics
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reset streak' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
async function startServer() {
    await initializeDataFile();
    app.listen(PORT, () => {
        console.log(`Clear Day server running on http://localhost:${PORT}`);
    });
}

startServer().catch(console.error);
