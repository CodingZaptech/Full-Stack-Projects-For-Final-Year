const express = require('express');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./portfolioRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/projects', portfolioRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend!');
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
