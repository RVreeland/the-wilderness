(function() {
  'use strict';

  angular
    .module('app.gearlist')
    .controller('GearlistController', GearlistController);

  GearlistController.$inject = [];

  function GearlistController() {
    var vm = this;
    //mock data
    vm.gear = [{name: 'Marmot Limelight 2', type: 'tent', category: 'shelter', weight: '80'},
    {name: 'Olicamp Light', type: 'stove', category: 'kitchen', weight: '2.5'},
    {name: 'Patagonia down jacket', type: 'jacket', category: 'clothing', weight: '12'}];

    vm.item = {
      name: '',
      type: '',
      notes: '',
      category: ''
    };

    vm.categories = ['shelter', 'sleep', 'kitchen', 'clothing', 'other'];

    vm.addItem = function() {
      vm.gear.push(vm.item);
      vm.item = {};
    };

  }

})();
