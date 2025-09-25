const express = require('express');
const router = express.Router();

// In-memory storage for todos
let todos = [];

// Get all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new todo
router.post('/', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ message: 'Task is required' });
    }
    const newTodo = { id: todos.length + 1, task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: `Todo ${id} deleted successfully` });
});

module.exports = router;
