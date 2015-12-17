(function() {
  'use strict';

  angular
    .module('app.newpack')
    .controller('NewPackController', NewPackController);

  NewPackController.$inject = ['dataService'];

  function NewPackController(dataService) {
    var vm = this;

    vm.gear = dataService.getGearlist();

    //properties: name, season
    vm.pack = {};

    vm.createPack = function() {};


  }

})();
