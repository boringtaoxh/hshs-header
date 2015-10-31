angular
  .module('hshs').controller('loginController', ['$scope', '$http', 'userService', '$location', function ($scope, $http, userService, $location) {

      $scope.login = function () {
          userService.login($scope.user);
      };

  }]);