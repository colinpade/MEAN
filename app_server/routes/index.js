var express = require('express');
var router = express.Router();
//var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlOthers.angularApp);
//router.get('/location/:locationid', ctrlLocations.locationInfo);
//router.get('/location/:locationid/review/new', ctrlLocations.addReview);
//router.get('/location/:locationid/reviews/new', ctrlLocations.addReview);
//router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);
//router.post('/location/:locationid/reviews/new', ctrlLocations.doAddReview);

/* Other pages */
//router.get('/about', ctrlOthers.about);

module.exports = router;
