var test = require('tape');
var Classifier = require('../lib/classifier');
var Week = require('../lib/week');

test('test 1 week classifier', function (t){
  t.plan(2);

  var classifier = new Classifier();
  var email = "1week@example.com";
  var type = classifier.classify(email);

  t.ok(type instanceof Week);
  t.equal(type.num, 1);
});
