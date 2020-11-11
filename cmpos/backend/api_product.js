const express = require("express");
const router = express();

// (req, res, next) => {
//   if (req.query.token == "kan") {
//     next();
//   } else {
//     res.end("unauthorized");
//   }
// },

router.get("/product",  (req, res) => {
  res.end("product");
});

module.exports = router;
