const express = require('express');
const router = express.Router();

let { getDatabase } = require('../app');

// Performs search query across 3 collections, restaurants, beverages, and meals
router.get('/:key', async (req, res) => {
    const db = getDatabase();
    const keyTerm = req.params.key;

    try {
        const collections = ['restaurants', 'beverages', 'meals'];
        const results = [];

        for (const collection of collections) {
            const data = await db.collection(collection).find({
                $or: [
                    { name: { $regex: new RegExp(keyTerm, 'i') } },
                    { type: { $regex: new RegExp(keyTerm, 'i') } },
                    { cuisine: { $regex: new RegExp(keyTerm, 'i') } },
                    { 'locationData.region': { $regex: new RegExp(keyTerm, 'i') } },
                    { 'locationData.district': { $regex: new RegExp(keyTerm, 'i') } },
                    { category: { $regex: new RegExp(keyTerm, 'i') } }
                ]
            }).project({ _id: 0, name: 1, cuisine: 1, locationData: 1, category: 1 }).limit(10).toArray();

            if (data.length !== 0) {
                results.push({ collection, data });
            }
        }

        if (results.length === 0) {
            res.json({ success: false, message: 'No matches found.' });
        } else {
            res.json({ success: true, results });
        }
    } catch (error) {
        res.json({ success: false, message: error.toString() });
    }
});

// Performs search request for a meal or beverage
router.get('/mealsorbeverages/:key', async (req, res) => {
    let db = getDatabase();
    let results = [];
    
    try {
        const collections = ['meals', 'beverages'];

        for (let collection of collections) {
            let data = await db.collection(collection).find({ 
                "$or": [
                    {name: {$regex: new RegExp(req.params.key, 'i')}}
                ]}).toArray();
            if (data.length !== 0) {
                results.push({ collection: collection, data });
            }
        }

        if (results.length === 0) {
            res.json({ success: false, message: 'No matches found.' });
        } else {
            res.json({ success: true, results });
        }
    } catch (error) {
        res.json({ success: false, message: error.toString() });
    }
});

// Performs search request for meals
router.get('/meals/:key', async (req, res) => {
    let db = getDatabase();
    try {
        let data = await db.collection('meals')
                            .find(
                                {
                                    "$or": [
                                        {name: {$regex: new RegExp(req.params.key, 'i')}}
                                    ]
                                }
                            ).toArray();

        if (data.length === 0) {
            res.json({ success: false, message: 'No matching meals found.' });
        } else {
            res.json({ success: true, data });
        }
    } catch (error) {
        res.json({ success: false, message: error.toString() });
    }
});

// Performs search request for beverages
router.get('/beverages/:key', async (req, res) => {
    let db = getDatabase();
    try {
        let data = await db.collection('beverages')
                            .find(
                                {
                                    "$or": [
                                        {name: {$regex: new RegExp(req.params.key, 'i')}},
                                        {category: {$regex: new RegExp(req.params.key, 'i')}}
                                    ]
                                }
                            ).toArray();

        if (data.length === 0) {
            res.json({ success: false, message: 'No matching meals found.' });
        } else {
            res.json({ success: true, data });
        }
    } catch (error) {
        res.json({ success: false, message: error.toString() });
    }
});

// Performs search request for restaurants.
router.get('/restaurants/:key', async (req, res) => {
    let db = getDatabase();
    try {
        let data = await db.collection('restaurants')
                            .find(
                                {
                                    "$or": [
                                        {name: {$regex: new RegExp(req.params.key, 'i')}}
                                    ]
                                }
                            ).toArray();

        if (data.length === 0) {
            res.json({ success: false, message: 'No matching meals found.' });
        } else {
            res.json({ success: true, data });
        }
    } catch (error) {
        res.json({ success: false, message: error.toString() });
    }
});

module.exports = router;