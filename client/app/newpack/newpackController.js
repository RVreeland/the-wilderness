(function() {
  'use strict';

  angular
    .module('app.newpack')
    .controller('NewPackController', NewPackController);

  NewPackController.$inject = ['dataService'];

  function NewPackController(dataService) {
    var vm = this;

    vm.gear = dataService.getGearlist();
    //set initially to false
    vm.packCreated = true;

    //properties: name, season, weight, items
    //mock
    vm.pack = {
      name: 'Hoover Wilderness',
      season: 'summer',
      weight: 0,
      items: []
    };

    vm.packWeight = {
      lbs: 0,
      oz:0
    };

    vm.createPack = function() {
      dataService.saveNewPack(vm.pack);
      vm.packCreated = true;
    };

    vm.addToPack = function(item) {
      vm.pack.items.push(item);
      vm.pack.weight += parseFloat(item.weight);
      vm.packWeight = {
        lbs: parseInt(vm.pack.weight/16),
        oz: parseFloat(vm.pack.weight%16)
      };
    };

  }

})();
