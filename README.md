# git-stars

Display git projects for an organization ranked by number of stargazers and allows browsing of recent commits.

## Installing

```
npm install
```

```
bower install
```

- Edit www/app/views/main/main.js to set $scope.org to the github org of your choice.
- Optionally change the value for $scope.days in /www/app/views/repo/repo.js to change how many days of commits to search for (90 by default).

## Running

```
grunt
```

This will start an express server with nodemon watching /www and /bower_components on http://localhost:3000/

## Building

```
grunt dist
```
Handles minificiation, concatenation, and uglification, and prepares the app for distribution.  Everything is bundled up in /dist.

After building, you can start express against the /dist folder with:

```
ENV=\dist nodemon
```

## Running tests

```
npm test
```

## license

MIT
