"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFeedback = exports.getFeedback = void 0;
let feedbackEntries = [];
const getFeedback = (req, res) => {
    res.json(feedbackEntries);
};
exports.getFeedback = getFeedback;
const addFeedback = (req, res) => {
    const { name, feedback } = req.body;
    if (name && feedback) {
        feedbackEntries.push({ name, feedback });
        res.status(201).json({ message: 'Feedback submitted successfully' });
    }
    else {
        res.status(400).json({ message: 'Invalid input ' });
    }
};
exports.addFeedback = addFeedback;
