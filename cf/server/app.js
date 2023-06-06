const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());

//確認

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
if (port === 3000) {
  console.log(`Now hosting at "http://localhost:${port}/"`);
}

app.get("/api", (req, res) => {
  res.send("Hi~👋🏻");
});

module.exports = app;
