'use strict';

const Hapi = require('@hapi/hapi');
const HapiSwagger = require ('hapi-swagger');
const Inert = require ('@hapi/inert');
const Vision = require ('@hapi/vision');
const Pack = require('./package')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };
 
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.route({
        method: 'GET',
        path: '/api/example',
        options:{
        handler: (request, h) => {

            return 'It is example route!';
        },
       description: 'get text',
        tags: ['api'],
     }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}/documentation`);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();