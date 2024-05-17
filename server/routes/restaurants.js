const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

let { getDatabase } = require('../app');
let db = getDatabase();
 
// Get all restaurants
router.get('/', (req, res) => {
    // Pagination of results
    const page = req.query.p || 0;
    const restaurantsPerPage = 6;

    // Filtering results
    const cuisine = req.query.cuisine ? {cuisine: {$in: req.query.cuisine.split(',')}} : {};
    const openHours = req.query.openHours ? {openHours: {$in: req.query.openHours.split(',')}} : {};
    const services = req.query.services ? {['services.' + req.query.services]: 1} : {};
    const amenities = req.query.amenities ? {['amenities.' + req.query.amenities]: 1} : {};

    const filters = {...cuisine, ...openHours, ...services, ...amenities};
 
    // Sorting
    let sortParam = null;
    if (req.query.sort) {
        try {
            sortParam = JSON.parse(req.query.sort);
        } catch (error) {
            console.error('Error parsing sort parameter:', error);
        }
    }

    let sortObject = {};

    if (sortParam && sortParam.text && typeof sortParam.text === 'string') {
        if (sortParam.text.includes('Price')) {
            sortObject = { price: parseInt(sortParam.value) };
        } else {
            sortObject = { name: parseInt(sortParam.value) };
        }
    }

    db.collection('restaurants')
        .find(filters)
        .sort(sortObject)
        .skip(page * restaurantsPerPage)
        .limit(restaurantsPerPage)
        .toArray()
        .then(restaurants => {
            if (restaurants.length === 0) {
                res.status(404).json({error: 'No matching records found'});
            } else {
                res.status(200).json(restaurants);
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({error: 'Could not fetch the documents'});
        });
});



// Get one restaurant
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
            .findOne({_id: new ObjectId( req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not fetch the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

// Create one restaurant
router.post('/', (req, res) => {
    const restaurant = req.body

    db.collection('restaurants')
        .insertOne(restaurant)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

// Delete one restaurant
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
            .deleteOne({_id: new ObjectId( req.params.id)})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not delete the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

// Update one restaurant
router.patch('/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
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