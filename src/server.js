/* eslint-disable */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'dicoding-notes.herokuapp.com/',
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