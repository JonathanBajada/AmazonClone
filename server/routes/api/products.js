const express = require('express');
const router = express.Router();

const Product = require('../../models/product');

router.get('/products', async(req, res) =>{
  const products = await Product.find({});

  try {
    res.send(products);
  } catch(error) {
    res.status(500).send(error)
  }
})

module.exports = router;