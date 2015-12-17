(function() {
  'use strict';

  angular
    .module('app.newpack')
    .controller('NewPackController', NewPackController);

  NewPackController.$inject = ['dataService'];

  function NewPackController(dataService) {
    var vm = this;

    vm.gear = dataService.getGearlist();

    vm.packCreated = false;

    //properties: name, season, weight
    vm.pack = {
      weight: 0
    };

    vm.createPack = function() {
      dataService.saveNewPack(vm.pack);
      vm.packCreated = true;
    };


  }

})();
