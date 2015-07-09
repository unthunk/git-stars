'use strict';

/* global app */

app.controllers
  .controller('repoCtrl', ['$scope', '$routeParams', 'Github', function ($scope, $routeParams, Github) {

    $scope.days = 90;

    $scope.org = $routeParams.org || false;
    $scope.repoName = $routeParams.repo || false;

    $scope.heading = 'gitsort';

    Github.getRepo().query({owner:$scope.org,repo:$scope.repoName}).$promise.then(function(data){
      $scope.repo = data;
    });

    Github.getCommits($scope.days).query({owner:$scope.org,repo:$scope.repoName}).$promise.then(function(data){
      $scope.commits = data;
    });

}]);
