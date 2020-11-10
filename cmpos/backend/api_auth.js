const express = require("express");
const router = express();

router.get("/login", (req, res) => {
  res.end("login");
});


router.post("/register", (req, res)=>{
  res.json(req.body)
})

module.exports = router;
