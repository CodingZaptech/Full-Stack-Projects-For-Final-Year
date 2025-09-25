const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./blogRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/blogs', blogRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Simple Blog Backend!');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
