const express = require('express');

const profileRouter = require('./profile');
const User = require('../../../models/User');

const router = express.Router();

router.use('/profile', profileRouter);

module.exports = router;
