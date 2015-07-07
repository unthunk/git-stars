'use strict';

describe('Main controller', function() {
  beforeEach(module('gitsortApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.heading',function(){
    it('has the correct text', function() {
      var $scope = {};
      var controller = $controller('mainCtrl', { $scope: $scope });
      expect($scope.heading).toEqual('gitsort');
    });
  });

});
