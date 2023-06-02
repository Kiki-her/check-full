const express = require("express");
const app = express();

app.use(express.json());

//確認
app.get("/api", (req, res) => {
  res.send("Hi~👋🏻");
});

module.exports = app;
