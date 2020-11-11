const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");


router.get("/login", (req, res) => {
  Users.findOne({username:req.body.username}).then(doc=>{
    if (doc){
      isValidPassword = await bcrypt.compare(req.body.password, doc.password)
      if (isValidPassword){
        // reply ok
      }else{
        // reply nok - invalid password
      }
    }else{
      // reply nok - invalid username
    }
  }).catch(e=>{

  })
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const doc = await Users.create(req.body);
    res.json(doc);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
