'use strict';

describe('Main Controller', function() {
  var scope, ctrl, httpBackend;


  beforeEach(module('gitsortApp'));

  beforeEach(
    inject(
      function($controller, $rootScope, Github, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('mainCtrl', {
          $scope: scope, Github: Github });

          var mockData = [
            {
              'id': 1234,
              'name': 'sizzle',
              'full_name': 'jquery/sizzle',
              'owner': {
                'login': 'jquery'
              },
              'private': false,
              'html_url': 'https://github.com/jquery/sizzle',
              'description': 'A sizzlin hot selector engine.'
            }
          ];

        var url = 'https://api.github.com/orgs/netflix/repos';
        httpBackend.whenGET(url).respond(mockData);
      }
    )
  );

  it('should set searchResult on successful search', function() {
    console.log('before flush',scope.repos);
    expect(scope.repos).toBe(undefined);
    httpBackend.flush();

    console.log(scope.repos);

    expect(scope.repos[0].id).toBe(1234);
    expect(scope.repos[0].name).toBe('sizzle');
  });

});
