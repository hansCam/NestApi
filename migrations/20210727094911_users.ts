exports.up = async function (knex) {
  await knex.schema.raw(`
     ALTER DATABASE ${knex.client.database()} CHARACTER SET utf8
    `);
  await knex.schema.raw(`
   CREATE TABLE users
   (
      customer_id                 VARCHAR(255) NOT NULL,
      civility                    VARCHAR(255) NOT NULL,
      firstname                   VARCHAR(255) NOT NULL,
      PRIMARY KEY(customer_id)
    );`);
};

exports.down = async function (knex) {
  await knex.schema.raw(`DROP TABLE IF EXISTS users`);
};
