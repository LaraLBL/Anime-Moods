const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/orders/cart
router.get('/', listsCtrl.index);



module.exports = router;


