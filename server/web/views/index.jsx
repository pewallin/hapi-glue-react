var React = require('react');
var Layout = require('./layout');

var Component = React.createClass({
  render: () => {
    return (
      <Layout title='Start'>
        <div className='content-transition'>
          <div id='content'>
            <section className='error notfound'>
              <div className='scaffold'>
                <h1>Några exempel</h1>
                <div>
                  <a href='/web-se/film/fury-2014'>Fury</a><br />
                  <a href='/web-se/film/fifty-shades-of-grey-2015'>Fifty shades of grey</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
});

module.exports = Component;
