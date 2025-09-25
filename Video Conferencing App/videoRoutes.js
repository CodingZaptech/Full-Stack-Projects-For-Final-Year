const express = require('express');
const router = express.Router();

// In-memory storage for meetings
let meetings = [];

// Get all meetings
router.get('/', (req, res) => {
    res.json(meetings);
});

// Schedule a new meeting
router.post('/', (req, res) => {
    const { title, participants, time } = req.body;
    if (!title || !participants || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newMeeting = { id: meetings.length + 1, title, participants, time };
    meetings.push(newMeeting);
    res.status(201).json(newMeeting);
});

// Delete a meeting
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    meetings = meetings.filter(meeting => meeting.id !== id);
    res.json({ message: `Meeting ${id} deleted successfully` });
});

module.exports = router;
