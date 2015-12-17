'use strict';

const filmDetailsController = require('./controllers/film-details-controller');

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply.view('index');
    }
  });

  server.route({
    method: 'GET',
    path: '/web-se/film/{name}',
    handler: filmDetailsController,
    config: {
      cache: {
        expiresIn: 60 * 1000, // 60 seconds
        privacy: 'private' // browser cache
      }
    }
  });

  // Static files
  server.route({
    method: 'GET',
    path: '/public/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });

  // 404
  server.route({
    method: '*',
    path: '/{p*}', // catch-all path
    handler: function (request, reply) {
      reply.view('404').code(404);
    }
  });
  next();
};

exports.register.attributes = {
  name: 'web',
  dependencies: 'visionary'
};
