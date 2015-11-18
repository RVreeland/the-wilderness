(function() {
  'use strict';

  angular
    .module('app.gearlist')
    .controller('Gearlist', Gearlist);

    Gearlist.$inject = [];

    function Gearlist() {
      var vm = this;
      //mock data
      vm.gear = [{name: 'Marmot Limelight 1', type: 'tent', category: 'shelter', weight: '5 lbs'}];

    }

})();
