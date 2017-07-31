var express = require('express');
var router = express.Router();
var cargoControllers = require('../controllers/cargoControllers');

router.get('/',cargoControllers.cargoShow);

router.get('/cargo/new',cargoControllers.cargoGet);

router.post('/cargo',cargoControllers.cargoPost);


module.exports = router;