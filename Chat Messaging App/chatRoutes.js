const express = require('express');
const router = express.Router();

// In-memory storage for messages
let messages = [];

// Get all messages
router.get('/', (req, res) => {
    res.json(messages);
});

// Send a new message
router.post('/', (req, res) => {
    const { sender, content } = req.body;
    if (!sender || !content) {
        return res.status(400).json({ message: 'Sender and content are required' });
    }
    const newMessage = { id: messages.length + 1, sender, content, timestamp: new Date() };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Delete a message
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    messages = messages.filter(message => message.id !== id);
    res.json({ message: `Message ${id} deleted successfully` });
});

module.exports = router;
