const express = require('express');
const path = require('path');
const cors = require('cors');
const countHandler = require('./api/count.js');
const visitorsHandler = require('./api/visitors.js');
const reviewsHandler = require('./api/reviews.js');
const subscribeHandler = require('./api/subscribe.js');
const sendNotificationHandler = require('./api/send-notification.js');
const vapidPublicKeyHandler = require('./api/vapid-public-key.js');

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
