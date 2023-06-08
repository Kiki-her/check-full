/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("products").del();
  await knex("products").insert([
    {
      title: "筋肉",
      price: 1000,
      author: "オー",
    },
    {
      title: "ランドリー",
      price: 500,
      author: "星",
    },
    {
      title: "What is OK?",
      price: 100,
      author: "Miro",
    },
    {
      title: "刺繍糸でできた家",
      price: 800,
      author: "マーガレット",
    },
  ]);
};
