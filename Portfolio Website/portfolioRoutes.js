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
    const { name, description, link } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Project name and description are required' });
    }
    const newProject = { id: projects.length + 1, name, description, link };
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
