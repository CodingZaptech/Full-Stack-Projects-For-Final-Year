const express = require('express');
const router = express.Router();

// In-memory storage for jobs
let jobs = [];

// Get all jobs
router.get('/', (req, res) => {
    res.json(jobs);
});

// Add a new job
router.post('/', (req, res) => {
    const { title, company, location } = req.body;
    if (!title || !company || !location) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newJob = { id: jobs.length + 1, title, company, location };
    jobs.push(newJob);
    res.status(201).json(newJob);
});

// Delete a job
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    jobs = jobs.filter(job => job.id !== id);
    res.json({ message: `Job ${id} deleted successfully` });
});

module.exports = router;
