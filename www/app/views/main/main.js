'use strict';

/* global app */

app.controllers
  .controller('mainCtrl', ['$scope', 'Github', function ($scope, Github) {

    $scope.org = '';

    $scope.heading = 'Stargazed repos!';

    Github.getRepos().query({org:$scope.org}).$promise.then(function(data){
      $scope.repos = data;
    });

}]);
