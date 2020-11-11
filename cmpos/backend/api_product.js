const express = require("express");
const router = express();

router.get(
  "/product",
  (req, res, next) => {
    if (req.query.token == "kan") {
      next();
    } else {
      res.end("unauthorized");
    }
  },
  (req, res) => {
    res.end("product");
  }
);

module.exports = router;
