const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {

        const user = await User.create(req.body);

        return res.send({user});

    } catch (error) {
        return res.send({'Error': error});
    }
    
});
router.get('/show', async (req, res) => {
    return res.send('Show all users');
});
router.put('/update', async (req, res) => {
    return res.send('User Updated');
});
router.delete('/delete', async (req, res) => {
    return res.send('User Deleted');
});

module.exports = app => app.use('/auth', router);