'use strict';

// Transpile ES2015 + JSX with Babel
require('babel-core/register')({
    presets: ['react', 'es2015']
});
require("babel-polyfill");

// Setup HAPI server with Glue
const HapiGlueComposer = require('./config');

// Run Glue scripts and start server in final callback
HapiGlueComposer((err, server) => {

    if (err) {
        throw err;
    }

    server.start(() => {
        console.log('Started server on port ' + server.info.port);
    });
});
