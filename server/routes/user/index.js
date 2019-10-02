const express = require('express');

const profileRouter = require('./profile');
const User = require('../../../models/User');

const router = express.Router();

router.use('/profile', profileRouter);
router.use('/all', async (req,res,next)=> {
    try{
        await User
        .query()
        .omit(['password'])
        .then(users => res.json(users))
    }catch(error){
        next(error)
    }
})

module.exports = router;
