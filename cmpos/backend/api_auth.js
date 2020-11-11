const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
router.get("/login", (req, res) => {
  res.end("login");
});

router.post("/register", async (req, res) => {
  try {
    const doc = await Users.create(req.body);
    res.json(doc);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
