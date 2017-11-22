'use strict';

angular.module('app', ['ngRoute', 'ngMockE2E', 'app.login', 'app.home', 'app.register'])
  .config(InitRouter)
  .run(FakeBackend)

InitRouter.$inject = ['$routeProvider', '$locationProvider'];

function InitRouter($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    redirectTo: function(routerParams, path, search) {
      if (true) {
        return '/login';
      } else {
        return '/home';
      }
    }
  });
  $routeProvider.when('/login', {
    templateUrl: "login/login.html",
    controller: "LoginController"
  });
  $routeProvider.when('/home', {
    templateUrl: "home/home.html",
    controller: "HomeController"
  });
  $routeProvider.when('/register', {
    templateUrl: "register/register.html",
    controller: "RegisterController"
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });

  function FakeBackend($httpBackend) {
    var phones = [{
      name: 'phone1'
    }, {
      name: 'phone2'
    }];

    $httpBackend.whenPOST('/phones').respond(function(method, url, data, headers) {
      console.log('Received these data:', method, url, data, headers);
      phones.push(angular.fromJson(data));
      return [200, {}, {}];
    });

    $httpBackend.whenGET('/phones').respond(function(method, url, data) {
      console.log("Getting phones");
      return [200, phones, {}];
    });
  }
}
