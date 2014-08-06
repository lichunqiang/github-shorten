'use strict';

var test = require('tape');
var shorten = require('./index');

test('get shorten url', function (t) {

  shorten('lichunqiang/local-nodeapi', function(err, url){
    t.equal(url, 'http://git.io/brsBuA');
  });

  shorten('lichunqiang', 'local-nodeapi', function(err, url){
    t.equal(url, 'http://git.io/brsBuA');
  });
  t.end();
});