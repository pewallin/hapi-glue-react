'use strict';
const request = require('request-promise');
const xml2json = require('xml2js-promise');
const baseURL = 'http://api.traileraddict.com/';

function pruneTrailerJSON(json) {
  if (json.trailers && json.trailers.trailer) {
    return json.trailers.trailer[0];
  } else {
    throw new Error('Not a valid trailer');
  }
}

function getTrailerByImdbId(imdbId) {
  return request({
      uri: baseURL + '/?imdb=' + imdbId,
      json: true,
    })
    .then(xml2json)
    .then(pruneTrailerJSON);
}

module.exports.getTrailerByImdbId = getTrailerByImdbId;
