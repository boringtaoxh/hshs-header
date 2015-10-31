angular
  .module('hshs').directive('passwordCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var v = elem.val() === $('#userPassword').val();
        scope.passwordMatch = v;
        $('#confirmPassword').on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val() === $('#userPassword').val();
            scope.passwordMatch = v;
          });
        });
      }
    }
  }]);