const express = require('express');
const bodyParser = require('body-parser');
const socialRoutes = require('./socialRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/posts', socialRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Social Media Backend!');
});

// Start server
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
