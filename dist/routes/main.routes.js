'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../controllers/index.controller');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _index2.default.index);
router.get('/items', _index2.default.load);
//router.post('/items/new', indexCtrl.create);

// Exporting an object as the default import for this module
exports.default = router;