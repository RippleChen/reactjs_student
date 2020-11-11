const express = require("express");
const router = express();

router.get(
  "/product",
  (req, res, next) => {
    if (req.query.token1 == "t1") {
      next();
    } else {
      res.end("unauthorized 1");
    }
  },
  (req, res, next) => {
    if (req.query.token2 == "t2") {
      next();
    } else {
      res.end("unauthorized 2");
    }
  },
  (req, res, next) => {
    if (req.query.token3 == "t3") {
      next();
    } else {
      res.end("unauthorized 3");
    }
  },
  (req, res) => {
    res.end("product");
  }
);

module.exports = router;
