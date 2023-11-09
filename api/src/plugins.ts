/* eslint-disable @typescript-eslint/no-var-requires */
import { jwtAuthPlugin } from './plugins/jwt-auth-plugin';
import { laabrPlugin } from './plugins/laabr-plugin';
import { errorHandler } from './middlewares/error-handler';

export const registerPlugins = async (server) => {
    errorHandler(server);
    await jwtAuthPlugin(server);
    await laabrPlugin(server);
    await server.register(require('hapi-response-time'));
};
