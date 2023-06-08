/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sales", function (table) {
    table.increments("id").primary();
    table.datetime("date", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.integer("total_price");
    table.integer("received_price");
    table.json("sold_products");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("sales");
};
