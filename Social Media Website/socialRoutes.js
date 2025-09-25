const express = require('express');
const router = express.Router();

// In-memory storage for posts
let posts = [];

// Get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// Add a new post
router.post('/', (req, res) => {
    const { user, content } = req.body;
    if (!user || !content) {
        return res.status(400).json({ message: 'User and content are required' });
    }
    const newPost = { id: posts.length + 1, user, content, timestamp: new Date() };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);
    res.json({ message: `Post ${id} deleted successfully` });
});

module.exports = router;
