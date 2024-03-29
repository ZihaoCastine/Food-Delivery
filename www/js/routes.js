angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

  .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

  .state('tabs.menu', {
      url: '/menu',
      views: {
        'menu-tab': {
          templateUrl: 'templates/menu.html',
          controller: 'menuCtrl'
        }
      }
  })

  .state('tabs.myOrders', {
    url: '/myOrders',
    views: {
      'myOrders-tab': {
        templateUrl: 'templates/myOrders.html',
        controller: 'myOrdersCtrl'
      }
    }
  })






$urlRouterProvider.otherwise('/login')



});
