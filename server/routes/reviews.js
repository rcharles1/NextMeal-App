const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const Review = require('../models/reviews');
const User = require('../models/users'); 

let { getDatabase } = require('../app');
let db = getDatabase();

// Get all reviews
router.get('/', async (req, res) => {
    try {
        // Filter by listing's id
        const listingId = req.query.listingId ? {listingId: {$in: req.query.listingId.split(',')}} : {};

        const allReviews = await Review.find(listingId);
        res.json(allReviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create review
router.post('/', async (req, res) => {
    const { createdAt, userId, listingId, content } = req.body;

    try {
        // Validate input data
        if (!createdAt || !userId || !listingId || !content) {
            return res.status(400).json({ message: 'Invalid input data' });
        }

        // Create a new review
        const newReview = new Review({
            createdAt,
            userId,
            listingId,
            content,
        });

        // Save the review to the database
        await newReview.save();

        res.json({ message: 'Review added successfully' });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete review by ID
router.delete('/:id', async (req, res) => {
    const reviewId = req.params.id;

    try {
        // Find the review by ID
        const existingReview = await Review.findById(reviewId);
        if (!existingReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Delete the review
        await existingReview.remove();

        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update review
router.patch('/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('reviews')
            .updateOne({_id: new ObjectId( req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not update the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

module.exports = router;