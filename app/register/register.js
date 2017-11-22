'use strict';

angular.module('app.register', [])
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope', '$location'];

function RegisterController($scope, $location) {
  $scope.name = 'kek'
}
