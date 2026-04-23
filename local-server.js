const express = require('express');
const path = require('path');
const cors = require('cors');
const countHandler = require('./api/count.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoint for visitor count using the stats collection
app.get('/api/count', countHandler);

// Serve the main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 GMRIT Marks Calculator Server running on port ${PORT}`);
    console.log(`📊 Visitor tracking enabled with MongoDB Atlas`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
    console.log(`🗄️ Database: marks_calculator (stats collection)`);
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
