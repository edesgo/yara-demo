import { Server } from '@hapi/hapi';
import * as config from 'config';
import routes from './routes';
import logger from './utils/logger';
import { registerPlugins } from './plugins';

const server = new Server({
    port: config.get<number>('app.port'),
    routes: {
        cors: true,
        security: true
    }
});

const init = async () => {
    await registerPlugins(server);
    server.route(routes);
    return server;
};

const start = async () => {
    try {
        // add things here before the app starts, like database connection check etc
        const srv = await init();
        await srv.start();
        logger.info(
            `server started at port: ${config.get(
                'app.port'
            )} with env: ${config.get('app.env')}`
        );
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

const stop = () => {
    return server.stop({ timeout: 10 * 1000 });
};

export { init, stop, start };
