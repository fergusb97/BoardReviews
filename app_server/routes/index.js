const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/register', ctrlLocations.register);
/* Other pages */
router.get('/login', ctrlOthers.login);
module.exports = router;


