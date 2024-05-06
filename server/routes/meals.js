const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

let { getDatabase } = require('../app');
let db = getDatabase();

// Get all meals in pagination
router.get('/', (req, res) => {
    const page = req.query.p || 0;
    const category = req.query.category || null;
    const mealsPerPage = 6;

    let meals = [];
    let query = category ? { category: category } : {};

    db.collection('meals')
        .find(query)
        .sort({name: 1})
        .skip(page * mealsPerPage)
        .limit(mealsPerPage)
        .forEach(meal => meals.push(meal))
        .then(() => {
            res.status(200).json(meals)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch meal documents'})
        })
})

// Get one meal
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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

// Create one meal
router.post('/', (req, res) => {
    const meal = req.body

    db.collection('meals')
        .insertOne(meal)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

// Delete one meal
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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

// Update one meal
router.patch('/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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