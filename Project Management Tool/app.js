const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./projectRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/projects', projectRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Project Management Backend!');
});

// Start server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
