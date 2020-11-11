const express = require("express");
const router = express();
const { interceptor1, interceptor2, interceptor3 } = require("./interceptorX");
const jwt = require("./jwt");

router.get("/product", jwt.verify, (req, res) => {
  res.end("product");
});

module.exports = router;
