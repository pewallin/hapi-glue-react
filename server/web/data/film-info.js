'use strict';
const co = require('co');
const viaplayContent = require('./viaplay-content');
const trailerAddict = require('./trailer-addict');

function productFromFilm (film) {
  return film._embedded['viaplay:blocks'][0]._embedded['viaplay:product'];
}

function imdbIdFromProduct (product) {
  return (product.content.imdb.id).replace('tt', '');
}

function mergeFilmAndTrailer (viaplayFilm, trailer) {
  const film = {
    product: productFromFilm(viaplayFilm),
    trailer: trailer
  };

  return film;
}

function filmInfo (name) {
  return co(function* getFilms () {
    let film;
    try {
      const viaplayFilm = yield viaplayContent.getFilm(name);
      if (viaplayFilm) {
        const product = productFromFilm(viaplayFilm);
        const trailer = yield trailerAddict.getTrailerByImdbId(imdbIdFromProduct(product));
        if (trailer) {
          // build a simpler film object containing some data from trailer and viaplayfilm.
          film = mergeFilmAndTrailer(viaplayFilm, trailer);
        } else {
          throw new Error('Not a valid trailer');
        }
      } else {
        throw new Error('Not a valid film');
      }
      return film;
    } catch (e) {
      throw e;
    }
  });
}

module.exports.getFilm = filmInfo;
