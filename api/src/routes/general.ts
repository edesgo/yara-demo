import { Request, ServerRoute, RouteOptionsSecureObject } from '@hapi/hapi';
const { Client } = require('pg');
import * as config from 'config';
const generalRoutes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: async (request: Request, resp) => {
            return 'OK';
        },
        options: {
            auth: false,
            description: 'Ping endpoint for elb',
            notes: 'Returns OK',
            tags: ['api', 'Ping']
        }
    },
    {
        method: 'GET',
        path: '/dbTest',
        handler: async (request: Request) => {
            const client = new Client({
                host: config.get<string>('db.host'),
                port: config.get<number>('db.port'),
                user: config.get<string>('db.user'),
                database: config.get<string>('db.database'),
                password: config.get<string>('db.pass')
            });

            await client.connect();
            const res = await client.query('select version()');
            console.log(res); // Hello world!
            await client.end();

            if (res.err) {
                return res.err;
            }
            return res.rows;
        },
        options: {
            auth: false,
            description: 'Ping project DB',
            notes: 'Returns DB version',
            tags: ['api', 'DB version']
        }
    }
];

export default generalRoutes;
