const express = require("express");
const router = express();

router.get("/product", interceptor1, interceptor2, interceptor3, (req, res) => {
  res.end("product");
});

module.exports = router;
