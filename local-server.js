const fs = require('fs');
const path = require('path');

// Auto-load .env for local development without external dependencies
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const eqIdx = trimmed.indexOf('=');
            if (eqIdx !== -1) {
                const key = trimmed.slice(0, eqIdx).trim();
                const value = trimmed.slice(eqIdx + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = value;
                }
            }
        }
    });
}

const express = require('express');
const cors = require('cors');
const countHandler = require('./api/count.js');
const visitorsHandler = require('./api/visitors.js');
const reviewsHandler = require('./api/reviews.js');
const subscribeHandler = require('./api/subscribe.js');
const sendNotificationHandler = require('./api/send-notification.js');
const vapidPublicKeyHandler = require('./api/vapid-public-key.js');
const installsHandler = require('./api/installs.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoints
app.all('/api/count', countHandler);
app.all('/api/visitors', visitorsHandler);
app.all('/api/reviews', reviewsHandler);
app.all('/api/installs', installsHandler);
app.all('/api/subscribe', subscribeHandler);
app.all('/api/send-notification', sendNotificationHandler);
app.all('/api/vapid-public-key', vapidPublicKeyHandler);

// Serve the main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 GMRIT Marks Calculator Server running on port ${PORT}`);
    console.log(`📊 Visitor tracking & Web-Push Notifications enabled with MongoDB Atlas`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
    console.log(`🗄️ Database: marks_calculator (stats, reviews, subscriptions)`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n👋 Shutting down server gracefully...');
    process.exit(0);
});
