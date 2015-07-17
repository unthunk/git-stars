'use strict';

describe('Repo controller', function() {
  beforeEach(module('gitsortApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.heading',function(){
    it('has the correct text', function() {
      var $scope = {};
      var controller = $controller('repoCtrl', { $scope: $scope });
      expect($scope.heading).toEqual('git-stars');
    });
  });



  describe('$scope.avatarUrl',function(){
    it('returns the correct value', function() {
      var $scope = {};
      var controller = $controller('repoCtrl', { $scope: $scope });
      var gravatar = {
        author:
        {
          gravatar_id: 'gravatar.jpg',
          avatar_url: ''
        }
      };
      var avatar = {
        author:
        {
          gravatar_id: '',
          avatar_url: 'avatar.jpg'
        }
      };

      expect($scope.avatarUrl(gravatar)).toEqual('gravatar.jpg');
      expect($scope.avatarUrl(avatar)).toEqual('avatar.jpg');
    });
  });

});
