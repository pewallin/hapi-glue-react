'use strict';
const request = require('request-promise');
const baseURL = 'https://content.viaplay.se/web-se/film/';

function getFilm (name) {
  return request({
    uri: baseURL + name,
    json: true
  });
}

module.exports.getFilm = getFilm;
