const express = require("express");
const mongoose = require("mongoose");
const Product = require("./src/Model/groceryProduct");
const User = require("./src/Model/userModel");
const Cart = require("./src/Model/addtocart");

const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

const dbConnect = require("./db");
const port = 8080;
dbConnect();

app.use(cors());
app.use(express.json());
// grocery
app.get("/api-grocery", async (req, res) => {
    const products = await Product.find();
    res.json({ products: products });
});
app.get("/api-grocery/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json({ products: product });
});
app.post("/api-grocery", async (req, res) => {
    const {
        name,
        category,
        price,
        discountprice,
        quantity,
        description,
        imageUrl,
    } = req.body;
    try {
        const product = await Product.create({
            name,
            category,
            price,
            discountprice,
            quantity,
            description,
            imageUrl,
        });
        res.json({ product: product });
    } catch (error) {
        console.log(error);
    }
});
app.delete("/api-grocery/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({ products: product });
});

// registration
app.post("/registation", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({
            username,
            email,
            password,
        });
        res.json({ user: user, status: 1 });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error
            return res
                .status(409)
                .json({ error: "User already exists.", status: 0 }); // 409 Conflict
        }
        res.json({ error: error.message, status: 0 });
    }
});
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User Does Not Exist." });
        }

        const isMatch = await user.comparePassword(password);
        if (isMatch) {
            const token = jwt.sign(
                { username: user.username, userId: user._id },
                "shhhhh"
            );
            return res.status(200).json({ token: token, status: 1 });
        } else {
            return res
                .status(401)
                .json({ error: "Invalid Credentials", status: 0 });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});
// add to cart
app.post("/addtocart", async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        // Check if the user already has a cart
        let cart = await Cart.findOne({ user: userId });

        if (cart) {
            // Check if the product already exists in the cart
            const existingProductIndex = cart.products.findIndex(p => p.product.toString() === productId);

            if (existingProductIndex > -1) {
                // If the product exists, update its quantity
                cart.products[existingProductIndex].quantity += quantity;
            } else {
                // If the product does not exist, add it to the products array
                cart.products.push({ product: productId, quantity: quantity });
            }

            // Save the updated cart
            await cart.save();
        } else {
            // If no cart exists, create a new cart
            cart = await Cart.create({
                user: userId,
                products: [{ product: productId, quantity: quantity }],
            });
        }

        res.json({ cart, status: 1 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/viewcart", async (req, res) => {
    const { userId } = req.body;
    try {
        const cart = await Cart.findOne({ user: userId }).populate(
            "products.product"
        );

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.json({ cart: cart });
    } catch (error) {
        res.json({ error: error });
        console.log("error", error)
    }
});
app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
