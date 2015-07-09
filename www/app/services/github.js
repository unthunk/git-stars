'use strict';

/* global app */

app.services
  .factory('Github', ['$resource', function($resource){

    // return date n number of days ago in ISOString format
    function recentDate(days) {
      var ret, recent, num, today;

      // be sure we have a valid number
      // TODO: add polyfill for IE
      num = Number.isInteger(days) && days > 0 ? num : 90;
      today = new Date();
      recent = new Date(new Date().setDate(today.getDate()-days));
      ret = recent.toISOString();
      return ret;
    }

		var github = {

      getCommits: function(days) {
        return $resource('https://api.github.com/repos/:owner/:repo/commits', {}, {
      		query: {method: 'GET', params: {owner:'@owner', repo: '@repo', since: recentDate(days)}, isArray:true}
    		});

      },

			getRepos: function() {
				return $resource('https://api.github.com/orgs/:org/repos', {}, {
      		query: {method: 'GET', params: {org:'@org'}, isArray:true}
    		});
			},

      getRepo: function() {
				return $resource('https://api.github.com/repos/:owner/:repo', {}, {
      		query: {method: 'GET', params: {owner:'@owner', repo: '@repo'}, isArray:false}
    		});
			}
    };

    return github;

}]);
