angular
  .module('hshs').controller('registerController', ['$scope', '$http', 'userService', '$location', function ($scope, $http, userService, $location) {

      $scope.getCaptcha = function () {
          userService.getCaptcha($scope.user);
      };

      $scope.register = function () {
          userService.register($scope.user);
      };

  }]);