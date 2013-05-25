'use strict';

angular.module('taskapp', []).
  config(['$routeProvider', function ($routeProvider) {

      $routeProvider.
          when('/task/list', {
              templateUrl: 'scripts/app/partials/task/list.html',
              controller: 'TaskCtrl'
          });

      $routeProvider.
          when('/task/edit/:id', {
              templateUrl: 'scripts/app/partials/task/edit.html',
              controller: 'TaskCtrl'
          });

      $routeProvider.
          otherwise({
              redirectTo: '/task/list'
          });

  }]);
