const express = require("express");
const mongoose = require("mongoose");
const Product = require("./src/Model/groceryProduct");
const User = require("./src/Model/userModel");
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
        res.json({ user: user });
    } catch (error) {
        res.json({ error: error.message });
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
            return res.json({ token: token, status: 1 });
        } else {
            return res.json({ error: "Invalid Crediantials", status: 0 });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
