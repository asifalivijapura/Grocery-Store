const express = require('express')
const mongoose = require('mongoose')
const Product = require('./src/Model/groceryProduct')
const cors = require('cors');
const app = express()

const dbConnect = require('./db')
const port = 8080;
dbConnect();

app.use(cors());
app.use(express.json());
app.get('/api-grocery', async (req, res) => {
  const products = await Product.find();
  res.json({ products: products });
})
app.get('/api-grocery/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json({ products: product });
})
app.post('/api-grocery', async (req, res) => {
  const { name, category, price, discountprice, quantity, description, imageUrl } = req.body;
  try {
    const product = await Product.create({
      name,
      category,
      price,
      discountprice,
      quantity,
      description,
      imageUrl
    })
    res.json({ product: product })
  } catch (error) {
    console.log(error);
  }
})
app.delete('/api-grocery/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  // res.json({products:product});
})
app.listen(port, () => console.log(`Backend app listening on port ${port}!`))