const express = require('express');
const router = express.Router();

// In-memory storage for restaurants
let restaurants = [];

// Get all restaurants
router.get('/', (req, res) => {
    res.json(restaurants);
});

// Add a new restaurant with geolocation
router.post('/', (req, res) => {
    const { name, cuisine, latitude, longitude } = req.body;
    if (!name || !cuisine || !latitude || !longitude) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newRestaurant = { id: restaurants.length + 1, name, cuisine, location: { latitude, longitude } };
    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
});

// Delete a restaurant
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    restaurants = restaurants.filter(r => r.id !== id);
    res.json({ message: `Restaurant ${id} deleted successfully` });
});

module.exports = router;
