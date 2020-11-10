const express = require("express");
const app = express();

// http://localhost:8001/login?username=admin&password=1234
app.get("/login", (req, res) => {
  const { query } = req;
  res.json({ result: "ok", query });
});

app.get("/", (req, res) => {
  res.end("Home");
});

app.listen(8001, () => {
  console.log("server is running.");
});
