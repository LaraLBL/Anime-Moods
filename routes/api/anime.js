const express = require('express');
const router = express.Router();
const animeCtrl = require('../../controllers/api/anime');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/',animeCtrl.create)


module.exports = router;