'use strict';

var request = require('request');

var GITHUB_URL = 'https://github.com/';
var GITIO_URL = 'http://git.io/';

function getShoren(user, repos, callback) {
  if(typeof repos === 'function') {
    callback = repos;
    repos = '';
  } else {
    repos = '/' + repos;
  }
  request.post(GITIO_URL + 'create', {
    form: {
      url: GITHUB_URL + user + repos
    }
  }, function(err, reponse, body){
    if(err) {
      return callback(err);
    }
    return callback(null, GITIO_URL +  body);
  });
}

module.exports = getShoren;