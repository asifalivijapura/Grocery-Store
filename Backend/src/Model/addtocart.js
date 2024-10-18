const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
},
    products: {
        type: [String],
    },
   
    quantity: {
        type: Number,
        required: true,
        min: 0, // Quantity should not be negative
    },

});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
