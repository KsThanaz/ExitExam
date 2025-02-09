const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDuration: { type: String, required: true },
    feedbackRating: { type: Number, required: true },
    feedbackComments: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
