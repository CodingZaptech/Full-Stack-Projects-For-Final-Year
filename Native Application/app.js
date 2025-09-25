const express = require('express');
const bodyParser = require('body-parser');
const nativeRoutes = require('./nativeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/apps', nativeRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Native Application Backend!');
});

// Start server
const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
