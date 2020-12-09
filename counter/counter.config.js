function CounterConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('counter', {
    url: '',
    controller: 'CounterCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'counter/counter.html'
  });

};

export default CounterConfig;