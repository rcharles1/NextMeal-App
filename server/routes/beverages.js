const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

let { getDatabase } = require('../app');
let db = getDatabase();

// Get all beverages in pagination
router.get('/', (req, res) => {
    const page = req.query.p || 0;
    const category = req.query.category || null;
    const beveragesPerPage = 6;

    let beverages = [];
    let query = category ? { category: category } : {};

    db.collection('beverages')
        .find(query)
        .sort({name: 1})
        .skip(page * beveragesPerPage)
        .limit(beveragesPerPage)
        .forEach(beverage => beverages.push(beverage))
        .then(() => {
            res.status(200).json(beverages)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch beverage documents'})
        })
})

// Get one berverage
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('beverages')
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

// Create one beverage
router.post('/', (req, res) => {
    const beverage = req.body

    db.collection('beverages')
        .insertOne(beverage)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

// Delete one beverage
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('beverages')
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

// Update one beverage
router.patch('/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('beverages')
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