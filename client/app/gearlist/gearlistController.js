(function() {
  'use strict';

  angular
    .module('app.gearlist')
    .controller('GearlistController', GearlistController);

  GearlistController.$inject = ['dataService'];

  function GearlistController(dataService) {
    var vm = this;
    //mock data from dataservice
    vm.gear = dataService.getGearlist();

    vm.item = {
      name: '',
      type: '',
      notes: '',
      category: ''
    };

    vm.categories = ['shelter', 'sleep', 'kitchen', 'clothing', 'other'];

    vm.addItemToGearlist = function() {
      dataService.addItem();
      vm.gear = dataService.getGearlist();
      vm.item = {};
    };

  }

})();
