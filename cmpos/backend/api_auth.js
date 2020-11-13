const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");
const randtoken = require("rand-token"); // yarn add rand-token
const refreshTokens = {};

router.post("/login", (req, res) => {
  Users.findOne({ username: req.body.username })
    .then(async (doc) => {
      if (doc) {
        isValidPassword = await bcrypt.compare(req.body.password, doc.password);
        if (isValidPassword) {
          const payload = {
            id: doc._id,
            level: doc.level,
            username: doc.username,
          };

          const token = jwt.sign(payload, "2000000"); // 20 sec
          const refreshToken = randtoken.uid(256);
          refreshTokens[refreshToken] = req.body.username;

          // reply ok
          res.json({
            result: "ok",
            token,
            refreshToken,
            message: "Login successfully",
          });
        } else {
          // reply nok - invalid password
          res.json({
            result: "nok",
            message: "Invalid password",
          });
        }
      } else {
        // reply nok - invalid username
        res.json({
          result: "nok",
          message: "Invalid username",
        });
      }
    })
    .catch((e) => {
      // reply nok - invalid username
      res.json({
        result: "nok",
        message: "Internal error",
      });
    });
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (e) {
    res.json({ result: "nok", message: e });
  }
});

// Refresh Token
let count = 1;
router.post("/refresh/token", function (req, res) {
  const refreshToken = req.body.refreshToken;
  console.log("Refresh Token : " + count++);

  if (refreshToken in refreshTokens) {
    const payload = {
      username: refreshTokens[refreshToken],
      level: "normal",
    };
    const token = jwt.sign(payload, "2000000"); // unit is millisec
    res.json({ jwt: token });
  } else {
    console.log("Not found");
    return res
      .status(403)
      .json({ auth: false, message: "Invalid refresh token" });
  }
});

module.exports = router;
