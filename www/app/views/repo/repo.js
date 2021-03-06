'use strict';

/* global app */

app.controllers
  .controller('repoCtrl', ['$scope', '$routeParams', 'Github', function ($scope, $routeParams, Github) {

    $scope.days = 90;

    $scope.org = $routeParams.org || false;
    $scope.repoName = $routeParams.repo || false;

    $scope.heading = 'git-stars';

    Github.getRepo().query({owner:$scope.org,repo:$scope.repoName}).$promise.then(function(data){
      $scope.repo = data;
    });

    Github.getCommits($scope.days).query({owner:$scope.org,repo:$scope.repoName}).$promise.then(function(data){
      $scope.commits = data;
    });

    $scope.getCommit = function(index){
      $scope.sha = $scope.commits[index].sha;

      Github.getCommit().query({owner:$scope.org, repo:$scope.repoName, sha:$scope.sha}).$promise.then(function(data){
        $scope.commit = data;
      });

    };

    $scope.avatarUrl = function(commit) {
      return commit.author.gravatar_id || commit.author.avatar_url;
    };

}]);
