const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const knex = require("./knex");

app.use(express.json());

//確認

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.get("/products", async (req, res) => {
  const products = await knex
    .select()
    .from("products")
    .then((results) => results);
  res.send(products);
});
app.get("/api", (req, res) => {
  res.send("Hi~👋🏻");
});

app.listen(port);
if (port === 3000) {
  console.log(`Now hosting at "http://localhost:${port}/"`);
}

module.exports = app;
