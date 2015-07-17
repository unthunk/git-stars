'use strict';

/* global angular, app */

angular.module(app.name)
.directive('commit',[function(){
  return {
    restrict: 'A',
    templateUrl: 'app/directives/commit.html',
    controller: 'commitCtrl',
    scope: {
      commit: '=commit'
      }
    };
}])
.controller('commitCtrl',['$scope','Github',function($scope,Github){

  // parse patch blob from github and determine which lines need added/removed styles
  function prettyDiff(input) {
    var arr, i, css,
      added = /^\+/,
      removed = /^-/;

    arr = input.split('\n');
    for(i=0;i<arr.length;i++) {
      css = '';
      if(added.test(arr[i])) {
        css = 'added';
      }
      else if(removed.test(arr[i])) {
        css = 'removed';
      }
      arr[i] = { css: css, line: arr[i]};
    }

    return arr;
  }

  // update files with prettyDiff details when commit changes
  $scope.$watch('commit', function(newValue) {
    var arr =[], i;
    if(newValue && newValue.files) {
      for(i=0;i<newValue.files.length;i++) {
        arr.push(prettyDiff(newValue.files[i].patch));
      }
    }
    $scope.files = arr;

  });

}]);
