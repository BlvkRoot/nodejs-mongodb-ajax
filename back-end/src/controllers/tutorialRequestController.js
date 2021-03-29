const express = require('express');
const TutorialRequest = require('../models/tutorialRequest');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const tutorialRequests = await TutorialRequest.create(req.body);

        res.send({tutorialRequests});

    } catch (error) {

        res.send({Error: 'Tutorial Request not created.'});
    }
});

router.get('/show', async (req, res) => {

});

router.put('/update', async (req, res) => {

});

router.delete('/delete', async (req, res) => {

});

module.exports = app => app.use('/tutorial-requests', router);
