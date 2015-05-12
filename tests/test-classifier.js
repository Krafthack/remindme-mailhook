var test = require('tape');
var Classifier = require('../lib/classifier');
var Week = require('../lib/week');
var Day = require('../lib/day');

test('test 1 week classifier', function (t){
  t.plan(2);

  var classifier = new Classifier();
  var email = '1week@example.com';
  var type = classifier.classify(email);

  t.ok(type instanceof Week);
  t.equal(type.num, 1);
});

test('test 1 day classifier', function (t) {
  t.plan(2);

  var classifier = new Classifier();
  var email = '1day@example.com';
  var type = classifier.classify(email);

  t.ok(type instanceof Day);
  t.equal(type.num, 1);
});
