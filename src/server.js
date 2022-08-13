/* eslint-disable */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.NODE_ENV,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })

    server.route(routes);

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();