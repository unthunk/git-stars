'use strict';

/* global app */

app.controllers
  .controller('repoCtrl', ['$scope', '$routeParams', 'Github', function ($scope, $routeParams, Github) {

    var git = {
      org: '',
      repo: ''
    };

    $scope.org = $routeParams.org || false;
    $scope.repo = $routeParams.repo || false;

    $scope.heading = 'gitsort';

		$scope.commits = Github.getCommits().query({owner:$scope.org,repo:$scope.repo});

}]);
