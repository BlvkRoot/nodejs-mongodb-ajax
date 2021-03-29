const express = require('express');
const TutorialRequest = require('../models/tutorialRequest');

const router = express.Router();

router.post('/create', async (req, res) => {

    console.log(req.body);

    try {
        const tutorialRequests = await TutorialRequest.create(req.body);

        res.send({tutorialRequests, Success: 'Tutorial created successfully.'});

    } catch (error) {

        res.send({Error: 'Tutorial Request not created.', code: error.code});
    }
});

router.get('/show', async (req, res) => {

});

router.put('/update', async (req, res) => {

});

router.delete('/delete', async (req, res) => {

});

module.exports = app => app.use('/tutorial-requests', router);
