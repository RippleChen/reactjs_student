const express = require("express");
const router = express();
const { interceptor1, interceptor2, interceptor3 } = require("./interceptorX");
const jwt = require("./jwt");
const Products = require("./models/product_schema");

router.get("/product", jwt.verify, async (req, res) => {
  const products = await Products.find({});
  res.json(products);
});

module.exports = router;
