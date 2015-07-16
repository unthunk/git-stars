'use strict';

describe('Commit controller', function() {
  beforeEach(module('gitsortApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.prettDiff()',function(){
    var raw = 'test file\n+ added\n- removed\n no change';
    var pretty = [
        {css:'',line:'test file'},
        {css:'added', line:'+ added'},
        {css:'removed', line:'- removed'},
        {css:'', line:' no change'}
      ];
    it('returns a correctly formatted object', function() {
      var $scope = {};
      var controller = $controller('commitCtrl', { $scope: $scope });
      expect($scope.prettyDiff(raw)).toEqual(pretty);
    });
  });

});
