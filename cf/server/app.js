const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

//確認

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api", (req, res) => {
  res.send("Hi~👋🏻");
});

app.listen(9000);

module.exports = app;
