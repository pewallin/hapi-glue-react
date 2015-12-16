'use strict';

const filmInfo = require('./data/film-info');

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
    handler: (request, reply) => {
      filmInfo.getFilm(request.params.name)
      .then((response) => {
        const movieContext = {
          title: 'Viaplay - ' + response.product._links.self.title,
          film: response
        };
        return reply.view('film-details', movieContext);
      })
      .catch((error) => {
        console.log(error);
        return reply.view('404').code(404);
      });
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
