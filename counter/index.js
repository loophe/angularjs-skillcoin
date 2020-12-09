import angular from 'angular';

// Create the module where our functionality can attach to
let counterModule = angular.module('counter', []);

// Include our UI-Router config settings
import CounterConfig from './counter.config';
counterModule.config(CounterConfig);

// Controllers
import CounterCtrl from './counter.controller';
counterModule.controller('CounterCtrl', CounterCtrl);

export default counterModule;