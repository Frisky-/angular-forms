'use strict';

angular.module('app.login', [])
  .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$location'];

function LoginController($scope, $location) {

  $scope.redirectToRegister = function functionName() {
    $location.path('/register');
  };
}
