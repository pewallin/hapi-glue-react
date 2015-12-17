'use strict';
const React = require('react');

module.exports = React.createClass({
  render: function render () {
    return (
      <div className='page-footer'>
        <footer className='block page-footer'>
          <a href='#' className='back-to-top'>Till toppen</a>
          <div className='upper'>
            <section className='scaffold'>
              <div className='logo'>
                <a href='/' data-href className='logo-viaplay'>
                  Viaplay
                </a>
              </div>
              <div>
                <div className='table'>
                  <div className='column'>
                    <div className='row'>
                      <h3>VIAPLAY</h3>
                      <ul>
                        <li>
                          <a href='/serier' data-href='https://content.viaplay.se/pcdash-se/serier'>
                            <span>Serier</span>
                          </a>
                        </li>
                        <li>
                          <a href='/film' data-href='https://content.viaplay.se/pcdash-se/film'>
                            <span>Film</span>
                          </a>
                        </li>
                        <li>
                          <a href='/sport' data-href='https://content.viaplay.se/pcdash-se/sport'>
                            <span>Sport</span>
                          </a>
                        </li>
                        <li>
                          <a href='/barn' data-href='https://content.viaplay.se/pcdash-se/barn'>
                            <span>Barn</span>
                          </a>
                        </li>
                        <li>
                          <a href='/hyrbutik' data-href='https://content.viaplay.se/pcdash-se/hyrbutik'>
                            <span>Hyrbutik</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='row'>
                      <h3>Om oss</h3>
                      <ul>
                        <li>
                          <a href='/press' data-href='https://content.viaplay.se/pcdash-se/press'>
                            <span>Press</span>
                          </a>
                        </li>
                        <li>
                          <a href='http://www.mtgx.se/jobs'>
                            <span>Jobb</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='row'>
                      <h3>Viasat-kunder</h3>
                      <ul>
                        <li>
                          <a href='https://signup.viaplay.se/'>
                            <span>Viaplay ingår</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='row'>
                      <h3>Information</h3>
                      <ul>
                        <li>
                          <a href='http://kundservice.viaplay.se'>
                            <span>Kundservice</span>
                          </a>
                        </li>
                        <li>
                          <a href='/devices' data-href='https://content.viaplay.se/pcdash-se/devices'>
                            <span>Våra plattformar</span>
                          </a>
                        </li>
                        <li>
                          <a href='/requirements' data-href='https://content.viaplay.se/pcdash-se/requirements'>
                            <span>Systemkrav</span>
                          </a>
                        </li>
                        <li>
                          <a href='/allmanna_villkor' data-href='https://content.viaplay.se/pcdash-se/allmanna_villkor'>
                            <span>Allmänna villkor</span>
                          </a>
                        </li>
                        <li>
                          <a href='/privacy' data-href='https://content.viaplay.se/pcdash-se/privacy'>
                            <span>Sekretesspolicy</span>
                          </a>
                        </li>
                        <li>
                          <a href='/cookies' data-href='https://content.viaplay.se/pcdash-se/cookies'>
                            <span>Cookies</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='row'>
                      <h3>Följ oss</h3>
                      <ul>
                        <li>
                          <a href='http://www.facebook.com/viaplay'>
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href='http://twitter.com/viaplay_se'>
                            <span>Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a href='http://www.linkedin.com/company/viaplay'>
                            <span>LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='row'>
                      <h3>TV</h3>
                      <ul>
                        <li>
                          <a href='#' data-stream-url='https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&guid=TV3SE'>
                            <span>TV3</span>
                          </a>
                        </li>
                        <li>
                          <a href='#' data-stream-url='https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&guid=DKMB13GfKIxWmF_XfoCMbej0I_XSeg55'>
                            <span>TV10</span>
                          </a>
                        </li>
                        <li>
                          <a href='#' data-stream-url='https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&guid=0LJGhbaMMazRbvFHEFZWnVH4qCzgFiAG'>
                            <span>TV6</span>
                          </a>
                        </li>
                        <li>
                          <a href='#' data-stream-url='https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&guid=TV1000'>
                            <span>Viasat Film</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='lower'>
            <div className='scaffold'>
              <span className='copyright'>
                <span>© 2015 Viaplay AB (org no. 556513-5547).</span>
                <span>All rights reserved.
                  <span className='mtg-logo' />
                </span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});
