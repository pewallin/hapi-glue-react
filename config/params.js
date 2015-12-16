'use strict';

const Confidence = require('confidence');

const criteria = {
  env: process.env.NODE_ENV
};

const config = {
  $meta: 'Config parameters, port numbers, etc',
  projectName: 'viaplay',
  port: {
    web: {
      $filter: 'env',
      test: 9090,
      $default: 3000
    }
  }
};

const store = new Confidence.Store(config);

exports.get = function (key) {
  return store.get(key, criteria);
};

exports.meta = function (key) {
  return store.meta(key, criteria);
};
