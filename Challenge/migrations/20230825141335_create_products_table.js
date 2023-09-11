/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        // isi atrribut dibawah ini, seperti id, name dsb (menyesuaikan)
        table.bigIncrements('id')
        table.string('name', 255)
        table.integer('stock')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // untuk delete(drop) table
    return knex.schema.dropTable('products')
};
