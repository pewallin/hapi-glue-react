'use strict';
const React = require('react');
const Header = require('./header');
const Footer = require('./footer');

module.exports = React.createClass({
  render: function render () {
    return (
      <html className='no-js' lang=''>
        <head>
          <title>{this.props.title}</title>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' />
          <meta name='og:image' />
          <link href='http://assets.viaplay.tv/frontend-2015121604/css/index.min.15568ec0.css' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700,300' rel='stylesheet' type='text/css' />
        </head>
        <body>
          <Header />
          <div id='content-wrapper'>
            <div id='app-mount'
               dangerouslySetInnerHTML={{ __html: this.props.remountContent }}>
            </div> :
            {this.props.children}
          </div>
          <Footer />
          {this.props.state ?
            <script id='app-state'
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
            </script> :
            null }
          <script src='/public/client.js'></script>
        </body>
      </html>
    );
  }
});
