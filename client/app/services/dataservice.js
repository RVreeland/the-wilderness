(function() {
  'use strict';

  angular
    .module('app.dataservice', [])
    .factory('dataService', dataService);

  dataService.$inject = [];

  //mock data
  var gearList = [{name: 'Marmot Limelight 2', type: 'tent', category: 'shelter', weight: '80'},
  {name: 'Olicamp Light', type: 'stove', category: 'kitchen', weight: '2.5'},
  {name: 'Patagonia down jacket', type: 'jacket', category: 'clothing', weight: '12'}];

  function dataService() {
    return {
      getGearlist: getGearlist,
      addItem: addItem
    };

    function getGearlist() {
      //returns mock data
      return gearList;
    }
    //pushes to mock data
    function addItem(item) {
      gearList.push(item);
    }
  }

});
