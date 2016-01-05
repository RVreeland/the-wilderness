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

    vm.enterNew = false;

    vm.enterNewItem = function() {
      vm.newItem = {
        name: '',
        type: '',
        notes: '',
        category: ''
      };
      vm.enterNew = true;
    };

    vm.cancelNewItem = function() {
      vm.newItem = {};
      vm.enterNew = false;
      console.log(vm.enterNew);
    };


    vm.categories = ['shelter', 'sleep', 'kitchen', 'clothing', 'other'];

    vm.addItemToGearlist = function() {
      dataService.addItem(vm.newItem);
      vm.newItem = {};
    };

  }

})();
