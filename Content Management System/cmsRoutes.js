const express = require('express');
const router = express.Router();

// In-memory storage for pages
let pages = [];

// Get all pages
router.get('/', (req, res) => {
    res.json(pages);
});

// Add a new page
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const newPage = { id: pages.length + 1, title, content };
    pages.push(newPage);
    res.status(201).json(newPage);
});

// Delete a page
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pages = pages.filter(page => page.id !== id);
    res.json({ message: `Page ${id} deleted successfully` });
});

module.exports = router;
