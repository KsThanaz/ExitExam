const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Get all feedbacks
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new feedback
router.post('/', async (req, res) => {
    const { courseName, courseDuration, feedbackRating, feedbackComments } = req.body;
    try {
        const newFeedback = new Feedback({ courseName, courseDuration, feedbackRating, feedbackComments });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update feedback by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete feedback by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Feedback.findByIdAndDelete(id);
        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
