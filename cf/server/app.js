const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const knex = require("./knex");

app.use(express.json());

//確認

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
/* デプロイ時に外す？
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
*/
app.get("/products", async (req, res) => {
  const products = await knex
    .select()
    .from("products")
    .then((results) => results);
  res.send(products);
});

app.get("/sales", async (req, res) => {
  const sales = await knex
    .select()
    .from("sales")
    .then((res) => res);
  res.send(sales);
});

// productをpostできるendpointを作る

app.post("/products", async (req, res) => {
  const data = req.body;

  await knex("products").insert({
    title: data.title,
    author: data.author,
    price: data.price,
  });
  res.send(data);
});
// productをdeleteできるendpointを作る
// productをpatchできるendpointを作る
// salesの情報をpostするendpointを作る
// salesの情報をdeleteするendpointを作る

app.get("/api", (req, res) => {
  res.send("Hi~👋🏻");
});

app.listen(port);
if (port === 3000) {
  console.log(`Now hosting at "http://localhost:${port}/"`);
}

module.exports = app;
