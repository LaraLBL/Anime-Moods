const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/anime', async (req, res) => {
  const response = await fetch('');
  const data = await response.json();
  res.json(data.data);
});

module.exports = router;