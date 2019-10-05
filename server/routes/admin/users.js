const express = require('express');

const User = require('../../../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    await User
      .query()
      .omit(['password'])
      .then(users => res.json(users))
  } catch (error) {
    next(error)
  }
})

module.exports = router;