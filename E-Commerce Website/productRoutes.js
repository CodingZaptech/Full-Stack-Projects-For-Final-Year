const express = require('express');
const router = express.Router();

// In-memory storage for products
let products = [];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Add a new product
router.post('/', (req, res) => {
    const { name, price, description } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const newProduct = { id: products.length + 1, name, price, description };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Delete a product
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(product => product.id !== id);
    res.json({ message: `Product ${id} deleted successfully` });
});

module.exports = router;
