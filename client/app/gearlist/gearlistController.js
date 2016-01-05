(function() {
  'use strict';

  angular
    .module('app.gearlist')
    .controller('GearlistController', GearlistController);

  GearlistController.$inject = ['dataService'];

  function GearlistController(dataService) {
    var vm = this;

    vm.enterNewItem = enterNewItem;
    vm.cancelNewItem = cancelNewItem;
    vm.addItemToGearlist = addItemToGearlist;

    //mock data from dataservice
    vm.gear = dataService.getGearlist();

    vm.enterNew = false;

    vm.categories = ['shelter', 'sleep', 'kitchen', 'clothing', 'other'];

    function enterNewItem() {
      vm.newItem = {
        name: '',
        type: '',
        notes: '',
        category: ''
      };
      vm.enterNew = true;
    }

    function cancelNewItem() {
      vm.newItem = {};
      vm.enterNew = false;
    }

    function addItemToGearlist() {
      dataService.addItem(vm.newItem);
      vm.newItem = {};
    }

  }

})();
