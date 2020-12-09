import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
//import './home'

// Import your app functionality
import './counter'

// Create and bootstrap application
const requires = [
  'ui.router',
  'counter'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);