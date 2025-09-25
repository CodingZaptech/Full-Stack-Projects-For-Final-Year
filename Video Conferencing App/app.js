const express = require('express');
const bodyParser = require('body-parser');
const videoRoutes = require('./videoRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/meetings', videoRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Video Conferencing Backend!');
});

// Start server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
