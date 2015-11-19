(function() {
  'use strict';

  angular
    .module('app.gearlist')
    .controller('Gearlist', Gearlist);

    Gearlist.$inject = [];

    function Gearlist() {
      var vm = this;
      //mock data
      vm.gear = [{name: 'Marmot Limelight 2', type: 'tent', category: 'shelter', weight: '80'},
      {name: 'Olicamp Light', type: 'stove', category: 'kitchen', weight: '2.5'},
      {name: 'Patagonia down jacket', type: 'jacket', category: 'clothing', weight: '12'}];

    }

})();
