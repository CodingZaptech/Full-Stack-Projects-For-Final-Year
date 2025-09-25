const express = require('express');
const router = express.Router();

// In-memory storage for blogs
let blogs = [];

// Get all blogs
router.get('/', (req, res) => {
    res.json(blogs);
});

// Add a new blog
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and Content are required' });
    }
    const newBlog = { id: blogs.length + 1, title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
});

// Delete a blog
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id);
    res.json({ message: `Blog ${id} deleted successfully` });
});

module.exports = router;
