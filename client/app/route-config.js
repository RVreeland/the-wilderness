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
      templateUrl: 'app/components/gearlist/gearlistView.html',
      controller: 'Gearlist',
      controllerAs: 'vm'
    })
    .state('newpack', {
      url: '/newpack',
      templateUrl: 'app/components/newpack/newpackView.html'
    })
    .state('packlist', {
      url: '/packlist',
      templateUrl: 'app/components/packlist/packlistView.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/components/home/homeView.html'
    })
    ;
}

})();
