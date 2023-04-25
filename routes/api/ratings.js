const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../../controllers/api/ratings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/anime/:id/ratings',ratingsCtrl.create)
router.get('/anime/:id', ratingsCtrl.getRatings);
router.delete('/anime/:id', ratingsCtrl.delete);

module.exports = router;