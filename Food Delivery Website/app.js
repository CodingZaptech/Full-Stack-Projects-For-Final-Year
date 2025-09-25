const express = require('express');
const bodyParser = require('body-parser');
const foodRoutes = require('./foodRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/restaurants', foodRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Food Delivery Backend!');
});

// Start server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
