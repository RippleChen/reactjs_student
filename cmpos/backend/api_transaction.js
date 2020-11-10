const express = require("express");
const router = express();

router.get("/transaction", (req, res) => {
  res.end("transaction");
});

module.exports = router;
