'use strict';

// Declare app level module which depends on views, and components
angular.module('hshs', [
  'ngRoute',
  'toaster',
  'ui.mask'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.otherwise({ redirectTo: '/home' });
}]).run([
    '$rootScope',
    '$location',
    'userService',
    function ($rootScope, $location, userService) {

    }
  ]);

