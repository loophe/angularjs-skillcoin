
class CounterCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "Community";


    $scope.counter = {
      getsupply: function(e){
        e.preventDefault();

          log("Calling supply...");
      }
    }
  }
}

export default CounterCtrl;


