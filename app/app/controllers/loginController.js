angular
  .module('hshs').controller('loginController', ['$rootScope', '$scope', '$http', 'userService', '$location', function ($rootScope, $scope, $http, userService, $location) {

      $scope.login = function () {
          userService.login($scope.user);
      };

      $scope.logout = function () {
        userService.logout($rootScope.currentUser.id);
      };

  }]);