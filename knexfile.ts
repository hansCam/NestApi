// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'nest',
      port: 3307,
    },
    pool: { min: 3, max: 7 },
    acquireConnectionTimeout: 90000,
  },
};
