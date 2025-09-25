const express = require('express');
const router = express.Router();

// In-memory storage for trips
let trips = [];

// Get all trips
router.get('/', (req, res) => {
    res.json(trips);
});

// Add a new trip
router.post('/', (req, res) => {
    const { location, description, date } = req.body;
    if (!location || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newTrip = { id: trips.length + 1, location, description, date };
    trips.push(newTrip);
    res.status(201).json(newTrip);
});

// Delete a trip
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    trips = trips.filter(trip => trip.id !== id);
    res.json({ message: `Trip ${id} deleted successfully` });
});

module.exports = router;
