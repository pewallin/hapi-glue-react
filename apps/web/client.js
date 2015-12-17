'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const AppComponent = require('./views/film-details');

const App = React.createFactory(AppComponent);
const mountNode = document.getElementById('app-mount');
const serverState = window.state;

if (serverState) {
  ReactDOM.render(App(serverState), mountNode);
}
