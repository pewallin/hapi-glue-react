'use strict';

const Confidence = require('confidence');
const Params = require('./params');

const criteria = {
  env: process.env.NODE_ENV
};

const manifest = {
  $meta: 'Main configuration manifest',
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: true
      }
    }
  },
  connections: [{
    port: Params.get('/port/web'),
    labels: ['web']
  }],
  plugins: {
    vision: {},
    visionary: {
      engines: { jsx: 'hapi-react-views' },
      compileOptions: {}, // optional
      relativeTo: __dirname,
      path: '../server/web/views'
    },
    inert: {},
    blipp: {},
    tv: {},

    '../server/api/index': [{ routes: { prefix: '/api' } }],
    '../server/web/index': {}
  }
};

const store = new Confidence.Store(manifest);

exports.get = (key) => {
  return store.get(key, criteria);
};

exports.meta = (key) => {
  return store.meta(key, criteria);
};
