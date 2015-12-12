(function() {
  'use strict';

  angular
      .module('app')
      .config(configure);

  configure.$inject =
      ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('gearlist', {
        url: '/gearlist',
        templateUrl: 'app/gearlist/gearlistView.html',
        controller: 'GearlistController',
        controllerAs: 'vm'
      })
      .state('newpack', {
        url: '/newpack',
        templateUrl: 'app/newpack/newpackView.html',
        controller: 'NewPackController',
        controllerAs: 'vm'
      })
      .state('packlist', {
        url: '/packlist',
        templateUrl: 'app/packlist/packlistView.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/homeView.html'
      })
      ;
  }

})();
