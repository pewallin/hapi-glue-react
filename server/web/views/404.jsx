'use strict';
const Layout = require('./layout.jsx');
const React = require('react');

module.exports = React.createClass({
  render: function render() {
    return (
      <Layout {...this.props}>
        <div className='content-transition'>
          <div id='content'>
            <section className='error notfound'>
              <div className='scaffold'>
                <h1>Nu blev det fel</h1>
                <p>Det kan bero på att vi inte har kvar den här sidan längre.</p>
                <p><a href='http://viaplay.se/help/view/support' className title='Kontakta vår kundtjänst'>Kontakta vår kundtjänst</a> eller se <a href='http://viaplay.se/help/view/faq' className title='Vanliga frågor'>Vanliga frågor</a> för mer information</p>
              </div>
            </section>
          </div>
          <div id='tooltip'></div>
        </div>
      </Layout>
    );
  }
});
