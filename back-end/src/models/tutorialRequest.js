const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

const TutorialRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    vote: {
        type: Number,
        required: false
    },
    user_id: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }]
});

const TutorialRequest = mongoose.model('TutorialRequest', TutorialRequestSchema);

module.exports = TutorialRequest;