'use strict';

/* global app */

app.services
  .factory('Github', ['$resource', function($resource){

    var today = new Date(),
      recent = new Date(new Date().setDate(today.getDate()-90));

		var github = {

      getCommits: function() {
        return $resource('https://api.github.com/repos/:owner/:repo/commits', {}, {
      		query: {method: 'GET', params: {owner:'@owner', repo: '@repo', since: recent.toISOString()}, isArray:true}
    		})

      },

			getRepos: function() {
				return $resource('https://api.github.com/orgs/:org/repos', {}, {
      		query: {method: 'GET', params: {org:'@org'}, isArray:true}
    		});
			}
    };

    return github;

}]);
