const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');

// GET /api/orders/cart
router.get('/', listsCtrl.index);
router.post('/:id/removeAnime', listsCtrl.removeAnimes);
router.post('/anime', listCtrl.addAnimes);
router.post('/', listsCtrl.create);
router.delete('/:id', listsCtrl.delete);


module.exports = router;


