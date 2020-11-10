const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.end("login");
});

app.get("/", (req, res) => {
  res.end("Home");
});

app.listen(8001, () => {
  console.log("server is running.");
});
