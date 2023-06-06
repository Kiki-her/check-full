/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("sales").del();
  await knex("sales").insert([
    {
      total_price: 1500,
      received_price: 2000,
      sold_products:
        '[{"title":"筋肉","price":1000,"author":"オー"},{"title":"ランドリー","price":500,"author":"星"}]',
    },
    {
      total_price: 900,
      received_price: 1000,
      sold_products:
        '[{"title":"What is OK?","price":100,"author":"Miro"},{"title":"刺繍糸でできた家","price":800,"author":"マーガレット"}]',
    },
  ]);
};
