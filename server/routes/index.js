const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({info: 'API v1.0.0'});
});

module.exports = router;
