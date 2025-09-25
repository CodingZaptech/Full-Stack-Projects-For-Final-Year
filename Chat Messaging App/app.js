const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./chatRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/messages', chatRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Chat Messaging Backend!');
});

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
