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


}]);
