import logger from './utils/logger';
import * as server from './server';

const gracefulStopServer = () => {
    server.stop().then(() => {
        logger.info('Shutting down server');
        process.exit(0);
    });
};

process.on('uncaughtException', (err) => {
    logger.error(err, 'Uncaught exception');
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error(
        {
            promise: promise,
            reason: reason
        },
        'unhandledRejection'
    );
    process.exit(1);
});

process.on('SIGINT', gracefulStopServer);
process.on('SIGTERM', gracefulStopServer);

server.start();
