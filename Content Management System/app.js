const express = require('express');
const bodyParser = require('body-parser');
const cmsRoutes = require('./cmsRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/pages', cmsRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to CMS Backend!');
});

// Start server
const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
