'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply({ message: 'Viaplay API' });
    }
  });

  next();
};

exports.register.attributes = {
  name: 'api'
};
