const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

let { getDatabase } = require('../app');
let db = getDatabase();

// Get all restaurants
router.get('/', (req, res) => {
    // Pagination of results
    const page = req.query.p || 0
    const restaurantsPerPage = 6

    let restaurants = [];

    db.collection('restaurants')
        .find()
        .sort({name: 1})
        .skip(page * restaurantsPerPage)
        .limit(restaurantsPerPage)
        .forEach(restaurant => restaurants.push(restaurant))
        .then(() => {
            res.status(200).json(restaurants)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

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