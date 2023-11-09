export const goodPlugin = async (server) => {
    await server.register({
        plugin: require('good'),
        options: {
            reporters: {
                console: [
                    {
                        module: 'good-console'
                    },
                    'stdout'
                ]
            }
        }
    });
};
