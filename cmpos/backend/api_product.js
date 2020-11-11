const express = require("express");
const router = express();
const { interceptor1, interceptor2, interceptor3 } = require("./interceptorX");
const jwt = require("./jwt");
const Products = require("./models/product_schema");

const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");



router.get("/product", jwt.verify, async (req, res) => {
  const products = await Products.find({});
  res.json(products);
});


// Add Product
router.post("/product", async (req, res) => {
  try {
   
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

module.exports = router;
