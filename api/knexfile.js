require('dotenv').config();
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        }, 
        pool: {
          afterCreate: (conn, cb) => {
            conn.query(`SET timezone = 'UTC'`, err => {
              cb(err, conn);
            });
          }
        },
        migrations: {
            directory: __dirname + '/knex/migrations',
          },
          seeds: {
            directory: __dirname + '/knex/seeds',
          }
    },
}