const express = require("express");
const router = express();

const interceptor1 = (req, res, next) => {
  if (req.query.token1 == "t1") {
    next();
  } else {
    res.end("unauthorized 1");
  }
};

const interceptor2 = (req, res, next) => {
  if (req.query.token2 == "t2") {
    next();
  } else {
    res.end("unauthorized 2");
  }
};

const interceptor3 = (req, res, next) => {
  if (req.query.token3 == "t3") {
    next();
  } else {
    res.end("unauthorized 3");
  }
};

router.get("/product", interceptor1, interceptor2, interceptor3, (req, res) => {
  res.end("product");
});

module.exports = router;
