const express = require('express');
const bodyParser = require('body-parser');
const travelRoutes = require('./travelRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/trips', travelRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Travel Log Backend!');
});

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
