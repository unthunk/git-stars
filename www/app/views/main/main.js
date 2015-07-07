'use strict';

/* global app */

app.controllers
  .controller('mainCtrl', ['$scope', 'Github', function ($scope, Github) {

    var git = {
      org: '',
      repo: ''
    };

    $scope.heading = 'gitsort';


		// $scope.commits = Github.getCommits().query({owner:git.org,repo:git.repo});

    $scope.repos = Github.getRepos().query({org:git.org});


}]);
