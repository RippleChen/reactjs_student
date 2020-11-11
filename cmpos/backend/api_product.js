const express = require("express");
const router = express();
const { interceptor1, interceptor2, interceptor3 } = require("./interceptorX");

router.get("/product", interceptor1, interceptor2, interceptor3, (req, res) => {
  res.end("product");
});

module.exports = router;
