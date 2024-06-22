const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    listingId: {
        type: String,
        required: true,
    },
    content: [
        {
            reviewBody: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
                required: true,
            },
            visitCompany: {
                type: [String],
                default: [],
            },
            visitReason: {
                type: String,
                required: true,
            },
            picture: {
                type: String,
            },
        },
    ],
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;