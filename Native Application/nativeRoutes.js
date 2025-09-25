const express = require('express');
const router = express.Router();

// In-memory storage for native apps
let apps = [];

// Get all apps
router.get('/', (req, res) => {
    res.json(apps);
});

// Add a new app
router.post('/', (req, res) => {
    const { name, platform, description } = req.body;
    if (!name || !platform) {
        return res.status(400).json({ message: 'Name and platform are required' });
    }
    const newApp = { id: apps.length + 1, name, platform, description };
    apps.push(newApp);
    res.status(201).json(newApp);
});

// Delete an app
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    apps = apps.filter(app => app.id !== id);
    res.json({ message: `App ${id} deleted successfully` });
});

module.exports = router;
