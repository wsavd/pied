import express from 'express';
const router = express.Router();

import indexCtrl from '../controllers/index.controller'
router.get('/', indexCtrl.index);
router.get('/items', indexCtrl.load);
//router.post('/items/new', indexCtrl.create);

// Exporting an object as the default import for this module
export default router;
