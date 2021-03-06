'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _main = require('./routes/main.routes');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//db

_mongoose2.default.Promise = global.Promise;
var db = "mongodb://qiandongyq:123456q@ds129010.mlab.com:29010/notepad";
_mongoose2.default.connect(db).then(function () {
  return console.log('connection succesful');
}).catch(function (err) {
  return console.error(err);
});

app.use('/api/v1', _main2.default);

// arrow functions
var server = app.listen(3008, function () {
  // destructuring
  var _server$address = server.address(),
      address = _server$address.address,
      port = _server$address.port;

  // string interpolation:


  console.log('Example app listening at http://' + address + ':' + port);
});