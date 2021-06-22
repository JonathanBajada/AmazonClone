const express = require('express');
const Product = require('../../models/Product');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find({});

  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
})

// Route to create a new product. We won't be using this route until a seller user is implemented.
router.post('/product', async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;