const express = require("express");
const router = express();

router.get("/product", (req, res) => {
  res.end("product");
});

module.exports = router;
