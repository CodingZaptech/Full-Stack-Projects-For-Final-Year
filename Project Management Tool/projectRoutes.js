const express = require('express');
const router = express.Router();

// In-memory storage for projects
let projects = [];

// Get all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// Add a new project
router.post('/', (req, res) => {
    const { name, description, deadline } = req.body;
    if (!name || !description || !deadline) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newProject = { id: projects.length + 1, name, description, deadline };
    projects.push(newProject);
    res.status(201).json(newProject);
});

// Delete a project
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    projects = projects.filter(project => project.id !== id);
    res.json({ message: `Project ${id} deleted successfully` });
});

module.exports = router;
