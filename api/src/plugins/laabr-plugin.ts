export const laabrPlugin = async (server) => {
    const options = {
        formats: { onPostStart: ':time :start :level :message' },
        tokens: { start: () => '[start]' },
        indent: 0
    };
    await server.register({
        plugin: require('laabr'),
        options
    });
};
