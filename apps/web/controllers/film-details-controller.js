import filmInfo from '../models/film-info';

module.exports = (request, reply) => {
  // Fetch movie & trailer info
  filmInfo.getFilm(request.params.name)
  .then((response) => {
    // Render film details view to string - this will be replaced / mounted on the client
    const renderOpts = {
      runtimeOptions: {
        renderMethod: 'renderToString'
      }
    };
    const movieContext = {
      title: 'Viaplay - ' + response.product._links.self.title,
      film: response
    };
    request.server.render('film-details', movieContext, renderOpts, (renderErr, filmDetailsString) => {
      if (renderErr) {
        console.log('layout error');
        return reply(renderErr);
      }

      // Render static layout and include film details string
      const htmlContext = {
        remountContent: filmDetailsString,
        state: 'window.state = ' + JSON.stringify(movieContext) + ';'
      };

      request.server.render('layout', htmlContext, (err, htmlOutput) => {
        if (err) {
          console.log('film details error');
          return reply(err);
        }
        return reply(htmlOutput);
      });
      // return reply.view('film-details', movieContext);
    });
  })
  .catch((error) => {
    console.log(error);
    return reply.view('404').code(404);
  });
};
