const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer: String,
    rating: Number,
    comment: String
});

const restaurantSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    rating: Number,
    details: {
        address: [String],
        hours: {
            openhours: String,
            opendays: String
        },
        phone: [String],
        platforms: {
            website: String,
            ig: String
        },
        cuisine: [String],
        menu: String,
        gallery: {
            img1: String
        },
        locationData: {
            region: String,
            nickname: String,
            district: String,
            ward: String,
            country: String
        },
        coordinates: [Number],
        services: {
            foodandBeverages: Number,
            takeaway: Number,
            delivery: Number,
            catering: Number,
            reservation: Number,
            onlineOrders: Number
        },
        amenities: {
            comfortableSeats: Number,
            cleanRestroom: Number,
            wifi: Number,
            parking: Number,
            childrenGrounds: Number
        },
        reviews: [reviewSchema]
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;