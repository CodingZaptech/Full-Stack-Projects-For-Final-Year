// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./todoRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to To-Do List Backend!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
