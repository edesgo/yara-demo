/* eslint-disable @typescript-eslint/no-var-requires */
import * as config from 'config';

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: config.get<string>('db.host'),
        port: config.get<number>('db.port'),
        user: config.get<string>('db.user'),
        database: config.get<string>('db.database'),
        password: config.get<string>('db.pass')
    },
    pool: {
        min: 1,
        max: 30
    },
    debug: config.get<string>('app.env') === 'development',
});
export { knex };
