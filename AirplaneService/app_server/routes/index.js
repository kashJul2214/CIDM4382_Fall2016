var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlClimb = require('../controllers/climb');
var ctrlFlaps = require('../controllers/flaps');
var ctrlLand= require('../controllers/land');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/climbingspeeds', ctrlClimb.getClimbInfo);
router.get('/flapsettings', ctrlFlaps.getFlapsInfo);
router.get('/landingspeeds', ctrlLand.getLandingInfo);

module.exports = router;
