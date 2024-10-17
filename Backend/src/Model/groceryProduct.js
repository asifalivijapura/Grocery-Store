const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Grains', 'Beverages', 'Snacks'], // Example categories
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Price should not be negative
    },
    discountprice: {
        type: Number,
        min: 0, // Price should not be negative
    },
    quantity: {
        type: Number,
        required: true,
        min: 0, // Quantity should not be negative
    },
    description: {
        type: String,
        trim: true, // Removes extra spaces
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date
    },
});

// Middleware to update the updatedAt field
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
