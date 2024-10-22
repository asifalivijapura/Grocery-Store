const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // Reference to the User model
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true,
                min: 1, // Quantity should be at least 1
            },
        },
    ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
