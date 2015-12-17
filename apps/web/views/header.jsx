'use strict';
const React = require('react');

module.exports = React.createClass({
  render: function render() {
    return (
        <div className='block page-header'>
          <div className='scaffold'>
            <div className='logo'>
              <a href='/' data-href>
                <img src='http://assets.viaplay.tv/frontend-2015113001/images/header-logo-large.png' alt='Viaplay Start' width={144} height={35} />
              </a>
              <button className='toggle-navigation' />
              <button className='toggle-user' />
            </div>
            <nav className='sections'>
              <a href='/serier' data-href='https://content.viaplay.se/pcdash-se/serier'>Serier</a>
              <a href='/film' data-href='https://content.viaplay.se/pcdash-se/film'>Film</a>
              <a href='/sport' data-href='https://content.viaplay.se/pcdash-se/sport'>Sport</a>
              <a href='/barn' data-href='https://content.viaplay.se/pcdash-se/barn'>Barn</a>
              <a href='/hyrbutik' data-href='https://content.viaplay.se/pcdash-se/hyrbutik'>Hyrbutik</a>
            </nav>
            <div className='user' data-logout-href data-login-href data-persistent-login-href data-user-id />
          </div>
        </div>
    );
  }
});
