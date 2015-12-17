'use strict';

exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply({ message: 'Todo - serve Viaplay + trailers API from here' });
    }
  });

  next();
};

exports.register.attributes = {
  name: 'api'
};
