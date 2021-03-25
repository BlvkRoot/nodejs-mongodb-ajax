const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/create', async (req, res) => {
    const { email } = req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    try {

        if (await User.findOne({email})) {
            return res.send({ 'Error': 'User already exists.' });
        }

        const user = await User.create(req.body);

        return res.send({ user });

    } catch (error) {
        return res.send({ 'Error': 'User not registered. Please try again' });
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